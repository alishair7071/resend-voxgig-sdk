import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { InboxThreadResponseSuccess, InboxThreadResponseSuccessLoadMatch } from '../ResendTypes';
declare class InboxThreadResponseSuccessEntity extends ResendEntityBase<InboxThreadResponseSuccess> {
    constructor(client: ResendSDK, entopts: any);
    make(this: InboxThreadResponseSuccessEntity): InboxThreadResponseSuccessEntity;
    load(this: any, reqmatch?: InboxThreadResponseSuccessLoadMatch, ctrl?: Control): Promise<InboxThreadResponseSuccessEntity>;
}
export { InboxThreadResponseSuccessEntity };
