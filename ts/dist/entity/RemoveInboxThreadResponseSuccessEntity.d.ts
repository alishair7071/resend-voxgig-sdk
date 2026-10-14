import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { RemoveInboxThreadResponseSuccess, RemoveInboxThreadResponseSuccessRemoveMatch } from '../ResendTypes';
declare class RemoveInboxThreadResponseSuccessEntity extends ResendEntityBase<RemoveInboxThreadResponseSuccess> {
    constructor(client: ResendSDK, entopts: any);
    make(this: RemoveInboxThreadResponseSuccessEntity): RemoveInboxThreadResponseSuccessEntity;
    remove(this: any, reqmatch?: RemoveInboxThreadResponseSuccessRemoveMatch, ctrl?: Control): Promise<RemoveInboxThreadResponseSuccessEntity>;
}
export { RemoveInboxThreadResponseSuccessEntity };
