  

  import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
  import { Injectable } from "@angular/core";
  import { Observable, throwError } from "rxjs";
  import { catchError, map } from "rxjs/operators";
    
  import { AuthService } from "./auth.service";

 @Injectable()
export class AuthInterceptor1 implements HttpInterceptor {
    constructor( 
       private authService: AuthService
    ) { }
  

  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            map((event: HttpEvent<any>) => event), // pass further respone
            catchError((error: HttpErrorResponse) => {
                // here will be catched error from response, just check if its 401
                if (error && error.status == 401)
                    // then logout e.g. this.authService.logout()
                return throwError(error);
            }));
    }

  }