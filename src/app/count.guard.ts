import { CanActivateFn } from '@angular/router';

export const countGuard: CanActivateFn = (route, state) => {
  
  let premium_count = localStorage.getItem("count_logged")
  if (premium_count) {
    return true;
  }
  alert("Necesitas una cuenta Premium para acceder a esta ruta")
  return false;
};


