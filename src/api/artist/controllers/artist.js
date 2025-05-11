'use strict';

/**
 *  artist controller controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::artist.artist', ({ strapi }) => ({
    // Method 1: Creating an entirely custom action
    async registerArtist(ctx) {
        try {
            const { username, email, password, inviteId } = ctx.request.body;
      
            if (!username || !email || !password || !inviteId) {
              return ctx.badRequest('Missing required fields');
            }
      
            // 🔍 Check if inviteId is valid and unused
            const invite = await strapi.db.query('api::invite.invite').findOne({
              where: {
                email,
                inviteId,
                inviteStatus: 'pending',
              },
            });
      
            if (!invite) {
              return ctx.badRequest('Invalid or expired invite');
            }
      
            // 🔍 Get the Artist role
            const artistRole = await strapi.db.query('plugin::users-permissions.role').findOne({
              where: { name: 'Artist' },
            });
      
            if (!artistRole) {
              return ctx.badRequest('Artist role not found');
            }
      
            // 🚫 Check for existing user
            const existingUser = await strapi.db.query('plugin::users-permissions.user').findOne({
              where: { email },
            });
      
            if (existingUser) {
              return ctx.conflict('Email already registered');
            }
      
            // ✅ Register the user
            const newUser = await strapi.plugins['users-permissions'].services.user.add({
              username,
              email,
              password,
              confirmed: true,
              role: artistRole.id,
            });
      
            // 🖋️ Mark the invite as used
            await strapi.db.query('api::invite.invite').update({
              where: { id: invite.id },
              data: { inviteStatus: 'used' },
            });
      
            return ctx.send({
              message: 'Artist registered successfully using invite',
              user: {
                id: newUser.id,
                username: newUser.username,
                email: newUser.email,
              },
            });
      
          } catch (err) {
            console.error(err);
            return ctx.internalServerError('Something went wrong');
          }
    },
}));