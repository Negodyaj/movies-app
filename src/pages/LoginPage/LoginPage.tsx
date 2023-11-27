import { Button, Checkbox, Col, Flex, Form, Input, Row } from "antd";
import { User } from "../../models/user";
import "./LoginPage.scss";

import React, { useState } from "react";

type LoginPageProps = {
  logInHandler: (user: User) => void;
};

export const LoginPage = (props: LoginPageProps) => {
  const [mode, setMode] = useState<"login" | "register">("login");
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

  type FieldType = {
    username?: string;
    password?: string;
    remember?: boolean;
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
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
                <Form.Item<FieldType>
                  label="Username"
                  name="username"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item<FieldType>
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item<FieldType>
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
              <form>
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
                  onClick={() => setMode("login")}
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
