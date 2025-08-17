import express from "express";
import path from "path";
import indexRouter from "./routes/index.js";
import expressLayouts from "express-ejs-layouts";

import { fileURLToPath } from "url";

// Xử lý __dirname trong ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// const port = 8080;
// const hostname = "localhost";

// thư mục public là nơi chứa file tĩnh
app.use(express.static(path.join(__dirname, "public")));
// thư mục views là nơi chứa các file view
// template engine
// app.set("views", "./views");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//Layout
app.use(expressLayouts);

//routes
app.use("/", indexRouter);

// app.listen(port, hostname, () => {
//   console.log(`Server is running at http://${hostname}:${port}/`);
// });

app.listen(3000, () => {
  console.log(`Server is running at port 3000/`);
});

// module.exports = app;
