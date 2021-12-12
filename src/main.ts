import Aurelia from "aurelia";
import { MyApp } from "./my-app";
import { StoreConfiguration } from "@aurelia/store-v1";

export type AppState = typeof initialState
export const initialState = {
  name: "",
  age: "",
  pets: [],
  siteEnabled: true,
};

Aurelia.register(StoreConfiguration.withInitialState(initialState))
  .app(MyApp)
  .start();
