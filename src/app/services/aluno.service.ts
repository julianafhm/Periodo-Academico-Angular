import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { AlunoListar } from '../models/Aluno';
import { Observable } from 'rxjs';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  ApiUrl = environment.UrlApi;

  constructor(private http : HttpClient) { }

  GetAlunos(): Observable<Response<AlunoListar[]>>{
    return this.http.get<Response<AlunoListar[]>>(this.ApiUrl);
  }
}
