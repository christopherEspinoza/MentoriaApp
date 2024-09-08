import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { listPerson } from './model/listPerson.model';
import { Router } from '@angular/router';
import { ListPersonService } from './service/list-person.service';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.scss']
})
export class ListPersonComponent implements OnInit, OnDestroy, AfterViewInit{
  listPerson: listPerson[] = [];

  constructor(
    private router: Router,
    private _services: ListPersonService) {}
  
  ngOnInit(): void {
    this._services.ListPerson().subscribe({
      next: (value) =>{
          this.listPerson = value;
      },
      error:(err) => {
        this.listPerson = [];
      },
    })
    // this.listPerson = [
    //   {
    //     id: 1,
    //     nombre: 'Chris',
    //     identificacion: '0953979549',
    //     direccion: '----------',
    //     estado: 'A'
    //   }
    // ]
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
  }

  createPerson(){
    this.router.navigate(['nuevo/',-1]);
  }

  editPerson(id:number){
    this.router.navigate(['editar/',id]);
  }

  deletePerson(id:number){
    this._services.deletePerson(id).subscribe({
      next: (value) => {
        alert(value);
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate([decodeURI(this.router.url)]);
        });
      },
      error: (err) => {
        alert(err.error.text);
      },
    });
  }
}
