import React, { useState, useEffect } from "react";
import { Avatar } from "antd";
import QuestionsService from "../../services/questions.service";
import Comment from "./Comment";

import "./style.scss";

const QuestionCard = ({ questionItem }) => {
  const [question, setQuestion] = useState({});

  console.log(questionItem.id);

  console.log(question);

  useEffect(() => {
    questionItem?.id_question &&
      QuestionsService.GetFullData(questionItem.id_question).then((data) => setQuestion(data));
  }, [questionItem.id_question]);

  return (
    <div className="card-wrapper">
      <div className="card-content">
        <div className="avatar-wrapper">
          <Avatar src="https://i.imgur.com/1piyQdc.jpg" />
        </div>
        <div className="question">
          <div className="question__author">
            {question?.post?.first_name} {question?.post?.last_name}
          </div>
          <div className="question__text">{question?.post?.content}</div>
          {question?.answers && (
            <div className="comments-section">
              {question?.answers.map((answer, index) => (
                <Comment key={index} answer={answer} />
              ))}
            </div>
          )}
          <div className="input-section">
            <input className="input-section__input" placeholder="Оставьте комментарий или ответьте на вопрос" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
