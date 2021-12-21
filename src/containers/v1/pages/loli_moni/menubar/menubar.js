import React from 'react';
import CONSTANT from "../constants";
import { moveToPage } from "../../../service/navigation/services/index"
import { useDispatch, useSelector } from "react-redux";
import { Layout, Menu, Button } from 'antd';
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
const  Menubar = () => {
  

  const dispatch = useDispatch()
  
    return (
      <div>
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
         <Button onClick={() => {
              dispatch(moveToPage("/create")); 
            }}>Create Account</Button>
          <TableShow/>
        </Content>
        <Footer style={{textAlign:'center'}}>LoLi Monitoring ©2021 Created by Pinetop Intern (UTAR)</Footer>
      </Layout>
    </Layout>
  </Layout>
  </div>
    );
  }


export default Menubar;