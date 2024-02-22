"use strict";
/**
 * global controller
 */
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::global.global", ({ strapi }) => ({
  async find(ctx) {
    const result = await super.find(ctx);
    const {
      data: {
        attributes: { DonateNowLink },
      },
    } = result;

    if (DonateNowLink) {
      DonateNowLink.url = `#${DonateNowLink.url}`;
    }
    return result;
  },
}));
