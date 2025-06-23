import { Component, EventEmitter, Input, Output } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  name: string | null = ''
  id: string | null = ''
  constructor(private route: ActivatedRoute) {}

  @Input() user: string | null = ''
  @Input() city: string | null = ''
  @Input() reuseUser: string = ''

  //reuse components child to parent

  cToPUsers = [
    'Hilary',
    'Mary',
    'Martha',
    'Liz',
    'Nancy',
    'Lily',
    'Jenny',
    'Lily',
    'sample',
  ]
  @Output() getUsers = new EventEmitter()
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id']
      this.name = params['name']
    })
    this.getUsers.emit(this.cToPUsers)
  }
}
