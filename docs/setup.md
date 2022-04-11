1. `npm install --save-dev @nrwl/nest`
2. `npm install --save-dev @nrwl/react`
3. `npx nx g @nrwl/react:app client`
4. `npx nx g @nrwl/nest:app server`
5. `npm i @nestjs/graphql @nestjs/apollo graphql apollo-server-express`
6. setup `graphqlRootModule` in `apps/server/src/app/app.module.ts`
7. `npm i --save-dev @nestjs/cli`
8. `cd apps/server/src/app/modules` and `npx nest g resource post`
9. rename `apps/client` to `apps/client-demo-api-race-conditions` by `npx nx g @nrwl/workspace:move --project client client-demo-api-race-conditions`
