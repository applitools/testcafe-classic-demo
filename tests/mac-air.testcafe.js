const {Eyes, Configuration, Target, StitchMode} = require('@applitools/eyes-testcafe')

const eyes = new Eyes()
const configuration = new Configuration({
  stitchMode: StitchMode.CSS, // use css stitching, some animations are move differently then scroll
  viewportSize: {width: 600, height: 500},
})
eyes.setConfiguration(configuration)

// ( some animations don't hold up well under CSS stitching (second hand & pink laptop)
//   only in Safari mojave 600x500 )
fixture`macbook-air`.page`https://www.apple.com/macbook-air/`.after(async () => await eyes.close())

test('macbook-air', async t => {
  await eyes.open(t, 'macbook-air', 'macbook-air')
  await eyes.scanPage() // activate snimations
  await new Promise(r => setTimeout(r, 5000)) // wait for first page animation to end
  await eyes.check('macbook-air', Target.window().fully())
})
