

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { GlobalFloodSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('FloodEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GLOBAL_FLOOD_TEST_LIVE=TRUE.
  afterEach(liveDelay('GLOBAL_FLOOD_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GlobalFloodSDK.test()
    const ent = testsdk.Flood()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GLOBAL_FLOOD_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'flood.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"daily":{"a":true,"h":"Daily","n":"daily","r":false,"sh":"Daily flood data","t":"`$OBJECT`","key$":"daily","index$":0},"daily_units":{"a":true,"h":"Daily Units","n":"daily_units","r":false,"sh":"Units for each daily variable","t":"`$OBJECT`","key$":"daily_units","index$":1},"generationtime_ms":{"a":true,"fo":"float","h":"Generationtime Ms","n":"generationtime_ms","r":false,"sh":"Generation time of the forecast in milliseconds","t":"`$NUMBER`","key$":"generationtime_ms","index$":2},"latitude":{"a":true,"fo":"float","h":"Latitude","n":"latitude","r":false,"sh":"WGS84 latitude of the center of the weather grid-cell","t":"`$NUMBER`","key$":"latitude","index$":3},"longitude":{"a":true,"fo":"float","h":"Longitude","n":"longitude","r":false,"sh":"WGS84 longitude of the center of the weather grid-cell","t":"`$NUMBER`","key$":"longitude","index$":4},"timezone":{"a":true,"h":"Timezone","n":"timezone","r":false,"sh":"Timezone identifier","t":"`$STRING`","key$":"timezone","index$":5},"timezone_abbreviation":{"a":true,"h":"Timezone Abbreviation","n":"timezone_abbreviation","r":false,"sh":"Timezone abbreviation","t":"`$STRING`","key$":"timezone_abbreviation","index$":6},"utc_offset_seconds":{"a":true,"h":"Utc Offset Seconds","n":"utc_offset_seconds","r":false,"sh":"UTC offset in seconds","t":"`$INTEGER`","key$":"utc_offset_seconds","index$":7}},"name":"flood","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/flood","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"apikey","or":"apikey","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"nearest","k":"query","n":"cell_selection","or":"cell_selection","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"river_discharge","k":"query","n":"daily","or":"daily","r":false,"t":"`$ARRAY`","index$":2},{"a":true,"ex":"2022-07-30","k":"query","n":"end_date","or":"end_date","r":false,"t":"`$STRING`","index$":3},{"a":true,"ex":false,"k":"query","n":"ensemble","or":"ensemble","r":false,"t":"`$BOOLEAN`","index$":4},{"a":true,"ex":92,"k":"query","n":"forecast_day","or":"forecast_day","r":false,"t":"`$INTEGER`","index$":5},{"a":true,"ex":"59.9","k":"query","n":"latitude","or":"latitude","r":true,"t":"`$STRING`","index$":6},{"a":true,"ex":"10.75","k":"query","n":"longitude","or":"longitude","r":true,"t":"`$STRING`","index$":7},{"a":true,"ex":0,"k":"query","n":"past_day","or":"past_day","r":false,"t":"`$INTEGER`","index$":8},{"a":true,"ex":"2022-06-30","k":"query","n":"start_date","or":"start_date","r":false,"t":"`$STRING`","index$":9},{"a":true,"ex":"iso8601","k":"query","n":"timeformat","or":"timeformat","r":false,"t":"`$STRING`","index$":10},{"a":true,"ex":"Europe/Berlin","k":"query","n":"timezone","or":"timezone","r":false,"t":"`$STRING`","index$":11}]},"k":"http","m":"GET","o":"/v1/flood","q":{"exist":["apikey","cell_selection","daily","end_date","ensemble","forecast_day","latitude","longitude","past_day","start_date","timeformat","timezone"]},"r":{},"s":[{"lit":"v1"},{"lit":"flood"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"flood","name__orig":"flood","Name":"Flood","name_":"flood","name-":"flood","NAME":"FLOOD","index$":0}, {"active":true,"entity":"flood","key$":"BasicFloodFlow","kind":"basic","name":"BasicFloodFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"flood_ref01","srcdatavar":"flood_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-flood_ref01"}}],"index$":0}]}, 'Flood', {"GET /v1/flood":{"protocol":"http","operationId":"getFloodData","responses":{"200":{"description":"Successful response with flood data","content":{"application/json":{"schema":{"type":"object","properties":{"latitude":{"description":"WGS84 latitude of the center of the weather grid-cell","format":"float","key$":"latitude","type":"number"},"longitude":{"description":"WGS84 longitude of the center of the weather grid-cell","format":"float","key$":"longitude","type":"number"},"generationtime_ms":{"description":"Generation time of the forecast in milliseconds","format":"float","key$":"generationtime_ms","type":"number"},"utc_offset_seconds":{"description":"UTC offset in seconds","key$":"utc_offset_seconds","type":"integer"},"timezone":{"description":"Timezone identifier","key$":"timezone","type":"string"},"timezone_abbreviation":{"description":"Timezone abbreviation","key$":"timezone_abbreviation","type":"string"},"daily_units":{"additionalProperties":{"type":"string"},"description":"Units for each daily variable","key$":"daily_units","type":"object"},"daily":{"description":"Daily flood data","key$":"daily","properties":{"river_discharge":{"description":"Daily river discharge rate in m³/s","items":{"format":"float","type":"number"},"type":"array"},"river_discharge_max":{"description":"Maximum river discharge rate from ensemble members in m³/s","items":{"format":"float","type":"number"},"type":"array"},"river_discharge_mean":{"description":"Mean river discharge rate from ensemble members in m³/s","items":{"format":"float","type":"number"},"type":"array"},"river_discharge_median":{"description":"Median river discharge rate from ensemble members in m³/s","items":{"format":"float","type":"number"},"type":"array"},"river_discharge_min":{"description":"Minimum river discharge rate from ensemble members in m³/s","items":{"format":"float","type":"number"},"type":"array"},"river_discharge_p25":{"description":"25th percentile river discharge rate from ensemble members in m³/s","items":{"format":"float","type":"number"},"type":"array"},"river_discharge_p75":{"description":"75th percentile river discharge rate from ensemble members in m³/s","items":{"format":"float","type":"number"},"type":"array"},"time":{"description":"Array of ISO8601 timestamps or UNIX epoch times","items":{"format":"date","type":"string"},"type":"array"}},"type":"object"}},"x-ref":"#/components/schemas/FloodResponse","index$":0},"example":{"latitude":59.9,"longitude":10.75,"generationtime_ms":0.0627040863037109,"utc_offset_seconds":0,"timezone":"GMT","timezone_abbreviation":"GMT","daily_units":{"river_discharge":"m³/s"},"daily":{"time":["2025-03-03","2025-03-04","2025-03-05"],"river_discharge":[8.04,8.75,8.93]}}}}},"400":{"description":"Bad request - Invalid parameters","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"boolean","description":"Indicates an error occurred"},"reason":{"type":"string","description":"Description of the error"}},"required":["error","reason"],"x-ref":"#/components/schemas/ErrorResponse"},"example":{"error":true,"reason":"Cannot initialize WeatherVariable from invalid String value river_discharge for key daily"}}}}},"parameters":[{"name":"latitude","in":"query","description":"Latitude (WGS84) of the location. Multiple coordinates can be comma separated (e.g., 52.52,48.85).","required":true,"schema":{"type":"string","pattern":"^-?\\d+\\.?\\d*(,-?\\d+\\.?\\d*)*$"},"example":"59.9","index$":0},{"name":"longitude","in":"query","description":"Longitude (WGS84) of the location. Multiple coordinates can be comma separated (e.g., 13.41,2.35).","required":true,"schema":{"type":"string","pattern":"^-?\\d+\\.?\\d*(,-?\\d+\\.?\\d*)*$"},"example":"10.75","index$":1},{"name":"daily","in":"query","description":"Daily flood variables to return. Can be comma separated or multiple daily parameters.","required":false,"schema":{"type":"array","items":{"type":"string","enum":["river_discharge","river_discharge_mean","river_discharge_median","river_discharge_max","river_discharge_min","river_discharge_p25","river_discharge_p75"]}},"style":"form","explode":false,"example":"river_discharge","index$":2},{"name":"timeformat","in":"query","description":"Time format for returned data. Use 'unixtime' for UNIX epoch time in seconds (GMT+0) or 'iso8601' for ISO8601 format.","required":false,"schema":{"type":"string","enum":["iso8601","unixtime"],"default":"iso8601"},"index$":3},{"name":"past_days","in":"query","description":"Number of past days to include in the response.","required":false,"schema":{"type":"integer","minimum":0,"default":0},"index$":4},{"name":"forecast_days","in":"query","description":"Number of forecast days to return. Maximum 210 days.","required":false,"schema":{"type":"integer","minimum":0,"maximum":210,"default":92},"index$":5},{"name":"start_date","in":"query","description":"Start date for the time interval (ISO8601 format: yyyy-mm-dd). Data available from 1984-01-01.","required":false,"schema":{"type":"string","format":"date"},"example":"2022-06-30","index$":6},{"name":"end_date","in":"query","description":"End date for the time interval (ISO8601 format: yyyy-mm-dd).","required":false,"schema":{"type":"string","format":"date"},"example":"2022-07-30","index$":7},{"name":"ensemble","in":"query","description":"If true, all forecast ensemble members will be returned.","required":false,"schema":{"type":"boolean","default":false},"index$":8},{"name":"cell_selection","in":"query","description":"Preference for grid-cell selection. 'land' finds suitable grid-cell on land with similar elevation, 'sea' prefers grid-cells on sea, 'nearest' selects the nearest grid-cell.","required":false,"schema":{"type":"string","enum":["land","sea","nearest"],"default":"nearest"},"index$":9},{"name":"timezone","in":"query","description":"Timezone for time values. If not set, GMT+0 is used.","required":false,"schema":{"type":"string"},"example":"Europe/Berlin","index$":10},{"name":"apikey","in":"query","description":"API key for commercial use to access reserved API resources. Required when using the customer- server prefix.","required":false,"schema":{"type":"string"},"index$":11}],"securitySource":"unspecified","securitySchemes":{"ApiKeyAuth":{"type":"apiKey","in":"query","name":"apikey","description":"API key for commercial use"}}}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let flood_ref01_data = Object.values(setup.data.existing.flood)[0] as any

    // LOAD
    const flood_ref01_ent = client.Flood()
    const flood_ref01_match_dt0: any = {}
    const flood_ref01_data_dt0 = (await flood_ref01_ent.load(flood_ref01_match_dt0)).data()
    assert(null != flood_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/flood/FloodTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = GlobalFloodSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['flood01','flood02','flood03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GLOBAL_FLOOD_TEST_FLOOD_ENTID': idmap,
    'GLOBAL_FLOOD_TEST_LIVE': 'FALSE',
    'GLOBAL_FLOOD_TEST_EXPLAIN': 'FALSE',
    'GLOBAL_FLOOD_APIKEY': '',
  })

  idmap = env['GLOBAL_FLOOD_TEST_FLOOD_ENTID']

  const live = 'TRUE' === env.GLOBAL_FLOOD_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GLOBAL_FLOOD_TEST_FLOOD_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new GlobalFloodSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.GLOBAL_FLOOD_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.GLOBAL_FLOOD_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
