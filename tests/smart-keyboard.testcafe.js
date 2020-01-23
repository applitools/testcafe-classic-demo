const {Eyes, Configuration, Target} = require('@applitools/eyes-testcafe')

const eyes = new Eyes()
const configuration = new Configuration({
  viewportSize: {width: 1024, height: 768},
  waitBeforeScreenshots: 1500, // wait before screenshots for keboard folding animation
  stitchOverlap: 56, // top bar shows up in screenshots
})
eyes.setConfiguration(configuration)

fixture`smart-keyboard`.page`https://apple.com/smart-keyboard`.after(async () => await eyes.close())

test('smart-keyboard', async t => {
  await eyes.open(t, 'smart-keyboard', 'smart-keyboard')
  await eyes.check('smart-keyboard', Target.window().fully())
})
