import { inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export function getSessionToken(): string | null {
  const platformId = inject(PLATFORM_ID);

  if (isPlatformBrowser(platformId)) {
    return sessionStorage.getItem('token');
  }

  return null; // si es SSR / Node / prerender
}
