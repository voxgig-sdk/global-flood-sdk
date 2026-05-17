# GlobalFlood SDK utility: feature_add
module GlobalFloodUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
