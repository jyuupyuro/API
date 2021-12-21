import React, { useEffect, useState } from 'react';
import { Layout, Button, Form, Input, Select, DatePicker, InputNumber } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import * as ACTION from '../../../service/redux/actions/account'
import { useDispatch } from 'react-redux';
const { Option } = Select;

const { Header, Content, Footer } = Layout;

const EditAcc = (props) => {

  const dispatch = useDispatch()


  useEffect(() => {
    console.log("passed in data", props.location.state)
    const account = props.location.state

    setUpdateAccount(account)
  }, [])

  const [updateAccount, setUpdateAccount] = useState({
    username: '',
    password: '',
    apiKey: '',
    status: '',
    usagepercentage: '',
    usage: '',
    service: '',
    projectCode: '',
    appliedAt: 0,
    associate: '',
    nextmonthbill: 0,
    lastupdatedAt: 0,
  })

  const changeAccount = (key, value) => {
    let tempAccount = JSON.parse(JSON.stringify(updateAccount))
    tempAccount[key] = value
    setUpdateAccount(tempAccount)
  }

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };



  return (
    <Layout>
      <Header style={{textAlign:'center', fontSize:35, width: '100%', color:'white'}}>
          <h1 style={{color:'white'}}>LoLi Monitoring</h1>
        </Header>
    <Layout>
      <Content>
        <Form
          labelCol={{ span: 9 }}
          wrapperCol={{ span: 7 }}
          layout="horizontol"
          marginBottom="15px"
        >
          <div>
            <h1 style={{textAlign:"center", fontSize:30, marginTop:25, marginBottom:25}}>Update Account</h1>
          </div>
          <Form.Item label='Username'>
            <Input
              placeholder="Username"
              onChange={(e) => { changeAccount("username", e.target.value) }}
              value={updateAccount.username}
            />

          </Form.Item>
          <Form.Item label='Password'>
            <Input.Password
              placeholder="Password"
              iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              onChange={(e) => { changeAccount("password", e.target.value) }}
              value={updateAccount.password}

            />
          </Form.Item>

          <Form.Item label='API key'>
            <Input
              placeholder="API Key"
              onChange={(e) => { changeAccount("apiKey", e.target.value) }}
              value={updateAccount.apiKey}

            />
          </Form.Item>

          <Form.Item label='Associate'>
            <Input
              placeholder="Associate"
              onChange={(e) => { changeAccount("associate", e.target.value) }}
              value={updateAccount.associate}

            />
          </Form.Item>

          <Form.Item label='Status'>
            <Select onChange={(value) => {
              changeAccount("status", value)
            }}>
              <Option value="active">Active</Option>
              <Option value="inactive">Inactive</Option>
              <Option value="suspended">Suspended</Option>
            </Select>
          </Form.Item>

            
          <Form.Item label='Project Code'>
            <Input
              placeholder="Project Code"
              onChange={(e) => { changeAccount("projectCode", e.target.value) }}
              value={updateAccount.projectCode}

            />
          </Form.Item>

          <Form.Item label='Usage Percentage'>
            <InputNumber
              placeholder="Usage Percentage"
              min={0}
              max={10000}
              defaultValue={0}
              onChange={(e) => { changeAccount("usagepercentage", e.target.value) }}
              value={updateAccount.usagepercentage}

            />
          </Form.Item>

          <Form.Item label='Usage'>
            <InputNumber
              placeholder="Usage"
              min={0}
              max={10000}
              defaultValue={0}
              onChange={(e) => { changeAccount("usage", e.target.value) }}
              value={updateAccount.usage}

            />
          </Form.Item>

          <Form.Item label='Service'>
            <Input
              placeholder="Service"
              onChange={(e) => { changeAccount("service", e.target.value) }}
              value={updateAccount.service}

            />
          </Form.Item>

          <Form.Item label='appliedAt'>
          <DatePicker
              label='appliedAt'
                placeholder="appliedAt"
                showTime
                allowClear
                format="MM-DD-YYYY HH:mm"
                allowClear
                //   onChange={(date) => { updateAccount("appliedAt", date)
                // console.log("aplat",date)
                onChange={(date, dateString) => {
                  changeAccount("appliedAt", date.valueOf())
                  console.log('Selected Time: ', date.valueOf());
                  console.log('Formatted Selected Time: ', dateString);
                }}

              //onChange={(e) => { updateAccount("appliedAt", e.target.value) }}
              />
          </Form.Item>

          <Form.Item label='Next Month Bill Date'>
          <DatePicker
                placeholder="Next Month Bill Date"
                showTime
                allowClear
                format="MM-DD-YYYY HH:mm"
                allowClear
                // onChange={(date) => { updateAccount("nextmonthbill", date) }}
                onChange={(date, dateString) => {
                  changeAccount("nextmonthbill", date.valueOf())
                  console.log('Selected Time: ', date.valueOf());
                  console.log('Formatted Selected Time: ', dateString);
                }}
              />
          </Form.Item>
          <Form.Item label='lastupdatedAt'>
              <DatePicker
                placeholder="lastupdatedAt"
                showTime
                allowClear
                format="MM-DD-YYYY HH:mm"
                allowClear
                // onChange={(date) => { updateAccount("nextmonthbill", date) }}
                onChange={(date, dateString) => {
                  changeAccount("lastupdatedAt", date.valueOf())
                  console.log('Selected Time: ', date.valueOf());
                  console.log('Formatted Selected Time: ', dateString);
                }}
              />
            </Form.Item>
          <Form.Item>
            <Button style={{position:'absolute',  right: -565}} onClick={() => dispatch(ACTION.update_account(updateAccount))
            }>
              Save
            </Button>
          </Form.Item>
        </Form>
        <Layout>
        <Footer style={{textAlign:'center'}}>LoLi Monitoring ©2021 Created by Pinetop Intern (UTAR)</Footer>
        </Layout>
        </Content>
      </Layout>
    </Layout>


  );

}

export default EditAcc;

