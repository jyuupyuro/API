import React, { useState } from "react";
import {
  Button,
  Form,
  Input,
  Select,
  DatePicker,
  InputNumber,
  Menu,
  Layout,
  Card,
} from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  HomeOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import * as ACTION from "../../../service/redux/actions/account";
import { useDispatch } from "react-redux";
import { moveToPage } from "../../../service/navigation/services/index";

const { Option } = Select;
const { Header, Content, Footer } = Layout;

const ModalAdd = () => {
  const dispatch = useDispatch();

  const [newAccount, setNewAccount] = useState({
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

  const updateAccount = (key, value) => {
    let tempAccount = JSON.parse(JSON.stringify(newAccount));
    tempAccount[key] = value;
    setNewAccount(tempAccount);
  };

  return (
    <div>
      <div>
        <div style={{ textAlign: "center", fontSize: 35, width: "100%" }}>
          <strong>LoLi Monitoring</strong>
        </div>
        <Header style={{ width: "100%", color: "white" }}>
          <div />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
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
        <div>
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
                    Create New Account
                  </h1>
                </div>
                <Form.Item label="Email">
                  <Input
                    placeholder="Enter an Email"
                    allowClear
                    onChange={(e) => {
                      updateAccount("username", e.target.value);
                    }}
                  />
                </Form.Item>
                <Form.Item label="Password">
                  <Input.Password
                    placeholder="Enter a Password"
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                    allowClear
                    onChange={(e) => {
                      updateAccount("password", e.target.value);
                    }}
                  />
                </Form.Item>

                <Form.Item label="API key">
                  <Input
                    placeholder="Enter an API Key"
                    allowClear
                    onChange={(e) => {
                      updateAccount("apiKey", e.target.value);
                    }}
                  />
                </Form.Item>

                <Form.Item label="Associate">
                  <Input
                    placeholder="Enter an Associate"
                    allowClear
                    onChange={(e) => {
                      updateAccount("associate", e.target.value);
                    }}
                  />
                </Form.Item>

                <Form.Item label="Status">
                  <Select
                    placeholder="Enter a Status"
                    onChange={(value) => {
                      updateAccount("status", value);
                    }}
                  >
                    <Option value="active">Active</Option>
                    <Option value="inactive">Inactive</Option>
                    <Option value="suspended">Suspended</Option>
                  </Select>
                </Form.Item>

                <Form.Item label="Project Code">
                  <Input
                    placeholder="Enter a Project Code"
                    allowClear
                    onChange={(e) => {
                      updateAccount("projectCode", e.target.value);
                    }}
                  />
                </Form.Item>

                <Form.Item label="Usage Percentage">
                  <InputNumber
                    placeholder="Enter a Usage Percentage"
                    min={0}
                    max={1000}
                    defaultValue={0}
                    onChange={(value) => {
                      updateAccount("usagepercentage", value);
                    }}
                  />
                </Form.Item>

                <Form.Item label="Usage">
                  <InputNumber
                    placeholder="Enter a Usage"
                    min={0}
                    max={250000}
                    defaultValue={0}
                    onChange={(value) => {
                      updateAccount("usage", value);
                    }}
                  />
                </Form.Item>

                <Form.Item label="Service">
                  <Input
                    placeholder="Enter a Service"
                    allowClear
                    onChange={(e) => {
                      updateAccount("service", e.target.value);
                    }}
                  />
                </Form.Item>

                <Form.Item label="Applied At">
                  <DatePicker
                    label="Applied At"
                    placeholder="Enter an Applied At date"
                    showTime
                    allowClear = {false}
                    format="DD-MM-YYYY HH:mm"                   
                    //   onChange={(date) => { updateAccount("appliedAt", date)
                    // console.log("aplat",date)
                    onChange={(date, dateString) => {
                      updateAccount("appliedAt", date.valueOf());
                      console.log("Selected Time: ", date.valueOf());
                      console.log("Formatted Selected Time: ", dateString);
                    }}

                    //onChange={(e) => { updateAccount("appliedAt", e.target.value) }}
                  />
                </Form.Item>
                <Form.Item label="Last Updated At">
                  <DatePicker
                    placeholder="Enter a Last Updated At date"
                    showTime
                    allowClear = {false}
                    format="DD-MM-YYYY HH:mm"
                    // onChange={(date) => { updateAccount("nextmonthbill", date) }}
                    onChange={(date, dateString) => {
                      updateAccount("lastupdatedAt", date.valueOf());
                      console.log("Selected Time: ", date.valueOf());
                      console.log("Formatted Selected Time: ", dateString);
                    }}
                  />
                </Form.Item>
                <Form.Item label="Next Month Bill Date">
                  <DatePicker
                    placeholder="Enter a Next Month Bill Date"
                    showTime
                    format="DD-MM-YYYY HH:mm"
                    allowClear = {false}
                    // onChange={(date) => { updateAccount("nextmonthbill", date) }}
                    onChange={(date, dateString) => {
                      updateAccount("nextmonthbill", date.valueOf());
                      console.log("Selected Time: ", date.valueOf());
                      console.log("Formatted Selected Time: ", dateString);
                    }}
                  />
                </Form.Item>
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
                    onClick={() => {
                      dispatch(ACTION.add_account(newAccount));
                      console.log("appliedAt", newAccount.appliedAt);
                    }}
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
          <Footer style={{ textAlign: "center", backgroundColor: "#DCDCDC" }}>
            LoLi Monitoring Project ©2021 Created by UTAR Interns
          </Footer>
        </div>
      </div>
    </div>
  );
};

export default ModalAdd;
