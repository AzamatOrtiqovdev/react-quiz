function Progress({index, numQuestions, points, maxPossiblePoints}) {
      return (
            <header className="progress">
                  <p>
                        Question <strong>{index + 1}</strong> / {numQuestions}
                  </p>

                  <p>
                        Points {points} / {maxPossiblePoints}
                  </p>
            </header>
      )
}

export default Progress
