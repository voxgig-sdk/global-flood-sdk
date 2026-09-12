import { GlobalFloodEntityBase } from '../GlobalFloodEntityBase';
import type { GlobalFloodSDK } from '../GlobalFloodSDK';
import type { Control } from '../types';
import type { Flood, FloodLoadMatch } from '../GlobalFloodTypes';
declare class FloodEntity extends GlobalFloodEntityBase<Flood> {
    constructor(client: GlobalFloodSDK, entopts: any);
    make(this: FloodEntity): FloodEntity;
    load(this: any, reqmatch?: FloodLoadMatch, ctrl?: Control): Promise<FloodEntity>;
}
export { FloodEntity };
