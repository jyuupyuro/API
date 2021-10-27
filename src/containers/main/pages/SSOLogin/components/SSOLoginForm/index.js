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
  const [account, setAccount] = useState("");
  const [api, setAPI] = useState("");
  const [bill, setBill] = useState("");

  return (
    <Form className="login-form">
        <label>Add New Account</label>
      <Form.Item style={{ marginBottom: "15px" }}>
        <label> Account</label>
        <Input
          prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="Account"
          value={account}
          onChange={(e) => setAccount(e.target.value)}
        />
      </Form.Item>
      <Form.Item style={{ marginBottom: "15px" }}>
        <label> API Key</label>
        <Input
          prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          
          placeholder="API Key"
          value={api}
          onChange={(e) => setAPI(e.target.value)}
        />
      </Form.Item>

      <Form.Item style={{ marginBottom: "15px" }}>
        <label> Next Month Bill Date</label>
        <Input
          prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          
          placeholder="Next Month Bill Date"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
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
          onClick={() => props.onLoginPress(account, setAPI)}
          loading={props.isLoginLoading}
        >
          Save
        </Button>
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
          onClick={() => props.onLoginPress(account, setAPI)}
          loading={props.isLoginLoading}
        >
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SSOLoginForm;
