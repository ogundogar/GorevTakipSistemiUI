import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { _isAuthenticated } from '../services/auth-service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if (!_isAuthenticated) {
    router.navigate(['/giris']);
  }
  return true;
};
