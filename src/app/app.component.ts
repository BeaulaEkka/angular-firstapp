import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { FormControl, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, HeaderComponent, ReactiveFormsModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
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
