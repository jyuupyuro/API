import React, { useState } from 'react';
import { Modal, Button, Form, Input, Select, DatePicker, InputNumber } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import * as ACTION from '../../../service/redux/actions/account'
import { useDispatch } from 'react-redux';
import moment from 'moment'


const { Option } = Select;

const ModalAdd = () => {

  const dispatch = useDispatch()

  const [newAccount, setNewAccount] = useState({
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


  const updateAccount = (key, value) => {
    let tempAccount = JSON.parse(JSON.stringify(newAccount))
    tempAccount[key] = value
    setNewAccount(tempAccount)
  }

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Button type="primary" variant="contained"
        style={{
          float: 'right',
          marginTop: 40,
          marginRight: 75
        }}
        color="primary"
        className="float-right"
        onClick={showModal}
      >
        Create Account
      </Button>
      <div>
        <Modal
          visible={isModalVisible}
          onCancel={handleCancel}
          onOk={() => console.log(newAccount)}
          footer={[
            <Button key="save" onClick={() => {
              dispatch(ACTION.add_account(newAccount))
              console.log("appliedat", newAccount.appliedAt)
            }}>Save</Button>,
            <Button key="cancel" onClick={handleCancel}>Cancel</Button>
          ]}
        >
          <Form
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 13 }}
            layout="horizontol"
            marginBottom="15px"
          >
            <div>
              <h1 style={{ textAlign: "center", marginBottom: 25 }}>Create New Account</h1>
            </div>
            <Form.Item label='Username'>
              <Input
                placeholder="Username"
                allowClear
                onChange={(e) => { updateAccount("username", e.target.value) }}
              />

            </Form.Item>
            <Form.Item label='Password'>
              <Input.Password
                placeholder="Password"
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                allowClear
                onChange={(e) => { updateAccount("password", e.target.value) }}
              />
            </Form.Item>

            <Form.Item label='API key'>
              <Input
                placeholder="API Key"
                allowClear
                onChange={(e) => { updateAccount("apiKey", e.target.value) }}
              />
            </Form.Item>

            <Form.Item label='Associate'>
              <Input
                placeholder="Associate"
                allowClear
                onChange={(e) => { updateAccount("associate", e.target.value) }}
              />
            </Form.Item>

            <Form.Item label='Status'>
              <Select onChange={(value) => {
                updateAccount("status", value)
              }}>
                <Option value="active">Active</Option>
                <Option value="inactive">Inactive</Option>
                <Option value="suspended">Suspended</Option>
              </Select>
            </Form.Item>

            <Form.Item label='Project Code'>
              <Input
                placeholder="Project Code"
                allowClear
                onChange={(e) => { updateAccount("projectCode", e.target.value) }}
              />
            </Form.Item>

            <Form.Item label='Usage Percentage'>
              <InputNumber
                placeholder="Usage Percentage"
                min={0}
                max={100}
                defaultValue={0}
                onChange={(num) => { updateAccount("usagepercentage", num) }}
              />
            </Form.Item>

            <Form.Item label='Usage'>
              <InputNumber
                placeholder="Usage"
                min={0}
                max={10000}
                defaultValue={0}
                onChange={(num) => { updateAccount("usage", num) }}
              />
            </Form.Item>

            <Form.Item label='Service'>
              <Input
                placeholder="Service"
                allowClear
                onChange={(e) => { updateAccount("service", e.target.value) }}
              />
            </Form.Item>

            <Form.Item label='Applied At'>
              <DatePicker
              label='Applied At'
                placeholder="Applied At"
                showTime
                allowClear
                format="MM-DD-YYYY HH:mm"
                allowClear
                //   onChange={(date) => { updateAccount("appliedAt", date)
                // console.log("aplat",date)
                onChange={(date, dateString) => {
                  updateAccount("appliedAt", date.valueOf())
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
                  updateAccount("nextmonthbill", date.valueOf())
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
                  updateAccount("lastupdatedAt", date.valueOf())
                  console.log('Selected Time: ', date.valueOf());
                  console.log('Formatted Selected Time: ', dateString);
                }}
              />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );

}

export default ModalAdd;