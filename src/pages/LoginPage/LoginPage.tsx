import { Button, Checkbox, Col, Flex, Form, Input, Row } from "antd";
import { User } from "../../models/user";
import "./LoginPage.scss";

import React, { Ref, useEffect, useRef, useState } from "react";
import axios, { AxiosError } from "axios";

type LoginPageProps = {
  logInHandler: (user: User) => void;
};

export const LoginPage = (props: LoginPageProps) => {
  const [mode, setMode] = useState<"login" | "register">("login");

  useEffect(() => {}, []);

  const handleLoginClick = () => {
    // let's say this object received from backend side
    const user: User = {
      id: 123,
      login: "admin",
      name: "Antoshka",
    };

    props.logInHandler(user);
  };

  const handleRegisterClick = () => {
    // registering the user and ...
    alert("Registered! Please log in now.");
    setMode("login");
  };

  type LoginFormFields = {
    username?: string;
    password?: string;
    remember?: boolean;
  };

  const formRef = useRef<HTMLFormElement>(null);

  const onFinish = (values: LoginFormFields) => {
    console.log("Success:", values);

    const payload = {
      login: values.username,
      password: values.password,
    };

    const sendRequest = async () => {
      try {
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/login",
          payload
        );
        console.log(response);
      } catch (err) {
        console.error(err);
      }
    };

    sendRequest();

    handleLoginClick();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Row className="login-page">
        <Col offset={6} span={12}>
          {mode === "login" ? (
            <div className="login-part">
              <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item<LoginFormFields>
                  label="Username"
                  name="username"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item<LoginFormFields>
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item<LoginFormFields>
                  name="remember"
                  valuePropName="checked"
                  wrapperCol={{ offset: 8, span: 16 }}
                >
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Flex gap={8} align="center">
                    Don't have an account?
                    <Button type="link" onClick={() => setMode("register")}>
                      Register
                    </Button>
                  </Flex>
                </Form.Item>
              </Form>
            </div>
          ) : (
            <div className="register-part">
              <form ref={formRef}>
                <label>
                  Login: <input type="text" />
                </label>
                <label>
                  Name: <input type="text" />
                </label>
                <label>
                  Password: <input type="password" />
                </label>
                <label>
                  Repeat Password: <input type="password" />
                </label>
                <button type="button" onClick={handleRegisterClick}>
                  Register
                </button>
              </form>
              <div className="link-container">
                Have an account?
                <button
                  className="link-button"
                  onClick={() => {
                    setMode("login");
                    console.log(formRef.current);
                  }}
                >
                  Log in
                </button>
              </div>
            </div>
          )}
        </Col>
      </Row>
    </>
  );
};
