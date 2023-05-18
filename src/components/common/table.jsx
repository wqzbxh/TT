import React, { Component } from "react";
import CreateProjectBtn from "./creater_project_btn";
import Pagination from "./pagination";

class TableList extends Component {
  state = {
    selectedRows: [],
    page_length: 15,
    dataList: {
      title: ["name", "username", "eamil", "role", "info"],
      itemsPerPage: 10,
      totalItems: 100,
    },
  };
  /***********打开添加项目框 */
  handleCreaterProject = () => {
    console.log(5);
    this.props.show();
  };
  toggleSelectAll = () => {
    const { datalist } = this.props.dataList;
    const { selectedRows } = this.state;
    if (selectedRows.length === datalist.length) {
      this.setState({ selectedRows: [] });
    } else {
      this.setState({ selectedRows: [...datalist] });
    }
  };

  toggleSelectRow = (row) => {
    const { selectedRows } = this.state;
    const index = selectedRows.findIndex((selectedRow) => selectedRow === row);
    if (index === -1) {
      this.setState({ selectedRows: [...selectedRows, row] });
    } else {
      selectedRows.splice(index, 1);
      this.setState({ selectedRows });
    }
  };
  handlePageCallback = (page) => {
    this.props.handlePageCallback(page);
  };
  selectRow = (row) => {
    this.props.callback(this.props.dataList.datalist[row], false);
  };
  delHandle = (id, row) => {
    this.props.callback(this.props.dataList.datalist[row], id,'delete');
  };
  // 编辑按钮事件
  // Edit button eventutton event
  updateHandle = (id, row) => {
    this.props.callback(this.props.dataList.datalist[row], id,'update');
  };
  
  render() {
    const { dataList, dataTitle } = this.props;
    const { selectedRows, page_length } = this.state;
    return (
      <div className="overflow-y-auto md:mx-auto rounded-md  shadow-md">
        <div className="py-3"></div>
        <div className="overflow-x-auto bg-white ">
          <table className="text-left table-auto min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="font-semibold">
                {!this.props.isProhibitAllSelect ? (
                  <td className="px-2">
                    <input
                      type="checkbox"
                      checked={selectedRows.length === dataList.datalist.length}
                      onChange={this.toggleSelectAll}
                      className="h-4 w-4 border-gray-700 rounded text-gray-900 focus:outline-none focus:border-gray-900"
                    />
                  </td>
                ) : (
                  ""
                )}
                {dataTitle.map((title_item, title_index) => {
                  return (
                    <th
                      scope="col"
                      key={title_index}
                      className="px-6 py-3 text-left text-sm  text-gray-600 uppercase tracking-wider"
                    >
                      {title_item}{" "}
                    </th>
                  );
                })}
                <th className="uppercase px-2">Option</th>
              </tr>
            </thead>
            <tbody className="divide-y text-sm  font-extralight  divide-gray-200">
              {dataList.datalist.map((item, row) => {
                return (
                  <React.Fragment key={row}>
                    <tr>
                      {!this.props.isProhibitAllSelect ? (
                        <td className="px-2">
                          <input
                            type="checkbox"
                            checked={selectedRows.includes(
                              dataList.datalist[row]
                            )}
                            onChange={() =>
                              this.toggleSelectRow(dataList.datalist[row])
                            }
                            id="is_ldap"
                            name="is_ldap"
                            className="h-4 w-4 px-2 border-gray-700 rounded text-gray-900 focus:outline-none focus:border-gray-900"
                          />
                        </td>
                      ) : (
                        ""
                      )}

                      {dataTitle.map((title_item, title_index) => {
                        return (
                          <td
                            onClick={() => this.selectRow(row)}
                            className="px-6 py-3 whitespace-wrap  break-all"
                            key={title_index}
                          >
                            {item[title_item]}
                          </td>
                        );
                      })}
                      <td className="flex justify-center py-3">
                        {this.props.createProjectBtn
                          ? this.props.createProjectBtn
                          : ""}
                        {this.props.projectListBtn
                          ? this.props.projectListBtn
                          : ""}

                        {this.props.isUpdate == "true" ? (
                          <span
                            onClick={() =>
                              this.updateHandle(item[this.props.isDel], row)
                            }
                            className="iconfont mx-2 icon-bianji3 text-customize-dark-19"
                          ></span>
                        ) : (
                          ""
                        )}
                        {this.props.isDel ? (
                          <span
                            onClick={() =>
                              this.delHandle(item[this.props.isDel], row)
                            }
                            className="iconfont icon-shanchu1 text-red-600"
                          ></span>
                        ) : (
                          ""
                        )}
                      </td>
                    </tr>
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
          {!this.props.isProhibitPage ? (
            <Pagination
              totalItems={dataList.totalItems}
              itemsPerPage={page_length}
              handlePageCallback={this.handlePageCallback}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default TableList;
