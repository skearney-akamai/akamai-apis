const core = require('@actions/core');
const github = require('@actions/github');

try {
  const Enforcer = require('openapi-enforcer')

  async function run () {
  const [openapi, error, warning] = await Enforcer('./path/to/openapi.yml', {
    fullResult: true
  })
  if (error !== undefined) console.error(error)
  if (warning !== undefined) console.warn(warning)
  if (openapi !== undefined) console.log('Document is valid')
  }
}

catch {
  run.catch(console.error)
}