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
        <Header style={{textAlign:'center', fontSize:40, zIndex: 1, width: '100%', color:'white'}}>
          <h1 style={{color:'white'}}>LoLi Monitoring</h1>
        </Header>
    <Layout>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 300,
            backgroundColor:'#E0FFFF',
            backgroundImage:CONSTANT.THEME.LOGINBACKGROUND

          }}
        >
          
          <ModalShow/>
          <TableShow/>
        </Content>
      </Layout>
    </Layout>
  </Layout>
    );
  }
}

export default SiderDemo;