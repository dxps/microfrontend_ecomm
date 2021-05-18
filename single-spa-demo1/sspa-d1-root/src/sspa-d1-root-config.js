import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@sspa-d1/sspa-d1-header",
  app: () => System.import("@sspa-d1/sspa-d1-header"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@sspa-d1/sspa-d1-home",
  app: () => System.import("@sspa-d1/sspa-d1-home"),
  activeWhen: ["/home"],
});

registerApplication({
  name: "@sspa-d1/sspa-d1-testpage",
  app: () => System.import("@sspa-d1/sspa-d1-testpage"),
  activeWhen: ["/testpage"],
});

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

// registerApplication({
//   name: "@sspa-d1/navbar",
//   app: () => System.import("@sspa-d1/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
