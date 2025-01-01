# javascript-express

The objective this project is simulate application in javascript using the express framework.

The application contents is basicaly three endpoints:

GET /status - Return status the aplication,

POST /calcnumber - Return the calc the previous number and next number,

POST /validatemail - Validate the format email (including case sensitive caracteres) with regEx.




# Description
This repository was created using `Express` framework.  Here we have three basic endpoints to perform some actions to illustrate how Express works.

# Endpoints
-`GET`  /status   
-`POST` /calcnumber  
-`POST` /checkmail

## Requisition examples
`POST` /calcnumber 
```
{
    "number": 100
}
```

`POST` /checkmail 
```
{
    "email": "examplE@gmail.com"
}
```

# Installation
```
npm install
```

# Running the app
## Development
```
npm run start:dev
```



