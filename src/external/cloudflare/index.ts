import {DeleteObjectCommand, ListObjectsV2Command, PutObjectCommand, S3Client} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

import { z } from "zod";



const ACCOUND_ID = z.string().parse(process.env.CLOUDFLARE_ACCOUNT_ID);
const ACCESS_KEY_ID = z.string().parse(process.env.CLOUDFLARE_ACCESS_KEY_ID);
const SECRET_ACCESS_KEY = z.string().parse(process.env.CLOUDFLARE_SECRET_ACCESS_KEY);
const BUCKET_NAME = z.string().parse(process.env.CLOUDFLARE_BUCKET_NAME);

const S3 = new S3Client({
  region: "auto",
  endpoint: `https://${ACCOUND_ID}.r2.cloudflarestorage.com`,
  credentials: {accessKeyId: ACCESS_KEY_ID, secretAccessKey: SECRET_ACCESS_KEY},
  forcePathStyle: true
})

async function getPresignedUrlPut(key: string, contentType?: string){
  return getSignedUrl(S3, new PutObjectCommand({Bucket: BUCKET_NAME, Key: key, ContentType: contentType}), {expiresIn: 3600})
}

async function deleteObject(key: string){
  return await S3.send(new DeleteObjectCommand({Bucket: BUCKET_NAME, Key: key}))
}

async function listObjects(prefix: string){
  return await S3.send(new ListObjectsV2Command({Bucket: BUCKET_NAME, Prefix: prefix}))
}

export const cloudflareClient = {
  r2 : {
    getPresignedUrlPut,
    deleteObject,
    listObjects
  }
}

