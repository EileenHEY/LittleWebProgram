function template(id, data) {
    // 获取内容盒子
    var content = document.getElementById(id).innerHTML;
    // 定义正则表达式，查找模板需要替换的内容，其中：\s表示匹配空白符（包括换行符、Tab）;[a-zA-Z]+注意后面有个+号，表示任意个大小写英文字母
    var pattern = /{{([a-zA-Z]+)}}/
    // 初始化匹配结果为空
    var patternResult = null;
    // 循环匹配，由exec()函数在content中查找正则表达式pattern确定的范围内容，将返回结果赋值给匹配结果patternResult（返回结果为正则表达式中()内确定的的内容），当匹配失败，也就是在content中找不到可匹配内容时，就返回null，就可以结束循环了。
    console.log(pattern.exec(content));
    while ((patternResult = pattern.exec(content))) {
        // 用传入data中的数据替换在content中找到的匹配结果
        content = content.replace(patternResult[0], data[patternResult[1]])
    }
    return content;
}