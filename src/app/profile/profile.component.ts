import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-profile",
  imports: [],
  templateUrl: "./profile.component.html",
  styleUrl: "./profile.component.css",
})
export class ProfileComponent {
  userName: string | null = "";
  //regisyer active route

  constructor(private route: ActivatedRoute) {}
  //ngononinit lifee cycle hook
  ngOnInit() {
    //   this.userName = this.route.snapshot.paramMap.get("name");
    //   console.log(this.userName);
    // }

    this.route.queryParams.subscribe((params) => {
      console.log(params["name"]);
    });
  }
}
