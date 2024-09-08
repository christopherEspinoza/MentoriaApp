import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/app/shared/constants/enviroment';
import { createOrEditPerson } from '../model/create-or-edit.model';

@Injectable({
  providedIn: 'root'
})
export class CreateOrEditPersonService {
  
  constructor(private http: HttpClient) { }

  savePerson(persona:createOrEditPerson){
    if(persona.id == -1){
      return this.http.post<string>(enviroment.urlBase + '/persona/create-person',persona);
    }else{
      return this.http.put<string>(enviroment.urlBase + '/persona/update-person',persona);
    }

  }

  getPersonById(id:number){
    return this.http.get<createOrEditPerson>(enviroment.urlBase + '/persona/get-person-id/?id='+id);
  }
}
