import {
  Component,
  computed,
  effect,
  Signal,
  signal,
  WritableSignal,
} from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { ProfileComponent } from "./profile/profile.component";
import { FormsModule } from "@angular/forms";
import {
  NgIf,
  NgFor,
  NgSwitchCase,
  NgSwitch,
  NgSwitchDefault,
} from "@angular/common";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: "app-home",
  imports: [],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {}
