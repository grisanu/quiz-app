#Quiz

## Table of Contents

1. [Getting Started] (#start)
1. [Directory] (#dir)
1. [Technologies] (#tech)
1. [Extensibility] (#extens)
1. [Future] (#future)
 
##<a id="start"></a>Getting Started

```
npm install
npm start
```

Runs the app in development mode.
Open [http://localhost:3000] (http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will see the build errors and lint warnings in the console.


##<a id="dir"></a>Directory

```
├── package.json            # List of 3rd party libraries and utilities to be installed
├── redux.plan.txt          # Sketch of Redux store
└── src/                    # Client source code
    ├── App.js              # Contains React-Router routes
    ├── Root.js             # Initialize React-Router and Material UI
    ├── components/         # Components shared by multiple views
    ├── configureStore.js   # Store configurations - Redux middleware can be added here
    ├── data/               # JSON data
    ├── index.js            # Mount to React to DOM
    ├── modules/            # React Components
    │   ├── Edit-View/      # Edit view components
    │   ├── Home-View/      # Home view components
    │   ├── Question-View/  # Question view components
    │   ├── Select-View/    # Select view components
    │   ├── Student-View/   # Student view components
    │   └── Submit-View/    # Submit view components
    ├── redux/              # Contains Redux reducers
    └── styles/             # Contains custom App-level styles
```
##<a id="tech"></a>Technologies

Tech:

* React
* Redux
* React-Router
* Material UI

Boilerplate:

* [create-react-app] (https://github.com/facebookincubator/create-react-app)

##<a id="extens"></a>Extensibility

The directory structure is designed with maintainability and extensibility in mind. In each `*-View` folder, files are broken down into presentational components: `*.view.js`, container components: `*.container.js`, Redux actions: `*Actions.js` and Tests/Specs `*.test.js`. Dan Abramov has written a great [explanation] (https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.ljnhrcesv) of this

These issues are addressed by:

* Persisting the quizzes in a database (especially quiz answers)
  * Quizzes, questions and answers can be stored to database, the logic to store to database can go where the logic to dispatch Redux actions can go
* Management of multiple quizzes
  * Redux store and React components are designed to already handle multiple quizzes. Where you can store multiple quizzes in an array, there is a Select view to select different quizzes and questions belong to specific quizzes
  * Adding and remove a quiz can easiliy by accomplished through this design, merely need to create an action and add a component to have the logic.
* Removing and reordering questions when editing the quiz:
  * There is a key, `questionsByQuizId` for question order which would allow to store question objects in a array to preserve and change order.
  * Removing a question can be done by creating an action to remove a question (identified by id) from `questions` in Redux store.
* Other answer types, e.g. multiple choice
  * Answer types are be added and details can be specified by making changes to '~/src/data/answerTypesAndChoices.json`
  * How the answers are display must also be specified by adding logic to `~/src/components/Answers.js`
* Different quiz presentation, e.g. randomization of question order
  * Randomization of question in Student mode by be achieve by creating a function and corresponding React component to randomize, then passing the function in as callback to `makeList(listOfAllQuestions, callback)` function in `~/src/modules/Student-View/Student.view.js`

##<a id="future"></a>Future

I decided to prioritize creating a correctly working, feature-complete MVP of the application, given the limited amount of time avaliable to me.

#####If I have more time:

1. Write unit feature tests, for components, reducers and actions so that changed can be made and new features can be added, knowing that nothing has been broken with:
  * Enzyme with Mocha and Chai
  * Jest
1. Wrap components in a higher-order react component to only allow for entry from '/' route through URL
1. A simple answer comparison/converter functionality so users do not have to enter the exact answer to questions in text-type answers
1. Allow for editing/removing questions in Edit view
1. Add a feature to get average score of quiz by using `~/src/redux/summaryByQuizIdReducer.js` and its respective actions to add to Redux store