const {Eyes, Configuration, Target} = require('@applitools/eyes-testcafe')

const eyes = new Eyes()
const configuration = new Configuration({
  viewportSize: {width: 600, height: 500},
})
eyes.setConfiguration(configuration)

fixture`ipad-air`.page`https://www.apple.com/ipad-air/`.after(async () => await eyes.close())

test('ipad-air', async t => {
  await eyes.open(t, 'ipad-air', 'ipad-air')
  await eyes.scrollPage() // scroll page to activate element's visibility
  await eyes.check('ipad-air', Target.window().fully())
})
