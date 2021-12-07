import React, { useEffect, useState, useRef } from "react";
import { Table, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { get_accounts } from "../../../service/redux/actions/account"

const TableOutput = () => {

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

  // const expandedRowRender = () => {
  //   const columns = [
  //     { 
  //       title: "Username", 
  //       dataIndex: "username", 
  //       key: "username" 
  //     },
  //     { 
  //       title: "Password", 
  //       dataIndex: "password", 
  //       key: "password" 
  //     },
  //     { 
  //       title: "API Key", 
  //       dataIndex: "apiKey", 
  //       key: "apiKey"
  //     }
  //   ]
  //       return <Table columns={columns} dataSource={dataSource} pagination={false} />;
  //   };

  const columns = [
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      fixed:"left",
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
          value: 'suspended',
        },
      ],
      onFilter: (value, record) => record.status.indexOf(value) === 0,

    },
    {
      title: "Usage Percent",
      dataIndex: "usagepercentage",
      key: "usagepercentage",
      fixed:"left",
      sorter: (a, b) => a.usagepercentage - b.usagepercentage,
      filters: [
        {
          text: '0-25%',
          value: [0,25]
        },
        {
          text: '25-50%',
          value: [25,50],
        },
        {
          text: '50-75%',
          value: [50,75]
        },
        {
          text: '75-100%',
          value: [75,100]
        },
      ],
      onFilter: (value, record) => record.usagepercentage >=value[0] && record.usagepercentage <= value[1]
    },
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
      key: "username" 
    },
    { 
      title: "Password", 
      dataIndex: "password", 
      key: "password" 
    },
    { 
      title: "API Key", 
      dataIndex: "apiKey", 
      key: "apiKey",
      fixed: "right",
    }
    
  ];

  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }

  return (
    
   (<Table style={{ margin: '50px' }} dataSource={dataSource} columns={columns} onChange={onChange} scroll={{ x: 1300 }}
    // expandable={{
    //   expandedRowRender,
    //   rowExpandable: record => record.accountID !== 'Not Expandable',
    // }}
    />)
   
  );
}
export default TableOutput;