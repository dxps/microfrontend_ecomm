import { registerApplication, start } from "single-spa";

registerApplication({
    name: "react-app",
    app: window.reactApp,
    activeWhen: [ "/" ],
    customProps: {
        name: "My React MFE"
    }
});

registerApplication({
    name: "vue-app",
    app: window.vueApp,
    activeWhen: [ "/" ],
    customProps: {
        appName: "My Vue MFE"
    }
});

// Start the single-spa.
start();
