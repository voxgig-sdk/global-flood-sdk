# GlobalFlood SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module GlobalFloodFeatures
  def self.make_feature(name)
    case name
    when "base"
      GlobalFloodBaseFeature.new
    when "ratelimit"
      GlobalFloodRatelimitFeature.new
    when "retry"
      GlobalFloodRetryFeature.new
    when "test"
      GlobalFloodTestFeature.new
    when "timeout"
      GlobalFloodTimeoutFeature.new
    else
      GlobalFloodBaseFeature.new
    end
  end
end
