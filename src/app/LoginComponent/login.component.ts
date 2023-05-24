import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { HomeaService } from "../services/home.service";

@Component({
    selector: 'login-root',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    public formLogin!: FormGroup;

    users = [{
        username: 'christian',
        password: '123456'
    },
    {
        username: 'prueba',
        password: '123456'
    }]

    constructor(private formBuilder: FormBuilder,
        private router: Router, private homeService: HomeaService) {

    }
    ngOnInit(): void {
        this.formLogin = this.formBuilder.group({
            username: '',
            password: ''
        })
    }

    login() {
        let user = this.formLogin.get("username")?.value;
        let password = this.formLogin.get("password")?.value

        let verify_username = this.users.some((e) => e.username == user && e.password == password)
        if (verify_username) {
            console.log("se va a logguear");
            this.getAutoresAPI()
            localStorage.setItem("count_logged", "SI")
            localStorage.setItem("favoritos", JSON.stringify({
                autores : [],
                obras : []
            }))
            this.router.navigate(['/home'])
            return
        }

        console.log("no se va a loguear");
    }

    async getAutoresAPI() {
        let api_get_response = await this.homeService.getAutores()
        localStorage.setItem("autores", JSON.stringify(api_get_response.authors))
    }

    InvitadoLogin() {
        this.router.navigate(['/home'])
    }
}
