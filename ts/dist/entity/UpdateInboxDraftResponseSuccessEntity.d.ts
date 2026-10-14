import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { UpdateInboxDraftResponseSuccess, UpdateInboxDraftResponseSuccessUpdateData } from '../ResendTypes';
declare class UpdateInboxDraftResponseSuccessEntity extends ResendEntityBase<UpdateInboxDraftResponseSuccess> {
    constructor(client: ResendSDK, entopts: any);
    make(this: UpdateInboxDraftResponseSuccessEntity): UpdateInboxDraftResponseSuccessEntity;
    update(this: any, reqdata?: UpdateInboxDraftResponseSuccessUpdateData, ctrl?: Control): Promise<UpdateInboxDraftResponseSuccessEntity>;
}
export { UpdateInboxDraftResponseSuccessEntity };
