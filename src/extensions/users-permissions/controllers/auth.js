'use strict';

const { getService } = require('@strapi/plugin-users-permissions/server/utils');

module.exports = {
  async register(ctx) {
    const pluginStore = strapi.store({ type: 'plugin', name: 'users-permissions' });

    const settings = await pluginStore.get({ key: 'advanced' });
    if (!settings.allow_register) {
      return ctx.badRequest('Register action is currently disabled');
    }

    const params = ctx.request.body;

    const { email, username, password, inviteId } = params;

    if (!email || !username || !password || !inviteId) {
      return ctx.badRequest('Email, username, password, and inviteId are required');
    }

    // Step 1: Validate inviteId
    const invites = await strapi.entityService.findMany('api::invite.invite', {
      filters: {
        inviteId,
        inviteStatus: 'pending',
      },
      limit: 1,
    });

    if (!invites.length) {
      return ctx.badRequest('Invalid or already used inviteId');
    }

    const invite = invites[0];

    // Optional: Match email to invite
    if (invite.email && invite.email.toLowerCase() !== email.toLowerCase()) {
      return ctx.badRequest('This invite is not valid for the provided email');
    }

    // Step 2: Check if email already exists
    const userWithEmail = await strapi.query('plugin::users-permissions.user').findOne({
      where: { email: email.toLowerCase() },
    });

    if (userWithEmail) {
      return ctx.badRequest('Email is already taken');
    }

    // Step 3: Find artist role
    const role = await strapi.query('plugin::users-permissions.role').findOne({
      where: { type: 'artist' },
    });

    if (!role) {
      return ctx.internalServerError('Artist role not found');
    }

    // Step 4: Register user
    const newUser = await getService('user').add({
      email: email.toLowerCase(),
      username,
      password,
      role: role.id,
      confirmed: !settings.email_confirmation,
    });

    // Step 5: Mark invite as used
    await strapi.entityService.update('api::invite.invite', invite.id, {
      data: { inviteStatus: 'used' },
    });

    // Step 6: Send token response
    const jwt = getService('jwt').issue({ id: newUser.id });

    ctx.send({
      jwt,
      user: getService('user').sanitizeUser(newUser),
    });
  },
};
