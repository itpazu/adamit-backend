'use strict';

const { join } = require('path');

module.exports = ({ env }) => ({
    graphql: {
        enabled: true,
        config: {
            // generateArtifacts: true,
        endpoint: '/graphql',
        shadowCRUD: true,
        playgroundAlways: false,
        apolloServer: {
          tracing: false,
        },
            // artifacts: {
            //     schema: join(__dirname, '..', 'public/generate/schema.graphql'),
            //     typegen: join(__dirname, '..', 'types.d.ts'),
            // },    
        }
    },
})
