import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { campana } from '../../interfaces/campana.interface';
import { email } from '../../interfaces/email.interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceCamapanaService {

  private apiUrl = 'http://localhost:3020/api/cam/';

  constructor(private http: HttpClient) { }

  getCam(): Observable<any> {
    return this.http.get(this.apiUrl + 'getCampanas');
  }

  editarCampana(campana: campana) {
    return this.http.patch(`${this.apiUrl}updateCampana/${campana.id_campana}`, campana);
  }

  crearCampana(campana: campana): Observable<any> {
    return this.http.post(`${this.apiUrl}createCampana`, campana);
  }

  crearEmailCampana(email: email): Observable<any> {
    return this.http.post(`${this.apiUrl}createEmailCampana`, email);
  }

}


