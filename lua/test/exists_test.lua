-- GlobalFlood SDK exists test

local sdk = require("global-flood_sdk")

describe("GlobalFloodSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
