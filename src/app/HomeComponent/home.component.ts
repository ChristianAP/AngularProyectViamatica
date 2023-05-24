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


  }

  logout(){
    localStorage.removeItem("count_logged");
    this.router.navigate(['login'])
  }


}
