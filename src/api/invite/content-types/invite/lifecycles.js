const crypto = require('crypto');

module.exports = {
  async beforeCreate(event) {
    const { data } = event.params;

    // Auto-generate 16-character invite ID
    if (!data.inviteId) {
      data.inviteId = crypto.randomBytes(8).toString('hex');
    }

    // Set default status if not provided
    if (!data.status) {
      data.status = 'pending';
    }
  },

  async afterCreate(event) {
    const { result } = event;

    try {
      await strapi.plugins['email'].services.email.send({
        to: result.email,
        subject: 'You’re Invited!',
        text: `You've been invited! Use this invite ID to sign up: ${result.inviteId}`,
        html: `<p>You've been invited to join the platform.</p><p><strong>Invite ID:</strong> ${result.inviteId}</p>`,
      });
    } catch (err) {
      strapi.log.error('Failed to send invite email:', err);
    }
  }
};
