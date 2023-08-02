# Adonis API application for Hype

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.

### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

### Important 🔴🔥🔴🔥🔴🔥🔴🔥🔴🔥

When using the free fl0.com platform, at the moment there is no support for reading .env files created at the time the platform creates the deployment process.

The .env file should never go in a commit!
