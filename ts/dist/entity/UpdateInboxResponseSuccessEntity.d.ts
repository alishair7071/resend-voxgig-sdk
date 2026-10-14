import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { UpdateInboxResponseSuccess, UpdateInboxResponseSuccessUpdateData } from '../ResendTypes';
declare class UpdateInboxResponseSuccessEntity extends ResendEntityBase<UpdateInboxResponseSuccess> {
    constructor(client: ResendSDK, entopts: any);
    make(this: UpdateInboxResponseSuccessEntity): UpdateInboxResponseSuccessEntity;
    update(this: any, reqdata?: UpdateInboxResponseSuccessUpdateData, ctrl?: Control): Promise<UpdateInboxResponseSuccessEntity>;
}
export { UpdateInboxResponseSuccessEntity };
