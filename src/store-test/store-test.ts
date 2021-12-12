import { ICustomElementViewModel, inject } from "aurelia";
import { dispatchify, Store } from "@aurelia/store-v1";
import { AppState } from "../main";

const logout = (currentState: AppState, param1?: number, param2?: number) => {
  /* prettier-ignore */ console.log('TCL: logout -> param1', param1)
  return Object.assign({}, currentState, { foo: param1 + param2 });
};

@inject(Store)
export class StoreTest implements ICustomElementViewModel {
  logout = dispatchify(logout);

  constructor(private store: Store<AppState>) {
    this.store.registerAction("logout", logout);
  }

  logoutClick() {
    console.log("LOG");
    this.logout();
  }
}
