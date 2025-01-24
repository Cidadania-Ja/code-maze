import { Router } from "express";
import notificationsRouter from "./routers/notification";

const router = Router();

router.use("/api/notifications", notificationsRouter);

export default router;
