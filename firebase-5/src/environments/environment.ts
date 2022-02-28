// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const firebaseConfig = {
  apiKey: 'AIzaSyA7YWmHOBV9-lOjqZpgnJy31Zi0t56M3y0',
  authDomain: 'vizsga-bff53.firebaseapp.com',
  projectId: 'vizsga-bff53',
  storageBucket: 'vizsga-bff53.appspot.com',
  messagingSenderId: '856532865367',
  appId: '1:856532865367:web:19cd4d71676057fb11ae12',
  measurementId: 'G-7DPLPCBW27',
};

export const environment = {
  production: false,
  firebaseConfig,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
