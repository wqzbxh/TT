import React, { Component } from "react";

class EditBtnCustomize extends Component {
    state = {
        statusIoc: false,
    };

    /***********提交信息接口 */
    /***********cLOSE the add box */
    btnHandleEdit = () => {
        this.props.btnHandleEdit();
        // eslint-disable-next-line react/no-direct-mutation-state
    };

    render() {
        const { btnText,statusIoc } = this.props;
        return (
            <div className="px-2">
                <div
                    className={`text-sm cursor-pointer px-2.5 py-2   rounded  hover:border-customize-primary-1 ${statusIoc ? 'border-dashed   border text-customize-primary-1 border-customize-primary-1  ' : '  bg-gradient-to-b from-customize-dark-42  to-customize-dark-19 transform rotate-15  text-white hover:bg-customize-dark-19'}`}
                    onClick={this.btnHandleEdit}
                >
                    <span className={`iconfont ${statusIoc ? ' icon-jinhangzhong' : 'icon-bianji2'}`}></span>

                    <span> {btnText}</span>
                </div>
            </div>
        );
    }
}

export default EditBtnCustomize;
