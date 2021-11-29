import React, { useEffect, useState, useRef } from "react";
import { Table, Button } from "antd";
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
      dataIndex: "next_mon_bill_date",
      key: "next_mon_bill_date",
    },
  ];

  return (
    <div>
      <Table style={{ margin: '50px' }} dataSource={dataSource} columns={columns} />
    </div>
  );
}


export default TableOutput;