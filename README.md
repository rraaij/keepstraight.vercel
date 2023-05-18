# Keepstraight
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Setup Prisma
first enter the connect string to your mongodb instance in the .env file at DATABASE_URL.
Then:
```shell
npx prisma db push
```

### Used Tech
- React / Next.js 13 (AppDir, backend API)
- PrimeReact component library, PrimeFlex CSS Utility Classes
- Zustand State Management
- Mongo database using Prisma
- next-intl i18n internationalization nl-en

### Want to use tech
- NextAuth
- Zod Validation Library
- Tanstack (React) Query ??
- Playwright e2e testing

## Create a Next.js 13 app using pnpm
```shell
pnpm create next-app@latest --experimental-app
```

### Zustand info articles
[dev.to: Using Zustand with React](https://dev.to/franklin030601/using-zustand-with-react-js-9di#3)

# TODO LIST
- ~~score tables: use primereact table~~
- default route / --> login page using next-auth: implement authentication
- API using prisma to save data to MongoDB
- FIX game page: page should be serverside, components client side
- score correction functionality
- game overview page
- player stats (avg run, performance against other player)
- next-intl still uses 2.14.beta.4 - fix implementation with 2.15 (or higher)
