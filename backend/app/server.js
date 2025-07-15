const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
// const allRoutes = require("./router/router");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const createError = require("http-errors");
const path = require("path");
const { allRoutes } = require("./router/router");
dotenv.config();
class Application {
  #app = express();
  #PORT = process.env.PORT || 5000;
  #DB_URI = process.env.APP_DB;

  constructor() {
    this.connectToDB()
    .then(() => {
      this.configServer();
      this.initClientSession();
      this.configRoutes();
      this.errorHandling();
      this.createServer(); // ✅ سرور اینجا فقط وقتی راه‌اندازی می‌شه که اتصال DB موفق باشه
    })
    .catch((err) => {
      console.error("❌ اتصال به دیتابیس ناموفق بود:", err.message);
    });
  }

  connectToDB() {
    return mongoose
    .connect(this.#DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("✅ MongoDB connected!"))
    .catch((err) => {
      console.error("❌ Failed to connect to MongoDB", err.message);
      throw err;
    });
  }
  createServer() {
    this.#app.get("/", (req, res) => {
      res.send("Backend running successfully ✅");
    });
    this.#app.listen(this.#PORT, () =>
      console.log(`listening on port ${this.#PORT}`)
    );
  }
  configServer() {
    this.#app.use(
      cors({ credentials: true, origin: process.env.ALLOW_CORS_ORIGIN })
    );
    this.#app.use(express.json());
    this.#app.use(express.urlencoded({ extended: true }));
    this.#app.use(express.static(path.join(__dirname, "..")));
  }
  initClientSession() {
    this.#app.use(cookieParser(process.env.COOKIE_PARSER_SECRET_KEY));
  }
  configRoutes() {
    this.#app.use("/api", allRoutes);
  }
  errorHandling() {
    this.#app.use((req, res, next) => {
      next(createError.NotFound("آدرس مورد نظر یافت نشد"));
    });
    this.#app.use((error, req, res, next) => {
      const serverError = createError.InternalServerError();
      const statusCode = error.status || serverError.status;
      const message = error.message || serverError.message;
      return res.status(statusCode).json({
        statusCode,
        message,
      });
    });
  }
}

module.exports = Application;
