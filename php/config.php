<?php
declare(strict_types=1);

// GlobalFlood SDK configuration

class GlobalFloodConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "GlobalFlood",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://flood-api.open-meteo.com",
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
              'req' => false,
              'type' => '`$OBJECT`',
              'active' => true,
              'index$' => 0,
            ],
            [
              'name' => 'daily_unit',
              'req' => false,
              'type' => '`$OBJECT`',
              'active' => true,
              'index$' => 1,
            ],
            [
              'name' => 'generationtime_m',
              'req' => false,
              'type' => '`$NUMBER`',
              'active' => true,
              'index$' => 2,
            ],
            [
              'name' => 'latitude',
              'req' => false,
              'type' => '`$NUMBER`',
              'active' => true,
              'index$' => 3,
            ],
            [
              'name' => 'longitude',
              'req' => false,
              'type' => '`$NUMBER`',
              'active' => true,
              'index$' => 4,
            ],
            [
              'name' => 'timezone',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 5,
            ],
            [
              'name' => 'timezone_abbreviation',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 6,
            ],
            [
              'name' => 'utc_offset_second',
              'req' => false,
              'type' => '`$INTEGER`',
              'active' => true,
              'index$' => 7,
            ],
          ],
          'name' => 'flood',
          'op' => [
            'load' => [
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'apikey',
                        'orig' => 'apikey',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                      [
                        'example' => 'nearest',
                        'kind' => 'query',
                        'name' => 'cell_selection',
                        'orig' => 'cell_selection',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                      [
                        'example' => 'river_discharge',
                        'kind' => 'query',
                        'name' => 'daily',
                        'orig' => 'daily',
                        'reqd' => false,
                        'type' => '`$ARRAY`',
                        'active' => true,
                      ],
                      [
                        'example' => '2022-07-30',
                        'kind' => 'query',
                        'name' => 'end_date',
                        'orig' => 'end_date',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                      [
                        'example' => false,
                        'kind' => 'query',
                        'name' => 'ensemble',
                        'orig' => 'ensemble',
                        'reqd' => false,
                        'type' => '`$BOOLEAN`',
                        'active' => true,
                      ],
                      [
                        'example' => 92,
                        'kind' => 'query',
                        'name' => 'forecast_day',
                        'orig' => 'forecast_day',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                        'active' => true,
                      ],
                      [
                        'example' => '59.9',
                        'kind' => 'query',
                        'name' => 'latitude',
                        'orig' => 'latitude',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                      [
                        'example' => '10.75',
                        'kind' => 'query',
                        'name' => 'longitude',
                        'orig' => 'longitude',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                      [
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'past_day',
                        'orig' => 'past_day',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                        'active' => true,
                      ],
                      [
                        'example' => '2022-06-30',
                        'kind' => 'query',
                        'name' => 'start_date',
                        'orig' => 'start_date',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                      [
                        'example' => 'iso8601',
                        'kind' => 'query',
                        'name' => 'timeformat',
                        'orig' => 'timeformat',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                      [
                        'example' => 'Europe/Berlin',
                        'kind' => 'query',
                        'name' => 'timezone',
                        'orig' => 'timezone',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v1/flood',
                  'parts' => [
                    'v1',
                    'flood',
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
                  'active' => true,
                  'index$' => 0,
                ],
              ],
              'input' => 'data',
              'key$' => 'load',
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
