import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { forkJoin } from 'rxjs';

import { ENDPOINTS } from './data.model';

@Injectable({
    providedIn: 'root'
})

export class AppService {
    endpoint:any = 'https://https://smartcover-api-dev.azurewebsites.net/smartCover/api/webApp/add_quotes_final_nic';
    production:any = 'https://smartcover-api-dev.azurewebsites.net/';
    


    MID_SCHEDULES = "https://api.nicmid.com/apiv1/schedules";
    MID_BODY = "https://api.nicmid.com/apiv1/body_types/";
    MID_MAKE = "https://www.carqueryapi.com/api/0.3";

    MID_AUTHORIZATION_KEY = "YW50b25pb2VjbDprWVVoeW9Yeg==";
    MID_TOKEN_KEY = "4wpUQnzAnTQdLGA5RQH3h9yr";
    MID_USERNAME = "ericECL";
    MID_PASSWORD = "szLRHUjo";

    private httpHeaders = new HttpHeaders()
   .set('Content-Type', 'application/json')
   .set('Access-Control-Allow-Origin', '*')
   .set("Acces-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS")
   .set("Acces-Control-Allow-Headers", "Origin, Content-Type, Cookies");
    private options = {
        headers: this.httpHeaders
    };

    private httpGETHeaders = new HttpHeaders()
    .set('Access-Control-Allow-Origin', '*')
    .set("Acces-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS")
    .set("Acces-Control-Allow-Headers", "Origin, Content-Type, Cookies")
    .set('Authorization', this.MID_AUTHORIZATION_KEY)
    .set("Content-Type", "application/json")
    .set("Token", this.MID_TOKEN_KEY);


    constructor(private http: HttpClient){

    }

    submitrequest(postdata:any,type:any){
        
        return this.http.post(ENDPOINTS.main+ENDPOINTS[type],JSON.stringify(postdata),this.options)
    }
    getcombodata(){
        let schedules = this.http.get(this.MID_SCHEDULES,{headers: this.httpGETHeaders});
        let bodytype = this.http.get(this.MID_BODY,{headers: this.httpGETHeaders});
        
        return forkJoin([schedules,bodytype]);
    }

    getmakecombodata(year:any){
        return this.http.get(this.MID_MAKE+'/?callback=?&cmd=getModels&make=ford&year=2005&sold_in_us=1&body=SUV',{headers: this.httpGETHeaders});

    }
    numCombo(start:any,end:any,key:any,val:any){
        let value = []
        for(let i=start;i<=end;i++){
            value.push({name:i, code:i})
        }
        return value;
    }

    retrieveuserdata(){
        return JSON.parse(localStorage.getItem('userdata'));
    }
}