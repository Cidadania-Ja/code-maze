import { EnvConstants } from "./config/environment";
import { connect as connectMongo } from "./mongodb";
import { server } from "./server";

(async () => {
  await connectMongo();

  server.listen(EnvConstants.PORT, () => {
    const message = `Server is running on port ${EnvConstants.PORT}`;

    console.info(message);
  });
})();
