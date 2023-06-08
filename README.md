# Jest Demo - React Native
##### This demo have test case for functions,components & snapsots testing.


##### We are using the jest library for unit test which is pre-installed in the react-native latest app

## Installation

Install devDependencies in your app if it doesn't exist

```sh
npm i react-test-renderer -d
```
## How to run test case

Install devDependencies in your app if it doesn't exist

If we want to run all tests at the same time.

```sh
npm test
```

If we want to run specific file test (i.e:  a-test.js).

```sh
npm test a-test.js
```

Collect the code coverage information from the code. 

```sh
npm run test -- --coverage 
```

If we want to update current component snapshot 

```sh
npm test -- -u  
```
