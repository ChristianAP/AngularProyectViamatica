import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { HomeaService } from "../services/home.service";

@Component({
    selector: 'beta-root',
    templateUrl: './beta.component.html',
    styleUrls: ['./beta.component.css']
})

export class BetaComponent implements OnInit {
    columns_table_autores: string[] = ['NRO', 'NOMBRE', 'ACCION'];
    columns_table_obras: string[] = ['NRO', 'TITULO', 'ACCION'];
    AUTORES_LIST: any[] = []
    OBRAS_LIST: any[] = []

    descripcion_obra = ''

    autores_table: any[] = []

    name_autor = ''
    name_obra = ''

    state_login = localStorage.getItem("count_logged")

    constructor(
        private homeService: HomeaService,) { }
    ngOnInit(): void {
        if (!this.state_login) {
            this.getAutoresAPI()
        } else {
            this.lsitAutores();
        }
    }

    async getAutoresAPI() {
        let api_get_response = await this.homeService.getAutores()

        // this.AUTORES_LIST = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem("autores"))))
        this.AUTORES_LIST = api_get_response.authors
        console.log(this.AUTORES_LIST);


    }

    async lsitAutores() {
        this.AUTORES_LIST = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem("autores"))))
        console.log(this.AUTORES_LIST);


    }
    async clickTableAutor(row: any) {
        this.name_autor = row;
        let response = await this.homeService.getAutoresByName(row)
        this.OBRAS_LIST = response;

    }

    async clickTableObra(row: any) {
        this.name_obra = row.title;
        let res_obra = await this.homeService.getObrasByName(row.title)
        let cadena = ''
        for (let e of res_obra[0].lines) {
            cadena += e
        }

        this.descripcion_obra = cadena;
        // this.descripcion_obra = 
    }

    async addFavorito(autor: any) {
        if (this.state_login) {
            let data = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem("favoritos"))))
            let new_data = {
                autores: [
                    ...data.autores,
                    autor
                ],
                obras: [
                    ...data.obras
                ]
            }
            localStorage.removeItem("favoritos")
            localStorage.setItem("favoritos", JSON.stringify(new_data))

            this.reloadListAutors(autor)
            return
        }
        alert("SE DEBE DE TENER UNA CUENTA PREMIUM PARA PODER AHCER ESTO!")
    }

    async addFavoritoObra(obra: any) {
        if (this.state_login) {
            let data = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem("favoritos"))))
            let new_data = {
                autores: [
                    ...data.autores,
                ],
                obras: [
                    ...data.obras,
                    obra.title                ]
            }
            localStorage.removeItem("favoritos")
            localStorage.setItem("favoritos", JSON.stringify(new_data))

            return
        }
        alert("SE DEBE DE TENER UNA CUENTA PREMIUM PARA PODER AHCER ESTO!")
    }

    reloadListAutors(name: any) {
        let data = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem("autores"))))
        let sacar_favorito = data.filter((e: any) => e !== name)
        localStorage.removeItem("autores")
        localStorage.setItem("autores", JSON.stringify(sacar_favorito))    
        this.lsitAutores()
    }
}