import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: "app-home",
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  constructor(private router: Router) {}
  //2nd method
  // goToProfile(name: string) {
  //   this.router.navigate(["/profile"], { queryParams: { name } });
  // }

  //3rd method

  users = [
    { id: 1, name: "beaula bee", age: 25, email: "beaula@gmail.com" },
    { id: 2, name: "john doe", age: 30, email: "john@gmail.com" },
    { id: 3, name: "jane doe", age: 28, email: "jane@gmail.com" },
    { id: 4, name: "Rina Das", age: 31, email: "rina@gmail.com" },
  ];

  name = new FormControl();
  password = new FormControl();

  displayValue() {
    console.log(this.name.value);
    console.log(this.password.value);
  }

  setValues() {
    this.name.setValue("Peter");
    this.password.setValue("123456");
  }
}
