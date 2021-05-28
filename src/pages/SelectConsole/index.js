import React, { useState, useEffect } from "react";
import { Select, Button } from "antd";
import { Redirect } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";

import "./style.scss";

const { Option } = Select;

const options = [
  { label: "Профиль", value: "profile", route: "/profile" },
  { label: "Операция", value: "operation", route: "/select-operation" },
];

const SelectConsole = () => {
  const [selectedOption, setSelectedOption] = useState({});
  const [isContinue, setIsContinue] = useState(false);

  const handleConsoleChange = (value) => {
    setSelectedOption(options.find((option) => option.value === value));
  };

  const handleContinueClick = () => {
    setIsContinue(true);
  };

  const getNextStep = () => {
    if (selectedOption.value === "profile")
      return (
        <Button className="continue-button" onClick={handleContinueClick} type="primary">
          Продолжить
        </Button>
      );
  };

  const clearState = () => {
    setSelectedOption({});
    setIsContinue(false);
  };

  useEffect(() => {
    return () => clearState();
  }, []);

  return (
    <AuthLayout title="Добро пожаловать!" subtitle="Выберите консоль, чтобы продолжить.">
      <div className="select-console">
        <Select className="select-console__select" defaultValue="empty" onChange={handleConsoleChange}>
          <Option value="empty">Выберите консоль</Option>
          {options.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
        {selectedOption && getNextStep()}
        {isContinue && <Redirect to={selectedOption.route} />}
      </div>
    </AuthLayout>
  );
};

export default SelectConsole;
