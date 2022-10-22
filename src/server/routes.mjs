import path from "path";

import express from "express";

const TEMPLATE_PATH = path.resolve("./dist/index.html");
const router = express.Router();

router.get("/*", async (req, res, next) => {
    if (req.path.startsWith("/api")) {
        return next();
    }

    res.sendFile(TEMPLATE_PATH);
});

export default router;
