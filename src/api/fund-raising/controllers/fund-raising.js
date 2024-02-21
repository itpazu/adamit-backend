"use strict";

/**
 * fund-raising controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::fund-raising.fund-raising",
  ({ strapi }) => ({
    async find() {
      const result = await super.find();
      const {
        data: {
          attributes: { PickVideo },
        },
      } = result;
      if (
        PickVideo &&
        PickVideo.length > 0 &&
        PickVideo[0].__component === "utils.local-video"
      ) {
        const entry = await strapi.entityService.findOne(
          "api::fund-raising.fund-raising",
          1,
          {
            populate: {
              DonateNowLink: true,
              PickVideo: { populate: { video: true } },
            },
          }
        );
        if (entry.PickVideo[0].__component === "utils.local-video") {
          const videoUrl = entry.PickVideo[0].video[0].url;
          PickVideo[0].src = videoUrl;
        }
      }
      return result;
    },
  })
);
