import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { InboxDraftResponseSuccess, InboxDraftResponseSuccessLoadMatch, InboxDraftResponseSuccessCreateData } from '../ResendTypes';
declare class InboxDraftResponseSuccessEntity extends ResendEntityBase<InboxDraftResponseSuccess> {
    constructor(client: ResendSDK, entopts: any);
    make(this: InboxDraftResponseSuccessEntity): InboxDraftResponseSuccessEntity;
    load(this: any, reqmatch?: InboxDraftResponseSuccessLoadMatch, ctrl?: Control): Promise<InboxDraftResponseSuccessEntity>;
    create(this: any, reqdata?: InboxDraftResponseSuccessCreateData, ctrl?: Control): Promise<InboxDraftResponseSuccessEntity>;
}
export { InboxDraftResponseSuccessEntity };
