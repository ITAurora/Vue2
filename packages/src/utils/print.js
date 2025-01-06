export function printHTML(html) {
    // 创建iframe元素
    const iframe = document.createElement('iframe')
    iframe.setAttribute('style', 'display:none')
    document.body.appendChild(iframe)
    let doc = iframe.contentWindow.document
    // 写入html
    doc.write(html)
    doc.close()
    // 调用打印
    iframe.contentWindow.focus()
    iframe.contentWindow.print()
    // 打印完毕后移除
    iframe.parentNode.removeChild(iframe)
}

// let el = document.getElementById("print-box");
// // 当前页面样式
// let headDom = document.getElementsByTagName("head")[0];
// // 创建iframe
// let iframe = document.createElement("iframe");
// // 设置iframe样式
// iframe.setAttribute("id", "print-box");
// iframe.setAttribute(
//   "style",
//   "position:absolute;width:0px;height:0px;left:-500px;top:-500px;"
// );
// // 在页面插入iframe
// document.body.appendChild(iframe);
// // 获取iframe内的html
// let doc = iframe.contentWindow.document;
// // 经需要打印的DOM插入iframe
// let printMain = document.createElement("div");
// printMain.setAttribute("id", "print-box");
// printMain.innerHTML = el.innerHTML;
// doc.body.appendChild(printMain);
// // 设置iframe内的header，添加样式文件
// doc.getElementsByTagName("head")[0].innerHTML = headDom.innerHTML;
// // 关闭iframe
// doc.close();
// // 使iframe失去焦点
// iframe.contentWindow.focus();
// // 调用iframe的打印方法
// iframe.contentWindow.print();
// // 移除iframe
// document.body.removeChild(iframe);
