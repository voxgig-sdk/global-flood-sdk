# GlobalFlood SDK configuration


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
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
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
            "type": "`$OBJECT`",
          },
          {
            "name": "daily_units",
            "type": "`$OBJECT`",
          },
          {
            "name": "generationtime_ms",
            "type": "`$NUMBER`",
          },
          {
            "name": "latitude",
            "type": "`$NUMBER`",
          },
          {
            "name": "longitude",
            "type": "`$NUMBER`",
          },
          {
            "name": "timezone",
            "type": "`$STRING`",
          },
          {
            "name": "timezone_abbreviation",
            "type": "`$STRING`",
          },
          {
            "name": "utc_offset_seconds",
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
                "parts": [
                  "v1",
                  "flood",
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
