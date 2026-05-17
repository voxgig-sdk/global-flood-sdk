
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { GlobalFloodSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await GlobalFloodSDK.test()
    equal(null !== testsdk, true)
  })

})
