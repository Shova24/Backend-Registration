const { Sequelize } = require("sequelize");

//db, user, pass
const sequelize = new Sequelize("ecrm2_dev", "shova", "bodmaish@shova", {
  host: "ecrm-dev.cg4ujuvseetk.ap-southeast-1.rds.amazonaws.com",
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  logging: false,
});

export default sequelize;
