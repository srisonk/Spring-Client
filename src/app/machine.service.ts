import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Machine } from './machine';

@Injectable({
  providedIn: 'root'
})
export class MachineService {
  private baseUrl = 'http://localhost:8080/api/machine';

  constructor(private http: HttpClient) { }

  getMachines(): Observable<Machine[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa('user:user123')
      })
    };
    return this.http.get<Machine[]>(`${this.baseUrl}`, httpOptions);
  }  

  createMachine(machine: Machine): Observable<Machine[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa('user:user123')
      })
    };
    return this.http.post<Machine[]>(`${this.baseUrl}`, machine, httpOptions);
  }

  getMachine(id: number): Observable<Machine[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa('user:user123')
      })
    };
    return this.http.get<Machine[]>(`${this.baseUrl}/${id}`, httpOptions);
  }

  deleteMachine(id: number): Observable<Machine[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa('user:user123')
      })
    };
    return this.http.delete<Machine[]>(`${this.baseUrl}/${id}`, httpOptions);
  }

  /*createMachine(machine: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, machine);
  }*/

  updateMachine(id: number, value: any): Observable<Machine[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa('user:user123')
      })
    };
    return this.http.put<Machine[]>(`${this.baseUrl}/${id}`, value, httpOptions);
  }

  /*getMachine(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }*/

  /*deleteMachine(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }*/

  getMachineList(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa('user:user123')
      })
    };
    return this.http.get(`${this.baseUrl}`,httpOptions);
  }
}
