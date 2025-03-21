//! --------------------------------------- Import
import { Page } from "../Models/page";
//! --------------------------------------- Page Article Details
export class ArticleDetails extends Page {
  //? ------------------- Before Render
  beforeRender(html) {
    return html;
  }
  //? ------------------- After Render
  afterRender() {}
}
