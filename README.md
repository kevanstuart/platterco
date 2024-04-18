# Platter UI Search Application

## Stack decisions

Based on the job spec, I have decided to use the Next JS framework from [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). with:
- Tailwind
- Typescript
- Eslint

The package manager used on my local development machine is `PNPM` to take advantage of faster transpilation and package caching.

## Running the project

To run the development server
```bash
pnpm dev
```

The service will be created at [http://localhost:3000](http://localhost:3000). Please bear in mind that the development server is not
optimised for performance for a number of reasons.

I have excluded any form of deployment configuration / actions from the project as they are not relevant to the stated requirements. However,
NextJS can be deployed to - and hosted by - many different cloud platforms including AWS, GCP, and especially Vercel.

## Todos

- [ ] Basic app scaffolding and configuration
- [ ] Fetch a list of user data from the API
- [ ] Determine whether to use API or client-side pagination
- [ ] Setup mock data (dev type and skills) to add to users for filtering
- [ ] Setup mock data for sidebar filtering options
- [ ] Implement profile page
- [ ] Implement contact modal
- [ ] Implement 3-second timout to simulate contact sending
- [ ] Implement search page
- [ ] Implement pagination
- [ ] Implement filtering
- [ ] Create responsive layout styles
- [ ] Nav and Footer improvements on smaller screens
- [ ] Test HTML agains W3C Validator
