const { defineConfig } = require('cypress')

module.exports = defineConfig({
  trashAssetsBeforeRuns: false,
  video: false,
  defaultCommandTimeout: 4000,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'mochawesome',
    mochawesomeReporterOptions: {
      reportDir: 'cypress/reports',
      charts: true,
      quite: true,
      overwrite: false,
      html: false,
      json: true,
    },
  },
  retries: 2,
  e2e: {
    setupNodeEvents(on, config) {
      on('after:screenshot', (details) => {
        const fs = require('fs')
        const path = require('path')
        
        let date = new Date()
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()
        const fileName = details.takenAt.replace(/:\s*/g, '-').replace(/\T.*/, '_') + hours + "." + minutes + "." + seconds + ".png"
        
        const newDir = path.join(__dirname, './')
        const newPath = newDir + 'cypress/reports/' + fileName
        
        return new Promise((resolve, reject) => {
          fs.rename(details.path, newPath, (err) => {
            if (err) {
              return reject(err)
            } 
            resolve({ 
              path: newPath
            })
          })
        })
      })
    }
  }
})
