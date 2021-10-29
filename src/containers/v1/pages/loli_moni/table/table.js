import React from "react";
import { Table } from "antd";

const TableOutput = () => {

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

      return(
        <Table style={{margin:'50px'}}dataSource={dataSource} columns={columns} />
      );
}


  export default TableOutput;