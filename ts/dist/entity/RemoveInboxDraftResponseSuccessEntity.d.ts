import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { RemoveInboxDraftResponseSuccess, RemoveInboxDraftResponseSuccessRemoveMatch } from '../ResendTypes';
declare class RemoveInboxDraftResponseSuccessEntity extends ResendEntityBase<RemoveInboxDraftResponseSuccess> {
    constructor(client: ResendSDK, entopts: any);
    make(this: RemoveInboxDraftResponseSuccessEntity): RemoveInboxDraftResponseSuccessEntity;
    remove(this: any, reqmatch?: RemoveInboxDraftResponseSuccessRemoveMatch, ctrl?: Control): Promise<RemoveInboxDraftResponseSuccessEntity>;
}
export { RemoveInboxDraftResponseSuccessEntity };
