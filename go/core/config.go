package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "GlobalFlood",
			"slug": "global-flood",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://flood-api.open-meteo.com",
			"auth": map[string]any{
				"prefix": "",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"flood": map[string]any{},
			},
		},
		"entity": map[string]any{
			"flood": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "daily",
						"short": "Daily flood data",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "daily_units",
						"short": "Units for each daily variable",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"format": "float",
						"name": "generationtime_ms",
						"short": "Generation time of the forecast in milliseconds",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"format": "float",
						"name": "latitude",
						"short": "WGS84 latitude of the center of the weather grid-cell",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"format": "float",
						"name": "longitude",
						"short": "WGS84 longitude of the center of the weather grid-cell",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "timezone",
						"short": "Timezone identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "timezone_abbreviation",
						"short": "Timezone abbreviation",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "utc_offset_seconds",
						"short": "UTC offset in seconds",
						"type": "`$INTEGER`",
					},
				},
				"name": "flood",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "apikey",
											"orig": "apikey",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "nearest",
											"kind": "query",
											"name": "cell_selection",
											"orig": "cell_selection",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "river_discharge",
											"kind": "query",
											"name": "daily",
											"orig": "daily",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"example": "2022-07-30",
											"kind": "query",
											"name": "end_date",
											"orig": "end_date",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "ensemble",
											"orig": "ensemble",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": 92,
											"kind": "query",
											"name": "forecast_day",
											"orig": "forecast_day",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "59.9",
											"kind": "query",
											"name": "latitude",
											"orig": "latitude",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "10.75",
											"kind": "query",
											"name": "longitude",
											"orig": "longitude",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "past_day",
											"orig": "past_day",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "2022-06-30",
											"kind": "query",
											"name": "start_date",
											"orig": "start_date",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "iso8601",
											"kind": "query",
											"name": "timeformat",
											"orig": "timeformat",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "Europe/Berlin",
											"kind": "query",
											"name": "timezone",
											"orig": "timezone",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/flood",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "flood",
									},
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"flood",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
