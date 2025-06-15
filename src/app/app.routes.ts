import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { LoginComponent } from "./login/login.component";
import { PracticeComponent } from "./practice/practice.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ProfileComponent } from "./profile/profile.component";
import { UserComponent } from "./user/user.component";

export const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "login", component: LoginComponent },
  { path: "practice", component: PracticeComponent },
  { path: "user/:id", component: UserComponent },
  {
    path: "profile",
    component: ProfileComponent,
    data: { name: "beaula bee" },
  },
  { path: "**", component: PageNotFoundComponent },
];
