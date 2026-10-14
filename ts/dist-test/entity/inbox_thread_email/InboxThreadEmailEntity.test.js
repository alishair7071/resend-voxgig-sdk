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
(0, node_test_1.describe)('InboxThreadEmailEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('RESEND_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ResendSDK.test();
        const ent = testsdk.InboxThreadEmail();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.ResendSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.InboxThreadEmail().list({ "inbox_id": 1, "thread_id": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.RESEND_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'inbox_thread_email.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "attachments": { "a": true, "h": "Attachments", "n": "attachments", "r": true, "sh": "The attachments of the message.", "t": "`$ARRAY`", "key$": "attachments", "index$": 0 }, "bcc": { "a": true, "h": "Bcc", "n": "bcc", "r": true, "sh": "The BCC recipients of the message.", "t": "`$ARRAY`", "key$": "bcc", "index$": 1 }, "cc": { "a": true, "h": "Cc", "n": "cc", "r": true, "sh": "The CC recipients of the message.", "t": "`$ARRAY`", "key$": "cc", "index$": 2 }, "direction": { "a": true, "h": "Direction", "n": "direction", "r": true, "sh": "Whether the inbox received the message (`inbound`) or sent it (`outbound`).", "t": "`$STRING`", "key$": "direction", "index$": 3 }, "from": { "a": true, "h": "From", "n": "from", "r": true, "sh": "Sender email address.", "t": "`$STRING`", "key$": "from", "index$": 4 }, "html": { "a": true, "h": "Html", "n": "html", "r": true, "sh": "The HTML body.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "html", "index$": 5 }, "id": { "a": true, "fo": "uuid", "h": "Id", "n": "id", "r": true, "sh": "The ID of the message.", "t": "`$STRING`", "key$": "id", "index$": 6 }, "message_id": { "a": true, "h": "Message Id", "n": "message_id", "r": true, "sh": "The Message-ID header of the message.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "message_id", "index$": 7 }, "read": { "a": true, "h": "Read", "n": "read", "r": true, "sh": "Whether the message has been read.", "t": "`$BOOLEAN`", "key$": "read", "index$": 8 }, "received_at": { "a": true, "fo": "date-time", "h": "Received At", "n": "received_at", "r": true, "sh": "Timestamp when the inbox received the message, or when the inbox sent it.", "t": "`$STRING`", "key$": "received_at", "index$": 9 }, "reply_to": { "a": true, "h": "Reply To", "n": "reply_to", "r": true, "sh": "The Reply-To addresses of the message.", "t": "`$ARRAY`", "key$": "reply_to", "index$": 10 }, "subject": { "a": true, "h": "Subject", "n": "subject", "r": true, "sh": "The subject of the message.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "subject", "index$": 11 }, "text": { "a": true, "h": "Text", "n": "text", "r": true, "sh": "The plain-text body.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "text", "index$": 12 }, "to": { "a": true, "h": "To", "n": "to", "r": true, "sh": "The recipients of the message.", "t": "`$ARRAY`", "key$": "to", "index$": 13 } }, "id": { "field": "id", "name": "id" }, "name": "inbox_thread_email", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /inboxes/{inbox_id}/threads/{thread_id}/emails", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "inbox_id", "or": "inbox_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "thread_id", "or": "thread_id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "before", "or": "before", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/inboxes/{inbox_id}/threads/{thread_id}/emails", "q": { "exist": ["inbox_id", "thread_id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "inboxes" }, { "var": "inbox_id" }, { "lit": "threads" }, { "var": "thread_id" }, { "lit": "emails" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["$.main.kit.entity.inbox"]] }, "key$": "inbox_thread_email", "name__orig": "inbox_thread_email", "Name": "InboxThreadEmail", "name_": "inbox_thread_email", "name-": "inbox-thread-email", "NAME": "INBOX_THREAD_EMAIL", "index$": 29 }, { "active": true, "entity": "inbox_thread_email", "key$": "BasicInboxThreadEmailFlow", "kind": "basic", "name": "BasicInboxThreadEmailFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "inbox_id": "inbox01", "thread_id": "thread01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "inbox_thread_email_ref01" } }] }] }, 'InboxThreadEmail', { "GET /inboxes/{inbox_id}/threads/{thread_id}/emails": { "protocol": "http", "parameters": [{ "name": "inbox_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid" }, "description": "The Inbox ID. An email address is not accepted.", "index$": 0 }, { "name": "thread_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid" }, "description": "The Thread ID.", "index$": 1 }, { "in": "query", "name": "limit", "required": false, "schema": { "type": "integer", "minimum": 1, "maximum": 100 }, "description": "Number of items to return.", "x-ref": "#/components/parameters/PaginationLimit", "index$": 2 }, { "in": "query", "name": "after", "required": false, "schema": { "type": "string" }, "description": "Return items after this cursor.", "x-ref": "#/components/parameters/PaginationAfter", "index$": 3 }, { "in": "query", "name": "before", "required": false, "schema": { "type": "string" }, "description": "Return items before this cursor.", "x-ref": "#/components/parameters/PaginationBefore", "index$": 4 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let inbox_thread_email_ref01_data = Object.values(setup.data.existing.inbox_thread_email)[0];
        // LIST
        const inbox_thread_email_ref01_ent = client.InboxThreadEmail();
        const inbox_thread_email_ref01_match = {};
        inbox_thread_email_ref01_match['inbox_id'] = setup.idmap['inbox01'];
        inbox_thread_email_ref01_match['thread_id'] = setup.idmap['thread01'];
        const inbox_thread_email_ref01_list = (await inbox_thread_email_ref01_ent.list(inbox_thread_email_ref01_match)).map((e) => e.data());
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/inbox_thread_email/InboxThreadEmailTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ResendSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['inbox_thread_email01', 'inbox_thread_email02', 'inbox_thread_email03', 'inbox01', 'inbox02', 'inbox03', 'thread01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'RESEND_TEST_INBOX_THREAD_EMAIL_ENTID': idmap,
        'RESEND_TEST_LIVE': 'FALSE',
        'RESEND_TEST_EXPLAIN': 'FALSE',
        'RESEND_APIKEY': '',
    });
    idmap = env['RESEND_TEST_INBOX_THREAD_EMAIL_ENTID'];
    const live = 'TRUE' === env.RESEND_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['RESEND_TEST_INBOX_THREAD_EMAIL_ENTID'];
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
//# sourceMappingURL=InboxThreadEmailEntity.test.js.map