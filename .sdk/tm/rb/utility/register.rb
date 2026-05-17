# GlobalFlood SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

GlobalFloodUtility.registrar = ->(u) {
  u.clean = GlobalFloodUtilities::Clean
  u.done = GlobalFloodUtilities::Done
  u.make_error = GlobalFloodUtilities::MakeError
  u.feature_add = GlobalFloodUtilities::FeatureAdd
  u.feature_hook = GlobalFloodUtilities::FeatureHook
  u.feature_init = GlobalFloodUtilities::FeatureInit
  u.fetcher = GlobalFloodUtilities::Fetcher
  u.make_fetch_def = GlobalFloodUtilities::MakeFetchDef
  u.make_context = GlobalFloodUtilities::MakeContext
  u.make_options = GlobalFloodUtilities::MakeOptions
  u.make_request = GlobalFloodUtilities::MakeRequest
  u.make_response = GlobalFloodUtilities::MakeResponse
  u.make_result = GlobalFloodUtilities::MakeResult
  u.make_point = GlobalFloodUtilities::MakePoint
  u.make_spec = GlobalFloodUtilities::MakeSpec
  u.make_url = GlobalFloodUtilities::MakeUrl
  u.param = GlobalFloodUtilities::Param
  u.prepare_auth = GlobalFloodUtilities::PrepareAuth
  u.prepare_body = GlobalFloodUtilities::PrepareBody
  u.prepare_headers = GlobalFloodUtilities::PrepareHeaders
  u.prepare_method = GlobalFloodUtilities::PrepareMethod
  u.prepare_params = GlobalFloodUtilities::PrepareParams
  u.prepare_path = GlobalFloodUtilities::PreparePath
  u.prepare_query = GlobalFloodUtilities::PrepareQuery
  u.result_basic = GlobalFloodUtilities::ResultBasic
  u.result_body = GlobalFloodUtilities::ResultBody
  u.result_headers = GlobalFloodUtilities::ResultHeaders
  u.transform_request = GlobalFloodUtilities::TransformRequest
  u.transform_response = GlobalFloodUtilities::TransformResponse
}
