
const betaEnvironment = {
  apiUrl: "https://betaauth.likeminds.community",
  poolId: "ap-south-1:181963ba-f2db-450b-8199-964a941b38c2",
  region: "ap-south-1",
  bucketName: "beta-likeminds-media"
}

const prodEnvironment = {
  apiUrl: "https://auth.likeminds.community",
  poolId: "ap-south-1:d73bc2ed-bede-42c8-bab7-0abe0a001325",
  region: "ap-south-1",
  bucketName: "prod-likeminds-media"
}

export const environment = process.env.ENVIRONMENT === 'production' ? prodEnvironment : betaEnvironment;

