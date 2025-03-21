//! --------------------------------------- Import
import { Page } from "../Models/page";
//! --------------------------------------- Page Register
export class Register extends Page {
  //? ------------------- Before Render
  beforeRender(html) {
    return html;
  }
  //? ------------------- After Render
  afterRender() {}
}
