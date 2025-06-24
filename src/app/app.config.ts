import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { JwtModule } from "@auth0/angular-jwt";

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient( withInterceptorsFromDi()),
    importProvidersFrom(
            JwtModule.forRoot({
                config: {
                    tokenGetter: ()=>localStorage.getItem("accessToken"),
                    allowedDomains: ["localhost:44391"]
                },
            }),
        ),
    
  ]
};
