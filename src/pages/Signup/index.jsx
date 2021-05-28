import React, { useState, useCallback } from "react";
import { Form, Input, Button, message } from "antd";
import { Link, Redirect } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import AuthService from "../../services/auth.service";

import "./style.scss";

const Signup = () => {
  const [form] = Form.useForm();

  const [isComplete, setIsComplete] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  const submitForm = useCallback((values) => {
    setIsloading(true);
    AuthService.SignUp(values)
      .then(() => {
        message.success("Вы успешно выполнили зарегистрировались!");
      })
      .catch((err) => message.error(err.data))
      .finally(() => {
        setIsloading(false);
        setIsComplete(true);
      });
  }, []);

  return (
    <AuthLayout title="Войти" subtitle="Добро пожаловать! Войдите, чтобы продолжить">
      <div className="signup-wrapper">
        <Form layout="vertical" form={form} onFinish={submitForm}>
          <Form.Item
            label="Имя"
            name="first_name"
            validateTrigger="onSubmit"
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите имя",
              },
            ]}>
            <Input placeholder="Введите имя" />
          </Form.Item>
          <Form.Item
            label="Фамилия"
            name="last_name"
            validateTrigger="onSubmit"
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите фамилию",
              },
            ]}>
            <Input placeholder="Введите фамилию" />
          </Form.Item>
          <Form.Item
            label="E-mail"
            name="email"
            validateTrigger="onSubmit"
            rules={[
              {
                required: true,
                type: "email",
                message: "Пожалуйста, введите e-mail",
              },
            ]}>
            <Input placeholder="Введите e-mail" />
          </Form.Item>
          <Form.Item
            label="Пароль"
            name="password"
            validateTrigger="onSubmit"
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите пароль",
              },
            ]}>
            <Input.Password placeholder="Введите пароль" />
          </Form.Item>
          <Form.Item
            label="Подтвердите пароль"
            name="password_repeat"
            validateTrigger="onSubmit"
            rules={[
              {
                required: true,
                message: "Пожалуйста, подтвердите пароль",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject("Пароли не совпадают!");
                },
              }),
            ]}>
            <Input.Password placeholder="Введите пароль" />
          </Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Зарегистрироваться
          </Button>
        </Form>
        <div className="footer-text">
          Уже зарегистрированы? <Link to="/signin">Войдите!</Link>
        </div>
      </div>
      {isComplete && <Redirect to="/signin" />}
    </AuthLayout>
  );
};

export default Signup;
