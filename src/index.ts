import express, { Application } from "express";
import helmet from "helmet";
import cors from "cors";

export const app: Application = express();

app.use(helmet());

app.use(express.json());

app.use(cors({ origin: "your client url" }));

// Expose an API to upload the image
