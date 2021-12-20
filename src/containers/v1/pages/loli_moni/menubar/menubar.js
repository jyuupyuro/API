import React from 'react';
import CONSTANT from "../constants";

import { Layout, Menu, PageHeader, Breadcrumb } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  LaptopOutlined,
  NotificationOutlined
} from '@ant-design/icons';

import TableShow from '../table/table'
import ModalShow from '../modal/modal';

const { SubMenu } = Menu;
const { Header, Content, Footer } = Layout;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Header style={{textAlign:'center', fontSize:35, width: '100%', color:'white'}}>
          <h1 style={{color:'white'}}>LoLi Monitoring</h1>
        </Header>
    <Layout>
      <Layout>
        <Content
          style={{
            padding: 20,
            minHeight: 300,
            backgroundColor:'#F5FFFA',
            // backgroundImage:CONSTANT.THEME.LOGINBACKGROUND
          }}> 
          <ModalShow/>
          <TableShow/>
        </Content>
        <Footer style={{textAlign:'center'}}>LoLi Monitoring ©2021 Created by Pinetop Intern (UTAR)</Footer>
      </Layout>
    </Layout>
  </Layout>
    );
  }
}

export default SiderDemo;