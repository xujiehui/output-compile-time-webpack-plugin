class OutputCompileTimePlugin {
  constructor(callback) {
    this.callback = callback
    this.startTime = null
  }
  apply(compiler) {
    compiler.hooks.beforeRun.tap('OutputCompileTimePlugin', compilation => {
      this.startTime = Date.now()
    })
    compiler.hooks.watchRun.tap('OutputCompileTimePlugin', compilation => {
      this.startTime = Date.now()
    })
    compiler.hooks.done.tap('OutputCompileTimePlugin', compilation => {
      let duration = Date.now() - this.startTime
      if (typeof this.callback === 'function') {
        this.callback((duration / 1000).toFixed(2))
      } else {
        console.log(`编译用时：${(duration / 1000).toFixed(2)}s`)
      }
    })
  }
}

module.exports = OutputCompileTimePlugin
