import React, { useEffect, useState } from "react";
import ContentLayout from "../../layouts/ContentLayout";
import QuestionCard from "../../components/QuestionCard";
import QuestionsService from "../../services/questions.service";

import "./style.scss";

const Questions = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    QuestionsService.GetAllPosts().then((data) => setQuestions(data));
  }, []);

  return (
    <ContentLayout>
      <div className="questions-page">
        <div className="page-header">
          <div className="page-header__title">Наши менторы ответят на интересующие вас вопросы</div>
          <div>
            <img
              className="page-header__img"
              src="https://i.imgur.com/14hrkm3.png"
              alt="https://i.imgur.com/14hrkm3.png"
            />
          </div>
        </div>
        <div className="questions-section">
          {questions.map((question) => (
            <QuestionCard key={question.id} questionItem={question} />
          ))}
        </div>
      </div>
    </ContentLayout>
  );
};

export default Questions;
