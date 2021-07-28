/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  module.exports = (on) => {
    // `on` is used to hook into various events Cypress emits
    // `config` is the resolved Cypress config
  
    on('after:screenshot', (details) => {
      const fs = require('fs')
      const path = require('path')
  
      let date = new Date()
      let hours = date.getHours()
      let minutes = date.getMinutes()
      let seconds = date.getSeconds()
      const fileName = details.takenAt.replace(/:\s*/g, '-').replace(/\T.*/, '_') + hours + "." + minutes + "." + seconds + ".png"
  
      const newDir = path.join(__dirname, '../')
      const newPath = newDir + 'reports/' + fileName
  
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