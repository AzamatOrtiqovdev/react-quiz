function StartScreen({numQuestions}) {
      return (
            <div className="start">
                  <h2>Welcome to The React Qauiz!</h2>
                  <h3>{numQuestions} qaustions to test your React mastery</h3>
                  <button className="btn btn-ui">Let's start</button>
            </div>
      )
}

export default StartScreen
