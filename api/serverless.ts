import express from 'express';
import { AccelerationMode, getJob, Model, postJob } from './tam';


const app = express();

app.use(express.static('public'));
app.use(express.json());

app.post("/api/job", async (req, res) => {
  const data = req.body;
  let model = data?.model, mode = data?.mode, prompt = data?.prompt;
  if (!prompt) throw new Error("no prompt parameter");
  if (!model) throw new Error("no model parameter");
  if (!mode) throw new Error("no mode parameter");
  model = Model[model], mode = AccelerationMode[mode];
  if (!model) throw new Error("invalid model parameter");
  if (!mode) throw new Error("invalid mode");
  const ret = await postJob(model, mode, { prompt });
  res.json(ret);
});

app.get("/api/job/:jobId", async (req, res) => {
  const jobId = req.params.jobId;
  if (!jobId) throw new Error("");
  const info = await getJob(jobId);
  const { job: { status, successInfo: { images, imageExifMetaMap } } } = info;
  const image = images[0];
  if (!image) throw new Error("no valid image");
  const { id, url } = image;
  const { Seed: seed } = imageExifMetaMap[id]?.meta || {};
  res.json({ status, id, url, seed });
});

export default app;