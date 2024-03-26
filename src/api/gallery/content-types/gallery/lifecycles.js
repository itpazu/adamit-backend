const utils = require("@strapi/utils");
const { ApplicationError } = utils.errors;

// const checkArticlesWithoutvol = (addedArticlesVolume) => {
//   if (addedArticlesVolume.some(({ vol }) => !vol)) {
//     const error = new ApplicationError();
//     error.message = "some secondary articles have no volume assignation!";
//     throw error;
//   }
//   return;
// };

// const validateArticleInVolume = async (articleIds, volId) => {
//   // fetching the articles that were attempted to be added to secondary articles

//   const response = await strapi.entityService.findMany("api::article.article", {
//     populate: { volume: true },
//     filters: {
//       id: articleIds,
//     },
//   });

//   // getting the volume number of each article attempted to be added for comparing with the current volume number
//   const addedArticlesVolume = response.map((article) => ({
//     vol: article.volume?.vol,
//     name: article.header,
//   }));

//   // check if there are articles without volume assignation
//   checkArticlesWithoutvol(addedArticlesVolume);
//   // checking if the attempted added articles all match with the current volume
//   return addedArticlesVolume.filter(({ vol }) => vol !== volId);
// };

// // validating the required amount of data per field for relation field
// const validateArticlesAmount = (
//   currentDbData,
//   incomingData,
//   fieldName,
//   desiredAmount,
//   error
// ) => {
//   const currentNumber = currentDbData?.length ?? (currentDbData?.id && 1) ?? 0;
//   const netAmount =
//     currentNumber +
//     incomingData.connect.length -
//     incomingData.disconnect.length;
//   if (netAmount != desiredAmount) {
//     error.message = `field ${fieldName} needs to have excatly ${desiredAmount} articles.`;
//     throw error;
//   }
//   return;
// };
module.exports = {
  async beforeUpdate(event) {
    let error = new ApplicationError();

    // grabbing request data (the data submitted in the admin panel) and the id of volume from 'where'
    const { data, where } = event.params;
    console.log(data);

    // // if "unpublishing" simply return
    // if (data.publishedAt === null) {
    //   return;
    // }
    // const volumeResponse = await strapi.entityService.findOne(
    //   "api::volume.volume",
    //   where.id,
    //   {
    //     populate: { secondary_main: true, bigArticle: true },
    //     filters: {
    //       id: where.id,
    //     },
    //   }
    // );
    // // console.log(volumeResponse["secondary_main"]);
    // //if publishing volume
    // if (data.publishedAt) {
    //   // at publishing time making sure there are excatly 4 secondary_main articles

    //   if (volumeResponse.secondary_main.length !== 4) {
    //     error.message = "amount of secondary_main articles must be equal to 4";
    //     throw error;
    //   }
    // }
    // //if saving data
    // else {
    //   // VALIDATION: checking if secondary_main articles and big_article belong to volume

    //   const { secondary_main, bigArticle, vol, mainMedia } = data;
    //   console.log(data);

    //   await Promise.all(
    //     [secondary_main, bigArticle].map(async (field) => {
    //       const fieldName = Object.keys(data).find(
    //         (key) => data[key] === field
    //       );
    //       if (field.connect.length > 0) {
    //         // getting ids of added articles for checking if belong to the current volume
    //         const connectIds = field.connect.map((item) => item.id);

    //         // checking if the attempted added articles all match with the current volume
    //         const isUnmatchedVolume = await validateArticleInVolume(
    //           connectIds,
    //           vol
    //         );
    //         // if there is unmatched article, throws an error
    //         if (isUnmatchedVolume.length > 0) {
    //           error.message = `article ${isUnmatchedVolume[0].name} in field ${fieldName} does not belong to this volume!`;
    //           throw error;
    //         }
    //       }

    //       if (fieldName === "bigArticle") {
    //         validateArticlesAmount(
    //           volumeResponse[fieldName],
    //           field,
    //           fieldName,
    //           1,
    //           error
    //         );
    //       }
    //       if (fieldName === "secondary_main") {
    //         const connectIds = field.connect.map(({ id }) => id);
    //         const filtered = volumeResponse[fieldName].filter(
    //           ({ id }) => !connectIds.includes(id)
    //         );
    //         validateArticlesAmount(filtered, field, fieldName, 4, error);
    //       }
    //       return;
    //     })
    //   );
    // }
  },

  //   async beforeCreate(event) {
  //     // grabbing request data (the data submitted in the admin panel) and the id of volume from 'where'
  //     const { data } = event.params;

  //     const { secondary_main, bigArticle, vol } = data;

  //     await Promise.all(
  //       [secondary_main, bigArticle].map(async (field) => {
  //         if (field.connect.length > 0) {
  //           let error = new ApplicationError();
  //           // getting ids of added articles for checking if belong to the current volume
  //           const connectIds = field.connect.map((item) => item.id);

  //           // checking if the attempted added articles all match with the current volume
  //           const isUnmatchedVolume = await validateArticleInVolume(
  //             connectIds,
  //             vol
  //           );
  //           // if there is unmatched article, throws an error
  //           if (isUnmatchedVolume.length > 0) {
  //             const fieldName = Object.keys(data).find(
  //               (key) => data[key] === field
  //             );
  //             error.message = `article ${isUnmatchedVolume[0].name} in field ${fieldName} does not belong to this volume!`;
  //             throw error;
  //           }
  //         }
  //         return;
  //       })
  //     );
  //   },
};
