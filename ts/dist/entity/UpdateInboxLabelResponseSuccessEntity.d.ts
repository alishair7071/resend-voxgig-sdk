import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { UpdateInboxLabelResponseSuccess, UpdateInboxLabelResponseSuccessUpdateData } from '../ResendTypes';
declare class UpdateInboxLabelResponseSuccessEntity extends ResendEntityBase<UpdateInboxLabelResponseSuccess> {
    constructor(client: ResendSDK, entopts: any);
    make(this: UpdateInboxLabelResponseSuccessEntity): UpdateInboxLabelResponseSuccessEntity;
    update(this: any, reqdata?: UpdateInboxLabelResponseSuccessUpdateData, ctrl?: Control): Promise<UpdateInboxLabelResponseSuccessEntity>;
}
export { UpdateInboxLabelResponseSuccessEntity };
