import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { RemoveInboxLabelResponseSuccess, RemoveInboxLabelResponseSuccessRemoveMatch } from '../ResendTypes';
declare class RemoveInboxLabelResponseSuccessEntity extends ResendEntityBase<RemoveInboxLabelResponseSuccess> {
    constructor(client: ResendSDK, entopts: any);
    make(this: RemoveInboxLabelResponseSuccessEntity): RemoveInboxLabelResponseSuccessEntity;
    remove(this: any, reqmatch?: RemoveInboxLabelResponseSuccessRemoveMatch, ctrl?: Control): Promise<RemoveInboxLabelResponseSuccessEntity>;
}
export { RemoveInboxLabelResponseSuccessEntity };
