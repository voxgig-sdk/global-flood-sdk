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
---@field apikey? string
---@field cell_selection? string
---@field daily? table
---@field end_date? string
---@field ensemble? boolean
---@field forecast_day? number
---@field latitude string
---@field longitude string
---@field past_day? number
---@field start_date? string
---@field timeformat? string
---@field timezone? string

local M = {}

return M
