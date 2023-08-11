import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {TodoModel} from '../models/todo.model';
@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

 constructor(private httpClient: HttpClient) { } 

 getAll(): Observable<TodoModel[]>{
  return this.httpClient.get<any[]>('http://localhost:3001/api/todo/getall');
}
}
