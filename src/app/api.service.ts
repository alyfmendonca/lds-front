import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {

    
    API_URL = environment.apiUrl;

    constructor(private http: HttpClient) { }
    
    getInfra(): Observable<Infra[]>{
        return this.http.get<Infra[]>(`${this.API_URL}infra`);
    }
    
    getBase(): Observable<Base[]>{
        return this.http.get<Base[]>(`${this.API_URL}base`);
    }
    getCurso(): Observable<Curso[]>{
        return this.http.get<Curso[]>(`${this.API_URL}curso`);
    }
    getArea(): Observable<Area[]>{
        return this.http.get<Area[]>(`${this.API_URL}areas`);
    }
    getDocente(): Observable<Docente[]>{
        return this.http.get<Docente[]>(`${this.API_URL}docentes`);
    }

    postInfra(infra: Infra): Observable<Infra>{
        return this.http.post<Infra>(`${this.API_URL}infra/`, infra);
    }
    postBase(base: Base): Observable<Base>{
        return this.http.post<Base>(`${this.API_URL}base/`, base);
    }
    postCurso(curso: Curso): Observable<Curso>{
        return this.http.post<Curso>(`${this.API_URL}curso/`, curso);
    }
    postArea(area: Area): Observable<Area>{
        return this.http.post<Area>(`${this.API_URL}areas/`, area);
    }
    postDocente(docente: Docente): Observable<Docente>{
        return this.http.post<Docente>(`${this.API_URL}docentes/`, docente);
    }

}
