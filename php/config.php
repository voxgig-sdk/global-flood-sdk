<?php
declare(strict_types=1);

// GlobalFlood SDK configuration

class GlobalFloodConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "GlobalFlood",
                "slug" => "global-flood",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
        ],
            ],
            "options" => [
                "base" => "https://flood-api.open-meteo.com",
                "auth" => [
                    "prefix" => "",
                ],
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "flood" => [],
                ],
            ],
            "entity" => [
        'flood' => [
          'fields' => [
            [
              'name' => 'daily',
              'short' => 'Daily flood data',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'daily_units',
              'short' => 'Units for each daily variable',
              'type' => '`$OBJECT`',
            ],
            [
              'format' => 'float',
              'name' => 'generationtime_ms',
              'short' => 'Generation time of the forecast in milliseconds',
              'type' => '`$NUMBER`',
            ],
            [
              'format' => 'float',
              'name' => 'latitude',
              'short' => 'WGS84 latitude of the center of the weather grid-cell',
              'type' => '`$NUMBER`',
            ],
            [
              'format' => 'float',
              'name' => 'longitude',
              'short' => 'WGS84 longitude of the center of the weather grid-cell',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'timezone',
              'short' => 'Timezone identifier',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'timezone_abbreviation',
              'short' => 'Timezone abbreviation',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'utc_offset_seconds',
              'short' => 'UTC offset in seconds',
              'type' => '`$INTEGER`',
            ],
          ],
          'name' => 'flood',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'apikey',
                        'orig' => 'apikey',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'nearest',
                        'kind' => 'query',
                        'name' => 'cell_selection',
                        'orig' => 'cell_selection',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'river_discharge',
                        'kind' => 'query',
                        'name' => 'daily',
                        'orig' => 'daily',
                        'type' => '`$ARRAY`',
                      ],
                      [
                        'example' => '2022-07-30',
                        'kind' => 'query',
                        'name' => 'end_date',
                        'orig' => 'end_date',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => false,
                        'kind' => 'query',
                        'name' => 'ensemble',
                        'orig' => 'ensemble',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'example' => 92,
                        'kind' => 'query',
                        'name' => 'forecast_day',
                        'orig' => 'forecast_day',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => '59.9',
                        'kind' => 'query',
                        'name' => 'latitude',
                        'orig' => 'latitude',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => '10.75',
                        'kind' => 'query',
                        'name' => 'longitude',
                        'orig' => 'longitude',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'past_day',
                        'orig' => 'past_day',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => '2022-06-30',
                        'kind' => 'query',
                        'name' => 'start_date',
                        'orig' => 'start_date',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'iso8601',
                        'kind' => 'query',
                        'name' => 'timeformat',
                        'orig' => 'timeformat',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'Europe/Berlin',
                        'kind' => 'query',
                        'name' => 'timezone',
                        'orig' => 'timezone',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/v1/flood',
                  'segments' => [
                    [
                      'lit' => 'v1',
                    ],
                    [
                      'lit' => 'flood',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'apikey',
                      'cell_selection',
                      'daily',
                      'end_date',
                      'ensemble',
                      'forecast_day',
                      'latitude',
                      'longitude',
                      'past_day',
                      'start_date',
                      'timeformat',
                      'timezone',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'v1',
                    'flood',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return GlobalFloodFeatures::make_feature($name);
    }
}
