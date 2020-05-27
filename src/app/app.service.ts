import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})

export class AppService {
    endpoint:any = 'https://c3cdd540.ngrok.io/smartCover/api/webApp/add_quotes_final_nic';
    
    constructor(private http: HttpClient){

    }

    submitrequest(postdata:any){
        return this.http.post(this.endpoint,postdata,{})
    }

}