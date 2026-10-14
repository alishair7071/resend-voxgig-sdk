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
(0, node_test_1.describe)('InboxThreadEmailResponseSuccessEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('RESEND_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ResendSDK.test();
        const ent = testsdk.InboxThreadEmailResponseSuccess();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.ResendSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.InboxThreadEmailResponseSuccess().load({ "email_id": 1, "inbox_id": "x", "thread_id": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.RESEND_TEST_LIVE;
        for (const op of []) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'inbox_thread_email_response_success.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "attachments": { "a": true, "h": "Attachments", "n": "attachments", "r": true, "sh": "The attachments of the message.", "t": "`$ARRAY`", "key$": "attachments", "index$": 0 }, "bcc": { "a": true, "h": "Bcc", "n": "bcc", "r": true, "sh": "The BCC recipients of the message.", "t": "`$ARRAY`", "key$": "bcc", "index$": 1 }, "cc": { "a": true, "h": "Cc", "n": "cc", "r": true, "sh": "The CC recipients of the message.", "t": "`$ARRAY`", "key$": "cc", "index$": 2 }, "direction": { "a": true, "h": "Direction", "n": "direction", "r": true, "sh": "Whether the inbox received the message (`inbound`) or sent it (`outbound`).", "t": "`$STRING`", "key$": "direction", "index$": 3 }, "from": { "a": true, "h": "From", "n": "from", "r": true, "sh": "Sender email address.", "t": "`$STRING`", "key$": "from", "index$": 4 }, "html": { "a": true, "h": "Html", "n": "html", "r": true, "sh": "The HTML body.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "html", "index$": 5 }, "id": { "a": true, "fo": "uuid", "h": "Id", "n": "id", "r": true, "sh": "The ID of the message.", "t": "`$STRING`", "key$": "id", "index$": 6 }, "message_id": { "a": true, "h": "Message Id", "n": "message_id", "r": true, "sh": "The Message-ID header of the message.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "message_id", "index$": 7 }, "read": { "a": true, "h": "Read", "n": "read", "r": true, "sh": "Whether the message has been read.", "t": "`$BOOLEAN`", "key$": "read", "index$": 8 }, "received_at": { "a": true, "fo": "date-time", "h": "Received At", "n": "received_at", "r": true, "sh": "Timestamp when the inbox received the message, or when the inbox sent it.", "t": "`$STRING`", "key$": "received_at", "index$": 9 }, "reply_to": { "a": true, "h": "Reply To", "n": "reply_to", "r": true, "sh": "The Reply-To addresses of the message.", "t": "`$ARRAY`", "key$": "reply_to", "index$": 10 }, "subject": { "a": true, "h": "Subject", "n": "subject", "r": true, "sh": "The subject of the message.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "subject", "index$": 11 }, "text": { "a": true, "h": "Text", "n": "text", "r": true, "sh": "The plain-text body.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "text", "index$": 12 }, "to": { "a": true, "h": "To", "n": "to", "r": true, "sh": "The recipients of the message.", "t": "`$ARRAY`", "key$": "to", "index$": 13 } }, "id": { "field": "id", "name": "id" }, "name": "inbox_thread_email_response_success", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["attachments", "bcc", "cc", "headers", "html", "subject", "text", "to"], "co": { "id": "POST /inboxes/{inbox_id}/threads/{thread_id}/emails/{email_id}/forward", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "Idempotency-Key", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "email_id", "or": "email_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "inbox_id", "or": "inbox_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "thread_id", "or": "thread_id", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "POST", "o": "/inboxes/{inbox_id}/threads/{thread_id}/emails/{email_id}/forward", "q": { "$action": "forward", "exist": ["email_id", "inbox_id", "thread_id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "inboxes" }, { "var": "inbox_id" }, { "lit": "threads" }, { "var": "thread_id" }, { "lit": "emails" }, { "var": "email_id" }, { "lit": "forward" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "bf": ["attachments", "bcc", "cc", "headers", "html", "reply_all", "subject", "text"], "co": { "id": "POST /inboxes/{inbox_id}/threads/{thread_id}/emails/{email_id}/reply", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "Idempotency-Key", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "email_id", "or": "email_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "inbox_id", "or": "inbox_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "thread_id", "or": "thread_id", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "POST", "o": "/inboxes/{inbox_id}/threads/{thread_id}/emails/{email_id}/reply", "q": { "$action": "reply", "exist": ["email_id", "inbox_id", "thread_id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "inboxes" }, { "var": "inbox_id" }, { "lit": "threads" }, { "var": "thread_id" }, { "lit": "emails" }, { "var": "email_id" }, { "lit": "reply" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /inboxes/{inbox_id}/threads/{thread_id}/emails/{email_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "email_id", "or": "email_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "inbox_id", "or": "inbox_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "thread_id", "or": "thread_id", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/inboxes/{inbox_id}/threads/{thread_id}/emails/{email_id}", "q": { "exist": ["email_id", "inbox_id", "thread_id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "inboxes" }, { "var": "inbox_id" }, { "lit": "threads" }, { "var": "thread_id" }, { "lit": "emails" }, { "var": "email_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["$.main.kit.entity.inbox", "$.main.kit.entity.email"]] }, "key$": "inbox_thread_email_response_success", "name__orig": "inbox_thread_email_response_success", "Name": "InboxThreadEmailResponseSuccess", "name_": "inbox_thread_email_response_success", "name-": "inbox-thread-email-response-success", "NAME": "INBOX_THREAD_EMAIL_RESPONSE_SUCCESS", "index$": 30 }, { "active": true, "entity": "inbox_thread_email_response_success", "key$": "BasicInboxThreadEmailResponseSuccessFlow", "kind": "basic", "name": "BasicInboxThreadEmailResponseSuccessFlow", "param": {}, "step": [{ "a": false, "d": {}, "i": { "ref": "inbox_thread_email_response_success_ref01" }, "m": { "email_id": "email01", "inbox_id": "inbox01", "thread_id": "thread01" }, "o": "create", "s": [], "v": [], "unreachable": true }, { "a": false, "d": {}, "i": { "ref": "inbox_thread_email_response_success_ref01", "srcdatavar": "inbox_thread_email_response_success_ref01_data", "suffix": "_dt0" }, "m": { "id": "inbox_thread_email_response_success01", "inbox_id": "inbox01", "thread_id": "thread01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-inbox_thread_email_response_success_ref01" } }], "unreachable": true }] }, 'InboxThreadEmailResponseSuccess', { "POST /inboxes/{inbox_id}/threads/{thread_id}/emails/{email_id}/forward": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["to"], "properties": { "to": { "description": "Recipient email address. For multiple addresses, send as an array of strings. Must name at least one address. `to`, `cc` and `bcc` combined cannot exceed 50 recipients. Each address is `email@example.com` or `Name <email@example.com>`. An address that is not valid returns a 422.", "oneOf": [{ "type": "string" }, { "type": "array", "items": { "type": "string" }, "minItems": 1, "maxItems": 50 }], "example": ["colleague@example.org"] }, "cc": { "description": "CC recipient email address. For multiple addresses, send as an array of strings. Counts toward the 50-recipient limit. Each address is `email@example.com` or `Name <email@example.com>`. An address that is not valid returns a 422.", "oneOf": [{ "type": "string" }, { "type": "array", "items": { "type": "string" }, "maxItems": 50 }, { "type": "null" }], "example": ["billing@acme.com"] }, "bcc": { "description": "BCC recipient email address. For multiple addresses, send as an array of strings. Counts toward the 50-recipient limit. Each address is `email@example.com` or `Name <email@example.com>`. An address that is not valid returns a 422.", "oneOf": [{ "type": "string" }, { "type": "array", "items": { "type": "string" }, "maxItems": 50 }, { "type": "null" }], "example": ["records@acme.com"] }, "html": { "type": "string", "description": "An HTML note sent above the quoted original.", "example": "<p>Flagging this refund request for you.</p>" }, "text": { "type": "string", "description": "A plain-text note sent above the quoted original.", "example": "Flagging this refund request for you." }, "subject": { "type": "string", "minLength": 1, "maxLength": 2000, "description": "The subject of the forward. Cannot be only whitespace or contain a line break. When omitted, the thread subject is used, prefixed with `Fwd:` if it does not already start with it.", "example": "Fwd: Refund for order 1041" }, "attachments": { "type": ["array", "null"], "description": "Files to attach, as on `POST /emails`. Each one needs `content` or `path`. They share one limit with the attachments of the original message, which the forward also sends. Together they can have up to 10 files and at most 25 MB of `content`. A `path` file counts toward the 10 files only, because it is fetched when the email is sent. An empty file, a blocked file type, a `path` that is not an `http` or `https` URL or that points to `localhost`, `127.0.0.1` or `0.0.0.0`, or a `content_type` that is not a valid MIME type returns a 422.", "items": { "type": "object", "properties": { "content": { "type": "string", "format": "binary", "description": "Content of an attached file." }, "filename": { "type": "string", "description": "Name of attached file." }, "path": { "type": "string", "description": "Path where the attachment file is hosted" }, "content_type": { "type": "string", "description": "Optional content type for the attachment, if not set it will be derived from the filename property" }, "content_id": { "type": "string", "description": "Content ID for embedding inline images using cid references (e.g., cid:image001)." } }, "x-ref": "#/components/schemas/Attachment" } }, "headers": { "type": ["object", "null"], "additionalProperties": { "type": "string" }, "description": "Custom headers to add to the email. The `In-Reply-To`, `References` and `Reply-To` headers are set by Resend and cannot be set here. Sending one of them, in any letter case, returns a 422. Header names cannot be empty, and names and values cannot contain line breaks or null characters, or the request returns a 422. `null` means no custom headers.", "example": { "X-Ticket-Id": "4821" } } }, "x-ref": "#/components/schemas/ForwardInboxThreadEmailOptions" } } } }, "parameters": [{ "in": "header", "name": "Idempotency-Key", "required": false, "schema": { "type": "string", "minLength": 1, "maxLength": 256 }, "description": "A unique key for the request, so the forward is sent only once. A retry with the same key within 24 hours returns the first successful (2xx) response, with the `idempotent-replayed: true` header. A failed request is not stored, so it can be retried with the same key. Reusing the key with a different body, or while the first request is still running, returns a 409. An empty key, or one longer than 256 characters, returns a 400 `invalid_idempotency_key`. [Learn more](https://resend.com/docs/dashboard/emails/idempotency-keys)", "index$": 0 }, { "name": "inbox_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid" }, "description": "The Inbox ID. An email address is not accepted.", "index$": 1 }, { "name": "thread_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid" }, "description": "The Thread ID.", "index$": 2 }, { "name": "email_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid" }, "description": "The Email ID of the message to forward, as returned in `data[].id` by the list thread emails endpoint.", "index$": 3 }] }, "POST /inboxes/{inbox_id}/threads/{thread_id}/emails/{email_id}/reply": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "description": "At least one of `html` or `text` must contain more than whitespace.", "properties": { "cc": { "description": "CC recipient email address. For multiple addresses, send as an array of strings. Without `reply_all`, the reply copies only these addresses. With `reply_all`, these addresses are merged with the copied recipients, without duplicates. `cc` and `bcc` combined must be fewer than 50 addresses. After the `to` recipients are added, the reply cannot exceed 50 recipients. Each address is `email@example.com` or `Name <email@example.com>`. An address that is not valid returns a 422.", "oneOf": [{ "type": "string" }, { "type": "array", "items": { "type": "string" }, "maxItems": 49 }, { "type": "null" }], "example": ["billing@acme.com"] }, "bcc": { "description": "BCC recipient email address. For multiple addresses, send as an array of strings. BCC recipients of the original message are never copied. Each address is `email@example.com` or `Name <email@example.com>`. An address that is not valid returns a 422.", "oneOf": [{ "type": "string" }, { "type": "array", "items": { "type": "string" }, "maxItems": 49 }, { "type": "null" }], "example": ["records@acme.com"] }, "html": { "type": "string", "description": "The HTML body of the reply.", "example": "<p>Refund issued for order 1041.</p>" }, "text": { "type": "string", "description": "The plain-text body of the reply.", "example": "Refund issued for order 1041." }, "subject": { "type": "string", "minLength": 1, "maxLength": 2000, "description": "The subject of the reply. Cannot be only whitespace or contain a line break. When omitted, the thread subject is used, prefixed with `Re:` if it does not already start with it.", "example": "Re: Refund for order 1041" }, "reply_all": { "type": "boolean", "default": false, "description": "Reply to everyone on the original message. For a message the inbox received, the reply goes to its `Reply-To` addresses, or to its sender when it has none, and copies the other addresses of its `To` header and its `cc` recipients in `cc`. For a message the inbox sent, the reply goes to that message's `Reply-To` addresses when they are not the inbox address, otherwise to its `to` recipients, and copies its `cc` recipients. The inbox address is always excluded, and duplicates are removed.", "example": false }, "attachments": { "type": ["array", "null"], "description": "Files to attach, as on `POST /emails`. Each one needs `content` or `path`. Up to 10 files. The `content` of all files can total at most 25 MB. A `path` file counts toward the 10 files only, because it is fetched when the email is sent. An empty file, a blocked file type, a `path` that is not an `http` or `https` URL or that points to `localhost`, `127.0.0.1` or `0.0.0.0`, or a `content_type` that is not a valid MIME type returns a 422.", "items": { "type": "object", "properties": { "content": { "type": "string", "format": "binary", "description": "Content of an attached file." }, "filename": { "type": "string", "description": "Name of attached file." }, "path": { "type": "string", "description": "Path where the attachment file is hosted" }, "content_type": { "type": "string", "description": "Optional content type for the attachment, if not set it will be derived from the filename property" }, "content_id": { "type": "string", "description": "Content ID for embedding inline images using cid references (e.g., cid:image001)." } }, "x-ref": "#/components/schemas/Attachment" } }, "headers": { "type": ["object", "null"], "additionalProperties": { "type": "string" }, "description": "Custom headers to add to the email. The `In-Reply-To`, `References` and `Reply-To` headers are set by Resend and cannot be set here. Sending one of them, in any letter case, returns a 422. Header names cannot be empty, and names and values cannot contain line breaks or null characters, or the request returns a 422. `null` means no custom headers.", "example": { "X-Ticket-Id": "4821" } } }, "x-ref": "#/components/schemas/ReplyInboxThreadEmailOptions" } } } }, "parameters": [{ "in": "header", "name": "Idempotency-Key", "required": false, "schema": { "type": "string", "minLength": 1, "maxLength": 256 }, "description": "A unique key for the request, so the reply is sent only once. A retry with the same key within 24 hours returns the first successful (2xx) response, with the `idempotent-replayed: true` header. A failed request is not stored, so it can be retried with the same key. Reusing the key with a different body, or while the first request is still running, returns a 409. An empty key, or one longer than 256 characters, returns a 400 `invalid_idempotency_key`. [Learn more](https://resend.com/docs/dashboard/emails/idempotency-keys)", "index$": 0 }, { "name": "inbox_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid" }, "description": "The Inbox ID. An email address is not accepted.", "index$": 1 }, { "name": "thread_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid" }, "description": "The Thread ID.", "index$": 2 }, { "name": "email_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid" }, "description": "The Email ID of the message to reply to, as returned in `data[].id` by the list thread emails endpoint.", "index$": 3 }] }, "GET /inboxes/{inbox_id}/threads/{thread_id}/emails/{email_id}": { "protocol": "http", "parameters": [{ "name": "inbox_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid" }, "description": "The Inbox ID. An email address is not accepted.", "index$": 0 }, { "name": "thread_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid" }, "description": "The Thread ID.", "index$": 1 }, { "name": "email_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid" }, "description": "The Email ID, as returned in `data[].id` by the list thread emails endpoint.", "index$": 2 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let inbox_thread_email_response_success_ref01_data = Object.values(setup.data.existing.inbox_thread_email_response_success)[0];
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/inbox_thread_email_response_success/InboxThreadEmailResponseSuccessTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ResendSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['inbox_thread_email_response_success01', 'inbox_thread_email_response_success02', 'inbox_thread_email_response_success03', 'inbox01', 'inbox02', 'inbox03', 'email01', 'email02', 'email03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'RESEND_TEST_INBOX_THREAD_EMAIL_RESPONSE_SUCCESS_ENTID': idmap,
        'RESEND_TEST_LIVE': 'FALSE',
        'RESEND_TEST_EXPLAIN': 'FALSE',
        'RESEND_APIKEY': '',
    });
    idmap = env['RESEND_TEST_INBOX_THREAD_EMAIL_RESPONSE_SUCCESS_ENTID'];
    const live = 'TRUE' === env.RESEND_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['RESEND_TEST_INBOX_THREAD_EMAIL_RESPONSE_SUCCESS_ENTID'];
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
//# sourceMappingURL=InboxThreadEmailResponseSuccessEntity.test.js.map