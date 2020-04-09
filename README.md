# REST-API av Isabel Blomström

I den här uppgiften har jag byggt ett litet RESTful API. API:t innehåller information om olika böcker. Ramverket som används är Express. Jag har även installerat Nodemon för att slippa starta om servern manuellt varje gång jag gör en ändring. För att köra igång server skriver du ``nodemon server.js `` i terminalen. Endpointsen som finns är ``GET``, ``PUT``, ``POST`` och ``DELETE``. 

Med ``GET`` kan du antingen hämta en specifik bok, eller alla böcker.
Med ``PUT`` kan du ändra titel och författare på en specifik bok. 
Med ``POST`` kan du lägga till en fjärde bok i samligen och 
med ``DELETE`` kan du ta bort valfri bok. 

Samtliga endpoints går att nå och testa via min .rest-fil. All data till böckerna är sparad i server.js-filen. 
