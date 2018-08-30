import React from "react";

let receiptPh = "请输入收件人！"

const receipt = () =>
    <div>
        <label htmlFor="receipt">收件人:</label>
        <input id="receipt" type="text" placeholder={receiptPh}/>
    </div>


export default receipt