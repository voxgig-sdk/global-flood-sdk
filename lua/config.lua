-- GlobalFlood SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "GlobalFlood",
      slug = "global-flood",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["ratelimit"] = {
        ["options"] = {
          ["active"] = false,
          ["burst"] = 5,
          ["rate"] = 5,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["retry"] = {
        ["options"] = {
          ["active"] = false,
          ["factor"] = 2,
          ["maxDelay"] = 2000,
          ["minDelay"] = 50,
          ["retries"] = 2,
          ["statuses"] = {
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          },
        },
        ["optspec"] = {
          ["jitter"] = "`$BOOLEAN`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
      ["timeout"] = {
        ["options"] = {
          ["active"] = false,
          ["ms"] = 30000,
        },
        ["optspec"] = {
          ["clearTimer"] = "`$FUNCTION`",
          ["setTimer"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
    },
    options = {
      base = "https://flood-api.open-meteo.com",
      auth = {
        prefix = "",
        ["in"] = "query",
        name = "apikey",
      },
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["flood"] = {},
      },
    },
    entity = {
      ["flood"] = {
        ["fields"] = {
          {
            ["name"] = "daily",
            ["short"] = "Daily flood data",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "daily_units",
            ["short"] = "Units for each daily variable",
            ["type"] = "`$OBJECT`",
          },
          {
            ["format"] = "float",
            ["name"] = "generationtime_ms",
            ["short"] = "Generation time of the forecast in milliseconds",
            ["type"] = "`$NUMBER`",
          },
          {
            ["format"] = "float",
            ["name"] = "latitude",
            ["short"] = "WGS84 latitude of the center of the weather grid-cell",
            ["type"] = "`$NUMBER`",
          },
          {
            ["format"] = "float",
            ["name"] = "longitude",
            ["short"] = "WGS84 longitude of the center of the weather grid-cell",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "timezone",
            ["short"] = "Timezone identifier",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "timezone_abbreviation",
            ["short"] = "Timezone abbreviation",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "utc_offset_seconds",
            ["short"] = "UTC offset in seconds",
            ["type"] = "`$INTEGER`",
          },
        },
        ["name"] = "flood",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "apikey",
                      ["orig"] = "apikey",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "nearest",
                      ["kind"] = "query",
                      ["name"] = "cell_selection",
                      ["orig"] = "cell_selection",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "river_discharge",
                      ["kind"] = "query",
                      ["name"] = "daily",
                      ["orig"] = "daily",
                      ["type"] = "`$ARRAY`",
                    },
                    {
                      ["example"] = "2022-07-30",
                      ["kind"] = "query",
                      ["name"] = "end_date",
                      ["orig"] = "end_date",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "ensemble",
                      ["orig"] = "ensemble",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["example"] = 92,
                      ["kind"] = "query",
                      ["name"] = "forecast_day",
                      ["orig"] = "forecast_day",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = "59.9",
                      ["kind"] = "query",
                      ["name"] = "latitude",
                      ["orig"] = "latitude",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "10.75",
                      ["kind"] = "query",
                      ["name"] = "longitude",
                      ["orig"] = "longitude",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 0,
                      ["kind"] = "query",
                      ["name"] = "past_day",
                      ["orig"] = "past_day",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = "2022-06-30",
                      ["kind"] = "query",
                      ["name"] = "start_date",
                      ["orig"] = "start_date",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "iso8601",
                      ["kind"] = "query",
                      ["name"] = "timeformat",
                      ["orig"] = "timeformat",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "Europe/Berlin",
                      ["kind"] = "query",
                      ["name"] = "timezone",
                      ["orig"] = "timezone",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v1/flood",
                ["segments"] = {
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "flood",
                  },
                },
                ["select"] = {
                  ["exist"] = {
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
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "v1",
                  "flood",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
