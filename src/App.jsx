import Question from "./components/Question";
import { QuizContext } from "./context/quiz";
import Welcome from "./components/welcome";
import "./App.css";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === "Start" && <Welcome />}{" "}
      {quizState.gameStage === "Playing" && <Question />}
    </div>
  );
}

export default App;
