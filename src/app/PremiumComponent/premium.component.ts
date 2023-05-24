import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { HomeaService } from "../services/home.service";

@Component({
    selector: 'premium-root',
    templateUrl: './premium.component.html',
    styleUrls: ['./premium.component.css']
})

export class PremiumComponent implements OnInit {
    panelOpenState = false;
    list_favoritos_autores = []
    list_favoritos_obras = []

    name_autor = ''
    name_obra = ''
    obras = ''
    descripcion_obra = ''
    constructor(private homeService: HomeaService) { }
    ngOnInit(): void {
        this.getFavoritosAutores()
        this.getFavoritosObras()
    }

    getFavoritosAutores() {
        let autores = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem("favoritos"))))

        this.list_favoritos_autores = autores.autores
    }

    getFavoritosObras() {
        let obras = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem("favoritos"))))

        this.list_favoritos_obras = obras.obras
    }

    deleteAutorFavorito(e: any) {
        let autores = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem("favoritos"))))

        let new_autores = autores.autores.filter((ele: any) => ele !== e)

        let obj_new = {
            autores: new_autores,
            obras: [
                ...autores.obras
            ]
        }
        localStorage.removeItem("favoritos")
        localStorage.setItem("favoritos", JSON.stringify(obj_new))




        let data = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem("autores"))))
        let new_data = [
            ...data,
            e
        ]
        localStorage.removeItem("autores")
        localStorage.setItem("autores", JSON.stringify(new_data))
        this.getFavoritosAutores()
    }

    deleteOBRASFavorito(e: any) {
        let obras = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem("favoritos"))))

        let new_OBRAS = obras.obras.filter((ele: any) => ele !== e)

        let obj_new = {
            autores: [
                ...obras.autores
            ],
            obras: new_OBRAS
        }
        localStorage.removeItem("favoritos")
        localStorage.setItem("favoritos", JSON.stringify(obj_new))


        this.getFavoritosObras()
    }

    async clickTableAutor(row: any) {
        this.name_autor = row;
        let response = await this.homeService.getAutoresByName(row)
        let cadena = ''
        for (let e of response) {
            cadena += `*/ ${e.title} /*`
        }

        this.obras = cadena

    }

    async clickTableObra(row: any) {
        this.name_obra = row.title;
        let res_obra = await this.homeService.getObrasByName(row)
        let cadena = ''
        for (let e of res_obra[0].lines) {
            cadena += e
        }

        this.descripcion_obra = cadena;
        // this.descripcion_obra = 
    }

}
