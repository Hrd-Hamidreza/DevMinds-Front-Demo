//! --------------------------------------- Import
import { Page } from "../Models/page";
//! --------------------------------------- Page Articles
export class Articles extends Page {
  //? ------------------- Before Render
  beforeRender(html) {
    return html;
  }
  //? ------------------- After Render
  afterRender() {}
}
