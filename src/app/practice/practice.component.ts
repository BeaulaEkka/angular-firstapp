import {
  Component,
  computed,
  effect,
  signal,
  WritableSignal,
} from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { FormsModule } from "@angular/forms";
import {
  NgIf,
  NgFor,
  NgSwitchCase,
  NgSwitch,
  NgSwitchDefault,
} from "@angular/common";
import { LoginComponent } from "../login/login.component";

@Component({
  selector: "app-practice",
  imports: [
    LoginComponent,

    FormsModule,
    NgIf,
    NgFor,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    RouterOutlet,
  ],
  templateUrl: "./practice.component.html",
  styleUrl: "./practice.component.css",
})
export class PracticeComponent {
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

  //todo list
  task = "";
  zoom = true;
  taskList: { id: number; task: string }[] = [];
  addTask() {
    this.taskList.push({ id: this.taskList.length + 1, task: this.task });
    this.task = "";
  }

  deleteTask(taskId: number) {
    this.taskList = this.taskList.filter((task) => task.id !== taskId);
  }

  //effect
  userName = signal("John Doe");
  displayHeading = false;

  constructor() {
    effect(() => {
      console.log("count ", this.count());
      console.log("effect called ", this.userName());
      if (this.count() == 2) {
        this.displayHeading = true;
      } else {
        this.displayHeading = false;
      }
    });
  }

  //dynamic styling
  redColor = "blue";
  fontSize = "80";
  fontWeight = "bold";
  headingSize = "40px";
  headingSizeBig = "80px";

  toggleValue() {
    this.displayHeading = !this.displayHeading;
  }

  updateHeadingSize() {
    this.zoom = !this.zoom;
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

  // event binding
  nameBinding = "Beaula";

  changeName(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.nameBinding = val;
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

  startCounting() {
    {
      this.count.set(this.count() + 1);
    }
  }
  startSubtracting() {
    this.count.set(this.count() - 1);
  }

  //Directives
  showHide = false;

  //ngFor
  studentList = [
    "john, jane, mary, peter, sam, james, rachel, ron, lisa, mike",
  ];

  studentData = [
    { name: "john", age: 20, email: "john@gmail.com" },
    { name: "jane", age: 21, email: "jane@gmail.com" },
    { name: "mary", age: 22, email: "mary@gmail.com" },
    { name: "peter", age: 23, email: "peter@gmail.com" },
    { name: "sam", age: 24, email: "sam@gmail.com" },
    { name: "james", age: 25, email: "james@gmail.com" },
    { name: "rachel", age: 26, email: "rachel@gmail.com" },
    { name: "ron", age: 27, email: "ron@gmail.com" },
    { name: "lisa", age: 28, email: "lisa@gmail.com" },
  ];

  //ngIf
  showNgIf = true;
  login = false;
  block = 0;

  updateblockHeading() {
    this.block++;
  }

  //ngSwitch
  colorSwitch = "black";

  changeColor(val: string) {
    this.colorSwitch = val;
  }
}
