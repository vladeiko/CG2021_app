import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button, message } from "antd";
import { Link, Redirect } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import AuthService from "../../services/auth.service";
import { authSlice } from "../../redux/slices/auth";

import "./style.scss";

const Signin = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const isAuthorized = useSelector((state) => state?.auth?.isAuthorized || false);

  const [isLoading, setIsloading] = useState(false);

  const submitForm = useCallback(
    (values) => {
      setIsloading(true);
      AuthService.SignIn(values)
        .then((data) => {
          setIsloading(false);
          dispatch(authSlice.actions.setSessionData(data));
          message.success("Вы успешно выполнили вход!");
        })
        .catch((err) => {
          setIsloading(false);
          message.error(err?.data || "Uncaught error");
        });
    },
    [dispatch]
  );

  return (
    <AuthLayout title="Войти" subtitle="Добро пожаловать! Войдите, чтобы продолжить">
      <div className="signin-wrapper">
        <Form layout="vertical" form={form} onFinish={submitForm}>
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
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Войти
          </Button>
        </Form>
        <div className="footer-text">
          Нет аккаунта? <Link to="/signup">Зарегистрируйтесь!</Link>
        </div>
      </div>
      {isAuthorized && <Redirect to="/select-console" />}
    </AuthLayout>
  );
};

export default Signin;
