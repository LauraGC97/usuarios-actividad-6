import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private httpClient = inject (HttpClient);
  private baseUrl : string = 'https://peticiones.online/api/users/';
}
