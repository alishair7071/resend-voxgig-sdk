import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { InboxThreadEmail, InboxThreadEmailListMatch } from '../ResendTypes';
declare class InboxThreadEmailEntity extends ResendEntityBase<InboxThreadEmail> {
    constructor(client: ResendSDK, entopts: any);
    make(this: InboxThreadEmailEntity): InboxThreadEmailEntity;
    list(this: any, reqmatch?: InboxThreadEmailListMatch, ctrl?: Control): Promise<InboxThreadEmailEntity[]>;
}
export { InboxThreadEmailEntity };
