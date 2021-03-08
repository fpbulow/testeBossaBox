import { HttpClient } from '@angular/common/http';
import { Tool } from './tool.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolService {

  baseUrl = "http://localhost:3000/tools"

  constructor(private http: HttpClient) { }

  showOnConsole(msg: string): void {
    console.log(msg)
    alert(msg);
  }

  read(): Observable<Tool[]> {
    return this.http.get<Tool[]>(this.baseUrl)
  }

  readById(id: number): Observable<Tool> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Tool>(url)
  }

  readByIdDelete(id: number): Observable<Tool> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.http.get<Tool>(url)
  }

  create(tool: Tool): Observable<Tool> {
    return this.http.post<Tool>(this.baseUrl, tool)
  }

  delete(id: number): Observable<Tool> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Tool>(url);
  }
}
