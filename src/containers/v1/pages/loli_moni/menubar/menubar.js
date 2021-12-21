import React, { useEffect, useState, useRef } from "react";
import CONSTANT from "../constants";

import { useDispatch, useSelector } from "react-redux";
import { get_accounts } from "../../../service/redux/actions/account"
import { moveToPage } from "../../../service/navigation/services/index"

import { Layout, Card, Menu } from 'antd';
import { UserAddOutlined, HomeOutlined, } from '@ant-design/icons';

import TableShow from '../table/table'
import ModalShow from '../modal/modal';

const { Header, Content, Footer, Sider } = Layout;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  // toggle = () => {
  //   this.setState({
  //     collapsed: !this.state.collapsed,
  //   });
  // };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout>
        <Header style={{textAlign:'center', fontSize:35, width: '100%', color:'white'}}>
          <h1 style={{color:'white'}}>LoLi Monitoring</h1>
        </Header>
    <Layout>
      <Layout>
      <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<HomeOutlined />}>
              Home
            </Menu.Item>
            <Menu.Item key="2" icon={<UserAddOutlined />}>
              Create New Account
            </Menu.Item>
      </Menu>
      </Sider>
      <Layout>
        <Content
          style={{
            padding: 20,
            minHeight: 800,
            backgroundColor:'#F5F5F5',
            // backgroundImage:CONSTANT.THEME.LOGINBACKGROUND
          }}> 
          <Card style={{width:1300, position:'absolute' , right: 15 , marginTop:40, backgroundColor:'#FFFFFF'}}>
          <ModalShow/>
          <TableShow/>
          </Card>
        </Content>
        </Layout>
      </Layout>
    </Layout>
  </Layout>
    );
  }
}

export default SiderDemo;