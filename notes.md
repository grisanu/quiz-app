#Extensibility:

##Features
  *multiple quizzes management:
    **in organization of redux store to be an array of objects, where each object is a quiz
    **select view where you can select other quizzes
  *adding a new quiz
    **creating an new action to add new quiz in redux store
  *reorder and removining questions when edit quiz
    **creating new actions for each task respectively
  *other answer types
    **adding new type property in each question

/** Answer types
* 1) Answer types can be added by appending to the choices array
* 2) When added a new answer type, you should also add make changes to
*    ~/src/modules/Question-View/Answer.view.js to display type of answer
*/


    /*

    STORE --> mapStateToProps --> props = {quizzes: state.quizzes}

    */