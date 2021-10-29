import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgentServiceService {

  constructor(private http: HttpClient) { }

   // tslint:disable-next-line:typedef
 public getAllAgents() {
  return this.http.get('http://localhost:13001/agents/all');
  }
  public getPendingAgents() {
    return this.http.get('http://localhost:13001/agents/pending');
    }
    public deleteAgent(id){
      return this.http.get('http://localhost:13001/agents/delete/' + id);
    }
    public approveAgent(id){
      return this.http.get('http://localhost:13001/agents/approve/' + id);
    }
   
}
