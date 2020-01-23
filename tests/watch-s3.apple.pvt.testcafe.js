const {Eyes, Configuration, Target} = require('@applitools/eyes-testcafe')

const eyes = new Eyes()
const configuration = new Configuration({
  viewportSize: {width: 1024, height: 768},
  stitchOverlap: 56, // top bar shows up in screenshots
})
eyes.setConfiguration(configuration)

fixture`apple-watch-series-3`.page`https://www.apple.com/apple-watch-series-3/`.after(
  async () => await eyes.close(),
)

test('apple-watch-series-3', async t => {
  await eyes.open(t, 'apple-watch-series-3', 'apple-watch-series-3')
  await eyes.check('apple-watch-series-3', Target.window().fully())
})
