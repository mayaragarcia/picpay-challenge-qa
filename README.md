# PicPay-Challenge-QA
- PicPay - QA Technical Challenge

# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version 14 ou superior

# Getting started
- Clone the repository
```
git clone  <https://github.com/mayaragarcia/picpay-challenge-qa>
```
- Install dependencies
```
cd <picpay-challenge-qa>
npm install --include dev
```
- Build and run the project
```
npm run cypress:open
```

## Project Structure
The folder structure of this test is explained below:

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **fixtures**                 | Contains set of data located in a file   |
| **integration**         | Contains all test files                                                            |
| package.json             | Contains npm dependencies |


## Testing
For this technical challenge, the test was carried out to include, search, change and delete a new registered user.
The tests were divided into the following iterations:

```
'POST Save New User'
'GET Find New User'
'PUT Update User Name'
'GET Check Name Updated'
'DELETE Delete User'
'GET Check User Deleted'
```

| Iteration| Description |
| -------- | ------------------------------------------------------------------------------------------------- |
| POST Save New User  | In this test, a new valid user is created.|
| GET Find New User  | In this test, the search for the valid user that was included in the previous iteration is performed. The search is executed through the registered user ID. Due to the API pagination, it was necessary to search for the page where the user was created to verify its existence. |
| PUT Update User Name  | In this test, the valid username previously registered is changed.|
| GET Check Name Updated  | This test validates if the name was changed as expected.
| DELETE Delete User  | In this test, the valid user that was included in the previous iteration is deleted.|
| GET Check User Deleted  | In this test, an API search is performed to verify if in fact the deleted user cannot be found, again being verified in all existing pages. A false result is expected for this search making the test assertive.|



