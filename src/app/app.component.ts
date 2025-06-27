import { Component, Input } from '@angular/core'
import { RouterLink, RouterOutlet } from '@angular/router'
import { HeaderComponent } from './header/header.component'
import { FormControl, ReactiveFormsModule } from '@angular/forms'
import { UserComponent } from './user/user.component'
import { CurrencyConverterPipe } from './pipe/currency-converter.pipe'
import { CurrencyPipe, DatePipe, NgIf, UpperCasePipe } from '@angular/common'

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    ReactiveFormsModule,
    UserComponent,
    CurrencyConverterPipe,
    DatePipe,
    CurrencyPipe,
    UpperCasePipe,
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  user = 'Bruce'
  cToPUsers: string[] = []
  Counter = 0 //destroy cycle

  onUserChange(user: string) {
    this.user = user
  }

  //reuseComponents
  reuseUsers = ['Peter', 'Bruce', 'Tony', 'Steve', 'Natasha', 'Clint', 'Mary']

  handleCToPUsers(cToPUsers: string[]) {
    console.log('Received user from child:', cToPUsers)
    this.cToPUsers = cToPUsers
  }
  amount = 10

  birthday = new Date()
  price = 123.45
  name = 'john doe'

  //destroy cycle

  updateCounter() {
    this.Counter++
  }
}
