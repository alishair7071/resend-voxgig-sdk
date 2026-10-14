

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { ResendSDK, BaseFeature, config, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('UpdateInboxThreadResponseSuccessEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
  afterEach(liveDelay('RESEND_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ResendSDK.test()
    const ent = testsdk.UpdateInboxThreadResponseSuccess()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = ResendSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.UpdateInboxThreadResponseSuccess().update({"inbox_id":1,"thread_id":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RESEND_TEST_LIVE
    for (const op of []) {
      if (!live && maybeSkipControl(t, 'entityOp', 'update_inbox_thread_response_success.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"add_label_ids":{"a":true,"h":"Add Label Ids","n":"add_label_ids","r":false,"sh":"Label IDs to apply to the thread.","t":"`$ARRAY`","key$":"add_label_ids","index$":0},"folder":{"a":true,"h":"Folder","n":"folder","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"The folder the thread is in.","t":"`$STRING`","key$":"folder","index$":1},"id":{"a":true,"fo":"uuid","h":"Id","n":"id","r":true,"sh":"The ID of the thread.","t":"`$STRING`","key$":"id","index$":2},"labels":{"a":true,"h":"Labels","n":"labels","r":true,"sh":"The labels attached to the thread.","t":"`$ARRAY`","key$":"labels","index$":3},"object":{"a":true,"h":"Object","n":"object","r":true,"sh":"The object type.","t":"`$STRING`","key$":"object","index$":4},"read":{"a":true,"h":"Read","n":"read","op":{"update":{"req":false,"type":"`$BOOLEAN`"}},"r":true,"sh":"True only when every email in the thread is read.","t":"`$BOOLEAN`","key$":"read","index$":5},"remove_label_ids":{"a":true,"h":"Remove Label Ids","n":"remove_label_ids","r":false,"sh":"Label IDs to remove from the thread.","t":"`$ARRAY`","key$":"remove_label_ids","index$":6},"subject":{"a":true,"h":"Subject","n":"subject","r":true,"sh":"The subject of the thread.","t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"subject","index$":7}},"id":{"field":"id","name":"id"},"name":"update_inbox_thread_response_success","op":{"update":{"input":"data","name":"update","points":[{"a":true,"bf":["add_label_ids","folder","read","remove_label_ids"],"co":{"id":"PATCH /inboxes/{inbox_id}/threads/{thread_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"inbox_id","or":"inbox_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"thread_id","or":"thread_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PATCH","o":"/inboxes/{inbox_id}/threads/{thread_id}","q":{"exist":["inbox_id","thread_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"inboxes"},{"var":"inbox_id"},{"lit":"threads"},{"var":"thread_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.inbox"]]},"key$":"update_inbox_thread_response_success","name__orig":"update_inbox_thread_response_success","Name":"UpdateInboxThreadResponseSuccess","name_":"update_inbox_thread_response_success","name-":"update-inbox-thread-response-success","NAME":"UPDATE_INBOX_THREAD_RESPONSE_SUCCESS","index$":73}, {"active":true,"entity":"update_inbox_thread_response_success","key$":"BasicUpdateInboxThreadResponseSuccessFlow","kind":"basic","name":"BasicUpdateInboxThreadResponseSuccessFlow","param":{},"step":[{"a":false,"d":{"inbox_id":"inbox01"},"i":{"ref":"update_inbox_thread_response_success_ref01","srcdatavar":"update_inbox_thread_response_success_ref01_data","suffix":"_up0","textfield":"folder"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-update_inbox_thread_response_success_ref01"}}],"v":[],"unreachable":true}]}, 'UpdateInboxThreadResponseSuccess', {"PATCH /inboxes/{inbox_id}/threads/{thread_id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","description":"At least one of `read`, `folder`, `add_label_ids`, or `remove_label_ids` is required. A label ID cannot be both added and removed in the same request.","anyOf":[{"required":["read"]},{"required":["folder"]},{"required":["add_label_ids"]},{"required":["remove_label_ids"]}],"properties":{"read":{"type":"boolean","description":"Marks every email in the thread read or unread.","example":true,"key$":"read"},"folder":{"type":"string","enum":["inbox","archive","spam","trash"],"description":"Moves the thread to this folder. `sent` is assigned automatically and cannot be set.","example":"archive","key$":"folder"},"add_label_ids":{"type":"array","minItems":1,"maxItems":10,"items":{"type":"string","format":"uuid"},"description":"Label IDs to apply to the thread. Between 1 and 10 IDs. A label ID that does not exist in the inbox returns a 404.","example":["7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34"],"key$":"add_label_ids"},"remove_label_ids":{"type":"array","minItems":1,"maxItems":10,"items":{"type":"string","format":"uuid"},"description":"Label IDs to remove from the thread. Between 1 and 10 IDs. The labels themselves are kept. A label ID that does not exist in the inbox returns a 404.","example":["2b6d0f4e-8a1c-4e3b-9d57-1c0e8a6f4b21"],"key$":"remove_label_ids"}},"x-ref":"#/components/schemas/UpdateInboxThreadOptions","index$":1}}}},"parameters":[{"name":"inbox_id","in":"path","required":true,"schema":{"type":"string","format":"uuid"},"description":"The Inbox ID. An email address is not accepted.","index$":0},{"name":"thread_id","in":"path","required":true,"schema":{"type":"string","format":"uuid"},"description":"The Thread ID.","index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let update_inbox_thread_response_success_ref01_data = Object.values(setup.data.existing.update_inbox_thread_response_success)[0] as any

  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/update_inbox_thread_response_success/UpdateInboxThreadResponseSuccessTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = ResendSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['update_inbox_thread_response_success01','update_inbox_thread_response_success02','update_inbox_thread_response_success03','inbox01','inbox02','inbox03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RESEND_TEST_UPDATE_INBOX_THREAD_RESPONSE_SUCCESS_ENTID': idmap,
    'RESEND_TEST_LIVE': 'FALSE',
    'RESEND_TEST_EXPLAIN': 'FALSE',
    'RESEND_APIKEY': '',
  })

  idmap = env['RESEND_TEST_UPDATE_INBOX_THREAD_RESPONSE_SUCCESS_ENTID']

  const live = 'TRUE' === env.RESEND_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RESEND_TEST_UPDATE_INBOX_THREAD_RESPONSE_SUCCESS_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new ResendSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
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
    ]))
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
  }

  return setup
}
  
