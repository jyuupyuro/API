import React, { useEffect, useState, useRef } from "react";
import { Table, Button, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { get_accounts } from "../../../service/redux/actions/account"

const TableOutput = () => {
  const { Option } = Select;

  const [dataSource, setdatasource] = useState([])

  const dispatch = useDispatch()
  const accounts = useSelector(state => state.containers.v1.account)
  
  useEffect(() => {

    console.log("Component Did mount")
    dispatch(get_accounts())
  }, [])

  const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  const prevAccounts = usePrevious(accounts)

  useEffect(() => {
    if (
      JSON.stringify(prevAccounts) !== JSON.stringify(accounts)
    ) {
      setdatasource(Object.values(accounts.byAccountId).map(account => {
        return{
          key: account.accountID,
          ...account
        }
      }))
    }
  })


  const columns = [
    {
      title: "Service",
      dataIndex: "service",
      key: "service",
    },
    {
      title: "Associate",
      dataIndex: "associate",
      key: "associate",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Project Code",
      dataIndex: "usage",
      key: "usage",
    },
    {
      title: "Usage",
      dataIndex: "usage",
      key: "usage",
    },
    {
      title: "Usage Percent",
      dataIndex: "usagepercentage",
      key: "usagepercentage",
    },
    {
      title: "Applied At",
      dataIndex: "appliedAt",
      key: "appliedAt",
    },
    {
      title: "Next Month Bill Date",
      dataIndex: "nextmonthbill",
      key: "nextmonthbill",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Password",
      dataIndex: "password",
      key: "password",
    },
    {
      title: "API Key",
      dataIndex: "apiKey",
      key: "apiKey",
    },
  ];

  return (
    <div>
      <Select
              placeholder="API Status"
              style={{ width: 120 }}
              onChange={(e) => {
                console.log(e);
              }}
              allowClear
            >
              <Option value="0">Inactive</Option>
              <Option value="1">Active</Option>
              <Option value="2">Suspended</Option>
            </Select>
            <Select
              placeholder="API Usage"
              style={{ width: 120 }}
              onChange={(e) => {
                console.log(e);
                
              }}
              allowClear
            >
              <Option value="1st">1-25</Option>
              <Option value="2nd">25-50</Option>
              <Option value="3rd">50-75</Option>
              <Option value="4th">75-100</Option>
            </Select>
      <Table style={{ margin: '50px' }} dataSource={dataSource} columns={columns} />
    </div>
  );
}


export default TableOutput;