# Introduction

This is a repository for a POC with module federation. The aim is to federate multiple react components within a shell application (next or angular) only on client side (probably later on server side when the need arises).

There are a lot of different setups depending on the next and react versions, the name of the repositories help understand what versions are used but feel free to check package.json files if you have any doubts.

# Getting Started

To start shell-app-next-13 for instance :

> node version should be at least 18

> `npm install` on repositories needed (depends on the shell application you want to run)

> `npm run build` in context-manager

> `npm run start:mfe` in cart-mfe, checkout-mfe and react-18-mfe

> `npm run dev` in shell-app-next-13

Shell application will be running at port 4200

To start other shell application, the process is the same but you might need to start others MFEs. To known which MFEs you should start, check the next config to see which MFEs are remotely loaded. For instance for shell-app-next-13 :

```
remotes: {
    checkout: `checkoutMFE@http://localhost:3001/client/remoteEntry.js`,
    cart: `cartMFE@http://localhost:3002/client/remoteEntry.js`,
    testRemote: `test18MFE@http://localhost:3004/client/remoteEntry.js`,
},
```

# Remaining issues / questions

The target use case here is the "shell-app-next-13" with next 13 and react 18 on next and all MFEs. If possible, we would like to only focus on this use case. It is possible to have MFEs react version ahead of the react version within the next application, but it is not ideal. Are you confident that you will soon (by january ?) be able to run the 18 react version ?

If you run shell application using next 12, the module federation package used is "@module-federation/nextjs-mf": "^7.0.8". This version has an issue in **dev mode** only during hot reload : [Cannot read properties of undefined (reading ‘updateHash’)](https://github.com/module-federation/universe/issues/1102#issuecomment-1623754040)
When that occurs, you must restart the next build.
This issue is fixed in the version 8 of @module-federation/nextjs-mf which can be used with next 13 only.

_NB : if really we have to stick with next 12, we will spend more time trying to fix this issue._

If you run shell application usinf next 13, the module federation package used is "@module-federation/nextjs-mf": "^8.0.1-4". Running this shell application might cause an unconsistent issue during navigation : [Container initialization failed as it has already been initialized with a different share scope](https://github.com/module-federation/module-federation-examples/issues/1142). When that occurs, the application reloads automatically and everything works fine.

Regarding this issue, we are still working on it and we are also going to re-open the issue on github and provide a repository to reproduce. It would be helpful to test on your side and let us know if you have the same behaviour.

Finally, we sometimes use react.lazy or sometimes use dynamic from next to load the components. The module federation recommends to use React.lazy but does implement some exemples using dynamic, and in our case it works in many cases in addition to being more developers friendly (no need to use effect to run only on client side).
Same thing, it would be helpful to have feedback from you regarding both. We are also going to ask around regarding this usage in the issue that we will raise on github.
