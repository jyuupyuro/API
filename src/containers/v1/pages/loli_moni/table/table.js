import React, { useEffect, useState, useRef } from "react";
import ReactDOM from 'react-dom';
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
      filters: [
        {
          text: 'Active',
          value: 'active',
        },
        {
          text: 'Inactive',
          value: 'inactive',
        },
        {
          text: 'Suspended',
          value: 'Suspended',
        },
      ],
      onFilter: (value, record) => record.address.indexOf(value) === 0,

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

  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }

  return (
    
   (<Table style={{ margin: '50px' }} dataSource={dataSource} columns={columns} onChange={onChange} />)
   
  );
}
export default TableOutput;