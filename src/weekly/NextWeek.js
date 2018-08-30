import React from "react";

// let receiptPh = "请输入收件人！"
let rows = [], i = 0, len = 2;
while (++i <= len) rows.push(i);

const NextWeek = () =>

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
    </div>


export default NextWeek