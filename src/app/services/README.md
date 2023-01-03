## service/resource

Services in this folder are used for fetching data from the backend
(actually `localStorage`), and they return Observables of raw data

These services are only used inside `services/data`

## services/data

Services in this folder transform data returned from backend
in a form that's easier to work with in our components.

There are only used in NgRx effects

## LocalStorageService

`LocalStorageService` is used for storing all the data, so it's not lost when we close the application.

If `localStorage` is empty (like the first time we open the application), it will write data from `mock-data` folder to it.
