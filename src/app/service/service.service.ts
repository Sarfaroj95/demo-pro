import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class AuthService {
    // private baseUrl = "http://localhost:3002";
    private baseUrl = "https://jobsekhar.herokuapp.com";

    private registerUrl = this.baseUrl + "/api/v4/user/register";
    private loginUrl = this.baseUrl + "/api/v4/user/login";
    private userUrl = this.baseUrl + "/api/v4/user/user/";
    private careerUrl = this.baseUrl + "/api/v4/user/career";



    constructor(private http: HttpClient) { }

    public register(userData: any): Observable<any> {
        return this.http.post(this.registerUrl, userData);
    }


    public login(userData: any): Observable<any> {
        return this.http.post(this.loginUrl, userData);
    }

    public getUser(id: any): Observable<any> {
        console.log(this.userUrl + id)
        return this.http.get(this.userUrl + id);

    }

    public career(data: any): Observable<any> {
        return this.http.post(this.careerUrl, data);
    }

    getId() {
        return localStorage.getItem("id");
    }
    getToken() {
        return localStorage.getItem("token");
    }
    isLoggedIn() {
        return this.getToken() !== null;
    }
    deleteToken() {
        return localStorage.removeItem("token");
    }
}
