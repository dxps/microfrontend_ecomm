import { registerApplication, start } from "single-spa";

const app = {

  // The mount lifecycle function is called every time the application is added to the DOM.
  async mount(props) {
    console.log("App is mounting", props);
    // For single-spa applications, the dom element container is selected by the application itself.
    // It is conventional to use single-spa-application:app-name as the ID of the container.
    // It's highly recommended to use this convention, as single-spa-layout single-spa-react,
    // single-spa-vue, single-spa-angular, and other libraries default to using it.
    const appElement = document.getElementById(
      "single-spa-application:vanilla-app"
    );

    // Since this example does not use a framework, we use browser DOM apis to create the button
    const button = document.createElement("button");
    button.textContent = `Your ${props.adjective} MFE! Click to show the lovely dog`;
    button.addEventListener("click", () => {
      const image = document.createElement("img");
      image.setAttribute("src", "https://images.dog.ceo/breeds/finnish-lapphund/mochilamvan.jpg");
      appElement.appendChild(image);
  });

    // Each single-spa application should append ("mount") to its dom element container
    appElement.appendChild(button);
  },

  // The unmount lifecycle is called every time the application is removed from the DOM.
  async unmount(props) {
    console.log("App is unmounting", props);
    const appElement = document.getElementById("single-spa-application:vanilla-app");
    appElement.innerHTML = "";
  },

};


// Register your microfrontend with single-spa.
registerApplication({

    // The name of your microfrontend
    name: "vanilla-app",
  
    // The application object
    app,
    // Alternatively, you can provide a "loading function"
    // A loading function returns a promise that resolves with the application object.
    // app: () => import('./file-with-app.js'),
  
    // The list of routes the application is mounted (active) for.
    activeWhen: ["/"],
    // If you uncomment this, run singleSpaNavigate('/settings') in the browser console
    // to watch the app start out inactive and then mount.
    // activeWhen: ['/settings', '/dashboard']
  
    // Data to pass to the application.
    customProps: {
      adjective: "first",
      // You can pass in functions (or anything else) as well
      // getAuthToken() {
      //   return 'asdf7sf789sd7f9sd8f9sdfsdf9s'
      // }
    },
});
  

// Before start() is called, single-spa will start loading the applications,
// but will not mount them. This is to let you delay mounting until you know
// whether the user is logged in, important data is fetched, etc.
// An alternative to delaying start() is to have each app wait for those things individually.
start();

