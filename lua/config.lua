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
            ["title"] = "Daily",
            ["type"] = "`$OBJECT`",
            ["short"] = "Daily flood data",
          },
          {
            ["name"] = "daily_units",
            ["title"] = "Daily Units",
            ["type"] = "`$OBJECT`",
            ["short"] = "Units for each daily variable",
          },
          {
            ["name"] = "generationtime_ms",
            ["title"] = "Generationtime Ms",
            ["type"] = "`$NUMBER`",
            ["short"] = "Generation time of the forecast in milliseconds",
            ["format"] = "float",
          },
          {
            ["name"] = "latitude",
            ["title"] = "Latitude",
            ["type"] = "`$NUMBER`",
            ["short"] = "WGS84 latitude of the center of the weather grid-cell",
            ["format"] = "float",
          },
          {
            ["name"] = "longitude",
            ["title"] = "Longitude",
            ["type"] = "`$NUMBER`",
            ["short"] = "WGS84 longitude of the center of the weather grid-cell",
            ["format"] = "float",
          },
          {
            ["name"] = "timezone",
            ["title"] = "Timezone",
            ["type"] = "`$STRING`",
            ["short"] = "Timezone identifier",
          },
          {
            ["name"] = "timezone_abbreviation",
            ["title"] = "Timezone Abbreviation",
            ["type"] = "`$STRING`",
            ["short"] = "Timezone abbreviation",
          },
          {
            ["name"] = "utc_offset_seconds",
            ["title"] = "Utc Offset Seconds",
            ["type"] = "`$INTEGER`",
            ["short"] = "UTC offset in seconds",
          },
        },
        ["name"] = "flood",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
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
                ["parts"] = {
                  "v1",
                  "flood",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "apikey",
                      ["orig"] = "apikey",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "cell_selection",
                      ["orig"] = "cell_selection",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "nearest",
                    },
                    {
                      ["name"] = "daily",
                      ["orig"] = "daily",
                      ["type"] = "`$ARRAY`",
                      ["kind"] = "query",
                      ["example"] = "river_discharge",
                    },
                    {
                      ["name"] = "end_date",
                      ["orig"] = "end_date",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "2022-07-30",
                    },
                    {
                      ["name"] = "ensemble",
                      ["orig"] = "ensemble",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "forecast_day",
                      ["orig"] = "forecast_day",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 92,
                    },
                    {
                      ["name"] = "latitude",
                      ["orig"] = "latitude",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                      ["example"] = "59.9",
                    },
                    {
                      ["name"] = "longitude",
                      ["orig"] = "longitude",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                      ["example"] = "10.75",
                    },
                    {
                      ["name"] = "past_day",
                      ["orig"] = "past_day",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 0,
                    },
                    {
                      ["name"] = "start_date",
                      ["orig"] = "start_date",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "2022-06-30",
                    },
                    {
                      ["name"] = "timeformat",
                      ["orig"] = "timeformat",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "iso8601",
                    },
                    {
                      ["name"] = "timezone",
                      ["orig"] = "timezone",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "Europe/Berlin",
                    },
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
