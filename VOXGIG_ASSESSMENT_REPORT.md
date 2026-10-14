# Voxgig SDK Generator Assessment Report — Resend TypeScript SDK

**Candidate:** Ali Shair  
**Project:** `resend-voxgig-sdk`  
**Date:** 14 October 2026

## Summary

I generated an open-source TypeScript SDK for the [Resend email API](https://resend.com/docs/api-reference/emails/send-email) using Voxgig SDK Generator. The repository is MIT licensed and uses Resend's [official OpenAPI 3.1.2 specification](https://github.com/resend/resend-openapi/blob/main/resend.yaml). It is an unofficial SDK and is not affiliated with Resend or Voxgig.

I chose Resend because it is a SaaS API with a documented API-key workflow, a public OpenAPI definition, and a useful primary operation—sending email. I checked the Voxgig SDK catalogue before generation and did not find a Resend SDK.

## Generation workflow

I scaffolded the project from the official OpenAPI file, selected the TypeScript target and Voxgig's offline `test` feature, then generated the SDK through the project-local toolchain. The copied source specification is retained at `.sdk/def/voxgig-resend.yaml`.

The project uses the supported `.sdk/model/project.aontu` overlay for project ownership metadata. I did not hand-write API methods or change generated SDK source to conceal failures. `voxgig-sdkgen doctor` completed successfully and reported that the scaffold matched.

## What worked well

- The generator accepted Resend's OpenAPI definition directly; no conversion step was needed.
- It correctly inferred the Resend API base URL (`https://api.resend.com`) and Bearer-token authentication from the specification.
- The generated SDK provides an entity-oriented TypeScript surface, including `client.Email().create(...)`.
- The generated offline transport made it possible to inspect request construction without an API key or a live request. An offline `prepare()` check produced `POST https://api.resend.com/emails` with the expected Bearer header.
- The TypeScript package and its generated tests compiled successfully with `npm run build`.

## Verification results

| Check | Result |
| --- | --- |
| TypeScript build | Passed |
| Generated offline suite | 142 test files: 140 passed, 2 failed |
| SDK doctor check | Passed |
| Live Resend request | Not run — no API key was configured |

The two failing tests were left unchanged and are documented below. The curated root README examples passed the generated documentation test's type-check and offline-execution stages.

## Findings and friction

### Runtime prerequisite

The scaffold guide requires Node.js 24 or later. The initial environment had Node.js 22, so I needed a local Node 24 runtime before generating. The guide contains this requirement, but the SDK landing page's short `npm create` instruction does not make it prominent.

### Generated model size and naming

The definition produced 81 entities from 87 paths and 139 methods. Several entity names expose response-schema wording rather than developer intent; for example, `AddContactToSegmentResponseSuccess`. The default generated root quickstart initially led with such a response-derived entity rather than the common send-email operation, so I curated the repository README for the assessment.

### Unreachable flow steps and one failed entity test

Generation reported `flow-step-unreachable` warnings, including `BasicRemoveSuppressionResponseSuccessFlow#2 (remove)`. The generated suppression entity test failed because it expected an item to be absent after its create/list flow, but the item remained listed. This looks like a mismatch between generated flow selection and test expectations. The generated test and source were not edited.

### Generated documentation example missing a required path parameter

The generated example `RetrievedAttachment().load({ id: 'retrieved_attachment_id' })` fails at runtime because the route also requires `email_id`. The example appears in both `ts/README.md` and `ts/REFERENCE.md`. It type-checks, so the issue is only detected by the runnable-example test.

### Request type fidelity

Resend marks `from`, `to`, and `subject` as required in `SendEmailRequest`, while generated `EmailCreateData` makes them optional. The specification permits `to` as a string or an array of strings; the generated type widens this to `any[]`. For the primary operation, this weakens TypeScript's guidance and produces an empty-object create example in the generated materials.

## Suggestions

1. Generate operation flows and their tests from the same reachable-route decision. A disabled flow step should not leave a test assuming the step ran.
2. Validate generated runnable examples against every required path parameter, including parent-resource IDs.
3. Preserve OpenAPI required fields and string-or-array unions in generated TypeScript request types.
4. Choose a representative default quickstart operation, or support a project-level quickstart override in the model.
5. Surface the Node.js 24 prerequisite beside the landing-page install command.

## Scope and limitations

No live Resend request was made, and no API key, account permission, delivery behavior, or live response handling was tested. The results above are limited to this Resend OpenAPI definition, the generated TypeScript target, and the offline test suite. The project should be reviewed before production use.

## Repository materials

- Project README: `README.md`
- Detailed DX notes: `DX_REPORT.md`
- Official spec copy: `.sdk/def/voxgig-resend.yaml`
- Generated TypeScript SDK: `ts/`
- License: `LICENSE` (MIT)
