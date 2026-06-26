This is a [Next.js](https://nextjs.org) project for GreenWork frontend (React + TypeScript + Tailwind CSS).

## Getting Started

### Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

The frontend expects the backend API at `http://localhost:5000` (configured via `NEXT_PUBLIC_API_BASE_URL` in `.env.local`).

### Docker Compose (Full Stack)

Run the entire stack from the **backend directory**:

```bash
cd ../greenwork-backend
docker compose up -d
```

This starts:
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5000
- **MongoDB**: localhost:27017

### Environment Setup

Copy the example environment file:
```bash
cp .env.local.example .env.local
# or use .env.production for production builds
```

Environment variables:
- `NEXT_PUBLIC_API_BASE_URL` — Backend API endpoint (default: http://localhost:5000)

### Building for Production

```bash
npm run build
npm start
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
