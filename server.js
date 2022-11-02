import app from "./app";
import sequelize from "./src/config/Database";

const port = 8000;

sequelize
  // .sync()
  .authenticate()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log("Listening to Port : ", port);
});
