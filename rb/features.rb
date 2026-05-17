# GlobalFlood SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module GlobalFloodFeatures
  def self.make_feature(name)
    case name
    when "base"
      GlobalFloodBaseFeature.new
    when "test"
      GlobalFloodTestFeature.new
    else
      GlobalFloodBaseFeature.new
    end
  end
end
