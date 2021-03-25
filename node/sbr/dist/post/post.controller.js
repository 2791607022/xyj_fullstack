"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.show = void 0;
const show = async (request, response) => {
    const { postId } = request.params;
    response.end('hello post');
};
exports.show = show;
//# sourceMappingURL=post.controller.js.map