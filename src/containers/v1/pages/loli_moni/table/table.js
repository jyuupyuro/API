import React, { useEffect, useState, useRef } from "react";
import { Table, Select, Typography } from "antd";
import { EditOutlined } from "@ant-design/icons"
import { useDispatch, useSelector } from "react-redux";
import { get_accounts } from "../../../service/redux/actions/account"
import { moveToPage } from "../../../service/navigation/services/index"
import moment from 'moment';

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
        return {
          key: account.accountID,
          ...account,

          appliedAt: moment(account.appliedAt).format("L, hh.mm a"),
          lastupdatedAt: moment(account.lastupdatedAt).format("L, hh.mm a"),
          nextmonthbill : moment(account.nextmonthbill).format("L, hh.mm a")
        }
      }))
    }
  })

  function NestedTable() {
    const expanded = (a) => {
      const columns = [
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
          key: "apiKey"
        }
      ];
      return <Table columns={columns} dataSource={[a]} pagination={false} />;
    };


    const columns = [
      {
        title: "Associate",
        dataIndex: "associate",
        key: "associate",
        width: '15%',
      },
      {
        title: "Service",
        dataIndex: "service",
        key: "service",
        width: '15%',
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
        width: '10%',
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
        title: "Project Code",
        dataIndex: "projectCode",
        key: "projectCode",
        width: '10%',
      },
      {
        title: "Usage Percentage",
        dataIndex: "usagepercentage",
        key: "usagepercentage",
        width: '15%',
        sorter: (a, b) => a.usagepercentage - b.usagepercentage,
        filters: [
          {
            text: '0-25%',
            value: [0, 25]
          },
          {
            text: '25-50%',
            value: [25, 50],
          },
          {
            text: '50-75%',
            value: [50, 75]
          },
          {
            text: '75-100%',
            value: [75, 100]
          },
        ],
        onFilter: (value, record) => record.usagepercentage >= value[0] && record.usagepercentage <= value[1]
      },
      {
        title: "Usage",
        dataIndex: "usage",
        key: "usage",
        width: '10%',
      },
      {
        title: "Applied At",
        dataIndex: "appliedAt",
        key: "appliedAt",
        width: '10%',
      },
      {
        title: "Last Updated At",
        dataIndex: "lastupdatedAt",
        key: "lastupdatedAt",
        width: '10%',
      },
      {
        title: "Next Month Bill Date",
        dataIndex: "nextmonthbill",
        key: "nextmonthbill",
        width: '10%',

      },
      {
        title: "Action",
        render: (a, b, c, d) => {
          return (
            // <EditOutlined onClick={() => {
            //   dispatch(moveToPage("/update", b)); 
            // }} />

            <Typography.Link  onClick={() => {
              dispatch(moveToPage("/update", b));}}> 
            Update
            </Typography.Link>
          )
        },
        width: '10%'
      },

    ];

    function onChange(pagination, filters, sorter, extra) {
      console.log('params', pagination, filters, sorter, extra);
    }

    return (

      (<Table style={{ margin: '50px', width: '92%', padding: '0px 5px', marginTop: 100 }} 
              bordered 
              dataSource={dataSource} 
              columns={columns} 
              onChange={onChange} 
              scroll={{ y: 400 }}

        expandable={{
          expandedRowRender: record => expanded(record),
        }}
      />)

    );
  }
  return <NestedTable />

}

export default TableOutput;