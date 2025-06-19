import { Component, Input, input } from '@angular/core'
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

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id']
      this.name = params['name']
    })
  }
  @Input() user: string | null = ''
  @Input() city: string | null = ''
}
