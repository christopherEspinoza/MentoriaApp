import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { createOrEditPerson } from './model/create-or-edit.model';
import { CreateOrEditPersonService } from './service/create-or-edit-person.service';

@Component({
  selector: 'app-create-or-edit-persona',
  templateUrl: './create-or-edit-persona.component.html',
  styleUrls: ['./create-or-edit-persona.component.scss']
})
export class CreateOrEditPersonaComponent implements OnInit, OnDestroy, AfterViewInit{
  personId:number = -1;
  title: string = '';
  persona:createOrEditPerson = new createOrEditPerson();
  identificacion:any='';

  constructor(private route: ActivatedRoute,
    private _services:CreateOrEditPersonService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.personId = Number(this.route.snapshot.paramMap.get('id'));
    if(this.personId > -1){
      this.title = 'Editar persona';
      this._services.getPersonById(this.personId).subscribe({
        next: (value) => {
          this.persona = value;
        },
        error: (err) => {
          alert('Error durante la consulta de la persona: '+this.personId+'\n'+
            'motivo: '+err.error.text
          )
          this.router.navigate(['/']);
        },
      })
    }else{
      this.title = 'Nueva persona';
    }
  }

  ngAfterViewInit(): void {
    
  }
  ngOnDestroy(): void {
    
  }

  validateData(){
    if(this.persona.identificacion == ''){
      alert('La identificacion de la persona no puede estar vacio')
      return false;
    }
    if(this.persona.nombre == ''){
      alert('El nombre de la persona no puede estar vacio')
      return false;
    }
    if(this.persona.direccion == ''){
      alert('La dirección de la persona no puede estar vacio')
      return false;
    }
    return true;
  }

  savePersona(){
    let valid = this.validateData();
    if(!valid){
      return;
    }

    this.persona.id = this.personId;
    this._services.savePerson(this.persona).subscribe({
      next: (value) => {
        alert(value);
        this.router.navigate(['/']);
      },
      error: (err) =>{
        alert(err.error.text);
        this.router.navigate(['/']);
      },
    })
  }
  
  clearData(){
    this.persona = new createOrEditPerson();
  }
}


