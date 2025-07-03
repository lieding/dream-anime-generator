import { randomUUID } from "node:crypto";

export const Model = {
  AnimaTensorPro: "875968258996450530",
  DMD4StepColorFix: { loraAccessKey: "b8389682-86c9-681c-2dfd-e35d264f6260", loraModel: "881581880841910613" },
  NovaAnimeXL8: { modelAccessKey: "83ab608c-a235-2b88-205b-029ac5a8ace3", sdModel: "881601698894730638" },
  LCD: { loraAccessKey: "e0975f79-d3c7-8b72-43ca-ab65f36ec5b7", loraModel: "881576119143257826" },
  AniMagine4Opt: "829748400086891393"
}

export const AccelerationMode = {
  NO: "NO",
  MEDIUM: "MEDIUM",
  FAST: "FAST"
}

const DefaultConfig = {
  prompt: "1girl",
  negative: "modern, recent, old, oldest, cartoon, graphic, text, painting, crayon, graphite, abstract, glitch, deformed, mutated, ugly, disfigured, long body, lowres, bad anatomy, bad hands, missing fingers, extra digits, fewer digits, cropped, very displeasing, (worst quality, bad quality:1.2), bad anatomy, sketch, jpeg artifacts, signature, watermark, username, signature, simple background, conjoined,bad ai-generated",
  steps: 5,
  width: 768,
  height: 768,
  cfgScale: 1.2,
  sampler: "Euler a"
};

const Token = process.env.TamToken;

export function postJob (
  modelId: typeof Model,
  accelerationMode: keyof typeof AccelerationMode,
  config: Partial<typeof DefaultConfig> = {}
) {
  const defaultConfig = { ...DefaultConfig, ...config };
  const loraItems: object[] = [];
  let sampler = config.sampler || "Euler a";  

  if (accelerationMode === AccelerationMode.FAST) {
    loraItems.push({
      ...Model.DMD4StepColorFix,
      weight: 1.0,
      //"blockWeight": "string",
    });
    sampler = "DPM++ SDE";
  } else if (accelerationMode === AccelerationMode.MEDIUM) {
    loraItems.push({
      ...Model.LCD,
      weight: 0.7,
      //"blockWeight": "string",
    });
    sampler = "DPM++ SDE";
    defaultConfig.steps = 8;
  }
  
  const requestId = randomUUID();
  let modelConfig: any = {};
  if (typeof modelId === 'string')
    modelConfig.sdModel = modelId;
  else if (modelId && typeof modelId === 'object')
    modelConfig = { ...modelConfig, ...modelId };
  const body = JSON.stringify({
    requestId,
    stages: [
      {
        type: "INPUT_INITIALIZE",
        inputInitialize: {
          //"seed": "0",
          //"imageResourceId": "string",
          "count": "1"
        },
      },
      {
        type: "DIFFUSION",
        diffusion: {
          width: (config.width || defaultConfig.width).toString(),
          height: (config.height || defaultConfig.height).toString(),
          prompts: [{
            text: config.prompt || defaultConfig.prompt,
            weight: 1.0
          }],
          negativePrompts: [{
            text: config.negative || defaultConfig.negative
          }],
          ...modelConfig,
          // "sdVae": {},
          sampler,
          // scheduleName,
          // "enableElla": true,
          steps: config.steps || defaultConfig.steps,
          cfgScale: config.cfgScale || defaultConfig.cfgScale,
          clipSkip: 2,
          //"denoisingStrength": 0,
          //"etaNoiseSeedDelta": 0,
          lora: {
            items: loraItems
          },
        },
      }
    ],
  });

  return fetch("https://cn.tensorart.net/v1/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${Token}`,
    },
    body,
  })
    .then(res => res.json())
    .then((res: { jobId: string }) => res);
}

interface JobInfo {
  job: {
    id: string //'881417947308949275'
    status: 'SUCCESS'
    credits: number // 0.8
    successInfo: {
      images: {
        id: string // '4dcb663e-eefd-4bd1-8384-98ee3326b7a6',
        url: string // 'https://tams-resource.tusiassets.com/resource-upload/short-term/2025-07-02/COMFY/images/881417947447329198_0.png?auth_key=1751493471-93bc28861f354fd78f85876ec540677e-0-56ed5cf957dd3d0fb710c47718c3a424',
        expiredIn: string // '3600',
        meta: {
          image: {
            width: number // 768,
            height: number// 768
          }
        }
      }[]
      imageExifMetaMap: Record<string, {
        meta: {
          FileSize: string // '923 kB',
          ImageSize: string // '768x768',
          MIMEType: 'image/png',
          Seed: string // '3363668210'
        }
      }>
      runtime: string // '13'
    }
  }
}

export function getJob (jobId: string) {
  return fetch(`https://cn.tensorart.net/v1/jobs/${jobId}`, {
    headers: {
      "Accept": "application/json",
      "Authorization": `Bearer ${Token}`,
    },
  })
    .then(res => res.json())
    .then((res: JobInfo) => res);
}