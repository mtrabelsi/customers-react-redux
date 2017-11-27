#Documentation

## key features :
- Responsive and mobile aware app, completely agnostic Table (for future re-use) showing list of customers,
please see the table on smaller width (< 1000px)
- node server and universal rendering (linked react/express router)
- ES6 syntax/ webpack
- Real time debugger to see data traveling ( please open your chrome console and see actions being dispatched )
- React/redux architecture
- unit tests for redux to make sure that ALL data change and side effects works as indented

## demo
a running demo :

 ## install

 1- clone repo https://github.com/mtrabelsi/customers-react-redux.git

 2- npm i

 3- npm run dev (dev env) or npm run prod (prod env -  minified assets)

 ## Stack
 - Node server for file serving and universal rendering
 - React coupled with Redux for state management ( although the application is not that big for Redux )
 - Redux for state management

 ## Test
 only important and critical features are tested ( action creators and Redux reducer ).
for running test please use:  

 npm run test

 ## Bootsrap
 Bootsrap is used but ONLY for styling buttons and inputs :- )


## Disclaimer

x - no linter added

x - react components are not tested themselves, however all possible data/action dispatch is fully tested
