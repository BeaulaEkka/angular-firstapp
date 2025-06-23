import { Component, Input } from '@angular/core'
import { RouterLink, RouterOutlet } from '@angular/router'
import { HeaderComponent } from './header/header.component'
import { FormControl, ReactiveFormsModule } from '@angular/forms'
import { UserComponent } from './user/user.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ReactiveFormsModule, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  user = 'Bruce'
  cToPUsers: string[] = []

  onUserChange(user: string) {
    this.user = user
  }

  //reuseComponents
  reuseUsers = ['Peter', 'Bruce', 'Tony', 'Steve', 'Natasha', 'Clint', 'Mary']

  handleCToPUsers(cToPUsers: string[]) {
    console.log('Received user from child:', cToPUsers)
  }
}
