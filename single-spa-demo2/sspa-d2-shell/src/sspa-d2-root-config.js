import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

// registerApplication({
//   name: "@sspa-d2/navbar",
//   app: () => System.import("@sspa-d2/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
