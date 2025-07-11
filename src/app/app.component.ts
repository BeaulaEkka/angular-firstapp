import {
  afterNextRender,
  afterRender,
  Component,
  Input,
  ViewChild,
} from '@angular/core'
import { RouterLink, RouterOutlet } from '@angular/router'
import { HeaderComponent } from './header/header.component'
import {
  FormControl,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
} from '@angular/forms'
import { UserComponent } from './user/user.component'
import { CurrencyConverterPipe } from './pipe/currency-converter.pipe'
import { CurrencyPipe, DatePipe, NgIf, UpperCasePipe } from '@angular/common'
import { ProductService } from './services/product.service'
import { ApiUsersService } from './apiServices/api-users.service'
import { JsonServerUser } from './interfaces/JsonServerUser'

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
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  @ViewChild('user') UserComponent: any
  user = 'Bruce'
  cToPUsers: string[] = []
  Counter = 0 //destroy cycle
  productList: any
  jsonServerUsers: JsonServerUser[] = []
  selectedUser: JsonServerUser | undefined

  productData:
    | {
        name: string
        price: number
        company: string
      }[]
    | undefined

  constructor(
    private productService: ProductService,
    private ApiUsersService: ApiUsersService
  ) {
    afterRender(() => {
      console.log('This is after render', this.UserComponent.Counter)
    })
    afterNextRender(() => {
      console.log('This is after next render')
    })
  }

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

  //services
  getProductData() {
    this.productData = this.productService.getProductData()
    console.log(this.productData)
  }

  //API HTTP
  ngOnInit() {
    this.productService.getProductListWithHttp().subscribe((data: any) => {
      this.productList = data.products
      console.log('data from ngOnInit', data)
    }),
      this.ApiUsersService.getUsers().subscribe((data: JsonServerUser[]) => {
        console.log('data from ngOnInit for apiuserservice', data)
        this.jsonServerUsers = data
      }),
      this.getUser()
  }
  ///forms
  getUser() {
    this.ApiUsersService.getUsers().subscribe((data: JsonServerUser[]) => {
      console.log('data from ngOnInit for apiuserservice', data)
      this.jsonServerUsers = data
    })
  }

  addUser(jsonServerUser: JsonServerUser) {
    if (!this.selectedUser) {
      this.ApiUsersService.saveUsers(jsonServerUser).subscribe(
        (data: JsonServerUser) => {
          console.log('userForm JsonServerUser:', jsonServerUser)
          if (data) {
            this.getUser()
          }
        }
      )
    } else {
      const userData={...jsonServerUser, id: this.selectedUser.id}
      this.ApiUsersService.updateUser(jsonServerUser).subscribe(
        (data: JsonServerUser) => {
          console.log('userForm JsonServerUser updater:', jsonServerUser)
          if (data) {
            this.getUser()
          }
        }
      )
    }
  }

  deleteUser(id: string) {
    this.ApiUsersService.deleteUser(id).subscribe((data: JsonServerUser) => {
      console.log('data', data)
      if (data) {
        this.getUser()
      }
    })
  }

  selectUser(id: string) {
    this.ApiUsersService.getSelectedUser(id).subscribe(
      (data: JsonServerUser) => {
        console.log('data', data)
        this.selectedUser = data
      }
    )
  }
}
