const {Eyes, Configuration, Target, StitchMode} = require('@applitools/eyes-testcafe')

const eyes = new Eyes()
const configuration = new Configuration({
  viewportSize: {width: 1024, height: 768},
  stitchMode: StitchMode.CSS // use CSS stitching so the background doesn't change color 
})
eyes.setConfiguration(configuration)

fixture`ipad-mini`.page`https://apple.com/ipad-mini`.after(async () => await eyes.close())

test('ipad-mini', async t => {
  await eyes.open(t, 'ipad-mini', 'ipad-mini')
  await eyes.scrollPage() // scroll page to activate element's visibility
  await eyes.check('ipad-mini', Target.window().fully())
})
