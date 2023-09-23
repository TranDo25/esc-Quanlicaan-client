import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.url.includes('/authenticate') && !req.url.includes('/register')) {
      const token = localStorage.getItem('jwtToken');
      if (token) {
        req = req.clone({
          setHeaders: {Authorization: `Bearer ${token}`}
        });
      }
    }
    return next.handle(req);
  }

}
