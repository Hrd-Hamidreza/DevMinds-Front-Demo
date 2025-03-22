//! --------------------------------------- Import
//! --------------------------------------- Class checker
export class checker {
  constructor() {
    this.inputs = document.querySelectorAll(".signlogcard__inputs-email-input");
    this.button = document.getElementById("enter__button");
    this.errorBox = document.querySelectorAll(".signlogcard__inputs-error");
    this.clickBtn();
  }
  //? ------------------- clickBtn
  clickBtn() {
    console.log(this.errorBox);
    this.button.addEventListener("click", this.check.bind(this));
  }
  //? ------------------- check
  check(event) {
    //Todo --------- Empty Ul
    this.errorBox.forEach((error) => {
      error.innerHTML = "";
    });
    //Todo --------- Condition
    this.inputs.forEach((input) => {
      this.conditions(input);
    });
  }
  //? ------------------- Conditions
  conditions(input) {
    if (input.value === "") {
      const container = document.getElementById(input.name);
      const newLi = document.createElement("li");
      newLi.innerHTML = `The ${input.name} Box Should not be empty`;
      container.append(newLi);
    } else if (input.type === "password" && input.value.length < 8) {
      console.log("ok");
      const container = document.getElementById(input.name);
      const newLi = document.createElement("li");
      newLi.innerHTML = `The Password Should include at least 8 character`;
      container.append(newLi);
    }
  }
}
