import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { InboxThreadEmailResponseSuccess, InboxThreadEmailResponseSuccessLoadMatch, InboxThreadEmailResponseSuccessCreateData } from '../ResendTypes';
declare class InboxThreadEmailResponseSuccessEntity extends ResendEntityBase<InboxThreadEmailResponseSuccess> {
    constructor(client: ResendSDK, entopts: any);
    make(this: InboxThreadEmailResponseSuccessEntity): InboxThreadEmailResponseSuccessEntity;
    load(this: any, reqmatch?: InboxThreadEmailResponseSuccessLoadMatch, ctrl?: Control): Promise<InboxThreadEmailResponseSuccessEntity>;
    create(this: any, reqdata?: InboxThreadEmailResponseSuccessCreateData, ctrl?: Control): Promise<InboxThreadEmailResponseSuccessEntity>;
}
export { InboxThreadEmailResponseSuccessEntity };
