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
        console.log(
          `\u001b[30;42m 编译用时 \u001b[44m ${(duration / 1000).toFixed(
            2
          )}s \u001b[0m`
        )
      }
    })
  }
}

module.exports = OutputCompileTimePlugin
