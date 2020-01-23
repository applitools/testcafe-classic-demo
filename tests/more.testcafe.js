const {Eyes, Configuration, Target, ConsoleLogHandler} = require('@applitools/eyes-testcafe')

const eyes = new Eyes()
const configuration = new Configuration({
  viewportSize: {width: 1024, height: 768},
})
eyes.setConfiguration(configuration)
eyes.setLogHandler(new ConsoleLogHandler(true)) // show logs

fixture`main-page`.page`https://www.apple.com/`.after(
  async () => await eyes.close(),
)

test('main-page', async t => {
  await eyes.open(t, 'main-page', 'main-page')
  await eyes.check('main-page', Target.window()) // viewport
})
