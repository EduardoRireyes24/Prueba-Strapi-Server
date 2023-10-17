'use strict';

/**
 * favorite-movie service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::favorite-movie.favorite-movie');
