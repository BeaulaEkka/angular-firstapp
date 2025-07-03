import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { JsonServerUser } from '../interfaces/JsonServerUser'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ApiUsersService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<JsonServerUser[]> {
    const url = 'http://localhost:3000/users'
    return this.http.get<JsonServerUser[]>(url)
  }

  saveUsers(jsonServerUser: JsonServerUser): Observable<JsonServerUser> {
    const url = 'http://localhost:3000/users'
    return this.http.post<JsonServerUser>(url, jsonServerUser)
  }
}
