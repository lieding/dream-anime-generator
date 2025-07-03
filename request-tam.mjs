import { randomUUID } from "node:crypto";

const Model = {
  NovaAnime8: "",
  AnimaTensorPro: "875968258996450530",
  DMD4StepColorFix: { loraAccessKey: "b8389682-86c9-681c-2dfd-e35d264f6260", loraModel: "881581880841910613" },
  NovaAnimeXL8: { modelAccessKey: "83ab608c-a235-2b88-205b-029ac5a8ace3", sdModel: "881601698894730638" },
  LCD: { loraAccessKey: "e0975f79-d3c7-8b72-43ca-ab65f36ec5b7", loraModel: "881576119143257826" },
  AniMagine4Opt: "829748400086891393"
}

const AccelerationMode = {
  NO: "NO",
  MEDIUM: "MEDIUM",
  FAST: "FAST"
}

function doFetch (modelId, accelerationMode, config) {
  const loraItems = [];
  let sampler = config.sampler || "Euler a", scheduleName = config.scheduleName || "simple";
  const defaultConfig = {
    prompt: "1girl",
    negative: "modern, recent, old, oldest, cartoon, graphic, text, painting, crayon, graphite, abstract, glitch, deformed, mutated, ugly, disfigured, long body, lowres, bad anatomy, bad hands, missing fingers, extra digits, fewer digits, cropped, very displeasing, (worst quality, bad quality:1.2), bad anatomy, sketch, jpeg artifacts, signature, watermark, username, signature, simple background, conjoined,bad ai-generated",
    steps: 5,
    width: 768,
    height: 768,
    cfgScale: 1.2,
  };

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
  let modelConfig = {};
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

  fetch("https://cn.tensorart.net/v1/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer 75fccd7b-e73d-4bcc-8897-b10740a1bc79",
    },
    body,
  })
    .then(res => res.json())
    .then(console.log);
}




/*
{
  job: {
    id: '881417947308949275',
    status: 'SUCCESS',
    credits: 0.8,
    successInfo: {
      images: [
        {
          id: '4dcb663e-eefd-4bd1-8384-98ee3326b7a6',
          url: 'https://tams-resource.tusiassets.com/resource-upload/short-term/2025-07-02/COMFY/images/881417947447329198_0.png?auth_key=1751493471-93bc28861f354fd78f85876ec540677e-0-56ed5cf957dd3d0fb710c47718c3a424',
          expiredIn: '3600',
          meta: { image: { width: 768, height: 768 } }
        }
      ],
      imageExifMetaMap: {
        '4dcb663e-eefd-4bd1-8384-98ee3326b7a6': {
          meta: {
            FileSize: '923 kB',
            ImageSize: '768x768',
            MIMEType: 'image/png',
            Seed: '3363668210'
          }
        }
      },
      runtime: '13'
    }
  }
}
*/
function getJob (jobId) {
  fetch(`https://cn.tensorart.net/v1/jobs/${jobId}`, {
    headers: {
      "Accept": "application/json",
      "Authorization": "Bearer 75fccd7b-e73d-4bcc-8897-b10740a1bc79",
    },
  })
    .then(res => res.json());
}

// doFetch(Model.NovaAnimeXL8, AccelerationMode.MEDIUM, {
//   // prompt: "face focus, cute, masterpiece, best quality, 1girl, green hair, sweater, looking at viewer, upper body, beanie, outdoors, night, turtleneck",
//   prompt: `(masterpiece,best quality:1.3),(amazing quality:1.3),very aesthetic,high resolution,ultra-detailed,absurdres,newest,scenery,depth of field,volumetric lighting,shiny sikin,shiny hair,
// forest,elf,long blonde hair,huge breasts,quiver,green_cloak,white midriff,breasts curtain,taut_clothes,underbust,navel_cutout,(black stockings),brown footwear,blush,smile of charm,large areola,(sweat:1.2),(steaming body:1.5),(covered nipples:1.2),belt_bag,kneel on one knee,spread legs,legs_up,arm up,leaning forward,`
// })
getJob("881636505309694879")