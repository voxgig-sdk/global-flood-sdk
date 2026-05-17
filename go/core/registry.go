package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewFloodEntityFunc func(client *GlobalFloodSDK, entopts map[string]any) GlobalFloodEntity

