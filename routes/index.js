// import e from "express";
import express from "express";
import homeController from "../controllers/home.controller.js";
const router = express.Router();

router.get("/", homeController.index);
router.get("/rules", homeController.rules);
router.get("/test", homeController.test);
router.get("/general-knowledge", homeController.generalKnowledge);
router.get("/general-test", homeController.generalTest);
router.get("/introduction", homeController.introduction);
router.get("/mandatory-questions", homeController.mandatoryQuestions);
router.get("/multiple-choice", homeController.multipleChoice);
router.get("/eloquence", homeController.eloquence);
router.get("/crossword", homeController.crossword);

export default router;
