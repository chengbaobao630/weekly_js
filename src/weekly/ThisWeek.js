import React from "react";

// let receiptPh = "请输入收件人！"
let rows = [], i = 0, len = 3;
while (++i <= len) rows.push(i);

class ThisWeek extends React.Component {

    render = () => <div>
        <table align="center">
            <thead>
            <tr>
                <th>
                    任务
                </th>
                <th>
                    内容
                </th>
                <th>
                    完成情况
                </th>
                <th>
                    未完成情况
                </th>
                <th>
                    结果
                </th>
            </tr>
            </thead>
            <tbody>
            {
                rows.map((i) =>
                    <tr key={i}>
                        <td>
                            <input type="text"/>
                        </td>
                        <td>
                            <input type="text"/>
                        </td>
                        <td>
                            <input type="text"/>
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
        <label htmlFor="unfinished_trace">本周未完成事项的跟进</label>
        <textarea name="unfinished_trace" id="unfinished_trace" cols="30" rows="2" placeholder="本周未完成事项的跟进"/>
        <label htmlFor="QA">存在的问题及建议</label>
        <textarea name="QA" id="QA" cols="30" rows="2" placeholder="存在的问题及建议"/>
    </div>

}


export default ThisWeek