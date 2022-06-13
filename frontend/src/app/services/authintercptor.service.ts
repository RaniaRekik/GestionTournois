import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router) { }

 /*  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let modifiedReq = req
    if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
      console.log('With Token --- ' + sessionStorage.getItem('token'));
      modifiedReq = req.clone({
        setHeaders: {
          Authorization: sessionStorage.getItem('token')
        }
      });
    }
    return next.handle(modifiedReq);
  } */

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let modifiedReq = req
    if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
      console.log('With Token --- ' + sessionStorage.getItem('token'));
      modifiedReq = req.clone({
        setHeaders: {
          Authorization: sessionStorage.getItem('token')
        }
      });
    }
    return next.handle(modifiedReq).pipe(tap(() => { },
    (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status !== 401) {
          return;
        }
        this.router.navigate(['login']);
      }
    }));
  }

  /* intercept1(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          Authorization: `JWT ${currentUser.token}`
        }
      });
    }
    return next.handle(request).pipe(tap(() => { },
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status !== 401) {
            return;
          }
          this.router.navigate(['login']);
        }
      }));
  } */

}