import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { Modal, Button, Form, Input, Table, PageHeader, Layout, Menu } from "antd";
import { useDispatch } from "react-redux";

import { moveToPage, goBackToPrev } from "../../service/navigation/services";

const Test = (props) => {
  const [account, setAccount] = useState("");
  const [api, setAPI] = useState("");
  const [bill, setBill] = useState("");

  const dispatch = useDispatch();

  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const dataSource = [
    {
      key: "1",
      last_updated: "Steve Rogers",
      acc: 105,
      status: "10 Downing Street",
      usage: "Blabla",
      usage_per: "uuefnriw",
      next_mon_bill_date: "12/10/20",
    },
    {
      key: "2",
      last_updated: "Steve Rogers",
      acc: 105,
      status: "10 Downing Street",
      usage: "Blabla",
      usage_per: "uuefnriw",
      next_mon_bill_date: "12/10/20",
    },
    {
      key: "3",
      last_updated: "Steve Rogers",
      acc: 105,
      status: "10 Downing Street",
      usage: "Blabla",
      usage_per: "uuefnriw",
      next_mon_bill_date: "12/10/20",
    },
    {
      key: "4",
      last_updated: "Steve Rogers",
      acc: 105,
      status: "10 Downing Street",
      usage: "Blabla",
      usage_per: "uuefnriw",
      next_mon_bill_date: "12/10/20",
    },
    {
      key: "5",
      last_updated: "Steve Rogers",
      acc: 105,
      status: "10 Downing Street",
      usage: "Blabla",
      usage_per: "uuefnriw",
      next_mon_bill_date: "12/10/20",
    },
    {
      key: "6",
      last_updated: "Steve Rogers",
      acc: 105,
      status: "10 Downing Street",
      usage: "Blabla",
      usage_per: "uuefnriw",
      next_mon_bill_date: "12/10/20",
    },
  ];

  const columns = [
    {
      title: "Last Updated",
      dataIndex: "last_updated",
      key: "last_updated",
    },
    {
      title: "Account",
      dataIndex: "acc",
      key: "acc",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Usage",
      dataIndex: "usage",
      key: "usage",
    },
    {
      title: "Usage Percentage",
      dataIndex: "usage_per",
      key: "usage_per",
    },
    {
      title: "Next Month Bill",
      dataIndex: "next_mon_bill_date",
      key: "next_mon_bill_date",
    },
  ];

  const { Content} = Layout;


  return (
    <div>

      <Layout>
        <PageHeader 
        title='LoLi Monitoring'
        />

        <Content style = {{padding: '10px 25px'}}>
        <Button type="primary" variant="contained" 
          style={{
            float: 'right'
            // display: 'flex',
            // flex: 1,
            // justifyContent: 'flex-end'
          }} 
          color="primary" 
          className="float-right" 
          onClick={showModal}
        >
          Create Account
        </Button>

      <Layout>
      <Modal
        visible={isModalVisible}
        onCancel={handleCancel}
        onOk={handleOk}
        footer={[
          <Button key="save"  onClick={handleOk}>Save</Button>,
          <Button key="cancel"  onClick={handleCancel}>Cancel</Button>
        ]}
      >
         <Form
            labelCol={{ span:8 }}
            wrapperCol={{span:13}}
            layout="horizontol"
            marginBottom= "15px"
            onChange={(e) => setAccount(e.target.value)}
        >
        <div>
        <h2>Add New Account</h2>
        </div>
        <Form.Item label='Account'>
          <Input
            placeholder="Account"
            value={account}
          />
        </Form.Item>
        <Form.Item label='API key'>
          <Input
            placeholder="API Key"
            value={api}
          />
        </Form.Item>

        <Form.Item label='Next Month Bill Date'>
          <Input
            placeholder="Next Month Bill Date"
            value={bill}
          />
        </Form.Item>
        </Form>
      </Modal>
      </Layout>
      </Content>
      </Layout>

      <div>
        <Table style={{margin:'50px'}}dataSource={dataSource} columns={columns} />;
      </div>
    </div>
  );

  // }
};

export default Test;
