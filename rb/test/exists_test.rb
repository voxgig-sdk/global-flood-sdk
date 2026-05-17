# GlobalFlood SDK exists test

require "minitest/autorun"
require_relative "../GlobalFlood_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = GlobalFloodSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
