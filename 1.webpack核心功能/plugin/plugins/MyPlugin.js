module.exports = class Myplugin {
    apply(compiler) {
        console.log('plugin使用啦')
        compiler.hooks.done.tap("myplugin", (compilation) => {
            console.log("编译完成")
        })
    }
}
