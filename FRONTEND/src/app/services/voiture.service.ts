import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class VoitureService {
  URL_PROD = environment.backend_url;
  url = '/voiture/';
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.URL_PROD + this.url + 'getAll');
  }

  addVoiture(voiture: any): Observable<any> {
    return this.http.post<any>(this.URL_PROD + this.url + 'saveOne', voiture);
  }
  getDisponnibles():Observable<any> {
      return this.http.get(this.URL_PROD+this.url+'getDisponnible');
  }
  getLoues():Observable<any> {
    return this.http.get(this.URL_PROD+this.url+'getOccupe');
}
}