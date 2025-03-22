//! --------------------------------------- Import
import { checker } from "../Components/Checker";
import { Page } from "../Models/page";
//! --------------------------------------- Page Forgotten Password
export class ForgottenPassword extends Page {
  //? ------------------- Before Render
  beforeRender(html) {
    //Todo ------------------- Checker Class
    new checker();
    //Todo ------------------- Return HTML
    return html;
  }
  //? ------------------- After Render
  afterRender() {}
}
