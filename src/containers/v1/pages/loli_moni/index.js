import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { Modal, Button, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";

import { moveToPage, goBackToPrev } from "../../service/navigation/services";

import { Table, Space, Radio } from "antd";

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

  // function SpaceSize() {
  //   const [size, setSize] = useState(1000);

  return (
    <div>
      <section>
        <h1>LoLi Monitoring</h1>
      </section>

      <section>
        <Button type="primary" variant="contained" style={{float: 'right'}} color="primary" className="float-right" onClick={showModal}>
          Create Account
        </Button>
      </section>
      <Modal
        visible={isModalVisible}
        onCancel={handleCancel}
        onOk={handleOk}
        footer={[
          <Button key="save"  onClick={handleOk}>Save</Button>,
          <Button key="cancel"  onClick={handleCancel}>Cancel</Button>
        ]}
      >
        <label>Add New Account</label>
        <Form.Item style={{ marginBottom: "15px" }}>
          <label> Account</label>
          <Input
            prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Account"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
          />
        </Form.Item>
        <Form.Item style={{ marginBottom: "15px" }}>
          <label> API Key</label>
          <Input
            prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="API Key"
            value={api}
            onChange={(e) => setAPI(e.target.value)}
          />
        </Form.Item>

        <Form.Item style={{ marginBottom: "15px" }}>
          <label> Next Month Bill Date</label>
          <Input
            prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Next Month Bill Date"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
          />
        </Form.Item>
      </Modal>

      <section>
        <Table dataSource={dataSource} columns={columns} />;
      </section>
    </div>
  );

  // }
};

export default Test;
