package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "GlobalFlood",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
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
						"active": true,
						"name": "daily",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "daily_unit",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "generationtime_m",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "latitude",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "longitude",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "timezone",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "timezone_abbreviation",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "utc_offset_second",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 7,
					},
				},
				"name": "flood",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "apikey",
											"orig": "apikey",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "nearest",
											"kind": "query",
											"name": "cell_selection",
											"orig": "cell_selection",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "river_discharge",
											"kind": "query",
											"name": "daily",
											"orig": "daily",
											"reqd": false,
											"type": "`$ARRAY`",
										},
										map[string]any{
											"active": true,
											"example": "2022-07-30",
											"kind": "query",
											"name": "end_date",
											"orig": "end_date",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": false,
											"kind": "query",
											"name": "ensemble",
											"orig": "ensemble",
											"reqd": false,
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"active": true,
											"example": 92,
											"kind": "query",
											"name": "forecast_day",
											"orig": "forecast_day",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": "59.9",
											"kind": "query",
											"name": "latitude",
											"orig": "latitude",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "10.75",
											"kind": "query",
											"name": "longitude",
											"orig": "longitude",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": 0,
											"kind": "query",
											"name": "past_day",
											"orig": "past_day",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": "2022-06-30",
											"kind": "query",
											"name": "start_date",
											"orig": "start_date",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "iso8601",
											"kind": "query",
											"name": "timeformat",
											"orig": "timeformat",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "Europe/Berlin",
											"kind": "query",
											"name": "timezone",
											"orig": "timezone",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
								"method": "GET",
								"orig": "/v1/flood",
								"parts": []any{
									"v1",
									"flood",
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
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
