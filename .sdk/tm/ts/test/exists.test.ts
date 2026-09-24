
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { GlobalFloodSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = GlobalFloodSDK.test()
    equal(testsdk instanceof GlobalFloodSDK, true,
      'GlobalFloodSDK.test() must return a client synchronously')
  })

})
