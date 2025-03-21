//! --------------------------------------- Import
import { Page } from "../Models/page";
//! --------------------------------------- Page Store
export class Store extends Page {
  //? ------------------- Before Render
  beforeRender(html) {
    return html;
  }
  //? ------------------- After Render
  afterRender() {}
}
