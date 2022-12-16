import express from "express";

const router = express.Router();

router.get("/api/content", (req, res) =>
    res.status(200).json({ content: "Hello, World!" })
);

export default router;
