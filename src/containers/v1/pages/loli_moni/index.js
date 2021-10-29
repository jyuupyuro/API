import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { Modal, Button, PageHeader, Layout, Menu, Breadcrumb } from "antd";
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { useDispatch } from "react-redux";

import { moveToPage, goBackToPrev } from "../../service/navigation/services";

import MenuShow from './menubar/menubar';
import TableShow from './table/table'
import ModalShow from './modal/modal';

const Test = (props) => {
  
  const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;


  return (
    <div>
    <Layout>
    <MenuShow/>
    </Layout>
    </div>
  );

  // }
};

export default Test;



