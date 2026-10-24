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
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.GlobalFloodSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.Flood().load({ "apikey": 1, "latitude": "x", "longitude": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GLOBAL_FLOOD_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'flood.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "daily": { "a": true, "h": "Daily", "n": "daily", "r": false, "sh": "Daily flood data", "t": "`$OBJECT`", "key$": "daily", "index$": 0 }, "daily_units": { "a": true, "h": "Daily Units", "n": "daily_units", "r": false, "sh": "Units for each daily variable", "t": "`$OBJECT`", "key$": "daily_units", "index$": 1 }, "generationtime_ms": { "a": true, "fo": "float", "h": "Generationtime Ms", "n": "generationtime_ms", "r": false, "sh": "Generation time of the forecast in milliseconds", "t": "`$NUMBER`", "key$": "generationtime_ms", "index$": 2 }, "latitude": { "a": true, "fo": "float", "h": "Latitude", "n": "latitude", "r": false, "sh": "WGS84 latitude of the center of the weather grid-cell", "t": "`$NUMBER`", "key$": "latitude", "index$": 3 }, "longitude": { "a": true, "fo": "float", "h": "Longitude", "n": "longitude", "r": false, "sh": "WGS84 longitude of the center of the weather grid-cell", "t": "`$NUMBER`", "key$": "longitude", "index$": 4 }, "timezone": { "a": true, "h": "Timezone", "n": "timezone", "r": false, "sh": "Timezone identifier", "t": "`$STRING`", "key$": "timezone", "index$": 5 }, "timezone_abbreviation": { "a": true, "h": "Timezone Abbreviation", "n": "timezone_abbreviation", "r": false, "sh": "Timezone abbreviation", "t": "`$STRING`", "key$": "timezone_abbreviation", "index$": 6 }, "utc_offset_seconds": { "a": true, "h": "Utc Offset Seconds", "n": "utc_offset_seconds", "r": false, "sh": "UTC offset in seconds", "t": "`$INTEGER`", "key$": "utc_offset_seconds", "index$": 7 } }, "name": "flood", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v1/flood", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "apikey", "or": "apikey", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "nearest", "k": "query", "n": "cell_selection", "or": "cell_selection", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "river_discharge", "k": "query", "n": "daily", "or": "daily", "r": false, "t": "`$ARRAY`", "index$": 2 }, { "a": true, "ex": "2022-07-30", "k": "query", "n": "end_date", "or": "end_date", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "ex": false, "k": "query", "n": "ensemble", "or": "ensemble", "r": false, "t": "`$BOOLEAN`", "index$": 4 }, { "a": true, "ex": 92, "k": "query", "n": "forecast_day", "or": "forecast_days", "r": false, "t": "`$INTEGER`", "index$": 5 }, { "a": true, "ex": "59.9", "k": "query", "n": "latitude", "or": "latitude", "r": true, "t": "`$STRING`", "index$": 6 }, { "a": true, "ex": "10.75", "k": "query", "n": "longitude", "or": "longitude", "r": true, "t": "`$STRING`", "index$": 7 }, { "a": true, "ex": 0, "k": "query", "n": "past_day", "or": "past_days", "r": false, "t": "`$INTEGER`", "index$": 8 }, { "a": true, "ex": "2022-06-30", "k": "query", "n": "start_date", "or": "start_date", "r": false, "t": "`$STRING`", "index$": 9 }, { "a": true, "ex": "iso8601", "k": "query", "n": "timeformat", "or": "timeformat", "r": false, "t": "`$STRING`", "index$": 10 }, { "a": true, "ex": "Europe/Berlin", "k": "query", "n": "timezone", "or": "timezone", "r": false, "t": "`$STRING`", "index$": 11 }] }, "k": "http", "m": "GET", "o": "/v1/flood", "q": { "exist": ["latitude", "longitude"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "flood" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "flood", "name__orig": "flood", "Name": "Flood", "name_": "flood", "name-": "flood", "NAME": "FLOOD", "index$": 0 }, { "active": true, "entity": "flood", "key$": "BasicFloodFlow", "kind": "basic", "name": "BasicFloodFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "flood_ref01", "srcdatavar": "flood_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-flood_ref01" } }], "index$": 0 }] }, 'Flood', { "GET /v1/flood": { "protocol": "http", "parameters": [{ "name": "latitude", "in": "query", "description": "Latitude (WGS84) of the location. Multiple coordinates can be comma separated (e.g., 52.52,48.85).", "required": true, "schema": { "type": "string", "pattern": "^-?\\d+\\.?\\d*(,-?\\d+\\.?\\d*)*$" }, "example": "59.9", "index$": 0 }, { "name": "longitude", "in": "query", "description": "Longitude (WGS84) of the location. Multiple coordinates can be comma separated (e.g., 13.41,2.35).", "required": true, "schema": { "type": "string", "pattern": "^-?\\d+\\.?\\d*(,-?\\d+\\.?\\d*)*$" }, "example": "10.75", "index$": 1 }, { "name": "daily", "in": "query", "description": "Daily flood variables to return. Can be comma separated or multiple daily parameters.", "required": false, "schema": { "type": "array", "items": { "type": "string", "enum": ["river_discharge", "river_discharge_mean", "river_discharge_median", "river_discharge_max", "river_discharge_min", "river_discharge_p25", "river_discharge_p75"] } }, "style": "form", "explode": false, "example": "river_discharge", "index$": 2 }, { "name": "timeformat", "in": "query", "description": "Time format for returned data. Use 'unixtime' for UNIX epoch time in seconds (GMT+0) or 'iso8601' for ISO8601 format.", "required": false, "schema": { "type": "string", "enum": ["iso8601", "unixtime"], "default": "iso8601" }, "index$": 3 }, { "name": "past_days", "in": "query", "description": "Number of past days to include in the response.", "required": false, "schema": { "type": "integer", "minimum": 0, "default": 0 }, "index$": 4 }, { "name": "forecast_days", "in": "query", "description": "Number of forecast days to return. Maximum 210 days.", "required": false, "schema": { "type": "integer", "minimum": 0, "maximum": 210, "default": 92 }, "index$": 5 }, { "name": "start_date", "in": "query", "description": "Start date for the time interval (ISO8601 format: yyyy-mm-dd). Data available from 1984-01-01.", "required": false, "schema": { "type": "string", "format": "date" }, "example": "2022-06-30", "index$": 6 }, { "name": "end_date", "in": "query", "description": "End date for the time interval (ISO8601 format: yyyy-mm-dd).", "required": false, "schema": { "type": "string", "format": "date" }, "example": "2022-07-30", "index$": 7 }, { "name": "ensemble", "in": "query", "description": "If true, all forecast ensemble members will be returned.", "required": false, "schema": { "type": "boolean", "default": false }, "index$": 8 }, { "name": "cell_selection", "in": "query", "description": "Preference for grid-cell selection. 'land' finds suitable grid-cell on land with similar elevation, 'sea' prefers grid-cells on sea, 'nearest' selects the nearest grid-cell.", "required": false, "schema": { "type": "string", "enum": ["land", "sea", "nearest"], "default": "nearest" }, "index$": 9 }, { "name": "timezone", "in": "query", "description": "Timezone for time values. If not set, GMT+0 is used.", "required": false, "schema": { "type": "string" }, "example": "Europe/Berlin", "index$": 10 }, { "name": "apikey", "in": "query", "description": "API key for commercial use to access reserved API resources. Required when using the customer- server prefix.", "required": false, "schema": { "type": "string" }, "index$": 11 }] } }, { strict: LIVE_STRICT, t });
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
// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true;
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