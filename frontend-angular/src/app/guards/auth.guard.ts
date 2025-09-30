import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseService } from '../services/supabase.service';

export const authGuard = () => {
  const supabaseService = inject(SupabaseService);
  const router = inject(Router);

  if (supabaseService.currentUserValue) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};
