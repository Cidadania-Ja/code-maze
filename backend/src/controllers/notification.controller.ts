import { HttpStatusCode } from "axios";
import { Request, Response } from "express";

export const sendNotification = async (
  request: Request,
  response: Response
): Promise<void> => {
  try {
    response.status(HttpStatusCode.NotFound).json({
      message: "Notification sent successfully!",
    });
  } catch (error: any) {
    response.status(HttpStatusCode.BadRequest).json({
      message: error.message,
    });
  }
};
