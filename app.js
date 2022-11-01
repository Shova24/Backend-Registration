const express = require("express");
import router from "./src/routes/Router";

const app = express();
app.use(express.json());

app.use("/api", router);
export default app;
