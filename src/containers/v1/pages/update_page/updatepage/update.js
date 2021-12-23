import React, { useEffect, useState } from "react";
import {
  Layout,
  Button,
  Form,
  Card,
  Input,
  Select,
  DatePicker,
  InputNumber,
  Tooltip,
  Menu,
} from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  HomeOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import * as ACTION from "../../../service/redux/actions/account";
import { moveToPage } from "../../../service/navigation/services/index";
import { useDispatch } from "react-redux";

import moment from "moment";

const { Option } = Select;

const { Header, Content, Footer } = Layout;

const EditAcc = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("passed in data", props.location.state);
    const account = props.location.state;

    setUpdateAccount(account);
  }, []);

  const [updateAccount, setUpdateAccount] = useState({
    username: "",
    password: "",
    apiKey: "",
    status: "",
    usagepercentage: "",
    usage: "",
    service: "",
    projectCode: "",
    appliedAt: 0,
    associate: "",
    nextmonthbill: 0,
    lastupdatedAt: 0,
  });

  const changeAccount = (key, value) => {
    let tempAccount = JSON.parse(JSON.stringify(updateAccount));
    tempAccount[key] = value;
    setUpdateAccount(tempAccount);
  };

  return (
    <div>
      <div style={{ textAlign: "center", fontSize: 35, width: "100%" }}>
        <strong>LoLi Monitoring</strong>
      </div>
      <Header style={{ width: "100%", color: "white" }}>
        <div />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item
            key="1"
            icon={<HomeOutlined />}
            onClick={() => {
              dispatch(moveToPage("/home"));
            }}
          >
            Home
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<UserAddOutlined />}
            onClick={() => {
              dispatch(moveToPage("/create"));
            }}
          >
            Create New Account
          </Menu.Item>
        </Menu>
      </Header>
      <Content
        style={{
          padding: 20,
          backgroundColor: "#F5F5F5",

          // backgroundImage:CONSTANT.THEME.LOGINBACKGROUND
        }}
      >
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 13 }}
          layout="horizontol"
          marginBottom="15px"
        >
          <Card style={{ margin: 30 }}>
            <div>
              <h1
                style={{
                  textAlign: "center",
                  fontSize: 30,
                  marginTop: 25,
                  marginBottom: 25,
                }}
              >
                Update Account
              </h1>
            </div>
            <Form.Item label="Username">
              <Input
                placeholder="Username"
                onChange={(e) => {
                  changeAccount("username", e.target.value);
                }}
                value={updateAccount.username}
              />
            </Form.Item>
            <Form.Item label="Password">
              <Input.Password
                placeholder="Password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                onChange={(e) => {
                  changeAccount("password", e.target.value);
                }}
                value={updateAccount.password}
              />
            </Form.Item>

            <Form.Item label="API key">
              <Input
                placeholder="API Key"
                onChange={(e) => {
                  changeAccount("apiKey", e.target.value);
                }}
                value={updateAccount.apiKey}
              />
            </Form.Item>

            <Form.Item label="Account Name">
              <Input
                placeholder="Account Name"
                onChange={(e) => {
                  changeAccount("associate", e.target.value);
                }}
                value={updateAccount.associate}
              />
            </Form.Item>

            <Form.Item label="Status">
              <Select
                onChange={(value) => {
                  changeAccount("status", value);
                }}
                value={updateAccount.status}
              >
                <Option value="active">Active</Option>
                <Option value="inactive">Inactive</Option>
                <Option value="suspended">Suspended</Option>
              </Select>
            </Form.Item>

            <Form.Item label="Project Code">
              <Input
                placeholder="Project Code"
                onChange={(e) => {
                  changeAccount("projectCode", e.target.value);
                }}
                value={updateAccount.projectCode}
              />
            </Form.Item>

            <Form.Item label="Usage Percentage">
              <InputNumber
                placeholder="Usage Percentage"
                min={0}
                max={1000}
                defaultValue={0}
                onChange={(value) => {
                  changeAccount("usagepercentage", value);
                }}
                value={updateAccount.usagepercentage}
              />
            </Form.Item>

            <Form.Item label="Usage">
              <InputNumber
                placeholder="Usage"
                min={0}
                max={250000}
                defaultValue={0}
                onChange={(value) => {
                  changeAccount("usage", value);
                }}
                value={updateAccount.usage}
              />
            </Form.Item>

            <Form.Item label="Service">
              <Input
                placeholder="Service"
                onChange={(e) => {
                  changeAccount("service", e.target.value);
                }}
                value={updateAccount.service}
              />
            </Form.Item>

            <Form.Item label="Applied At">
              <DatePicker
                placeholder="Applied At"
                showTime
                allowClear
                format="DD-MM-YYYY HH:mm"
                allowClear
                onChange={(date, dateString) => {
                  changeAccount("appliedAt", date.valueOf());
                  console.log("Selected Time: ", date.valueOf());
                  console.log("Formatted Selected Time: ", dateString);
                }}
                // value={moment()}
              />
            </Form.Item>
            <Form.Item label="Last Updated At">
              <DatePicker
                placeholder="Last Updated At"
                showTime
                allowClear
                format="DD-MM-YYYY HH:mm"
                allowClear
                // onChange={(date) => { updateAccount("nextmonthbill", date) }}
                onChange={(date, dateString) => {
                  changeAccount("lastupdatedAt", date.valueOf());
                  console.log("Selected Time: ", date.valueOf());
                  console.log("Formatted Selected Time: ", dateString);
                }}
                // value={moment()}
              />
            </Form.Item>
            <Form.Item label="Next Month Bill Date">
              <DatePicker
                placeholder="Next Month Bill Date"
                showTime
                allowClear
                format="DD-MM-YYYY HH:mm"
                allowClear
                // onChange={(date) => { updateAccount("nextmonthbill", date) }}
                onChange={(date, dateString) => {
                  changeAccount("nextmonthbill", date.valueOf());
                  console.log("Selected Time: ", date.valueOf());
                  console.log("Formatted Selected Time: ", dateString);
                }}
                // value={moment()}
              />
            </Form.Item>
            {/* <Form.Item>
                <Button
                  style={{ display: "flex", justifyContent: "flex-end" }}
                  onClick={() => dispatch(ACTION.update_account(updateAccount))}
                >
                  Save
                </Button>
              </Form.Item>
              <Form.Item>
                <Button
                  key="cancel"
                  onClick={() => {
                    dispatch(moveToPage("/home"));
                  }}
                >
                  Cancel
                </Button>
              </Form.Item> */}

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginRight: 15,
                marginBottom: 15,
              }}
            >
              <Button
                key="save"
                style={{ marginRight: 15 }}
                onClick={() => dispatch(ACTION.update_account(updateAccount))}
              >
                Save
              </Button>
              <Button
                key="cancel"
                style={{ marginRight: 285 }}
                onClick={() => {
                  dispatch(moveToPage("/home"));
                }}
              >
                Cancel
              </Button>
            </div>
          </Card>
        </Form>
      </Content>
      <Footer
        style={{
          textAlign: "center",
          width: "100%",
          backgroundColor: "#DCDCDC",
        }}
      >
        LoLi Monitoring Project ©2021 Created by UTAR Interns
      </Footer>
    </div>
  );
};

export default EditAcc;
