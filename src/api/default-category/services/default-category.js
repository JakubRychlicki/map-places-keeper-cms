'use strict';

/**
 * default-category service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::default-category.default-category');
