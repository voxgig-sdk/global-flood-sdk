-- Typed models for the GlobalFlood SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Flood
---@field daily? table
---@field daily_units? table
---@field generationtime_ms? number
---@field latitude? number
---@field longitude? number
---@field timezone? string
---@field timezone_abbreviation? string
---@field utc_offset_seconds? number

---@class FloodLoadMatch
---@field daily? table
---@field daily_units? table
---@field generationtime_ms? number
---@field latitude? number
---@field longitude? number
---@field timezone? string
---@field timezone_abbreviation? string
---@field utc_offset_seconds? number

local M = {}

return M
