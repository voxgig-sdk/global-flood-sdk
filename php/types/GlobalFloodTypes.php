<?php
declare(strict_types=1);

// Typed models for the GlobalFlood SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Flood entity data model. */
class Flood
{
    public ?array $daily = null;
    public ?array $daily_unit = null;
    public ?float $generationtime_m = null;
    public ?float $latitude = null;
    public ?float $longitude = null;
    public ?string $timezone = null;
    public ?string $timezone_abbreviation = null;
    public ?int $utc_offset_second = null;
}

/** Request payload for Flood#load. */
class FloodLoadMatch
{
    public ?array $daily = null;
    public ?array $daily_unit = null;
    public ?float $generationtime_m = null;
    public ?float $latitude = null;
    public ?float $longitude = null;
    public ?string $timezone = null;
    public ?string $timezone_abbreviation = null;
    public ?int $utc_offset_second = null;
}

