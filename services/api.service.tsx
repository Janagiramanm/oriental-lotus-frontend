import React, { useEffect } from "react";



export class ApiService {
    public getBaseUrl(): string {
      if(process.env.NEXT_PUBLIC_API_ENV == 'production'){
         // return "https://wp.olhs.in";
         return "https://lotuswp.netiapps.com";
      }
     else if(process.env.NEXT_PUBLIC_API_ENV == 'dev'){
       return "https://lotuswp.netiapps.com";
         // return "http://localhost/oriental-lotus-wp/index.php";
        // return "http://localhost/oriental-lotus-wp/index.php";
      }
      else{
          return "https://lotuswp.netiapps.com";
      }
         
    }
     public getFrotendUrl(): string {
      
         if(process.env.NEXT_PUBLIC_API_ENV == 'production'){
               return "https://lotus.netiapps.com";
         }

         if(process.env.NEXT_PUBLIC_API_ENV == 'dev'){
            return "http://localhost:3000";
         }else{
            return "https://lotus.netiapps.com";
         }

     }
   
}