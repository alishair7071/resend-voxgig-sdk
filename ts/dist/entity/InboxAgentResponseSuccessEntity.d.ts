import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { InboxAgentResponseSuccess, InboxAgentResponseSuccessListMatch } from '../ResendTypes';
declare class InboxAgentResponseSuccessEntity extends ResendEntityBase<InboxAgentResponseSuccess> {
    constructor(client: ResendSDK, entopts: any);
    make(this: InboxAgentResponseSuccessEntity): InboxAgentResponseSuccessEntity;
    list(this: any, reqmatch?: InboxAgentResponseSuccessListMatch, ctrl?: Control): Promise<InboxAgentResponseSuccessEntity[]>;
}
export { InboxAgentResponseSuccessEntity };
