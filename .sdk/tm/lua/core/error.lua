-- GlobalFlood SDK error

local GlobalFloodError = {}
GlobalFloodError.__index = GlobalFloodError


function GlobalFloodError.new(code, msg, ctx)
  local self = setmetatable({}, GlobalFloodError)
  self.is_sdk_error = true
  self.sdk = "GlobalFlood"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function GlobalFloodError:error()
  return self.msg
end


function GlobalFloodError:__tostring()
  return self.msg
end


return GlobalFloodError
