# Resend TypeScript SDK generated with Voxgig

An unofficial TypeScript client for [Resend's email API](https://resend.com/docs/api-reference/emails/send-email), generated with [Voxgig SDK Generator](https://voxgig.com/sdk) from Resend's [official OpenAPI specification](https://github.com/resend/resend-openapi/blob/main/resend.yaml). This assessment project is not affiliated with Resend or Voxgig. The SDK source and generated reference live in [`ts/`](ts/README.md).

## Requirements and installation

The SDK requires Node.js 22.13 or later. The generator requires Node.js 24 or later. The package is not published to npm; after cloning this repository, install the local TypeScript package in your application:

```bash
npm install /path/to/resend-voxgig-sdk/ts
```

To build it from the checkout:

```bash
cd ts
npm install
npm run build
```

## Authentication and first request

Create a key in the [Resend dashboard](https://resend.com/docs/create-an-api-key) and set `RESEND_API_KEY` in your environment. Keep the key out of Git. The generated client uses `apikey` to add `Authorization: Bearer <key>` to requests against `https://api.resend.com`.

```ts
import { ResendSDK } from '@alishair7071/resend-voxgig-sdk'

const client = new ResendSDK({ apikey: process.env.RESEND_API_KEY })
const email = await client.Email().create({
  from: 'onboarding@resend.dev',
  to: ['delivered@resend.dev'],
  subject: 'Voxgig SDK assessment',
  html: '<p>Test message</p>',
})
console.log(email.data())
```

Resend [documents `delivered@resend.dev` as a test recipient](https://resend.com/changelog/sending-test-emails). Test sending depends on your account's permissions; sending from your own domain requires [domain verification](https://resend.com/docs/send-with-nodejs). This project has not been tested against a live Resend account because no API key was configured.

## Generate and check

The OpenAPI file used for generation is retained at [`.sdk/def/voxgig-resend.yaml`](.sdk/def/voxgig-resend.yaml). From the checkout:

```bash
cd .sdk
npm install
npm run generate
cd ../ts
npm install
npm run build
npm test
```

The TypeScript build passes. The current generated offline suite has **140 passing tests and 2 failing tests**; see [DX_REPORT.md](DX_REPORT.md) for the exact failures. The generated TypeScript [README](ts/README.md) and [reference](ts/REFERENCE.md) describe the wider SDK surface.

## Known limitations

- The full Resend specification generated 81 entities, including names derived from response schemas that are awkward for everyday use.
- Voxgig reported unreachable flow steps during generation. Two generated tests currently fail, including a documentation example missing a required path parameter.
- The generated `EmailCreateData` type marks Resend's required `from`, `to`, and `subject` fields optional. Follow Resend's API reference when sending.
- This curated root README is an authored assessment document. Running `npm run generate` may replace it with the generator's default README; review the diff before publishing.

The project is MIT licensed; see [LICENSE](LICENSE). The bundled OpenAPI file retains its [original MIT notice](.sdk/def/RESEND_OPENAPI_LICENSE).
