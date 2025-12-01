import { HttpInterceptorFn } from '@angular/common/http';
import { getSessionToken } from '../utils/storage.util';
import { EMPTY } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

    if (req.url.includes('/autenticacion')) {
        return next(req);
    }
  
  const token = getSessionToken();

  if(!token)
    return EMPTY;
  console.log(token)
  if (token) {
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    return next(cloned);
  }

  return next(req);
};
