//! --------------------------------------- Import
//! --------------------------------------- Class Page
export class Page {
  constructor(address) {
    this.address = address;
  }
  //? ------------------- Before Render
  renderContent(page) {
    const main = document.getElementById("main");
    fetch(`../pages/${page + ".html"}`)
      .then((response) => response.text())
      .then((html) => {
        main.innerHTML = html;
        return this.beforeRender(html);
      })
      .catch((error) => {
        alert(`There seems to be some problem with the error:${error}`);
      });
  }
  //? ------------------- Before Render
  beforeRender(html) {
    return html;
  }
  //? ------------------- After Render
  afterRender() {}
}
