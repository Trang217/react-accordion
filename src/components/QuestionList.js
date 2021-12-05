import { useState } from "react";
import Question from "./Question";
import data from "../data";

const QuestionList = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <section>
      {questions.map((question) => (
        <Question key={question.id} {...question} />
      ))}
    </section>
  );
};

export default QuestionList;
