//! --------------------------------------- Import
//! --------------------------------------- Class Router
export class Router {
  constructor(pages) {
    this.pages = pages;
  }
  //? ------------------- navigateTo
  navigateTo(address, linkTag) {
    const finalPage = this.pages.find((pages) => pages.address === address);

    finalPage.renderContent(finalPage.address);

    if (
      finalPage.address !== "home" &&
      history.state.content !== finalPage.address
    ) {
      history.pushState({ content: finalPage.address }, "", finalPage.address);
    } else {
      history.replaceState(
        { content: finalPage.address },
        "",
        finalPage.address
      );
    }
  }
}
