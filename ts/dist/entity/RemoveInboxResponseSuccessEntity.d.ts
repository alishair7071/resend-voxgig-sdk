import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { RemoveInboxResponseSuccess, RemoveInboxResponseSuccessRemoveMatch } from '../ResendTypes';
declare class RemoveInboxResponseSuccessEntity extends ResendEntityBase<RemoveInboxResponseSuccess> {
    constructor(client: ResendSDK, entopts: any);
    make(this: RemoveInboxResponseSuccessEntity): RemoveInboxResponseSuccessEntity;
    remove(this: any, reqmatch?: RemoveInboxResponseSuccessRemoveMatch, ctrl?: Control): Promise<RemoveInboxResponseSuccessEntity>;
}
export { RemoveInboxResponseSuccessEntity };
