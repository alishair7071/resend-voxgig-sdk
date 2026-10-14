import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { UpdateInboxThreadResponseSuccess, UpdateInboxThreadResponseSuccessUpdateData } from '../ResendTypes';
declare class UpdateInboxThreadResponseSuccessEntity extends ResendEntityBase<UpdateInboxThreadResponseSuccess> {
    constructor(client: ResendSDK, entopts: any);
    make(this: UpdateInboxThreadResponseSuccessEntity): UpdateInboxThreadResponseSuccessEntity;
    update(this: any, reqdata?: UpdateInboxThreadResponseSuccessUpdateData, ctrl?: Control): Promise<UpdateInboxThreadResponseSuccessEntity>;
}
export { UpdateInboxThreadResponseSuccessEntity };
