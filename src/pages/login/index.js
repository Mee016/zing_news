import { Button, Form, Input, Spin, notification } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SmileOutlined } from "@ant-design/icons";
import { loginService } from "../../services/loginService";

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setIsLoading(true);
    const response = await loginService(values);
    // console.log(response);
    const { status, data } = response;
    if (status === 200) {
      localStorage.setItem("token", data.access_token);
      navigate("/");
      notification.open({
        message: "Dang nhap",
        description: "Dang nhap thanh cong!",
        icon: (
          <SmileOutlined
            style={{
              color: "red",
            }}
          />
        ),
      });
    } else {
      notification.open({
        message: "Dang nhap",
        description: "Dang nhap that bai!",
      });
    }
    setIsLoading(false);
  };

  return (
    <>
      <Spin spinning={isLoading}>
        <h1 style={{ marginLeft: "300px" }}>Login</h1>
        <Form 
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Spin>
    </>
  );
}

export default Login;
