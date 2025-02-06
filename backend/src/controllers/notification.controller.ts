import { HttpStatusCode } from "axios";
import { Request, Response } from "express";

export const sendNotification = async (
  request: Request,
  response: Response
): Promise<void> => {
  try {
    // TODO: Implement the notification dispatch
    response.status(HttpStatusCode.NoContent).json({
      message: "Notification sent successfully!",
    });
  } catch (error: any) {
    response.status(HttpStatusCode.BadRequest).json({
      message: error.message,
    });
  }
};
