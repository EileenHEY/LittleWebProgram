// 处理data参数
// @param(data) 需要发送到服务器的数据
// @returns [string] 返回拼接好的查询字符串 name=zs & age=10
function resoloveData(data) {
    var arr = []
    for (let k in data) {
        arr.push(k + '=' + data[k])
    }
    return arr.join('&');
}

function itheima(options) {
    var xhr = new XMLHttpRequest();
    // 把外界传递过来的参数对象，转换为查询字符串
    var qs = resoloveData(options.data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 2000) {
            var result = JSON.parse(xhr.responseText)
            options.success(result);
        }
    }
}

if (options.method.toUpperCase === 'GET') {
    // 发送GET请求
    xhr.open(options.method, options.url + '?' + qs)
    xhr.send();
} else if (options.method.toUpperCase() === 'POST') {
    // 发起POST请求
    xhr.open(options.method, options.url);
    xhr.setRequestHeader('Content=Type', 'application/x-www-form-urlencoded');
    xhr.send(qs);
}