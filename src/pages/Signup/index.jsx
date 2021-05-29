import React, { useState, useCallback } from "react";
import { Form, Input, Button, message, Radio } from "antd";
import { Link, Redirect } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import AuthService from "../../services/auth.service";

import "./style.scss";

const Signup = () => {
  const [form] = Form.useForm();

  const [isComplete, setIsComplete] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [fieldsType, setFieldsType] = useState("Участник");

  const submitForm = useCallback(
    (values) => {
      setIsloading(true);
      AuthService.SignUp({ ...values, user_role: fieldsType })
        .then(() => {
          message.success("Вы успешно выполнили зарегистрировались!");
        })
        .catch((err) => message.error(err.data))
        .finally(() => {
          setIsloading(false);
          setIsComplete(true);
        });
    },
    [fieldsType]
  );

  const getFields = () => {
    if (fieldsType === "Участник")
      return (
        <>
          <Form.Item
            style={{ marginBottom: "2px" }}
            label="Команда"
            name="info_team"
            validateTrigger="onSubmit"
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите команду",
              },
            ]}>
            <div className="input-wrapper">
              <Input placeholder="Введите команду" />
            </div>
          </Form.Item>
          <Form.Item
            style={{ marginBottom: "2px" }}
            label="Роль"
            name="info_role"
            validateTrigger="onSubmit"
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите роль",
              },
            ]}>
            <div className="input-wrapper">
              <Input placeholder="Введите роль" />
            </div>
          </Form.Item>
        </>
      );

    if (fieldsType === "Ментор")
      return (
        <>
          <Form.Item
            style={{ marginBottom: "2px" }}
            label="Компания"
            name="team"
            validateTrigger="onSubmit"
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите компанию",
              },
            ]}>
            <div className="input-wrapper">
              <Input placeholder="Введите компанию" />
            </div>
          </Form.Item>
          <Form.Item
            style={{ marginBottom: "2px" }}
            label="Должность"
            name="role"
            validateTrigger="onSubmit"
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите должность",
              },
            ]}>
            <div className="input-wrapper">
              <Input placeholder="Введите должность" />
            </div>
          </Form.Item>
        </>
      );
  };

  const handleRadio = (e) => {
    setFieldsType(Number(e.target.value));
  };

  const handleButtonSubmit = () => {
    form.submit();
  };

  return (
    <AuthLayout title="Войти" subtitle="Добро пожаловать! Войдите, чтобы продолжить">
      <div className="signup-wrapper">
        <div className="title">
          <div>Регистрация</div>
        </div>
        <Form layout="vertical" form={form} onFinish={submitForm}>
          <Radio.Group name="role" defaultValue="Участник" onChange={handleRadio}>
            <div className="radio-item">
              <span className="radio-label">Участник</span>
              <Radio value="Участник" />
            </div>
            <div className="radio-item">
              <span className="radio-label">Организатор</span>
              <Radio value="Организатор" />
            </div>
            <div className="radio-item">
              <span className="radio-label">Ментор</span>
              <Radio value="Ментор" />
            </div>
          </Radio.Group>
          <div className="fields-wrapper">
            <Form.Item
              style={{ marginBottom: "2px" }}
              label="Имя"
              name="first_name"
              validateTrigger="onSubmit"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, введите имя",
                },
              ]}>
              <div className="input-wrapper">
                <Input placeholder="Введите имя" />
              </div>
            </Form.Item>
            <Form.Item
              style={{ marginBottom: "2px" }}
              label="Фамилия"
              name="last_name"
              validateTrigger="onSubmit"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, введите фамилию",
                },
              ]}>
              <div className="input-wrapper">
                <Input placeholder="Введите фамилию" />
              </div>
            </Form.Item>
            {getFields()}
            <Form.Item
              style={{ marginBottom: "2px" }}
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
                <Input placeholder="Введите email" />
              </div>
            </Form.Item>
            <Form.Item
              style={{ marginBottom: "2px" }}
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
            <Form.Item
              style={{ marginBottom: "2px" }}
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
              <div className="input-wrapper-password">
                <Input.Password placeholder="Введите пароль" />
              </div>
            </Form.Item>
          </div>
        </Form>
        <div className="button-wrapper">
          <Button type="primary" htmlType="submit" loading={isLoading} onClick={handleButtonSubmit}>
            Зарегистрироваться
          </Button>
        </div>
        <div className="footer-text">
          <span className="no-acc">Уже есть аккаунт? </span>
          <Link className="link" to="/signin">
            Войти
          </Link>
        </div>
      </div>
      {isComplete && <Redirect to="/signin" />}
    </AuthLayout>
  );
};

export default Signup;
