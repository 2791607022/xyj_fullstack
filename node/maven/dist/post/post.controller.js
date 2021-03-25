"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
const post_service_1 = require("./post.service");
const store = async (req, res) => {
    console.log(req.body, '///////////');
    res.status(201).send('保存成功');
    const store = async (req, res) => {
        console.log(req.body, '///////////');
        const { title, content } = req.body;
        res.status(201).send('保存成功');
        const data = await post_service_1.createPost({ title, content });
    };
};
exports.store = store;
//# sourceMappingURL=post.controller.js.map