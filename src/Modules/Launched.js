//! --------------------------------------- Import
import { routes } from "../routes";
import { Router } from "./Routes/Router";
//! --------------------------------------- Class Launched
export class Launched {
  constructor() {
    this.routes = routes;
    this.router = new Router(this.routes);
    this.handleLinks();
    this.handleFirstPage();
    this.handleHistory();
  }
  //? ------------------- handleLinks
  handleLinks() {
    document.addEventListener("click", (event) => {
      event.preventDefault();
      if (event.target.closest("A")) {
        const linkTag = event.target.closest("A");
        const address = linkTag.pathname.slice(1);
        this.router.navigateTo(address, linkTag);
      }
    });
  }
  //? ------------------- handleFirstPage
  handleFirstPage() {
    this.router.navigateTo("home");
  }
  //? ------------------- handleHistory
  handleHistory() {
    window.addEventListener("popstate", (event) => {
      this.router.navigateTo(event.state.content);
    });
  }
}
