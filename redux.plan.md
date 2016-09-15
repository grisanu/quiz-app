{
  session:
    {
      mode: 'edit/student',
      quiz:
        {
          id:
          name:
        }
    }
  quizzes:
    [
      { id: 0, name: 'cats?' },
      { id: 1, name: String },
      ...
    ],
  questionsByQuizId:
  {
    0: []
    1: []
  }
  questions:
    [
      { id: , quizId: , question: ,
        type: , answer: },
      { id: , quizId: , question: ,
        type: , answer: },
      ...
    ],
  entries:
    [
      { id: , quizId: , score: },
      { id: , quizId: , score: }
      ...
    ],
  summaryByQuizId:
    {
      0: [averageScore, totalScore],
      1: [averageScore, totalScore]
    }
}


Component student: quiz1
state: {
  currentQuiz: {
    id:
    name:
    questions: [
      {
        id:
        q: ''
        type: 'tf'/'txt'
        answer: true / ''
      },
      {},
      {},
    ]
  },
  answers: [1, 2, 3, 4 ...]
}
