import React, { useEffect, useState, useRef } from "react";
import { Table, Tooltip, Space, Button, Input} from "antd";
import { EditOutlined, SearchOutlined} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { get_accounts } from "../../../service/redux/actions/account";
import { moveToPage } from "../../../service/navigation/services/index";
import moment from "moment";
import Highlighter from "react-highlight-words";

const TableOutput = () => {
  const getColumnSearchProps = (
    dataIndex,
    searchInput,
    searchText,
    setSearchText,
    searchedColumn,
    setSearchedColumn
  ) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => (searchInput = node)}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() =>
              handleSearch(
                selectedKeys,
                confirm,
                dataIndex,
                setSearchText,
                setSearchedColumn
              )
            }
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() =>
              handleReset(
                clearFilters,
                setSearchText,
                setSearchText,
                setSearchedColumn
              )
            }
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      )
  });
  
  const handleSearch = (
    selectedKeys,
    confirm,
    dataIndex,
    setSearchText,
    setSearchedColumn
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  
  const handleReset = (clearFilters, setSearchText) => {
    clearFilters();
    setSearchText("");
  };

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
          title: "Email",
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
    const [searchText, setSearchText] = useState("");
    const [searchedColumn, setSearchedColumn] = useState(0);
    const refSearchInput = useRef();

    const columns = [
      {
        title: "Account Name",
        dataIndex: "associate",
        key: "associate",
        width: "15%",
        ...getColumnSearchProps(
          "associate",
          refSearchInput,
          searchText,
          setSearchText,
          searchedColumn,
          setSearchedColumn
        ),
        sorter: (a, b) => a.associate.localeCompare(b.associate)
        
      },
      {
        title: "Service",
        dataIndex: "service",
        key: "service",
        width: "10%",
        ...getColumnSearchProps(
          "service",
          refSearchInput,
          searchText,
          setSearchText,
          searchedColumn,
          setSearchedColumn
        ),
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
        ...getColumnSearchProps(
          "projectCode",
          refSearchInput,
          searchText,
          setSearchText,
          searchedColumn,
          setSearchedColumn
        ),
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
        sorter: (a, b) => a.lastupdatedAt.localeCompare(b.lastupdatedAt),
        defaultSortOrder:"ascend"
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
                  dispatch(moveToPage("/update", b.accountID));
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
