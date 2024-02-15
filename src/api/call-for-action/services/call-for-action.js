'use strict';

/**
 * call-for-action service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::call-for-action.call-for-action');
