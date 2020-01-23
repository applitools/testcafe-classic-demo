const {Eyes, Configuration, Target} = require('@applitools/eyes-testcafe')

const eyes = new Eyes()
const configuration = new Configuration({
  waitBeforeScreenshots: 1200, // wait untill second carousel animation ends
  viewportSize: {width: 500, height: 600},
})
eyes.setConfiguration(configuration)

// we need to manually add ignore regions for first carousel animation
fixture`apple-watch-nike`.page`https://www.apple.com/apple-watch-nike/`.after(
  async () => await eyes.close(),
)

test('apple-watch-nike', async t => {
  await eyes.open(t, 'apple-watch-nike', 'apple-watch-nike')
  await eyes.check('apple-watch-nike', Target.window().fully())
})
