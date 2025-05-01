// path: src/admin/extensions/users/content-types/admin::user/lifecycles.js

'use strict';

module.exports = {
  async beforeCreate(event) {
    const { context } = event;

    // Allow only logged-in Super Admins to create users
    const authUser = context?.state?.user;

    // This allows only existing admin users with the right role to create other admins
    if (!authUser || authUser?.roles?.some(r => r.code === 'strapi-super-admin') === false) {
      throw new Error('Unauthorized to create admin users');
    }
  },
};
