import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { JsonServerUser } from '../interfaces/JsonServerUser'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ApiUsersService {
  url = 'http://localhost:3000/users'

  constructor(private http: HttpClient) {}

  getUsers(): Observable<JsonServerUser[]> {
    return this.http.get<JsonServerUser[]>(this.url)
  }

  // saveUsers(jsonServerUser: JsonServerUser): Observable<JsonServerUser> {
  //   const url = 'http://localhost:3000/users'
  //   return this.http.post<JsonServerUser>(url, jsonServerUser)
  // }

  saveUsers(jsonServerUser: JsonServerUser): Observable<JsonServerUser> {
    return this.http.post<JsonServerUser>(this.url, jsonServerUser)
  }

  deleteUser(id: string): Observable<JsonServerUser> {
    return this.http.delete<JsonServerUser>(`${this.url}/${id}`)
  }

  updateUser(jsonServerUser: JsonServerUser): Observable<JsonServerUser> {
    return this.http.put<JsonServerUser>(
      `${this.url}/${jsonServerUser.id}`,
      jsonServerUser
    )
  }

  getSelectedUser(id: string): Observable<JsonServerUser> {
    return this.http.get<JsonServerUser>(`${this.url}/${id}`)
  }
}
