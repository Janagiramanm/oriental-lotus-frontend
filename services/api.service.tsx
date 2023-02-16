import React, { useEffect } from "react";



export class ApiService {
    public getBaseUrl(): string {
      if(process.env.NEXT_PUBLIC_API_ENV == 'production'){
         // return "https://wp.olhs.in";
         return "https://lotuswp.netiapps.com";
      }
     else if(process.env.NEXT_PUBLIC_API_ENV == 'dev'){
         return "http://localhost/oriental-lotus-wp/index.php";
      }
      else{
         return "https://lotuswp.netiapps.com";
      }
         
    }
   
}