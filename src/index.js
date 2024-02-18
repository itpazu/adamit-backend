"use strict";

module.exports = {
  register({ strapi }) {
    const extensionService = strapi.plugin("graphql").service("extension");

    extensionService.use(({ strapi }) => ({
      typeDefs: `
      type VideoSettingsSource {
        src: String!
        type: String!
      }
      type ComponentUtilsVideoObject {
        sources(prefix: String = NULL): [VideoSettingsSource!]!
      }
   
      `,

      resolvers: {
        ComponentUtilsVideoObject: {
          sources: {
            resolve: async (a, args) => {
              const { PickVideo } = await strapi.services[
                "api::global.global"
              ].find({
                populate: {
                  PickVideo: {
                    populate: { video: true, videoSettings: true },
                  },
                },
              });
              const src = args.prefix
                ? args.prefix + PickVideo[0].video[0].url
                : PickVideo[0].video[0].url;
              const type = PickVideo[0].video[0].mime;
              const sources = {
                src,
                type,
              };
              return [sources];
            },
          },
        },
        Global: {
          DonateNowLink: {
            resolve: async (parent) => {
              const { DonateNowLink } = await strapi.services[
                "api::global.global"
              ].find({
                populate: ["DonateNowLink"],
                locale: parent.locale,
              });
              console.log(DonateNowLink);
              if (DonateNowLink.isInternal) {
                DonateNowLink.url = `#${DonateNowLink.url}`;
              }

              return DonateNowLink;
            },
          },

          PickVideo: {
            resolve: async () => {
              const data = await strapi.services["api::global.global"].find({
                populate: {
                  PickVideo: { populate: { video: true, videoSettings: true } },
                },
              });
              const { PickVideo } = data;
              PickVideo.forEach((el) => {
                if (el.__component === "utils.local-video") {
                  const videoUrl = el.video[0].url;
                  el.src = videoUrl;
                }
              });

              return PickVideo;
            },
          },
        },
      },
    }));
  },

  bootstrap(/*{ strapi }*/) {},
};
