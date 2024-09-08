import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { enviroment } from 'src/app/shared/constants/enviroment';
import { listPerson } from '../model/listPerson.model';

@Injectable({
  providedIn: 'root'
})
export class ListPersonService {

  constructor(private http: HttpClient) { }

  deletePerson(id:number){
    return this.http.delete<string>(enviroment.urlBase + '/persona/delete-person/?id='+id);
  }

  ListPerson(){
    return this.http.get<listPerson[]>(enviroment.urlBase + '/persona/list-person');
  }
}
