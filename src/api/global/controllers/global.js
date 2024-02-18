"use strict";
/**
 * global controller
 */
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::global.global", ({ strapi }) => ({
  async find(ctx) {
    const result = await super.find(ctx);
    console.log(ctx);
    const {
      data: {
        attributes: { PickVideo, DonateNowLink },
      },
    } = result;
    if (
      PickVideo &&
      PickVideo.length > 0 &&
      PickVideo[0].__component === "utils.local-video"
    ) {
      const entry = await strapi.entityService.findOne(
        "api::global.global",
        1,
        {
          populate: {
            DonateNowLink: true,
            PickVideo: { populate: { video: true } },
          },
        }
      );
      if (entry?.DonateNowLink?.isInternal) {
        DonateNowLink.url = `#${DonateNowLink.url}`;
      }
      if (entry.PickVideo[0].__component === "utils.local-video") {
        const videoUrl = entry.PickVideo[0].video[0].url;
        PickVideo[0].src = videoUrl;
      }
    }
    return result;
  },
}));
