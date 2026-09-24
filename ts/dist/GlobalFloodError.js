"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalFloodError = void 0;
class GlobalFloodError extends Error {
    isGlobalFloodError = true;
    sdk = 'GlobalFlood';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.GlobalFloodError = GlobalFloodError;
//# sourceMappingURL=GlobalFloodError.js.map