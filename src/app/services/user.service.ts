import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl: string = "http://localhost:3000/api/users";
  constructor(private httpClient: HttpClient) { }

  getAllUsers() {
    return this.httpClient.get<{ usersTab: any }>(this.userUrl);
  }
  getUserById(id: number) {
    return this.httpClient.get(`${this.userUrl}/${id}`);
  }
  deleteUser(id: number) {
    return this.httpClient.delete(`${this.userUrl}/${id}`);
  }
  updateUser(newUser: any) {
    return this.httpClient.put(this.userUrl, newUser);
  }
  signup(user: any, photo: File) {
    let fData = new FormData();
    fData.append("img", photo);
    fData.append("firstName", user.firstName);
    fData.append("lastName", user.lastName);
    fData.append("email", user.email);
    fData.append("password", user.password);
    fData.append("tel", user.tel);
    fData.append("role", user.role);
    fData.append("status", user.status);
    return this.httpClient.post<{ msg: string }>(this.userUrl, fData);
  }
  login(user: any) {
    return this.httpClient.post<{ msg: string, user: string }>(`${this.userUrl}/login`, user)
  }

  updateStatus(id: any) {
    return this.httpClient.put(this.userUrl + "/updateStatus", { userId: id });
  }
}
