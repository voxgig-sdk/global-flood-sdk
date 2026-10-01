import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "flood",
    "accessor": "Flood",
    "op": "load",
    "method": "GET",
    "path": "/v1/flood",
    "args": [],
    "select": {
      "apikey": "v1",
      "cell_selection": "v1",
      "daily": "river_discharge",
      "end_date": "2022-07-30",
      "ensemble": "v1",
      "forecast_day": "v1",
      "latitude": "59.9",
      "longitude": "10.75",
      "past_day": "v1",
      "start_date": "2022-06-30",
      "timeformat": "v1",
      "timezone": "Europe/Berlin"
    },
    "headers": [],
    "query": [
      "latitude",
      "longitude",
      "daily",
      "timeformat",
      "past_days",
      "forecast_days",
      "start_date",
      "end_date",
      "ensemble",
      "cell_selection",
      "timezone",
      "apikey"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "latitude": 59.9,
      "longitude": 10.75,
      "generationtime_ms": 0.0627040863037109,
      "utc_offset_seconds": 0,
      "timezone": "GMT",
      "timezone_abbreviation": "GMT",
      "daily_units": {
        "river_discharge": "m³/s"
      },
      "daily": {
        "time": [
          "2025-03-03",
          "2025-03-04",
          "2025-03-05"
        ],
        "river_discharge": [
          8.04,
          8.75,
          8.93
        ]
      }
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
