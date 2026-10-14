# Voxgig SDK Generator: Resend assessment notes

## Scope and workflow

On 14 October 2026, the project was scaffolded from Resend's [official OpenAPI 3.1.2 file](https://github.com/resend/resend-openapi/blob/main/resend.yaml) with `npm create @voxgig/sdkgen -- resend -d /tmp/voxgig-resend.yaml -o /home/ali/assessment/resend-voxgig-sdk -t ts -f test`. The copied source is `.sdk/def/voxgig-resend.yaml` (SHA-256 `2c79a69e7cd6041b982a4db228edc732b1b9db7ffec234d6fe56936e9a4667c4`). The scaffold installed its dependencies and added the TypeScript target and offline `test` feature. `cd .sdk && npm run generate` completed without hand-written API methods.

## What worked

- The [generator runbook](https://voxgig.com/sdk/agents) provided a short command sequence. The CLI accepted the provider's full OpenAPI file directly; no spec conversion was needed.
- The generated client configured `https://api.resend.com` and an `Authorization: Bearer` header from its `apikey` option, matching Resend's [API authentication](https://resend.com/docs/create-an-api-key).
- `cd ts && npm install` completed, and `npm run build` compiled the generated source and tests. The generated `Email` entity's offline tests passed.
- An offline `ResendSDK.prepare()` check produced `POST https://api.resend.com/emails` with the expected bearer header. It did not contact Resend.
- Project ownership was changed through the supported `.sdk/model/project.aontu` overlay, then regenerated. The MIT licenses and package metadata now identify Ali Shair rather than Voxgig.
- `voxgig-sdkgen doctor` exited successfully and reported that `.sdk` matches the scaffold.

## Friction and verified failures

- The [scaffold's guide](https://github.com/voxgig/create-sdkgen/blob/main/AGENTS.md) requires Node.js 24 or later. This environment initially had Node 22, so a local Node 24 runtime was needed. That prerequisite was discoverable in the guide, but not on the landing page's one-line `npm create` instruction.
- Generation inferred **81 entities from 87 paths and 139 methods**. Several names, such as `AddContactToSegmentResponseSuccess`, expose response-schema wording rather than a developer-friendly action. The generated root quickstart initially featured that entity instead of sending email. The root README was curated for this assessment; regeneration may replace it.
- Generation logged `flow-step-unreachable` for several operations, including `BasicRemoveSuppressionResponseSuccessFlow#2 (remove)`. The generated suppression entity test then failed: it expected an item to be absent after its create/list flow, but the listed item remained. This suggests a mismatch between generated flow and test expectations; the SDK source and test were left unchanged.
- The generated TypeScript documentation example `RetrievedAttachment().load({ id: 'retrieved_attachment_id' })` failed at runtime because the route also needs `email_id`. The same example appears in `ts/README.md` and `ts/REFERENCE.md`. Their type checks passed, so the missing parameter is caught only by the runnable-example test.
- Resend's spec marks `from`, `to`, and `subject` required in `SendEmailRequest`, while generated `EmailCreateData` marks them optional. It also widens the spec's string-or-string-array `to` field to `any[]`. This reduces the value of TypeScript guidance for the primary email operation. The generated create example contains an empty object.

## Verification result

`npm run build` passed. `npm test` ran **142 test files: 140 passed, 2 failed** (`RemoveSuppressionResponseSuccessEntity.test.js` and `readme_examples.test.js`). Running the failing files directly showed the assertion and missing `email_id` described above. The curated root README's examples passed the generated documentation test's type-check and offline execution stages. No live Resend request was made: no API key was configured, so delivery, account permissions, and response handling remain unverified.

## Suggested improvements

1. Generate each entity operation and its test from the same reachable-route decision. If a flow step is disabled, omit tests that assume it ran or make the generation fail with a focused error.
2. Validate every generated documentation example against all required path parameters, including parent resource IDs, before declaring it runnable.
3. Preserve OpenAPI `required` fields and `oneOf` string/array types in generated TypeScript request types.
4. Choose the root quickstart from a representative operation or allow a project-level override in the model, so a large API does not lead with a schema-derived response name.
5. Surface the Node.js 24 prerequisite beside the landing page's install command.

These findings are limited to this Resend spec and the generated project. The test failures should be reviewed before presenting the SDK as production ready.
