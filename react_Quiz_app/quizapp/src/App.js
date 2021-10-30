import { Button, Typography } from "@mui/material";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MenuAppBar from "./component/header";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

// st ? setst(false) : setst(true);
// if (st) {
//   setst(false);
// } else {
//   setst(true);
// }
function App() {
  const [marks, setMarks] = useState(0);
  const [showResult, setShowResult] = useState(false);
  //questions[indexNumber].options.map
  const [questions, setQuestions] = useState([
    {
      question: "What does HTML stand for",
      options: ["HYpertex", "wrong", "wrong", "wrong"],
      correctAnswers: "HYpertex",
    },
    {
      question: "What does CSS stand for",
      options: ["wrong", "CSS", "wrong", "wrong"],
      correctAnswers: "CSS",
    },
    {
      question: "What does JS stand for",
      options: ["wrong", "wrong", "JavaScript", "wrong"],
      correctAnswers: "JavaScript",
    },
    {
      question: "What does MERN stand for",
      options: ["wrong", "wrong", "wrong", "Mern"],
      correctAnswers: "Mern",
    },
  ]);
  const [questionInd, setQuestionInd] = useState(0);

  const nextQuestion = () => {
    if (questions.length - 1 == questionInd) {
      setShowResult(true);
    } else {
      setQuestionInd(questionInd + 1);
    }
  };
  const checkAnswer = (cor, user) => {
    if (cor == user) {
      setMarks(marks + 1);
    }
    nextQuestion();
  };

  return (
    <div className="App">
      <MenuAppBar />
      {showResult ? (
        <Grid>
          <Paper elevation={5}>
            <Typography variant="h3">
              {(marks / questions.length) * 100} %
            </Typography>
          </Paper>
        </Grid>
      ) : (
        <Grid>
          <Grid spacing={3} container>
            <Grid md={12}>
              <Typography className="py-5" variant="h5">
                {questions[questionInd].question}
              </Typography>
            </Grid>
            {questions[questionInd].options.map((e, i) => (
              <Grid key={i} className="p-3" md={6}>
                <Button
                  onClick={() =>
                    checkAnswer(questions[questionInd].correctAnswers, e)
                  }
                  variant="contained"
                >
                  {e}
                </Button>
              </Grid>
            ))}

            <Grid className="p-3" md={12}>
              <Button onClick={() => nextQuestion()} variant="outlined">
                Next
              </Button>
            </Grid>
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default App;
