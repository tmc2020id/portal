# TMC SMART Portal

Production-ready Next.js 16 application for the TMC SMART website.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Standalone production output
- Docker multi-stage build
- Docker Compose single-service deployment

## Requirements

- Node.js 20+ for local development
- npm 10+
- Docker Engine with Docker Compose plugin for container deployment

## Environment Variables

Create a local environment file before running the project:

```bash
cp .env.example .env
```

Required variables:

- `NEXT_PUBLIC_SITE_URL` - public base URL used for `robots.txt` and `sitemap.xml`

Important behavior:

- Variables prefixed with `NEXT_PUBLIC_` are baked into the client bundle at build time
- If `NEXT_PUBLIC_SITE_URL` changes, rebuild the application or Docker image

## Local Development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Useful commands:

```bash
npm run lint
npx next build --debug
```

## Production Build Without Docker

Build the production bundle:

```bash
npm install
npx next build --debug
```

Run the standalone server locally after build:

```bash
PORT=3000 HOSTNAME=0.0.0.0 node .next/standalone/server.js
```

On Windows PowerShell:

```powershell
$env:PORT=3000
$env:HOSTNAME="0.0.0.0"
node .next/standalone/server.js
```

## Docker Deployment

Build the production image:

```bash
docker build \
  --build-arg NEXT_PUBLIC_SITE_URL=https://www.tmcsmart.com \
  -t website-tmc:latest .
```

If `NEXT_PUBLIC_SITE_URL` is omitted, Docker now defaults to `http://localhost:3000` to avoid accidentally baking a production URL into local builds.

Run the container:

```bash
docker run -d \
  --name website-tmc \
  -p 3000:3000 \
  website-tmc:latest
```

Stop and remove it:

```bash
docker stop website-tmc && docker rm website-tmc
```

## Docker Compose Deployment

1. Copy the environment file:

```bash
cp .env.example .env
```

2. Set the production domain in `.env`:

```env
NEXT_PUBLIC_SITE_URL=https://www.tmcsmart.com
```

For local-only Compose testing, you can keep `http://localhost:3000`.

3. Build and start the service:

```bash
docker compose up --build -d
```

4. Check status and logs:

```bash
docker compose ps
docker compose logs -f website-tmc
```

5. Stop the deployment:

```bash
docker compose down
```

6. Rebuild after content or environment changes that affect the public bundle:

```bash
docker compose up --build -d
```

## Deployment Notes

- The image uses a multi-stage Dockerfile based on `node:20-alpine`
- The production container runs as a non-root user
- The app depends on `output: "standalone"` in `next.config.ts`
- `docker-compose.yml` publishes the app on port `3000`
- The Compose service includes a basic HTTP healthcheck on `/`
- For VPS production, place this app behind a reverse proxy such as Nginx, Caddy, or Traefik for TLS and domain routing

## Recommended VPS Release Flow

```bash
git pull
cp .env.example .env
docker compose up --build -d
docker compose ps
docker compose logs -f website-tmc
```

## Verification Checklist

After deployment, verify:

- `http://SERVER_IP:3000/` responds successfully
- Main pages load correctly
- `robots.txt` is reachable
- `sitemap.xml` is reachable
- External links open the correct destinations
- The configured public domain matches `NEXT_PUBLIC_SITE_URL`
