//! --------------------------------------- Import
import { Page } from "../Models/page";
//! --------------------------------------- Page Home
export class Home extends Page {
  //? ------------------- Before Render
  beforeRender(html) {
    return html;
  }
  //? ------------------- After Render
  afterRender() {}
}
