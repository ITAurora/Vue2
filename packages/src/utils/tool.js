// 深拷贝
import { cloneDeep } from 'lodash';
export const deepClone = cloneDeep;

// 打开外链
export const openLink = (link, target = '_black') => {
    let a = document.createElement("a");
    a.style.display = 'none'
    if (target == '_black') target += ('_' + new Date().getTime());
    a.target = target;
    a.href = link;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// 对象转url参数
export const objectToUrlParams = (obj) => {
    let _result = [];
    for (let key in obj) {
        var value = obj[key];
        if (value.constructor == Array) {
            value.forEach(function (_value) {
                _result.push(key + "=" + _value);
            });
        } else {
            _result.push(key + '=' + value);
        }
    }
    return _result.join('&');
}

// 下载文件
export const downloadFileByBlob = (blob, fileName) => {
    // 将blob对象创建bloburl，然后用a标签实现弹出下载框
    if (typeof blob == "object" && blob instanceof Blob) {
        blob = URL.createObjectURL(blob); // 创建blob地址
    }
    var aLink = document.createElement("a");
    aLink.href = blob;
    // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，有时候 file:///模式下不会生效
    aLink.download = fileName || "";
    var event;
    if (window.MouseEvent) event = new MouseEvent("click");
    //   移动端
    else {
        event = document.createEvent("MouseEvents");
        event.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    }
    aLink.dispatchEvent(event);
}

// 解析Content-Disposition
export const parsingContentDisposition = (headers) => {
    let disposition = headers['content-disposition'];
    let filename = ''
    if (disposition && disposition.indexOf('attachment') !== -1) {
        let filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
        let matches = filenameRegex.exec(disposition);
        if (matches != null && matches[1]) {
            filename = decodeURIComponent(matches[1].replace(/['"]/g, '').replace('utf-8', ''));
        }
    }
    return filename;
}


export const sleep = (timeout) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, timeout * 1000)
    })
}

/**
 * @description 根据path查找后端route配置
 * @param {string} url 路径
 * @param {Array} routes 路由列表
 * @return {Object} route 查找到的路由
 * @date: 2021/4/9
 */
export const findRouteByPath = (url, routes = []) => {
    if (!url || !routes.length) return null;
    const findPathByLeafId = (leafUrl, nodes, path) => {
        if (path === undefined) {
            path = {};
        }
        for (let i = 0; i < nodes.length; i++) {
            let tmpPath = path;
            if (leafUrl == nodes[i].url) {
                tmpPath = nodes[i];
                return tmpPath;
            }
            if (nodes[i].list) {
                let findResult = findPathByLeafId(leafUrl, nodes[i].list, tmpPath);
                if (findResult) {
                    return findResult;
                }
            }
        }
    }
    return findPathByLeafId(url, routes);
}

/**
 * @description 查找id路径数组
 * @param {Array} tree 树形路由
 * @param {Function} func 判断逻辑回调函数
 * @param {Array} path id数组
 * @return {Array} ids id数组
 * @date: 2021/4/9
 */
export const findIdPathByFun = (tree, func, path = []) => {
    if (!tree) return []
    for (const data of tree) {
        // 这里按照你的需求来存放最后返回的内容吧
        path.push(data.id)
        if (func(data)) return path
        if (data.list) {
            const findChildren = findIdPathByFun(data.list, func, path)
            if (findChildren.length) return findChildren
        }
        path.pop()
    }
    return []
}


export const evalWith = (d, expr) => {
    return new Function('with (this) { ' + expr + ' }').call(d);
}

export const getLastNumberStr = (str) => {
    return Number(str.match(/\d+\.*\d*$/g));
}

/**
 * @description 取出双花括号里面的值
 * @date: 2021/7/1
 */
export const getBraceArrByStr = (str) => [...new Set(str.match(/{{(.*?)}}/g))].map(item => item.substr(2, item.length - 4))

/**
 * @description 判断是否是数字
 * @date: 2021/7/2
 */
export const isNumber = (obj) => /^[0-9]*$/.test(obj)

export const getRandomInt = function (minNum, maxNum) {
    let number = null
    switch (arguments.length) {
        case 1:
            number = parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            number = parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            break;
        default:
            number = 0;
            break;
    }
    return number;
}

export const splitArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
}

export const extractParenthesesContent = (text) => {
    // 使用正则表达式匹配小括号内的内容
    // 这里使用了非贪婪匹配（*?）来确保只匹配到最近的闭合括号
    const regex = /\（(.*?)\）/g;
    let matches;
    let result = [];

    // 全局搜索匹配项
    while ((matches = regex.exec(text)) !== null) {
        // matches[1] 是第一个捕获组的内容，即括号内的内容
        result.push(matches[1]);
    }

    return result;
}

// 创建名字 + 数字的对象 ---{input1:'',input2:'',input3:''}
export const createNamesObject = (name, count, defaultValue = '', start = 0) => {
    let obj = {};
    new Array(count).fill(name).forEach((text, index) => {
        if (typeof defaultValue === "function") {
            obj[`${text}${Number(index) + start + 1}`] = defaultValue()
        } else {
            obj[`${text}${Number(index) + start + 1}`] = deepClone(defaultValue);
        }
    });
    return obj
}