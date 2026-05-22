import express, {
  type Application,
  type Request,
  type Response,
} from "express";

import { issueRoute } from "./modules/issue/issue.route";
import { authRoute } from "./modules/auth/auth.route";
import logger from "./middleware/logger";

const app: Application = express();

// Middleware
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.use(logger);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "DevPulse: Assignment-2",
  });
});

app.use("/api/issues", issueRoute);
app.use("/api/auth", authRoute);

export default app;
