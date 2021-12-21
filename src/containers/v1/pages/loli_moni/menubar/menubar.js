import React, { useEffect, useState, useRef } from "react";
import CONSTANT from "../constants";
import { moveToPage } from "../../../service/navigation/services/index"
import { useDispatch, useSelector } from "react-redux";
import { Layout, Menu, Button } from 'antd';
import {
  HomeOutlined,
  UserAddOutlined
} from '@ant-design/icons';

import TableShow from '../table/table'
import ModalShow from '../modal/modal';

const { Header, Content, Sider, Footer } = Layout;
const  Menubar = () => {

  const dispatch = useDispatch()


    return (
      <div>
      <Layout>
        <Header style={{textAlign:'center', fontSize:35, width: '100%', color:'white'}}>
          <h1 style={{color:'white'}}>LoLi Monitoring</h1>
        </Header>
    <Layout>
      <Sider>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<HomeOutlined />} onClick={() => {
              dispatch(moveToPage("/back", )); 
            }}>
              Home
            </Menu.Item>
            <Menu.Item key="2" icon={<UserAddOutlined />} onClick={() => {
              dispatch(moveToPage("/create")); 
            }}>
              Create New Account
            </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
      <Layout>
        <Content
       
          style={{
            padding: 20,
            minHeight: 800,
            backgroundColor:'#F5F5F5',
            // backgroundImage:CONSTANT.THEME.LOGINBACKGROUND
          }}> 
          <TableShow/>
        </Content>
        </Layout>
      </Layout>
    </Layout>
  </Layout>
  </div>
    );
  }


export default Menubar;