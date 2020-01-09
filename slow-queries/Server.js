const Express = require("express");
const Crypto = require("crypto");

const Server = Express();

Server.get(
  "/:uuid",
  async (req, res) => {
    const uuid = req.params.uuid;

    const authHeader = req.headers.Authorization || req.headers.authorization;
    const uuidB64 = Buffer.from(uuid).toString("base64");

    if(authHeader !== uuidB64) {
      res.status(401).send("Invalid authorization: Authorization header must be base 64 encoded ID");
      return;
    }

    const hash = Crypto.createHash("md5").update(uuid).digest("hex");

    await new Promise(resolve => setTimeout(resolve, 1000));

    res.send(hash);
  }
);

Server.listen(3111);
