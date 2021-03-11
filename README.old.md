# settle-challenge-front-end

Full Stack Dev - Challenge 
Purpose 
The purpose of this document is to state the goals of a tech challenge to be completed by a candidate that is seeking to join the Settle tech team. 
The goal of this challenge is to evaluate the candidate’s skills for backend and frontend development in a context of understanding particular business rules of our industry. 
Goal 
Build a small app that allows a user to see a table of rates and create new ones by obtaining FX rates from an API. The creation must allow the addition of a fee over the obtained FX rate via UI. 
To create rates by obtaining FX rates from a given provider. 
To add a mark-up fee over the obtained FX rate 
To retrieve a list of these rates detailing: 
Pair 
Original rate 
Fee % 
Fee amount 
Rate with mark-up fee applied 
Deliverables 
Host the solution in an AWS free tier instance. 
Document the API endpoints using Swagger 
Provide a Postman Collection to interact with the API 
Provide a simple frontend UI to test the functionality 
Stack 
Nodejs, Hapi.js, React, Redux, Sagas, MongoDB 
Source:
https://fixer.io 
Docs: 
https://fixer.io/documentation 
Base url: 
http://data.fixer.io/api/ 
API Access Key : 
ffcc344a3f31700c0020d166fd17ea96 
Pairs 
EURUSD 
EURARS 
USDARS 
EURBRL 
USDBRL 
BRLARS 
Hint: As this account is a free account in fixer.io, endpoints and base currencies are limited. Use your creativity to obtain the rates for the desired pairs!
