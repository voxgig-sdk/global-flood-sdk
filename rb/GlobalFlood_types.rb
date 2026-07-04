# frozen_string_literal: true

# Typed models for the GlobalFlood SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Flood entity data model.
#
# @!attribute [rw] daily
#   @return [Hash, nil]
#
# @!attribute [rw] daily_unit
#   @return [Hash, nil]
#
# @!attribute [rw] generationtime_m
#   @return [Float, nil]
#
# @!attribute [rw] latitude
#   @return [Float, nil]
#
# @!attribute [rw] longitude
#   @return [Float, nil]
#
# @!attribute [rw] timezone
#   @return [String, nil]
#
# @!attribute [rw] timezone_abbreviation
#   @return [String, nil]
#
# @!attribute [rw] utc_offset_second
#   @return [Integer, nil]
Flood = Struct.new(
  :daily,
  :daily_unit,
  :generationtime_m,
  :latitude,
  :longitude,
  :timezone,
  :timezone_abbreviation,
  :utc_offset_second,
  keyword_init: true
)

# Match filter for Flood#load (any subset of Flood fields).
#
# @!attribute [rw] daily
#   @return [Hash, nil]
#
# @!attribute [rw] daily_unit
#   @return [Hash, nil]
#
# @!attribute [rw] generationtime_m
#   @return [Float, nil]
#
# @!attribute [rw] latitude
#   @return [Float, nil]
#
# @!attribute [rw] longitude
#   @return [Float, nil]
#
# @!attribute [rw] timezone
#   @return [String, nil]
#
# @!attribute [rw] timezone_abbreviation
#   @return [String, nil]
#
# @!attribute [rw] utc_offset_second
#   @return [Integer, nil]
FloodLoadMatch = Struct.new(
  :daily,
  :daily_unit,
  :generationtime_m,
  :latitude,
  :longitude,
  :timezone,
  :timezone_abbreviation,
  :utc_offset_second,
  keyword_init: true
)

