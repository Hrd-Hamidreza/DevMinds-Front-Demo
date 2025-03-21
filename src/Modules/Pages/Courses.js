//! --------------------------------------- Import
import { Page } from "../Models/page";
//! --------------------------------------- Page Courses
export class Courses extends Page {
  //? ------------------- Before Render
  beforeRender(html) {
    return html;
  }
  //? ------------------- After Render
  afterRender() {}
}
