
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'GlobalFlood',
        slug: "global-flood",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://flood-api.open-meteo.com",

    auth: {
      prefix: '',
      in: 'query',
      name: 'apikey',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        flood: {
        },
  
    }
  }


  entity = {
    "flood": {
      "fields": [
        {
          "name": "daily",
          "short": "Daily flood data",
          "type": "`$OBJECT`"
        },
        {
          "name": "daily_units",
          "short": "Units for each daily variable",
          "type": "`$OBJECT`"
        },
        {
          "format": "float",
          "name": "generationtime_ms",
          "short": "Generation time of the forecast in milliseconds",
          "type": "`$NUMBER`"
        },
        {
          "format": "float",
          "name": "latitude",
          "short": "WGS84 latitude of the center of the weather grid-cell",
          "type": "`$NUMBER`"
        },
        {
          "format": "float",
          "name": "longitude",
          "short": "WGS84 longitude of the center of the weather grid-cell",
          "type": "`$NUMBER`"
        },
        {
          "name": "timezone",
          "short": "Timezone identifier",
          "type": "`$STRING`"
        },
        {
          "name": "timezone_abbreviation",
          "short": "Timezone abbreviation",
          "type": "`$STRING`"
        },
        {
          "name": "utc_offset_seconds",
          "short": "UTC offset in seconds",
          "type": "`$INTEGER`"
        }
      ],
      "name": "flood",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "apikey",
                    "orig": "apikey",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "nearest",
                    "kind": "query",
                    "name": "cell_selection",
                    "orig": "cell_selection",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "river_discharge",
                    "kind": "query",
                    "name": "daily",
                    "orig": "daily",
                    "type": "`$ARRAY`"
                  },
                  {
                    "example": "2022-07-30",
                    "kind": "query",
                    "name": "end_date",
                    "orig": "end_date",
                    "type": "`$STRING`"
                  },
                  {
                    "example": false,
                    "kind": "query",
                    "name": "ensemble",
                    "orig": "ensemble",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "example": 92,
                    "kind": "query",
                    "name": "forecast_day",
                    "orig": "forecast_day",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": "59.9",
                    "kind": "query",
                    "name": "latitude",
                    "orig": "latitude",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "example": "10.75",
                    "kind": "query",
                    "name": "longitude",
                    "orig": "longitude",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "past_day",
                    "orig": "past_day",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": "2022-06-30",
                    "kind": "query",
                    "name": "start_date",
                    "orig": "start_date",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "iso8601",
                    "kind": "query",
                    "name": "timeformat",
                    "orig": "timeformat",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "Europe/Berlin",
                    "kind": "query",
                    "name": "timezone",
                    "orig": "timezone",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v1/flood",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "flood"
                }
              ],
              "select": {
                "exist": [
                  "apikey",
                  "cell_selection",
                  "daily",
                  "end_date",
                  "ensemble",
                  "forecast_day",
                  "latitude",
                  "longitude",
                  "past_day",
                  "start_date",
                  "timeformat",
                  "timezone"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "v1",
                "flood"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

