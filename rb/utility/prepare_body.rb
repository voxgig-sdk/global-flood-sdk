# GlobalFlood SDK utility: prepare_body
require_relative 'media'
module GlobalFloodUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return GlobalFloodUtilities.raw_body(ctx.reqdata) if GlobalFloodUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
