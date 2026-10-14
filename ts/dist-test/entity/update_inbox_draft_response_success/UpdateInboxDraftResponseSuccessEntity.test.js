"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('UpdateInboxDraftResponseSuccessEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('RESEND_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ResendSDK.test();
        const ent = testsdk.UpdateInboxDraftResponseSuccess();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.ResendSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.UpdateInboxDraftResponseSuccess().update({ "draft_id": 1, "inbox_id": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.RESEND_TEST_LIVE;
        for (const op of []) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'update_inbox_draft_response_success.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "attachments": { "a": true, "h": "Attachments", "n": "attachments", "op": { "update": { "req": false, "type": ["`$ONE`", ["`$ARRAY`", "`$NULL`"]] } }, "r": true, "sh": "The files stored on the draft.", "t": "`$ARRAY`", "key$": "attachments", "index$": 0 }, "bcc": { "a": true, "h": "Bcc", "n": "bcc", "op": { "update": { "req": false, "type": "`$ANY`" } }, "r": true, "sh": "The BCC recipients.", "t": "`$ARRAY`", "key$": "bcc", "index$": 1 }, "cc": { "a": true, "h": "Cc", "n": "cc", "op": { "update": { "req": false, "type": "`$ANY`" } }, "r": true, "sh": "The CC recipients.", "t": "`$ARRAY`", "key$": "cc", "index$": 2 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": true, "sh": "Timestamp when the draft was created.", "t": "`$STRING`", "key$": "created_at", "index$": 3 }, "email_id": { "a": true, "fo": "uuid", "h": "Email Id", "n": "email_id", "r": true, "sh": "The ID of the outbound email queued when the draft was sent.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "email_id", "index$": 4 }, "html": { "a": true, "h": "Html", "n": "html", "op": { "update": { "req": false, "type": ["`$ONE`", ["`$STRING`", "`$NULL`"]] } }, "r": true, "sh": "The HTML body.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "html", "index$": 5 }, "id": { "a": true, "fo": "uuid", "h": "Id", "n": "id", "r": true, "sh": "The ID of the draft.", "t": "`$STRING`", "key$": "id", "index$": 6 }, "object": { "a": true, "h": "Object", "n": "object", "r": true, "sh": "The object type.", "t": "`$STRING`", "key$": "object", "index$": 7 }, "reply_to_email_id": { "a": true, "fo": "uuid", "h": "Reply To Email Id", "n": "reply_to_email_id", "r": true, "sh": "The Email ID the draft replies to.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "reply_to_email_id", "index$": 8 }, "subject": { "a": true, "h": "Subject", "n": "subject", "op": { "update": { "req": false, "type": ["`$ONE`", ["`$STRING`", "`$NULL`"]] } }, "r": true, "sh": "The subject.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "subject", "index$": 9 }, "text": { "a": true, "h": "Text", "n": "text", "op": { "update": { "req": false, "type": ["`$ONE`", ["`$STRING`", "`$NULL`"]] } }, "r": true, "sh": "The plain text body.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "text", "index$": 10 }, "thread_id": { "a": true, "fo": "uuid", "h": "Thread Id", "n": "thread_id", "r": true, "sh": "The Thread ID when the draft is a reply.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "thread_id", "index$": 11 }, "to": { "a": true, "h": "To", "n": "to", "op": { "update": { "req": false, "type": "`$ANY`" } }, "r": true, "sh": "The recipients.", "t": ["`$ONE`", ["`$ARRAY`", "`$NULL`"]], "key$": "to", "index$": 12 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "sh": "`reply` when the draft replies to an email in an existing thread.", "t": "`$STRING`", "key$": "type", "index$": 13 }, "updated_at": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updated_at", "r": true, "sh": "Timestamp when the draft was last saved.", "t": "`$STRING`", "key$": "updated_at", "index$": 14 } }, "id": { "field": "id", "name": "id" }, "name": "update_inbox_draft_response_success", "op": { "update": { "input": "data", "name": "update", "points": [{ "a": true, "bf": ["attachments", "bcc", "cc", "html", "subject", "text", "to"], "co": { "id": "PATCH /inboxes/{inbox_id}/drafts/{draft_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "draft_id", "or": "draft_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "inbox_id", "or": "inbox_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PATCH", "o": "/inboxes/{inbox_id}/drafts/{draft_id}", "q": { "exist": ["draft_id", "inbox_id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "inboxes" }, { "var": "inbox_id" }, { "lit": "drafts" }, { "var": "draft_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.inbox"]] }, "key$": "update_inbox_draft_response_success", "name__orig": "update_inbox_draft_response_success", "Name": "UpdateInboxDraftResponseSuccess", "name_": "update_inbox_draft_response_success", "name-": "update-inbox-draft-response-success", "NAME": "UPDATE_INBOX_DRAFT_RESPONSE_SUCCESS", "index$": 70 }, { "active": true, "entity": "update_inbox_draft_response_success", "key$": "BasicUpdateInboxDraftResponseSuccessFlow", "kind": "basic", "name": "BasicUpdateInboxDraftResponseSuccessFlow", "param": {}, "step": [{ "a": false, "d": { "inbox_id": "inbox01" }, "i": { "ref": "update_inbox_draft_response_success_ref01", "srcdatavar": "update_inbox_draft_response_success_ref01_data", "suffix": "_up0", "textfield": "created_at" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-update_inbox_draft_response_success_ref01" } }], "v": [], "unreachable": true }] }, 'UpdateInboxDraftResponseSuccess', { "PATCH /inboxes/{inbox_id}/drafts/{draft_id}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "description": "Send at least one of `to`, `cc`, `bcc`, `subject`, `text`, `html` or `attachments`. Omitted fields are left unchanged. Setting `text` or `html` replaces the whole body, so the body part you omit becomes `null`. The merged draft must contain at least one non-empty field, and its combined recipients cannot exceed 50.", "anyOf": [{ "required": ["to"] }, { "required": ["cc"] }, { "required": ["bcc"] }, { "required": ["subject"] }, { "required": ["text"] }, { "required": ["html"] }, { "required": ["attachments"] }], "properties": { "to": { "description": "The recipients. For multiple addresses, send an array of strings. Each value can include a friendly name. Pass `null` to clear. Each address is `email@example.com` or `Name <email@example.com>`. An address that is not valid returns a 422.", "oneOf": [{ "type": "string" }, { "type": "array", "items": { "type": "string" }, "maxItems": 50 }, { "type": "null" }], "example": ["ada@example.org"], "key$": "to" }, "cc": { "description": "The CC recipients. Pass `null` or `[]` to clear. Each address is `email@example.com` or `Name <email@example.com>`. An address that is not valid returns a 422.", "oneOf": [{ "type": "string" }, { "type": "array", "items": { "type": "string" }, "maxItems": 50 }, { "type": "null" }], "key$": "cc" }, "bcc": { "description": "The BCC recipients. Pass `null` or `[]` to clear. Each address is `email@example.com` or `Name <email@example.com>`. An address that is not valid returns a 422.", "oneOf": [{ "type": "string" }, { "type": "array", "items": { "type": "string" }, "maxItems": 50 }, { "type": "null" }], "key$": "bcc" }, "subject": { "type": ["string", "null"], "minLength": 1, "maxLength": 2000, "description": "The subject. Max 2000 characters. Cannot be only whitespace or contain a line break. Pass `null` to clear.", "example": "Refund issued for order 1041", "key$": "subject" }, "html": { "type": ["string", "null"], "description": "The HTML body. Pass `null` to clear.", "key$": "html" }, "text": { "type": ["string", "null"], "description": "The plain text body. Pass `null` to clear.", "key$": "text" }, "attachments": { "type": ["array", "null"], "description": "Files to store on the draft. Each one needs `content`, `filename` and `content_type`. A `path` without `content` returns a 422, and when both are sent, `path` is ignored. A `content_id` returns a 422. The files on a draft can total at most 25 MB. An empty file or a blocked file type returns a 422. Sending the field replaces every attachment on the draft. Send `[]` to remove them all. `null` also removes them all.", "items": { "type": "object", "description": "A file to store on a draft. Unlike `POST /emails` attachments, a draft attachment cannot use `path` or `content_id`. A `path` without `content` returns a 422, and when both are sent, `path` is ignored.", "required": ["content", "filename", "content_type"], "properties": { "content": { "type": "string", "description": "The content of the file, encoded in base64. It cannot be empty.", "example": "aGVsbG8gZTJl" }, "filename": { "type": "string", "minLength": 1, "description": "The filename of the attachment. A blocked file type returns a 422.", "example": "receipt.pdf" }, "content_type": { "type": "string", "minLength": 1, "description": "The MIME type of the attachment. It must be a valid MIME type, such as `application/pdf`, or the request returns a 422.", "example": "application/pdf" } }, "x-ref": "#/components/schemas/InboxDraftAttachmentInput" }, "key$": "attachments" } }, "x-ref": "#/components/schemas/UpdateInboxDraftOptions", "index$": 1 } } } }, "parameters": [{ "name": "inbox_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid" }, "description": "The Inbox ID. An email address is not accepted.", "index$": 0 }, { "name": "draft_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid" }, "description": "The Draft ID.", "index$": 1 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let update_inbox_draft_response_success_ref01_data = Object.values(setup.data.existing.update_inbox_draft_response_success)[0];
    });
});
// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true;
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/update_inbox_draft_response_success/UpdateInboxDraftResponseSuccessTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ResendSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['update_inbox_draft_response_success01', 'update_inbox_draft_response_success02', 'update_inbox_draft_response_success03', 'inbox01', 'inbox02', 'inbox03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'RESEND_TEST_UPDATE_INBOX_DRAFT_RESPONSE_SUCCESS_ENTID': idmap,
        'RESEND_TEST_LIVE': 'FALSE',
        'RESEND_TEST_EXPLAIN': 'FALSE',
        'RESEND_APIKEY': '',
    });
    idmap = env['RESEND_TEST_UPDATE_INBOX_DRAFT_RESPONSE_SUCCESS_ENTID'];
    const live = 'TRUE' === env.RESEND_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['RESEND_TEST_UPDATE_INBOX_DRAFT_RESPONSE_SUCCESS_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.ResendSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.RESEND_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.RESEND_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=UpdateInboxDraftResponseSuccessEntity.test.js.map