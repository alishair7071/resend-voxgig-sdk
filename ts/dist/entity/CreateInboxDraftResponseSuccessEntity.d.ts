import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { CreateInboxDraftResponseSuccess, CreateInboxDraftResponseSuccessCreateData } from '../ResendTypes';
declare class CreateInboxDraftResponseSuccessEntity extends ResendEntityBase<CreateInboxDraftResponseSuccess> {
    constructor(client: ResendSDK, entopts: any);
    make(this: CreateInboxDraftResponseSuccessEntity): CreateInboxDraftResponseSuccessEntity;
    create(this: any, reqdata?: CreateInboxDraftResponseSuccessCreateData, ctrl?: Control): Promise<CreateInboxDraftResponseSuccessEntity>;
}
export { CreateInboxDraftResponseSuccessEntity };
