import { Component, OnInit } from '@angular/core';
import { HomeaService } from '../services/home.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

export interface MaestroModel {
  id_maestro?: number;
  nombre: string;
  apellido: string;
  titulo: string;
}


@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public formMaestro!: FormGroup;

  columns_table_maestro: string[] = ['ID', 'NOMBRE', 'APELLIDO', 'TITULO', 'ACCION'];

  MAESTROS_LIST: MaestroModel[] = []

  state_button = true;

  id_maestro: any = 0;

  constructor(
    private homeService: HomeaService,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private router : Router
  ) { }
  ngOnInit(): void {
    // console.log("hola estoy iniciando el componente");
    // this.formMaestro = this.formBuilder.group({
    //   nombre: ['', Validators.required],
    //   apellido: [''],
    //   titulo: ['']
    // })

    // this.getMaestrosAPI()


  }

  logout(){
    localStorage.removeItem("count_logged");
    this.router.navigate(['login'])
  }

  // async getMaestrosAPI() {
  //   let api_get_response: MaestroModel[] = await this.homeService.getMaestros()
  //   this.MAESTROS_LIST = api_get_response;
  //   console.log(this.MAESTROS_LIST);

  // }

  // async saveMaestro() {

  //   let maestro_new = {
  //     nombre: this.formMaestro.get("nombre")?.value,
  //     apellido: this.formMaestro.get("apellido")?.value,
  //     titulo: this.formMaestro.get("titulo")?.value
  //   }

  //   let save_maestro_api = await this.homeService.saveMaestro(maestro_new)

  //   this.snackAction(save_maestro_api, 'SAVE')

  // }

  // getByID(data: MaestroModel) {
  //   this.state_button = false
  //   this.id_maestro = data.id_maestro;
  //   this.formMaestro.get("nombre")?.setValue(data.nombre);
  //   this.formMaestro.get("apellido")?.setValue(data.apellido);
  //   this.formMaestro.get("titulo")?.setValue(data.titulo);
  // }


  // async updateMaestro() {
  //   let maestro_update = {
  //     id_maestro: this.id_maestro,
  //     nombre: this.formMaestro.get("nombre")?.value,
  //     apellido: this.formMaestro.get("apellido")?.value,
  //     titulo: this.formMaestro.get("titulo")?.value
  //   }
  //   let update_api_maestro = await this.homeService.updateMaestro(maestro_update);

  //   this.snackAction(update_api_maestro, 'UPDATE');

  // }

  // async deleteMaestro(obj: MaestroModel) {
  //   let delete_api = await this.homeService.deleteMaestro(obj);

  //   this.snackAction(delete_api, 'DELETE')
  // }

  // snackAction(api : any , action : any) {

  //   let actions_list = [
  //     {word : 'DELETE', word_1 : 'ELIMINAR', word_2 : 'ELIMINADO'},
  //     {word : 'SAVE', word_1 : 'GUARDAR', word_2 : 'GUARDAO'},
  //     {word : 'UPDATE', word_1 : 'MODIFICAR', word_2 : 'MODIFICADO'},
  //   ]

  //   if (api.status !== 200) {
  //     this._snackBar.open(`OCURRIO UN PROBLEMA AL ${(actions_list.find((e) => e.word == action)!.word_1).toUpperCase()} EL REGISTRO!`, "CLOSE");
  //     this.getMaestrosAPI()
  //     return;
  //   }
  //   this.getMaestrosAPI()
  //   this._snackBar.open(`REGISTRO ${(actions_list.find((e) => e.word == action)!.word_2).toUpperCase()} CORRECTAMENTE`, "CLOSE", {
  //     horizontalPosition: 'right',
  //     verticalPosition: 'top',
  //   });
  // }


  // refresh(){
  //   this.state_button = true;
  //   this.id_maestro = 0
  //   this.formMaestro.get("nombre")?.setValue("");
  //   this.formMaestro.get("apellido")?.setValue("");
  //   this.formMaestro.get("titulo")?.setValue("");
  // }
}
