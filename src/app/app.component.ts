import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

@Component({
  selector: "app-root",
  imports: [LoginComponent, SignupComponent, RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "Beaulas first App";
  name = "Local";

  x = 4;
  y = 5;
}
