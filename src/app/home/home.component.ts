import { Component } from "@angular/core";
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: "app-home",
  imports: [RouterLink],
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
}
