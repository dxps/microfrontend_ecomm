import Vue from "vue";
import singleSpaVue from "single-spa-vue";
import { registerApplication, start } from "single-spa";
import Root from "./Root.vue";

const app = singleSpaVue({
  Vue,
  appOptions: {
    render(h) {
      return h(Root, {
        props: {
          imageURL: this.imageURL,
          widthPercentage: this.widthPercentage,
        },
      });
    },
  },
});

registerApplication({
  name: "vue-app",
  app,
  activeWhen: ["/"],
  customProps: {
    imageURL: "https://images.dog.ceo/breeds/hound-plott/hhh_plott002.JPG",
    widthPercentage: "99%"
  },
});

start();
