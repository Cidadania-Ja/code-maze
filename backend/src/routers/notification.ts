import { sendNotification } from "@/controllers/notification.controller";
import { Router } from "express";

const notificationsRouter = Router();

notificationsRouter.post("/", sendNotification);

export default notificationsRouter;
