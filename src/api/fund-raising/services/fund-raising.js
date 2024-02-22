'use strict';

/**
 * fund-raising service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fund-raising.fund-raising');
