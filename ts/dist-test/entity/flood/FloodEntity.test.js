"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('FloodEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GLOBAL_FLOOD_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GLOBAL_FLOOD_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GlobalFloodSDK.test();
        const ent = testsdk.Flood();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GLOBAL_FLOOD_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'flood.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "daily", "req": false, "short": "Daily flood data", "type": "`$OBJECT`", "index$": 0 }, { "active": true, "name": "daily_units", "req": false, "short": "Units for each daily variable", "type": "`$OBJECT`", "index$": 1 }, { "active": true, "format": "float", "name": "generationtime_ms", "req": false, "short": "Generation time of the forecast in milliseconds", "type": "`$NUMBER`", "index$": 2 }, { "active": true, "format": "float", "name": "latitude", "req": false, "short": "WGS84 latitude of the center of the weather grid-cell", "type": "`$NUMBER`", "index$": 3 }, { "active": true, "format": "float", "name": "longitude", "req": false, "short": "WGS84 longitude of the center of the weather grid-cell", "type": "`$NUMBER`", "index$": 4 }, { "active": true, "name": "timezone", "req": false, "short": "Timezone identifier", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "timezone_abbreviation", "req": false, "short": "Timezone abbreviation", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "utc_offset_seconds", "req": false, "short": "UTC offset in seconds", "type": "`$INTEGER`", "index$": 7 }], "name": "flood", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "apikey", "orig": "apikey", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "nearest", "kind": "query", "name": "cell_selection", "orig": "cell_selection", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "example": "river_discharge", "kind": "query", "name": "daily", "orig": "daily", "reqd": false, "type": "`$ARRAY`", "index$": 2 }, { "active": true, "example": "2022-07-30", "kind": "query", "name": "end_date", "orig": "end_date", "reqd": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "example": false, "kind": "query", "name": "ensemble", "orig": "ensemble", "reqd": false, "type": "`$BOOLEAN`", "index$": 4 }, { "active": true, "example": 92, "kind": "query", "name": "forecast_day", "orig": "forecast_day", "reqd": false, "type": "`$INTEGER`", "index$": 5 }, { "active": true, "example": "59.9", "kind": "query", "name": "latitude", "orig": "latitude", "reqd": true, "type": "`$STRING`", "index$": 6 }, { "active": true, "example": "10.75", "kind": "query", "name": "longitude", "orig": "longitude", "reqd": true, "type": "`$STRING`", "index$": 7 }, { "active": true, "example": 0, "kind": "query", "name": "past_day", "orig": "past_day", "reqd": false, "type": "`$INTEGER`", "index$": 8 }, { "active": true, "example": "2022-06-30", "kind": "query", "name": "start_date", "orig": "start_date", "reqd": false, "type": "`$STRING`", "index$": 9 }, { "active": true, "example": "iso8601", "kind": "query", "name": "timeformat", "orig": "timeformat", "reqd": false, "type": "`$STRING`", "index$": 10 }, { "active": true, "example": "Europe/Berlin", "kind": "query", "name": "timezone", "orig": "timezone", "reqd": false, "type": "`$STRING`", "index$": 11 }] }, "contract": { "id": "GET /v1/flood", "json": "{\"operationId\":\"getFloodData\",\"parameters\":[{\"description\":\"Latitude (WGS84) of the location. Multiple coordinates can be comma separated (e.g., 52.52,48.85).\",\"example\":\"59.9\",\"in\":\"query\",\"name\":\"latitude\",\"required\":true,\"schema\":{\"pattern\":\"^-?\\\\d+\\\\.?\\\\d*(,-?\\\\d+\\\\.?\\\\d*)*$\",\"type\":\"string\"}},{\"description\":\"Longitude (WGS84) of the location. Multiple coordinates can be comma separated (e.g., 13.41,2.35).\",\"example\":\"10.75\",\"in\":\"query\",\"name\":\"longitude\",\"required\":true,\"schema\":{\"pattern\":\"^-?\\\\d+\\\\.?\\\\d*(,-?\\\\d+\\\\.?\\\\d*)*$\",\"type\":\"string\"}},{\"description\":\"Daily flood variables to return. Can be comma separated or multiple daily parameters.\",\"example\":\"river_discharge\",\"explode\":false,\"in\":\"query\",\"name\":\"daily\",\"required\":false,\"schema\":{\"items\":{\"enum\":[\"river_discharge\",\"river_discharge_mean\",\"river_discharge_median\",\"river_discharge_max\",\"river_discharge_min\",\"river_discharge_p25\",\"river_discharge_p75\"],\"type\":\"string\"},\"type\":\"array\"},\"style\":\"form\"},{\"description\":\"Time format for returned data. Use 'unixtime' for UNIX epoch time in seconds (GMT+0) or 'iso8601' for ISO8601 format.\",\"in\":\"query\",\"name\":\"timeformat\",\"required\":false,\"schema\":{\"default\":\"iso8601\",\"enum\":[\"iso8601\",\"unixtime\"],\"type\":\"string\"}},{\"description\":\"Number of past days to include in the response.\",\"in\":\"query\",\"name\":\"past_days\",\"required\":false,\"schema\":{\"default\":0,\"minimum\":0,\"type\":\"integer\"}},{\"description\":\"Number of forecast days to return. Maximum 210 days.\",\"in\":\"query\",\"name\":\"forecast_days\",\"required\":false,\"schema\":{\"default\":92,\"maximum\":210,\"minimum\":0,\"type\":\"integer\"}},{\"description\":\"Start date for the time interval (ISO8601 format: yyyy-mm-dd). Data available from 1984-01-01.\",\"example\":\"2022-06-30\",\"in\":\"query\",\"name\":\"start_date\",\"required\":false,\"schema\":{\"format\":\"date\",\"type\":\"string\"}},{\"description\":\"End date for the time interval (ISO8601 format: yyyy-mm-dd).\",\"example\":\"2022-07-30\",\"in\":\"query\",\"name\":\"end_date\",\"required\":false,\"schema\":{\"format\":\"date\",\"type\":\"string\"}},{\"description\":\"If true, all forecast ensemble members will be returned.\",\"in\":\"query\",\"name\":\"ensemble\",\"required\":false,\"schema\":{\"default\":false,\"type\":\"boolean\"}},{\"description\":\"Preference for grid-cell selection. 'land' finds suitable grid-cell on land with similar elevation, 'sea' prefers grid-cells on sea, 'nearest' selects the nearest grid-cell.\",\"in\":\"query\",\"name\":\"cell_selection\",\"required\":false,\"schema\":{\"default\":\"nearest\",\"enum\":[\"land\",\"sea\",\"nearest\"],\"type\":\"string\"}},{\"description\":\"Timezone for time values. If not set, GMT+0 is used.\",\"example\":\"Europe/Berlin\",\"in\":\"query\",\"name\":\"timezone\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"API key for commercial use to access reserved API resources. Required when using the customer- server prefix.\",\"in\":\"query\",\"name\":\"apikey\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"daily\":{\"river_discharge\":[8.04,8.75,8.93],\"time\":[\"2025-03-03\",\"2025-03-04\",\"2025-03-05\"]},\"daily_units\":{\"river_discharge\":\"m³/s\"},\"generationtime_ms\":0.0627040863037109,\"latitude\":59.9,\"longitude\":10.75,\"timezone\":\"GMT\",\"timezone_abbreviation\":\"GMT\",\"utc_offset_seconds\":0},\"schema\":{\"properties\":{\"daily\":{\"description\":\"Daily flood data\",\"properties\":{\"river_discharge\":{\"description\":\"Daily river discharge rate in m³/s\",\"items\":{\"format\":\"float\",\"type\":\"number\"},\"type\":\"array\"},\"river_discharge_max\":{\"description\":\"Maximum river discharge rate from ensemble members in m³/s\",\"items\":{\"format\":\"float\",\"type\":\"number\"},\"type\":\"array\"},\"river_discharge_mean\":{\"description\":\"Mean river discharge rate from ensemble members in m³/s\",\"items\":{\"format\":\"float\",\"type\":\"number\"},\"type\":\"array\"},\"river_discharge_median\":{\"description\":\"Median river discharge rate from ensemble members in m³/s\",\"items\":{\"format\":\"float\",\"type\":\"number\"},\"type\":\"array\"},\"river_discharge_min\":{\"description\":\"Minimum river discharge rate from ensemble members in m³/s\",\"items\":{\"format\":\"float\",\"type\":\"number\"},\"type\":\"array\"},\"river_discharge_p25\":{\"description\":\"25th percentile river discharge rate from ensemble members in m³/s\",\"items\":{\"format\":\"float\",\"type\":\"number\"},\"type\":\"array\"},\"river_discharge_p75\":{\"description\":\"75th percentile river discharge rate from ensemble members in m³/s\",\"items\":{\"format\":\"float\",\"type\":\"number\"},\"type\":\"array\"},\"time\":{\"description\":\"Array of ISO8601 timestamps or UNIX epoch times\",\"items\":{\"format\":\"date\",\"type\":\"string\"},\"type\":\"array\"}},\"type\":\"object\"},\"daily_units\":{\"additionalProperties\":{\"type\":\"string\"},\"description\":\"Units for each daily variable\",\"type\":\"object\"},\"generationtime_ms\":{\"description\":\"Generation time of the forecast in milliseconds\",\"format\":\"float\",\"type\":\"number\"},\"latitude\":{\"description\":\"WGS84 latitude of the center of the weather grid-cell\",\"format\":\"float\",\"type\":\"number\"},\"longitude\":{\"description\":\"WGS84 longitude of the center of the weather grid-cell\",\"format\":\"float\",\"type\":\"number\"},\"timezone\":{\"description\":\"Timezone identifier\",\"type\":\"string\"},\"timezone_abbreviation\":{\"description\":\"Timezone abbreviation\",\"type\":\"string\"},\"utc_offset_seconds\":{\"description\":\"UTC offset in seconds\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Successful response with flood data\"},\"400\":{\"content\":{\"application/json\":{\"example\":{\"error\":true,\"reason\":\"Cannot initialize WeatherVariable from invalid String value river_discharge for key daily\"},\"schema\":{\"properties\":{\"error\":{\"description\":\"Indicates an error occurred\",\"type\":\"boolean\"},\"reason\":{\"description\":\"Description of the error\",\"type\":\"string\"}},\"required\":[\"error\",\"reason\"],\"type\":\"object\"}}},\"description\":\"Bad request - Invalid parameters\"}},\"securitySchemes\":{\"ApiKeyAuth\":{\"description\":\"API key for commercial use\",\"in\":\"query\",\"name\":\"apikey\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/v1/flood", "segments": [{ "lit": "v1" }, { "lit": "flood" }], "select": { "exist": ["apikey", "cell_selection", "daily", "end_date", "ensemble", "forecast_day", "latitude", "longitude", "past_day", "start_date", "timeformat", "timezone"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "flood", "name__orig": "flood", "Name": "Flood", "name_": "flood", "name-": "flood", "NAME": "FLOOD", "index$": 0 }, { "active": true, "entity": "flood", "key$": "BasicFloodFlow", "kind": "basic", "name": "BasicFloodFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "flood_ref01", "srcdatavar": "flood_ref01_data", "suffix": "_dt0" }, "match": {}, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-flood_ref01" } }], "index$": 0 }] }, 'Flood');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let flood_ref01_data = Object.values(setup.data.existing.flood)[0];
        // LOAD
        const flood_ref01_ent = client.Flood();
        const flood_ref01_match_dt0 = {};
        const flood_ref01_data_dt0 = (await flood_ref01_ent.load(flood_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != flood_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/flood/FloodTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GlobalFloodSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['flood01', 'flood02', 'flood03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GLOBAL_FLOOD_TEST_FLOOD_ENTID': idmap,
        'GLOBAL_FLOOD_TEST_LIVE': 'FALSE',
        'GLOBAL_FLOOD_TEST_EXPLAIN': 'FALSE',
        'GLOBAL_FLOOD_APIKEY': '',
    });
    idmap = env['GLOBAL_FLOOD_TEST_FLOOD_ENTID'];
    const live = 'TRUE' === env.GLOBAL_FLOOD_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GLOBAL_FLOOD_TEST_FLOOD_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.GlobalFloodSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
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
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=FloodEntity.test.js.map