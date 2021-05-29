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
    <AuthLayout>
      <div className="signin-wrapper">
        <Form layout="vertical" form={form} onFinish={submitForm}>
          {/* <Radio.Group name="role" defaultValue="1">
            <div className="radio-item">
              <span className="radio-label">Участник</span>
              <Radio value="1" />
            </div>
            <div className="radio-item">
              <span className="radio-label">Организатор</span>
              <Radio value="2" />
            </div>
            <div className="radio-item">
              <span className="radio-label">Ментор</span>
              <Radio value="3" />
            </div>
          </Radio.Group> */}
          <div className="fields-wrapper">
            <div className="title">Войти</div>
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
              <div className="input-wrapper">
                <Input placeholder="Введите e-mail" />
              </div>
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
              <div className="input-wrapper-password">
                <Input.Password placeholder="Введите пароль" />
              </div>
            </Form.Item>
            <Button type="primary" htmlType="submit" loading={isLoading}>
              Войти!
            </Button>
          </div>
        </Form>
        <div className="footer-text">
          <span className="no-acc">У вас нет аккаунта? </span>
          <Link className="link" to="/signup">
            Регистрация
          </Link>
        </div>
      </div>
      {isAuthorized && <Redirect to="/select-console" />}
    </AuthLayout>
  );
};

export default Signin;
