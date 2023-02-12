import Questions from "../../components/questions";
import "./style.css";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  positionState,
  questionarieState,
  questionarieSelector,
} from "../../state/qa";

export default function Main() {
  let algo = require("../../data/questionnaire.json");

  const [position, setPosition] = useRecoilState(positionState);
  const questionarie = useRecoilValue(questionarieSelector);
  const setQuestion = useSetRecoilState(questionarieState);

  useEffect(() => {
    setQuestion(algo);
  }, []);

  const handleClick = (data) => {
    setPosition(position + 1);
  };

  return (
    <div className="container">
      {questionarie && (
        <Questions
          handleClick={handleClick}
          question={questionarie.question}
          answers={questionarie.answers}
        />
      )}
    </div>
  );
}
