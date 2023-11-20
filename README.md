# Introduction

This is a repository for a POC with module federation. The aim is to federate multiple react components within a shell application (next or angular) only on client side (probably later on server side when the need arises).

# Getting Started client side and use of react.lazy

> node version should be at least 18

> `npm install` on all repositories

> `npm run build` in context-manager

> `npm run start:mfe:client` in cart-mfe, checkout-mfe and react-18-mfe

> `npm run dev` in shell-app-next-13

Shell application will be running at port 4200.

# Getting Started server side and use of dynamic (next)

> node version should be at least 18

> `npm install` on all repositories

> `npm run build` in context-manager

> `npm run start:mfe:both` in cart-mfe, checkout-mfe and react-18-mfe

> uncomment `!options.isServer` on next.config in shell application

> uncomment usage of `dynamic` to load MFEs in `shell-app-next-13/pages/_app.tsx`, `shell-app-next-13/pages/checkout/user-infos/index.tsx`, `shell-app-next-13/pages/checkout/payment/index.tsx` and `shell-app-next-13/pages/react-example/index.tsx`

> `npm run dev` in shell-app-next-13

Shell application will be running at port 4200.
