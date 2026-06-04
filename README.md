# GlobalFlood SDK

Query simulated river discharge at ~5 km resolution from 1984 to a 7-month forecast, powered by GloFAS

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Global Flood API

The Global Flood API is a free public service from [Open-Meteo](https://open-meteo.com) that exposes simulated daily river discharge derived from the [Global Flood Awareness System (GloFAS)](https://global-flood.emergency.copernicus.eu/), part of the EU's Copernicus Emergency Management Service. Historical reanalysis is available from 1 January 1984, and the same endpoint returns forecasts of up to about seven months ahead.

What you get from the API:

- Daily `river_discharge` in m³/s for any latitude/longitude on the global grid.
- Ensemble statistics: `river_discharge_mean`, `_median`, `_max`, `_min`, and the `_p25` / `_p75` percentiles.
- Access to all 50 ensemble members for forecast runs.
- Choice of GloFAS v4 (~5 km, 0.05°) or GloFAS v3 (~11 km, 0.1°) models.
- Tunable `past_days`, `forecast_days` (0–210), `timeformat` (ISO8601 or UNIX), and `cell_selection` (nearest / land / sea).

Operational notes: requests go to `https://flood-api.open-meteo.com/v1/flood`. The free tier requires no API key for non-commercial use; commercial traffic is served from a `customer-` host with a key. Because the grid resolution is ~5 km, the nearest river cell may not be the intended one — nudging coordinates by ~0.1° can help.

## Try it

**TypeScript**
```bash
npm install global-flood
```

**Python**
```bash
pip install global-flood-sdk
```

**PHP**
```bash
composer require voxgig/global-flood-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/global-flood-sdk/go
```

**Ruby**
```bash
gem install global-flood-sdk
```

**Lua**
```bash
luarocks install global-flood-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { GlobalFloodSDK } from 'global-flood'

const client = new GlobalFloodSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o global-flood-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "global-flood": {
      "command": "/abs/path/to/global-flood-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Flood** | River-discharge time series for a given coordinate, returned by `GET /v1/flood` with parameters such as `latitude`, `longitude`, and `daily=river_discharge`. | `/v1/flood` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from globalflood_sdk import GlobalFloodSDK

client = GlobalFloodSDK({})


# Load a specific flood
flood, err = client.Flood(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'globalflood_sdk.php';

$client = new GlobalFloodSDK([]);


// Load a specific flood
[$flood, $err] = $client->Flood(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/global-flood-sdk/go"

client := sdk.NewGlobalFloodSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "GlobalFlood_sdk"

client = GlobalFloodSDK.new({})


# Load a specific flood
flood, err = client.Flood(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("global-flood_sdk")

local client = sdk.new({})


-- Load a specific flood
local flood, err = client:Flood(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = GlobalFloodSDK.test()
const result = await client.Flood().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = GlobalFloodSDK.test(None, None)
result, err = client.Flood(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = GlobalFloodSDK::test(null, null);
[$result, $err] = $client->Flood(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Flood(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = GlobalFloodSDK.test(nil, nil)
result, err = client.Flood(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Flood(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Global Flood API

- Upstream: [https://open-meteo.com/en/docs/flood-api](https://open-meteo.com/en/docs/flood-api)

- Data is provided under the [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/) licence.
- Attribution to [Open-Meteo](https://open-meteo.com) and the underlying [GloFAS](https://global-flood.emergency.copernicus.eu/) (Copernicus Emergency Management Service) is required when redistributing.
- The free tier is intended for non-commercial use; commercial usage typically requires an API key (URL prefix `customer-`).

---

Generated from the Global Flood API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
