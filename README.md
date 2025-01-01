# Description
This repository was created using `Express` framework.  Here we have three basic endpoints to perform some actions that illustrate how Express works.

# Endpoints
-`GET`  /status   
-`POST` /calcnumber  
-`POST` /checkmail

## Requisition examples
`POST` /calcnumber 
```
curl --location --request POST 'http://localhost:3000/calcnumber?number=100'
```

`POST` /checkmail 
```
curl --location --request POST 'http://localhost:3000/checkmail?email=examplE%40example.com'
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



