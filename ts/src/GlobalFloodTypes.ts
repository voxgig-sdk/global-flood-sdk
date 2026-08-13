// Typed models for the GlobalFlood SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Flood {
  daily?: Record<string, any>
  daily_units?: Record<string, any>
  generationtime_ms?: number
  latitude?: number
  longitude?: number
  timezone?: string
  timezone_abbreviation?: string
  utc_offset_seconds?: number
}

export interface FloodLoadMatch {
  daily?: Record<string, any>
  daily_units?: Record<string, any>
  generationtime_ms?: number
  latitude?: number
  longitude?: number
  timezone?: string
  timezone_abbreviation?: string
  utc_offset_seconds?: number
}

