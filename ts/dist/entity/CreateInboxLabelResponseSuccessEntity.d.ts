import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { CreateInboxLabelResponseSuccess, CreateInboxLabelResponseSuccessCreateData } from '../ResendTypes';
declare class CreateInboxLabelResponseSuccessEntity extends ResendEntityBase<CreateInboxLabelResponseSuccess> {
    constructor(client: ResendSDK, entopts: any);
    make(this: CreateInboxLabelResponseSuccessEntity): CreateInboxLabelResponseSuccessEntity;
    create(this: any, reqdata?: CreateInboxLabelResponseSuccessCreateData, ctrl?: Control): Promise<CreateInboxLabelResponseSuccessEntity>;
}
export { CreateInboxLabelResponseSuccessEntity };
