
module.exports = class FileListPlugin {
    constructor(filename="filelist.txt") {
        this.filename = filename;
    }

    apply(complier){
        complier.hooks.emit.tap("FileListPlugin", (compilation) => {
            console.log(compilation.assets);
            var fileList = [];
            for (const key in compilation.assets) {
                var content = `【${key}】
大小：${compilation.assets[key].size()/1000}KB;`
                fileList.push(content);
            }
            const txt = fileList.join('\n\n');
            compilation.assets[this.filename] = {
                source() {
                    return txt;
                },
                size() {
                    return txt.length;
                }
            }
        })
    }
}