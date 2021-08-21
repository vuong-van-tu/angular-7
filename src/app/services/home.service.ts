import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Home} from '../models/home';

const API_URL = 'http://localhost:8080/api/homes';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Home[]> {
    return this.httpClient.get<Home[]>(API_URL);
  }

  getById(id): Observable<Home> {
    return this.httpClient.get<Home>(API_URL + `/${id}`);
  }

  updateHome(id: string, home: Home): Observable<Home> {
    return this.httpClient.put<Home>(API_URL + `/${id}`, home);
  }

  deleteHome(id: string) {
    return this.httpClient.delete(API_URL + `/${id}`);
  }
}
