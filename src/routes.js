//! --------------------------------------- Import
import { Home } from "./Modules/Pages/Home";
import { Login } from "./Modules/Pages/Login";
import { Articles } from "./Modules/Pages/Articles";
import { ArticleDetails } from "./Modules/Pages/ArticleDetails";
import { CheckLogin } from "./Modules/Pages/CheckLogin";
import { CourseDetails } from "./Modules/Pages/CourseDetails";
import { ForgottenPassword } from "./Modules/Pages/ForgottenPassword";
import { Payment } from "./Modules/Pages/Payment";
import { Register } from "./Modules/Pages/Register";
import { ShopCart } from "./Modules/Pages/ShopCart";
import { SoftSkills } from "./Modules/Pages/SoftSkills";
import { Store } from "./Modules/Pages/Store";
import { Courses } from "./Modules/Pages/Courses";
//! --------------------------------------- Variable Routes
export const routes = [
  new Home("home"),
  new Login("login"),
  new Articles("articles"),
  new ArticleDetails("articledetails"),
  new CheckLogin("checklogin"),
  new CourseDetails("coursedetails"),
  new Courses("courses"),
  new ForgottenPassword("forgottenpassword"),
  new Payment("payment"),
  new Register("register"),
  new ShopCart("shopcart"),
  new SoftSkills("softskills"),
  new Store("store"),
];
