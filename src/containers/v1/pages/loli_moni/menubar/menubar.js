import React, { useState } from "react";
import CONSTANT from "../constants";
import { moveToPage } from "../../../service/navigation/services/index";
import { useDispatch } from "react-redux";
import { Layout, Menu } from "antd";
import { HomeOutlined, UserAddOutlined } from "@ant-design/icons";

import TableShow from "../table/table";

const { Header, Content, Footer } = Layout;

const MenuBar = () => {
  const dispatch = useDispatch();
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
        <TableShow />
      </Content>

      <Footer style={{ textAlign: "center", backgroundColor: "#DCDCDC" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </div>
  );
};

export default MenuBar;
