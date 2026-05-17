package = "voxgig-sdk-global-flood"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/global-flood-sdk.git"
}
description = {
  summary = "GlobalFlood SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["global-flood_sdk"] = "global-flood_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
