const {Eyes, Configuration, Target} = require('@applitools/eyes-testcafe')

const eyes = new Eyes()
const configuration = new Configuration({
  viewportSize: {width: 1024, height: 768},
})
eyes.setConfiguration(configuration)

fixture`iphone-accessories`.page`https://www.apple.com/shop/iphone/iphone-accessories`.after(
  async () => await eyes.close(),
)

// apple doesn't show this page (on chrome)
test.skip('iphone-accessories', async t => {
  await eyes.open(t, 'iphone-accessories', 'iphone-accessories')
  await eyes.check('iphone-accessories', Target.window())
})
