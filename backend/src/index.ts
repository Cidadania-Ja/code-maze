import { EnvConstants } from "./config/environment";
import { server } from "./server";

(async () => {
  server.listen(EnvConstants.PORT, () => {
    const message = `Server is running on port ${EnvConstants.PORT}`;

    console.info(message);
  });
})();
