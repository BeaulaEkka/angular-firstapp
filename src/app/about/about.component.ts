import { NgIf } from "@angular/common";
import { Component } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-about",
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: "./about.component.html",
  styleUrl: "./about.component.css",
})
export class AboutComponent {
  profileForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [
      Validators.required,
      Validators.email,
      Validators.maxLength(50),
      Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"),
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
    ]),
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

  get name() {
    return this.profileForm.get("name");
  }
  get email() {
    return this.profileForm.get("email");
  }
  get password() {
    return this.profileForm.get("password");
  }
}
