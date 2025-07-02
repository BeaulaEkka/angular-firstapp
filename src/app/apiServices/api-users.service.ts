import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { JsonServerUser } from '../interfaces/JsonServerUser'

@Injectable({
  providedIn: 'root',
})
export class ApiUsersService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<JsonServerUser[]> {
    const url = 'http://localhost:3000/users'
    return this.http.get<JsonServerUser[]>(url)
  }
}
