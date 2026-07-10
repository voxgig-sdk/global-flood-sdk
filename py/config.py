# GlobalFlood SDK configuration


def make_config():
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
            "active": True,
            "name": "daily",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "daily_unit",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "generationtime_m",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "latitude",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "longitude",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "timezone",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "timezone_abbreviation",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "utc_offset_second",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 7,
          },
        ],
        "name": "flood",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "apikey",
                      "orig": "apikey",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "nearest",
                      "kind": "query",
                      "name": "cell_selection",
                      "orig": "cell_selection",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "river_discharge",
                      "kind": "query",
                      "name": "daily",
                      "orig": "daily",
                      "reqd": False,
                      "type": "`$ARRAY`",
                    },
                    {
                      "active": True,
                      "example": "2022-07-30",
                      "kind": "query",
                      "name": "end_date",
                      "orig": "end_date",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": False,
                      "kind": "query",
                      "name": "ensemble",
                      "orig": "ensemble",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "active": True,
                      "example": 92,
                      "kind": "query",
                      "name": "forecast_day",
                      "orig": "forecast_day",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": "59.9",
                      "kind": "query",
                      "name": "latitude",
                      "orig": "latitude",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "10.75",
                      "kind": "query",
                      "name": "longitude",
                      "orig": "longitude",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 0,
                      "kind": "query",
                      "name": "past_day",
                      "orig": "past_day",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": "2022-06-30",
                      "kind": "query",
                      "name": "start_date",
                      "orig": "start_date",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "iso8601",
                      "kind": "query",
                      "name": "timeformat",
                      "orig": "timeformat",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "Europe/Berlin",
                      "kind": "query",
                      "name": "timezone",
                      "orig": "timezone",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
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
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
