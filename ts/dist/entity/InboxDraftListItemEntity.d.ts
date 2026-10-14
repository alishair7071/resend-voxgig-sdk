import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { InboxDraftListItem, InboxDraftListItemListMatch } from '../ResendTypes';
declare class InboxDraftListItemEntity extends ResendEntityBase<InboxDraftListItem> {
    constructor(client: ResendSDK, entopts: any);
    make(this: InboxDraftListItemEntity): InboxDraftListItemEntity;
    list(this: any, reqmatch?: InboxDraftListItemListMatch, ctrl?: Control): Promise<InboxDraftListItemEntity[]>;
}
export { InboxDraftListItemEntity };
