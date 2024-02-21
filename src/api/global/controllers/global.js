"use strict";
/**
 * global controller
 */
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::global.global", ({ strapi }) => ({
  async find() {
    const result = await super.find();
    const {
      data: {
        attributes: { DonateNowLink },
      },
    } = result;

    const entry = await strapi.entityService.findOne("api::global.global", 1, {
      populate: {
        DonateNowLink: true,
      },
    });
    if (entry?.DonateNowLink?.isInternal) {
      DonateNowLink.url = `#${DonateNowLink.url}`;
    }
    return result;
  },
}));
