import React, { useEffect, useState, useRef } from "react";
import { Table, Tooltip} from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { get_accounts } from "../../../service/redux/actions/account";
import { moveToPage } from "../../../service/navigation/services/index";
import moment from "moment";

const TableOutput = () => {
  const [dataSource, setdatasource] = useState([]);

  const dispatch = useDispatch();
  const accounts = useSelector((state) => state.containers.v1.account);

  useEffect(() => {
    console.log("Component Did mount");
    dispatch(get_accounts());
  }, []);

  const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };

  const prevAccounts = usePrevious(accounts);

  useEffect(() => {
    if (JSON.stringify(prevAccounts) !== JSON.stringify(accounts)) {
      setdatasource(
        Object.values(accounts.byAccountId).map((account) => {
          return {
            key: account.accountID,
            ...account,

            appliedAt: moment(account.appliedAt).format("DD-MM-YYYY HH:mm"),
            lastupdatedAt: moment(account.lastupdatedAt).format("DD-MM-YYYY HH:mm"),
            nextmonthbill: moment(account.nextmonthbill).format("DD-MM-YYYY HH:mm"),
          };
        })
      );
    }
  });

  function NestedTable() {
    const expanded = (a) => {
      const columns = [
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
      return <Table columns={columns} dataSource={[a]} pagination={false} />;
    };

    const columns = [
      {
        title: "Account Name",
        dataIndex: "associate",
        key: "associate",
        width: "15%",
        sorter: (a, b) => a.associate.localeCompare(b.associate)
      },
      {
        title: "Service",
        dataIndex: "service",
        key: "service",
        width: "10%",
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
        width: "10%",
        filters: [
          {
            text: "Active",
            value: "active",
          },
          {
            text: "Inactive",
            value: "inactive",
          },
          {
            text: "Suspended",
            value: "suspended",
          },
        ],
        onFilter: (value, record) => record.status.indexOf(value) === 0,
      },
      {
        title: "Project Code",
        dataIndex: "projectCode",
        key: "projectCode",
        width: "10%",
      },
      {
        title: "Usage Percentage",
        dataIndex: "usagepercentage",
        key: "usagepercentage",
        width: "10%",
        sorter: (a, b) => a.usagepercentage - b.usagepercentage,
        filters: [
          {
            text: "0-70%",
            value: [0, 70],
          },
          {
            text: "71-80%",
            value: [71, 80],
          },
          {
            text: "81-100%",
            value: [81, 100],
          },
          {
            text: "100% >",
            value: [101, 1000],
          },
        ],
        onFilter: (value, record) =>
          record.usagepercentage >= value[0] &&
          record.usagepercentage <= value[1],

          render:(data) => {
            if(data <= 70){
              return <strong style={{color:"#008000"}}>{data}</strong>
            }
            else if(data >= 71 && data <= 80){
              return <strong style={{color:"#FFD700"}}>{data}</strong>
            }
            else if(data >= 81 && data <= 100){
              return <strong style={{color:"#FF0000"}}>{data}</strong>
            }
            else if(data >= 101 ){
              return <strong style={{color:"#800000"}}>{data}</strong>
            }
          }
      },
      {
        title: "Usage",
        dataIndex: "usage",
        key: "usage",
        width: "10%",
        sorter: (a, b) => a.usage - b.usage
      },
      {
        title: "Applied At",
        dataIndex: "appliedAt",
        key: "appliedAt",
        width: "10%",
        sorter: (a, b) => a.appliedAt.localeCompare(b.appliedAt)
      },
      {
        title: "Last Updated At",
        dataIndex: "lastupdatedAt",
        key: "lastupdatedAt",
        width: "10%",
        sorter: (a, b) => a.lastupdatedAt.localeCompare(b.lastupdatedAt)
      },
      {
        title: "Next Month Bill Date",
        dataIndex: "nextmonthbill",
        key: "nextmonthbill",
        width: "10%",
        sorter: (a, b) => a.nextmonthbill.localeCompare(b.nextmonthbill)
      },
      {
        title: "Action",
        render: (a, b, c, d) => {
          return (
            <Tooltip placement="top" title={"Update"}>
              <EditOutlined
                style={{ fontSize: 20 }}
                onClick={() => {
                  dispatch(moveToPage("/update", b));
                }}
              />
            </Tooltip>
          );
        },
        width: "10%",
      },
    ];

    function onChange(pagination, filters, sorter, extra) {
      console.log("params", pagination, filters, sorter, extra);
    }

    return (
      <Table
        style={{
          margin: "30px",
          width: "95%",
          padding: "0px 5px",
          marginTop: 40,
        }}
        bordered
        dataSource={dataSource}
        columns={columns}
        onChange={onChange}
        scroll={{ y: 400 }}
        expandable={{
          expandedRowRender: (record) => expanded(record),
        }}
      />
    );
  }
  return <NestedTable />;
};

export default TableOutput;
