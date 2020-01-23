const {Eyes, Configuration, Target} = require('@applitools/eyes-testcafe')

const eyes = new Eyes()
const configuration = new Configuration({
  viewportSize: {width: 600, height: 500},
})
eyes.setConfiguration(configuration)

fixture`apple-pencil`.page`https://www.apple.com/apple-pencil`.after(async () => await eyes.close())

test('apple-pencil', async t => {
  await new Promise(r => setTimeout(r, 1000)) // wait for pecil animation to end
  await eyes.open(t, 'apple-pencil', 'apple-pencil')
  await eyes.check('apple-pencil', Target.window().fully())
})
