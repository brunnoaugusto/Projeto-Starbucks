'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const OpenInBrowserController_1 = require("./OpenInBrowserController");
function activate(context) {
    const openInBrowserController = new OpenInBrowserController_1.OpenInBrowserController(context);
    context.subscriptions.push(openInBrowserController);
}
exports.activate = activate;
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map