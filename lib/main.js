const {AutoLanguageClient} = require('atom-languageclient')

class ScalaLanguageClient extends AutoLanguageClient {
  getGrammarScopes () { return [ 'source.scala' ] }
  getLanguageName () { return 'Scala' }
  getServerName () { return 'Metals' }

  startServerProcess (projectPath) {
    console.log("spawning metals")
    return super.spawn(atom.config.get("metals-lsp-adapter.metals-lsp"), [], { cwd: projectPath })
  }
}

module.exports = new ScalaLanguageClient()
