import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { InboxLabel, InboxLabelListMatch } from '../ResendTypes';
declare class InboxLabelEntity extends ResendEntityBase<InboxLabel> {
    constructor(client: ResendSDK, entopts: any);
    make(this: InboxLabelEntity): InboxLabelEntity;
    list(this: any, reqmatch?: InboxLabelListMatch, ctrl?: Control): Promise<InboxLabelEntity[]>;
}
export { InboxLabelEntity };
