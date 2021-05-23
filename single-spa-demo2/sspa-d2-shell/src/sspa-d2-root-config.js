import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@sspa-d2/tasks-list",
  app: () => System.import("@sspa-d2/sspa-d2-tasks-list"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@sspa-d2/task-edit",
  app: () => System.import("@sspa-d2/sspa-d2-task-edit"),
  activeWhen: ["/"],
});

// Before start() is called, applications will be loaded, but not bootstrapped (initialized)/mounted/unmounted.
// This start() gives you the chance for any preparations and overall performance.

start({
  urlRerouteOnly: true,
});
