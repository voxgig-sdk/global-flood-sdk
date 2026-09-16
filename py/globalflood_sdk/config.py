# GlobalFlood SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "GlobalFlood",
            "slug": "global-flood",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
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
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://flood-api.open-meteo.com",
            "auth": {
                "prefix": "",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "flood": {},
            },
        },
        "entity": {
      "flood": {
        "fields": [
          {
            "name": "daily",
            "short": "Daily flood data",
            "type": "`$OBJECT`",
          },
          {
            "name": "daily_units",
            "short": "Units for each daily variable",
            "type": "`$OBJECT`",
          },
          {
            "format": "float",
            "name": "generationtime_ms",
            "short": "Generation time of the forecast in milliseconds",
            "type": "`$NUMBER`",
          },
          {
            "format": "float",
            "name": "latitude",
            "short": "WGS84 latitude of the center of the weather grid-cell",
            "type": "`$NUMBER`",
          },
          {
            "format": "float",
            "name": "longitude",
            "short": "WGS84 longitude of the center of the weather grid-cell",
            "type": "`$NUMBER`",
          },
          {
            "name": "timezone",
            "short": "Timezone identifier",
            "type": "`$STRING`",
          },
          {
            "name": "timezone_abbreviation",
            "short": "Timezone abbreviation",
            "type": "`$STRING`",
          },
          {
            "name": "utc_offset_seconds",
            "short": "UTC offset in seconds",
            "type": "`$INTEGER`",
          },
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
                      "type": "`$STRING`",
                    },
                    {
                      "example": "nearest",
                      "kind": "query",
                      "name": "cell_selection",
                      "orig": "cell_selection",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "river_discharge",
                      "kind": "query",
                      "name": "daily",
                      "orig": "daily",
                      "type": "`$ARRAY`",
                    },
                    {
                      "example": "2022-07-30",
                      "kind": "query",
                      "name": "end_date",
                      "orig": "end_date",
                      "type": "`$STRING`",
                    },
                    {
                      "example": False,
                      "kind": "query",
                      "name": "ensemble",
                      "orig": "ensemble",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "example": 92,
                      "kind": "query",
                      "name": "forecast_day",
                      "orig": "forecast_day",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": "59.9",
                      "kind": "query",
                      "name": "latitude",
                      "orig": "latitude",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "example": "10.75",
                      "kind": "query",
                      "name": "longitude",
                      "orig": "longitude",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "example": 0,
                      "kind": "query",
                      "name": "past_day",
                      "orig": "past_day",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": "2022-06-30",
                      "kind": "query",
                      "name": "start_date",
                      "orig": "start_date",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "iso8601",
                      "kind": "query",
                      "name": "timeformat",
                      "orig": "timeformat",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "Europe/Berlin",
                      "kind": "query",
                      "name": "timezone",
                      "orig": "timezone",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/v1/flood",
                "segments": [
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "flood",
                  },
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
                    "timezone",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "v1",
                  "flood",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
