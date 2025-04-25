'use strict';

/**
 * invite controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const crypto = require('crypto');

module.exports = createCoreController('api::invite.invite', ({ strapi }) => ({
  async create(ctx) {
    const { email } = ctx.request.body;

    if (!email) {
      return ctx.badRequest('Email is required');
    }

    // Generate a 16-character random invite ID
    const inviteId = crypto.randomBytes(8).toString('hex');

    // Create invite record
    const invite = await strapi.entityService.create('api::invite.invite', {
      data: {
        email,
        inviteId,
        status: 'pending',
      },
    });

    // Send email using Strapi email plugin
    try {
      await strapi.plugins['email'].services.email.send({
        to: email,
        subject: "You're Invited!",
        text: `You've been invited! Use this invite ID to sign up: ${inviteId}`,
        html: `<p>You've been invited to join HPA Planet!</p><p><strong>Invite ID:</strong> ${inviteId}</p>`,
      });
    } catch (err) {
      console.error('Error sending invite email:', err);
      return ctx.internalServerError('Failed to send invite email');
    }

    return ctx.send({ message: 'Invite sent successfully', invite });
  }
}));
