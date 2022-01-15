import mongo from "./mongo.js";
import server from "./server.js";
import "dotenv-defaults/config.js";
import login from "./login.js";


mongo.connect();
const port = process.env.PORT | 5000;

server.post('/api/google-login', async (req, res) => {
  const { token } = req.body;
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.CLIENT_ID,
  });
  const { name, email, picture } = ticket.getPayload();
  upsert(users, { name, email, picture });
  res.status(201);
  res.json({ name, email, picture });
});

const app = server.express;
login(app);


server.start({ port }, () => {
  console.log(`The server is up on port ${port}!`);
});
