import { Construction } from 'src/app/model/construction';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConstructionService {
  apiUrl: string = environment.apiUrl;
  endPoint: string = 'constructions';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Construction[]> {
    return this.http.get<Construction[]>(`${this.apiUrl}${this.endPoint}`);
  }

  get(id: number): Observable<Construction> {
    return this.http.get<Construction>(`${this.apiUrl}${this.endPoint}/${id}`);
  }

  create(construction: Construction): Observable<Construction> {
    return this.http.post<Construction>(
      `${this.apiUrl}${this.endPoint}/${construction.id}`,
      construction
    );
  }

  update(construction: Construction): Observable<Construction> {
    return this.http.patch<Construction>(
      `${this.apiUrl}${this.endPoint}/${construction.id}`,
      construction
    );
  }

  delete(id: number): Observable<Construction> {
    return this.http.delete<Construction>(
      `${this.apiUrl}${this.endPoint}/${id}`
    );
  }
}
