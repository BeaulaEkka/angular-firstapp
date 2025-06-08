import {
  Component,
  computed,
  effect,
  Signal,
  signal,
  WritableSignal,
} from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { ProfileComponent } from "./profile/profile.component";

@Component({
  selector: "app-root",
  imports: [LoginComponent, SignupComponent, ProfileComponent],
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

  handleEvent(event: Event) {
    console.log("function called ", event.type);
    console.log("value ", (event.target as HTMLInputElement).value);
  }

  name1: string = "";
  displayName: string = "";
  email: string = "";
  display = true;
  toggleDiv = true;
  color = 100;
  switchcolor = "yellow";
  users = [
    "john",
    "jane",
    "mary",
    "peter",
    "sam",
    "james",
    "rachel",
    "ron",
    "lisa",
    "mike",
  ];
  students = [
    { name: "john", age: 20, email: "john@gmail.com" },
    { name: "jane", age: 21, email: "jane@gmail.com" },
    { name: "mary", age: 22, email: "mary@gmail.com" },
    { name: "peter", age: 23, email: "peter@gmail.com" },
    { name: "sam", age: 24, email: "sam@gmail.com" },
    { name: "james", age: 25, email: "james@gmail.com" },
    { name: "rachel", age: 26, email: "rachel@gmail.com" },
  ];
  count = signal(10);
  a = 20;

  s = signal(10);
  t = signal(20);
  z = computed(() => this.s() + this.t());

  constructor() {
    effect(() => {
      console.log("count ", this.count());
    });
  }

  //coumputed sgnals and writable signals
  // computed signals are used to derive values from other signals
  // writable signals are used to create signals that can be updated
  // signals are reactive and will update the view automatically when their value changes

  data: WritableSignal<number> = signal<number>(10);
  // count: Signal<Number> = computed(() => 200);

  updateSignal() {
    // this.data.set("hello");
    this.data.update((val) => val + 1);
  }

  // computed signal
  showValue() {
    console.log("computed value ", this.z());
    this.t.set(100);
    console.log("after change", this.z());
  }

  updateX() {
    this.t.set(200);
  }

  getName(event: Event) {
    console.log("event ", event);
    const val = (event.target as HTMLInputElement).value;

    this.name1 = val;
  }
  showName() {
    this.displayName = this.name1;
  }

  setName() {
    this.name1 = "sam";
  }
  getEmail(val: string) {
    console.log("email", val);
    this.email = val;
  }
  setEmail() {
    this.email = "default@gmail.com";
  }

  hide() {
    this.display = !this.display;
  }

  toggleTwo() {
    this.toggleDiv = !this.toggleDiv;
  }

  handleColor(val: number) {
    this.color = val;
  }

  handleColorInput(event: Event) {
    this.color = parseInt((event.target as HTMLInputElement).value);
  }

  handleSwitchColor(val: string) {
    this.switchcolor = val;
  }

  handleSwitchColorChange(event: Event) {
    this.switchcolor = (event.target as HTMLInputElement).value;
  }

  getStudentName(name: string) {
    console.log("name", name);
  }
}
