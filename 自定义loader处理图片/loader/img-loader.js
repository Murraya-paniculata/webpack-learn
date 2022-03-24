var loaderUtil = require('loader-utils');

////////////////////////////////////////////////////////////////////////////
// 使用base64的方式添加
////////////////////////////////////////////////////////////////////////////

// function loader (buffer) {
//     var content = getBase64(buffer)
//     return `
//         module.exports = \`${content}\`
//     `;
// }

////////////////////////////////////////////////////////////////////////////
// 使用图片样式的方式的方式添加
////////////////////////////////////////////////////////////////////////////

function loader (buffer) {
    var content = getFilePath.call(this, buffer)
    console.log(111, content);
    return `
        module.exports = \`${content}\`
    `;
}

loader.raw = true; // 让返回二进制格式

module.exports = loader;

// 得到base64格式的文本
function getBase64(buffer) {
    return "data:image/png;base64," + buffer.toString("base64");
}

// 得到文件路径；向总资源列表中添加一个文件
function getFilePath(buffer) {
    var fileName = loaderUtil.interpolateName(this, "[contenthash:5].[ext]", {
        content: buffer
    })
    this.emitFile(fileName, buffer);
    return fileName;
}
