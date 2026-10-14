import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { Inbox, InboxLoadMatch, InboxListMatch, InboxCreateData, InboxUpdateData } from '../ResendTypes';
declare class InboxEntity extends ResendEntityBase<Inbox> {
    constructor(client: ResendSDK, entopts: any);
    make(this: InboxEntity): InboxEntity;
    load(this: any, reqmatch?: InboxLoadMatch, ctrl?: Control): Promise<InboxEntity>;
    list(this: any, reqmatch?: InboxListMatch, ctrl?: Control): Promise<InboxEntity[]>;
    create(this: any, reqdata?: InboxCreateData, ctrl?: Control): Promise<InboxEntity>;
    update(this: any, reqdata?: InboxUpdateData, ctrl?: Control): Promise<InboxEntity>;
}
export { InboxEntity };
