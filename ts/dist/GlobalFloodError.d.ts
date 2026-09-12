import { Context } from './Context';
declare class GlobalFloodError extends Error {
    isGlobalFloodError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { GlobalFloodError };
