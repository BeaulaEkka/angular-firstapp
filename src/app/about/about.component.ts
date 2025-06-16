import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-about",
  imports: [ReactiveFormsModule],
  templateUrl: "./about.component.html",
  styleUrl: "./about.component.css",
})
export class AboutComponent {
  profileForm = new FormGroup({
    name: new FormControl("default name"),
    email: new FormControl("default@default.com"),
    password: new FormControl("default password"),
  });

  onSubmit() {
    console.log(this.profileForm.value, "Form Submitted");
  }

  setValueAbout() {
    this.profileForm.setValue({
      name: "John Doe",
      email: "john@gmail.com",
      password: "123456",
    });
  }
}
