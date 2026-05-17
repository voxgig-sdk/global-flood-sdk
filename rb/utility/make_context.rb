# GlobalFlood SDK utility: make_context
require_relative '../core/context'
module GlobalFloodUtilities
  MakeContext = ->(ctxmap, basectx) {
    GlobalFloodContext.new(ctxmap, basectx)
  }
end
