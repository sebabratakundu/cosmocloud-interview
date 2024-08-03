export const CosmocloudConfig = Object.freeze({
  env: {
    projectId: process.env.COSMOCLOUD_PROJECT_ID ?? '',
    environmentId: process.env.COSMOCLOUD_ENVIRONMENT_ID ?? '',
    apiBaseUrl: process.env.COSMOCLOUD_API_BASE_URL ?? '',
  },
})
