import React, { useEffect } from "react";



export class ApiService {
    public getBaseUrl(): string {
      if(process.env.NEXT_PUBLIC_API_ENV == 'production'){
         return "https://wp.olhs.in";
      }else{
         return "https://lotuswp.netiapps.com";
      }
         
    }
   
}