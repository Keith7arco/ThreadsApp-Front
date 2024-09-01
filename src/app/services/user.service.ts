import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { enviroments } from '../../enviroment';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http = inject(HttpClient);
  platformId = inject(PLATFORM_ID);
  localStorageKey = 'threads_user';
  createUser(name:string, img:string = 'https://d113wk4ga3f0l0.cloudfront.net/c?o=eJyVkE9rwzAMxb-LYLfGTpOmS3LtoTA6Bu1hR2MSNXHzx8ZyEpbS7z4HyrIdJ9DhPQn0e7oD6cEWKAbbQg61c4ZyzilmspOz7uVErNAd981aVdWOnC4apjpZIbHBtFqWxIzV5VA4pXveYamkUA47YSyOCif67SWv2TaO-XYf7XbhPs22wflSSbwd3j_e5vMwH6fPutClPDU8XCoSp0ugCt0HYcpupoINNPjlSa_J9RpnXk6qdDXkaRZuoMYF8Sk8stHkr0J-h__Fk0To_sSapEPbSdsQX_fEj8tMX60skCQvsNI8ZalItyMKg_7fvfejZAMWSc0oKitH5ZZcBz9CC4_HN4sgja0=&s=98449b61c298785137ccf2cf8e23077d443b96a5'){
    return this.http.post<User>(`${enviroments.apiBaseUrl}/users`,{
      name,
      img
    });
  }

  saveUserStorage(user: User) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.localStorageKey, JSON.stringify(user));
    }
  }

  getUserFromStorage() {
    if (isPlatformBrowser(this.platformId)) {
      const user = localStorage.getItem(this.localStorageKey);
      return user ? JSON.parse(user) as User : null;
    }
    return null;
  }
}
