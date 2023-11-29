# NodeJS + ExpressJS

## Ruben Anaya
- Date of development: 27/11/2023

## API
- FakerJS was used to generate dinamyc data with the specified columns: name, date, favorite food, favorite movie and status
- Each time the API outputs a result, it logs in the console the active user only
- If a sort value if provided as a query stirng in the url endpoint, then a message in the console displays by which field the results are sorted
- To use the api, you need to do a GET request to the following endpoints:      
*API_URL:PORT/users* --> Will display all users without sort  
*API_URL:PORT/users?sortBy='status,name'* --> Will display all users sorted by the specified fields

## Installation

- nvm use (if you are using Node Version Manager) or at least node version 20.0.0
- create a `.env` file in the root project folder structure with the following variables:   
**PORT** and place the api port that the api will use to expose it's endpoint
- yarn install
- yarn start

## Tech stack

- NodeJS
- ExpressJS
- FakerJS


