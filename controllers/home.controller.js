import fs from "fs";
import path from "path";

const __dirname = path.resolve();

// Đọc JSON 1 lần khi server start
const questionsData = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "database", "mandatory-questions.json"),
    "utf8"
  )
);
const multipleData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "database", "multiple.json"), "utf8")
);
const homeController = {
  index: (req, res) => {
    res.render("home/index", {
      title: "Trang chủ Olympic",
      message: "Chào mừng đến với phần thi Olympic Triết học",
    });
  },
  rules: (req, res) => {
    res.render("home/rules", {
      title: "Thể lệ",
      message: "Đây là thể lệ của cuộc thi",
    });
  },
  test: (req, res) => {
    res.render("home/test", {
      title: "Phần thi",
      message: "Đây là phần thi",
    });
  },
  generalKnowledge: (req, res) => {
    res.render("home/generalKnowledge", {
      title: "Kiến thức chung",
      message: "Đây là phần kiến thức chung",
    });
  },
  introduction: (req, res) => {
    res.render("home/introduction", {
      title: "Giới thiệu",
      message: "Đây là phần giới thiệu",
    });
  },
  mandatoryQuestions: (req, res) => {
    res.render("home/mandatoryQuestions", {
      title: "Câu hỏi bắt buộc",
      message: "Đây là phần câu hỏi bắt buộc",
      questionsData,
    });
  },
  multipleChoice: (req, res) => {
    res.render("home/multipleChoice", {
      title: "Trắc nghiệm",
      message: "Đây là phần trắc nghiệm",
      multipleData,
    });
  },
  eloquence: (req, res) => {
    res.render("home/eloquence", {
      title: "Hùng biện",
      message: "Đây là phần hùng biện",
    });
  },
  crossword: (req, res) => {
    res.render("home/crossword", {
      title: "Giải ô chữ",
      message: "Đây là phần giải ô chữ",
    });
  },
};

export default homeController;
