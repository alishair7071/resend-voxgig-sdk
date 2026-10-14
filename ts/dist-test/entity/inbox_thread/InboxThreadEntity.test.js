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
(0, node_test_1.describe)('InboxThreadEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('RESEND_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ResendSDK.test();
        const ent = testsdk.InboxThread();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.ResendSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.InboxThread().list({ "id": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.RESEND_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'inbox_thread.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "bcc": { "a": true, "h": "Bcc", "n": "bcc", "r": true, "sh": "The BCC recipients of the most recent email.", "t": "`$ARRAY`", "key$": "bcc", "index$": 0 }, "cc": { "a": true, "h": "Cc", "n": "cc", "r": true, "sh": "The CC recipients of the most recent email.", "t": "`$ARRAY`", "key$": "cc", "index$": 1 }, "folder": { "a": true, "h": "Folder", "n": "folder", "r": true, "sh": "The folder the thread is in.", "t": "`$STRING`", "key$": "folder", "index$": 2 }, "from": { "a": true, "h": "From", "n": "from", "r": true, "sh": "The sender email address.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "from", "index$": 3 }, "has_attachment": { "a": true, "h": "Has Attachment", "n": "has_attachment", "r": true, "sh": "Whether the most recent email in the thread has an attachment.", "t": "`$BOOLEAN`", "key$": "has_attachment", "index$": 4 }, "has_draft": { "a": true, "h": "Has Draft", "n": "has_draft", "r": true, "sh": "Whether the thread has an unsent draft.", "t": "`$BOOLEAN`", "key$": "has_draft", "index$": 5 }, "highlights": { "a": true, "h": "Highlights", "n": "highlights", "r": true, "sh": "Where `query` matched the email in `matched_email_id`, as text fragments with each match wrapped in `**`.", "t": "`$OBJECT`", "key$": "highlights", "index$": 6 }, "id": { "a": true, "fo": "uuid", "h": "Id", "n": "id", "r": true, "sh": "The ID of the thread.", "t": "`$STRING`", "key$": "id", "index$": 7 }, "labels": { "a": true, "h": "Labels", "n": "labels", "r": true, "sh": "The labels attached to the thread.", "t": "`$ARRAY`", "key$": "labels", "index$": 8 }, "matched_email_id": { "a": true, "fo": "uuid", "h": "Matched Email Id", "n": "matched_email_id", "r": true, "sh": "Identifies the email in the thread that matched the search.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "matched_email_id", "index$": 9 }, "message_count": { "a": true, "h": "Message Count", "n": "message_count", "r": true, "sh": "The number of emails in the thread.", "t": "`$INTEGER`", "key$": "message_count", "index$": 10 }, "read": { "a": true, "h": "Read", "n": "read", "r": true, "sh": "True only when every email in the thread is read.", "t": "`$BOOLEAN`", "key$": "read", "index$": 11 }, "received_at": { "a": true, "fo": "date-time", "h": "Received At", "n": "received_at", "r": true, "sh": "Timestamp when the thread was last active.", "t": "`$STRING`", "key$": "received_at", "index$": 12 }, "subject": { "a": true, "h": "Subject", "n": "subject", "r": true, "sh": "The subject of the thread.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "subject", "index$": 13 }, "to": { "a": true, "h": "To", "n": "to", "r": true, "sh": "The recipients of the most recent email.", "t": "`$ARRAY`", "key$": "to", "index$": 14 } }, "id": { "field": "id", "name": "id" }, "name": "inbox_thread", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /inboxes/{inbox_id}/threads", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "inbox_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "before", "or": "before", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": ["inbox", "sent"], "k": "query", "n": "folder", "or": "folders", "r": false, "t": "`$ARRAY`", "index$": 2 }, { "a": true, "ex": ["7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34"], "k": "query", "n": "label", "or": "labels", "r": false, "t": "`$ARRAY`", "index$": 3 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "k": "query", "n": "read", "or": "read", "r": false, "t": "`$BOOLEAN`", "index$": 5 }] }, "k": "http", "m": "GET", "o": "/inboxes/{inbox_id}/threads", "q": { "exist": ["id"] }, "r": { "param": { "inbox_id": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "inboxes" }, { "var": "id" }, { "lit": "threads" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /inboxes/{inbox_id}/threads/search", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "inbox_id", "or": "inbox_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "bcc", "or": "bcc", "r": false, "t": "`$ARRAY`", "index$": 1 }, { "a": true, "k": "query", "n": "before", "or": "before", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "cc", "or": "cc", "r": false, "t": "`$ARRAY`", "index$": 3 }, { "a": true, "ex": "2026-09-30", "k": "query", "n": "end_date", "or": "end_date", "r": false, "t": "`$STRING`", "index$": 4 }, { "a": true, "ex": ["inbox", "sent"], "k": "query", "n": "folder", "or": "folders", "r": false, "t": "`$ARRAY`", "index$": 5 }, { "a": true, "ex": ["isabella@example.com", "carolina@example.com"], "k": "query", "n": "from", "or": "from", "r": false, "t": "`$ARRAY`", "index$": 6 }, { "a": true, "k": "query", "n": "has_attachment", "or": "has_attachment", "r": false, "t": "`$BOOLEAN`", "index$": 7 }, { "a": true, "ex": ["7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34"], "k": "query", "n": "label", "or": "labels", "r": false, "t": "`$ARRAY`", "index$": 8 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 9 }, { "a": true, "ex": "invoice -draft", "k": "query", "n": "query", "or": "query", "r": false, "t": "`$STRING`", "index$": 10 }, { "a": true, "k": "query", "n": "read", "or": "read", "r": false, "t": "`$BOOLEAN`", "index$": 11 }, { "a": true, "ex": "2026-09-01", "k": "query", "n": "start_date", "or": "start_date", "r": false, "t": "`$STRING`", "index$": 12 }, { "a": true, "k": "query", "n": "to", "or": "to", "r": false, "t": "`$ARRAY`", "index$": 13 }] }, "k": "http", "m": "GET", "o": "/inboxes/{inbox_id}/threads/search", "q": { "exist": ["inbox_id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "inboxes" }, { "var": "inbox_id" }, { "lit": "threads" }, { "lit": "search" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 1 }], "key$": "list" } }, "relations": { "ancestors": [["$.main.kit.entity.inbox"]] }, "key$": "inbox_thread", "name__orig": "inbox_thread", "Name": "InboxThread", "name_": "inbox_thread", "name-": "inbox-thread", "NAME": "INBOX_THREAD", "index$": 28 }, { "active": true, "entity": "inbox_thread", "key$": "BasicInboxThreadFlow", "kind": "basic", "name": "BasicInboxThreadFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "inbox_id": "inbox01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "inbox_thread_ref01" } }] }] }, 'InboxThread', { "GET /inboxes/{inbox_id}/threads": { "protocol": "http", "parameters": [{ "name": "inbox_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid" }, "description": "The Inbox ID. An email address is not accepted.", "index$": 0 }, { "name": "folders", "in": "query", "required": false, "style": "form", "explode": false, "schema": { "type": "array", "items": { "type": "string", "enum": ["inbox", "archive", "spam", "sent", "trash"] } }, "description": "Comma-separated folders to list, for example `inbox,sent`. Repeating the parameter returns a 422 validation_error. A thread is returned when any of its emails is in one of the folders, so a thread in `inbox` with an email you sent matches both `inbox` and `sent`. Defaults to `inbox`, or to `inbox,archive,sent` when `labels` is set. `spam` and `trash` are only included when you name them.", "example": ["inbox", "sent"], "index$": 1 }, { "name": "labels", "in": "query", "required": false, "style": "form", "explode": false, "schema": { "type": "array", "maxItems": 50, "items": { "type": "string", "format": "uuid" } }, "description": "Comma-separated label IDs. Returns threads with any of these labels. Up to 50 IDs. An ID that does not exist in the inbox returns a 404. Repeating the parameter returns a 422 validation_error.", "example": ["7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34"], "index$": 2 }, { "name": "read", "in": "query", "required": false, "schema": { "type": "boolean" }, "description": "`true` returns threads where every email is read. `false` returns threads with at least one unread email. Only the literal values `true` and `false` are accepted.", "index$": 3 }, { "in": "query", "name": "limit", "required": false, "schema": { "type": "integer", "minimum": 1, "maximum": 100 }, "description": "Number of items to return.", "x-ref": "#/components/parameters/PaginationLimit", "index$": 4 }, { "in": "query", "name": "after", "required": false, "schema": { "type": "string" }, "description": "Return items after this cursor.", "x-ref": "#/components/parameters/PaginationAfter", "index$": 5 }, { "in": "query", "name": "before", "required": false, "schema": { "type": "string" }, "description": "Return items before this cursor.", "x-ref": "#/components/parameters/PaginationBefore", "index$": 6 }] }, "GET /inboxes/{inbox_id}/threads/search": { "protocol": "http", "parameters": [{ "name": "inbox_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid" }, "description": "The Inbox ID. An email address is not accepted.", "index$": 0 }, { "name": "query", "in": "query", "required": false, "schema": { "type": "string", "maxLength": 256 }, "description": "Free text to search for in the subject, body, sender, recipients, and attachment names. Every word must match. Wrap words in double quotes to match an exact phrase. Start a word or quoted phrase with `-` to exclude it. Max 256 characters and 32 words.", "example": "invoice -draft", "index$": 1 }, { "name": "from", "in": "query", "required": false, "style": "form", "explode": false, "schema": { "type": "array", "maxItems": 20, "items": { "type": "string" } }, "description": "Comma-separated senders. Each value matches part of the sender's address or name, without case. Returns threads that match any of them. Up to 20 values. Repeating the parameter returns a 422 validation_error.", "example": ["isabella@example.com", "carolina@example.com"], "index$": 2 }, { "name": "to", "in": "query", "required": false, "style": "form", "explode": false, "schema": { "type": "array", "maxItems": 20, "items": { "type": "string" } }, "description": "Comma-separated recipients, matched the same way as `from`. Up to 20 values. Repeating the parameter returns a 422 validation_error.", "index$": 3 }, { "name": "cc", "in": "query", "required": false, "style": "form", "explode": false, "schema": { "type": "array", "maxItems": 20, "items": { "type": "string" } }, "description": "Comma-separated CC recipients, matched the same way as `from`. Up to 20 values. Repeating the parameter returns a 422 validation_error.", "index$": 4 }, { "name": "bcc", "in": "query", "required": false, "style": "form", "explode": false, "schema": { "type": "array", "maxItems": 20, "items": { "type": "string" } }, "description": "Comma-separated BCC recipients, matched the same way as `from`. Up to 20 values. Repeating the parameter returns a 422 validation_error.", "index$": 5 }, { "name": "has_attachment", "in": "query", "required": false, "schema": { "type": "boolean" }, "description": "`true` matches emails with an attachment. `false` matches emails without one. Only the literal values `true` and `false` are accepted.", "index$": 6 }, { "name": "start_date", "in": "query", "required": false, "schema": { "type": "string" }, "description": "Matches emails sent on or after this date. Accepts a date like `2026-09-01` or an ISO 8601 timestamp, in UTC unless the timestamp has an offset. An empty value returns a 422.", "example": "2026-09-01", "index$": 7 }, { "name": "end_date", "in": "query", "required": false, "schema": { "type": "string" }, "description": "Matches emails sent on or before this date. Same formats as `start_date`. A date covers that whole day, so `start_date=2026-09-01&end_date=2026-09-30` covers all of September. A timestamp is used as given. An `end_date` before `start_date` returns a 422 validation_error. An empty value returns a 422.", "example": "2026-09-30", "index$": 8 }, { "name": "folders", "in": "query", "required": false, "style": "form", "explode": false, "schema": { "type": "array", "items": { "type": "string", "enum": ["inbox", "archive", "spam", "sent", "trash"] } }, "description": "Comma-separated folders to search, for example `inbox,sent`. Repeating the parameter returns a 422 validation_error. A thread is returned when any of its emails is in one of the folders. Defaults to `inbox`, or to `inbox,archive,sent` when `labels` is set. `spam` and `trash` are only included when you name them.", "example": ["inbox", "sent"], "index$": 9 }, { "name": "labels", "in": "query", "required": false, "style": "form", "explode": false, "schema": { "type": "array", "maxItems": 50, "items": { "type": "string", "format": "uuid" } }, "description": "Comma-separated label IDs. Returns threads with any of these labels. Up to 50 IDs. An ID that does not exist in the inbox returns a 404. Repeating the parameter returns a 422 validation_error.", "example": ["7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34"], "index$": 10 }, { "name": "read", "in": "query", "required": false, "schema": { "type": "boolean" }, "description": "`true` returns threads where every email is read. `false` returns threads with at least one unread email. Only the literal values `true` and `false` are accepted.", "index$": 11 }, { "in": "query", "name": "limit", "required": false, "schema": { "type": "integer", "minimum": 1, "maximum": 100 }, "description": "Number of items to return.", "x-ref": "#/components/parameters/PaginationLimit", "index$": 12 }, { "in": "query", "name": "after", "required": false, "schema": { "type": "string" }, "description": "Return items after this cursor.", "x-ref": "#/components/parameters/PaginationAfter", "index$": 13 }, { "in": "query", "name": "before", "required": false, "schema": { "type": "string" }, "description": "Return items before this cursor.", "x-ref": "#/components/parameters/PaginationBefore", "index$": 14 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let inbox_thread_ref01_data = Object.values(setup.data.existing.inbox_thread)[0];
        // LIST
        const inbox_thread_ref01_ent = client.InboxThread();
        const inbox_thread_ref01_match = {};
        inbox_thread_ref01_match['inbox_id'] = setup.idmap['inbox01'];
        const inbox_thread_ref01_list = (await inbox_thread_ref01_ent.list(inbox_thread_ref01_match)).map((e) => e.data());
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/inbox_thread/InboxThreadTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ResendSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['inbox_thread01', 'inbox_thread02', 'inbox_thread03', 'inbox01', 'inbox02', 'inbox03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'RESEND_TEST_INBOX_THREAD_ENTID': idmap,
        'RESEND_TEST_LIVE': 'FALSE',
        'RESEND_TEST_EXPLAIN': 'FALSE',
        'RESEND_APIKEY': '',
    });
    idmap = env['RESEND_TEST_INBOX_THREAD_ENTID'];
    const live = 'TRUE' === env.RESEND_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['RESEND_TEST_INBOX_THREAD_ENTID'];
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
//# sourceMappingURL=InboxThreadEntity.test.js.map