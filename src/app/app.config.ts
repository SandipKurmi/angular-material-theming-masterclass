import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAN5aaOoezIvp6jvy6rPfU8lCYnkf3tkFo',
  authDomain: 'angular-todo-f3bfe.firebaseapp.com',
  projectId: 'angular-todo-f3bfe',
  storageBucket: 'angular-todo-f3bfe.appspot.com',
  messagingSenderId: '837655248554',
  appId: '1:837655248554:web:1a4367ce8918c51cfc5ad3',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideFirestore(() => getFirestore()),
    ]),
  ],
};
