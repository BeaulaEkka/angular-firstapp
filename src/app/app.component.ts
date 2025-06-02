import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { ProfileComponent } from "./profile/profile.component";

@Component({
  selector: "app-root",
  imports: [LoginComponent, SignupComponent, ProfileComponent, RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "Beaulas first App";
  name = "Local";
  x: number = 0;
  y: number = 0;

  handleClickEvent() {
    alert("Button Clicked");
    this.otherFunction();
  }

  otherFunction() {
    alert("Other Function");
  }

  sum(a: number, b: number) {
    console.log(a + b);
  }

  // increment() {
  //   this.x++;
  // }
  // decrement() {
  //   this.x--;
  // }

  // reset() {
  //   this.x = 0;
  // }

  handleCounter(val: string) {
    if (val == "plus") {
      this.x++;
    } else if (val == "minus") {
      this.x--;
    } else {
      this.x = 0;
    }
  }

  handleEvent(event: MouseEvent) {
    console.log("function called ", event.type);
  }
}
