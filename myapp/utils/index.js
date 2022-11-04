//判断字符串空
module.exports = function isEmpty(value) {
    return value == "" || value == null || value == undefined || value.length == 0
}