import React, { useState } from "react";

import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

/**
 * Constant
 */
import CONSTANT from "../../../../constants";

/**
 * Styles
 */
import "./index.css";

const SSOLoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  return (
    <Form className="login-form">
        <strong>Please LOG IN</strong>
      <Form.Item style={{ marginBottom: "15px" }}>
        <label> Email</label>
        <Input
          prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Item>
      <Form.Item style={{ marginBottom: "15px" }}>
        <label> password</label>
        <Input
          prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Item>

      

      <Form.Item>
        <Button
          style={{
            width: "100%",
            backgroundColor: CONSTANT.THEME.THEME_COLOR,
            border: "none",
            boxShadow: "2px 2px 5px #696969",
          }}
          type="primary"
          className="login-form-button"
          onClick={() => props.onLoginPress(email, password)}
          loading={props.isLoginLoading}
        >
          LOG IN
        </Button>
      </Form.Item>
      <Form.Item>
        
      </Form.Item>
    </Form>
  );
};

export default SSOLoginForm;
