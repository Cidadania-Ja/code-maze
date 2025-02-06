import { Router } from "express";
import notificationsRouter from "./routers/notification";
import postsRouter from "./routers/post";

const router = Router();

router.use("/api/notifications", notificationsRouter);
router.use("/api/posts", postsRouter);

export default router;
