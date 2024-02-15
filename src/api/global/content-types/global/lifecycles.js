// module.exports = {
//   beforeCreate(event) {
//     console.log(event.params.data.PickVideo);
//     console.log(event.params.data.seo);
//     // if (event.params.data.city && event.params.data.country) {
//     //   const { city = "", country = "" } = event.params.data;
//     //   event.params.data.market = city + " - " + country;
//     // }
//   },

//   async beforeUpdate(event) {
//     console.log(event.params.populate, "\n");
//     // event.params.populate.PickVideo.on["utils.local-video"].populate

//     const entry = await strapi.entityService.findOne("api::global.global", 1, {
//       populate: { PickVideo: { populate: { video: true } } },
//     });
//     //@ts-ignore
//     const videoUrl = entry.PickVideo[0].video[0].url;

//     // const res = await strapi.entityService.update("api::global.global", 1, {
//     //   data: {
//     //     PickVideo: [
//     //       {
//     //         id: 2,
//     //         __component: "utils.local-video",
//     //         type: "video/mp4",
//     //         src: videoUrl,
//     //       },
//     //     ],
//     //   },
//     // });
//     console.log(event.params.populate);
//     // const result = await strapi.entityService.update('api::global.global', 1, {
//     //   data: {
//     //     PickVideo: {src: 'videoUrl'},
//     //   },
//     // })

//     //     if (event.params.data.city && event.params.data.country) {
//     //       const { city = "", country = "" } = event.params.data;
//     //       event.params.data.market = city + " - " + country;
//     //     }
//   },
// };
