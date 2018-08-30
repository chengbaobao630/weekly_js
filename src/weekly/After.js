import React from "react";

// let receiptPh = "请输入收件人！"
let rows = [], i = 0, len = 2;
while (++i <= len) rows.push(i);

class After extends React.Component {

    constructor(props) {
        super(props);
        this.state = {job: "HEIHEIHEI"};
    }

    render = () =>
        <div>
            <table align="center">
                <thead>
                <tr>
                    <th>
                        工作事项
                    </th>
                    <th>
                        工作内容
                    </th>
                    <th>
                        时间
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    rows.map((i) =>
                        <tr key={i}>
                            <td>
                                <label htmlFor="">{this.state["job"]}</label>
                                <input type="text" defaultValue={this.state["job"]} onChange={(e)=>{ console.log(e);this.setState({job: e.target.value})}}/>
                            </td>
                            <td>
                                <input type="text"/>
                            </td>
                            <td>
                                <input type="text"/>
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
            <label htmlFor="expect_result">下周行动计划及预期结果</label>
            <textarea name="expect_result" id="expect_result" cols="30" rows="2"/>
            <label htmlFor="support">需要支持与协助</label>
            <textarea name="support" id="support" cols="30" rows="2"/>
        </div>
}

export default After