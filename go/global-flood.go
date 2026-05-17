package voxgigglobalfloodsdk

import (
	"github.com/voxgig-sdk/global-flood-sdk/go/core"
	"github.com/voxgig-sdk/global-flood-sdk/go/entity"
	"github.com/voxgig-sdk/global-flood-sdk/go/feature"
	_ "github.com/voxgig-sdk/global-flood-sdk/go/utility"
)

// Type aliases preserve external API.
type GlobalFloodSDK = core.GlobalFloodSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type GlobalFloodEntity = core.GlobalFloodEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type GlobalFloodError = core.GlobalFloodError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewFloodEntityFunc = func(client *core.GlobalFloodSDK, entopts map[string]any) core.GlobalFloodEntity {
		return entity.NewFloodEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewGlobalFloodSDK = core.NewGlobalFloodSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
