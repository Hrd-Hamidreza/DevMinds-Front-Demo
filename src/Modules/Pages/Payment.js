//! --------------------------------------- Import
import { Page } from "../Models/page";
//! --------------------------------------- Page Payment
export class Payment extends Page {
  //? ------------------- Before Render
  beforeRender(html) {
    return html;
  }
  //? ------------------- After Render
  afterRender() {}
}
