import { Component, Input } from '@angular/core'
import { RouterLink, RouterOutlet } from '@angular/router'
import { HeaderComponent } from './header/header.component'
import { FormControl, ReactiveFormsModule } from '@angular/forms'
import { UserComponent } from './user/user.component'
import { NgFor } from '@angular/common'

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    ReactiveFormsModule,
    UserComponent,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  user = 'Bruce'

  onUserChange(user: string) {
    this.user = user
  }

  //reuseComponents
  reuseUser = ['Peter', 'Bruce', 'Tony', 'Steve', 'Natasha', 'Clint', 'Mary']
}
