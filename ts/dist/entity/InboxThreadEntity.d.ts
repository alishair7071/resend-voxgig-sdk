import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { InboxThread, InboxThreadListMatch } from '../ResendTypes';
declare class InboxThreadEntity extends ResendEntityBase<InboxThread> {
    constructor(client: ResendSDK, entopts: any);
    make(this: InboxThreadEntity): InboxThreadEntity;
    list(this: any, reqmatch?: InboxThreadListMatch, ctrl?: Control): Promise<InboxThreadEntity[]>;
}
export { InboxThreadEntity };
