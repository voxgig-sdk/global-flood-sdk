<?php
declare(strict_types=1);

// GlobalFlood SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

GlobalFloodUtility::setRegistrar(function (GlobalFloodUtility $u): void {
    $u->clean = [GlobalFloodClean::class, 'call'];
    $u->done = [GlobalFloodDone::class, 'call'];
    $u->make_error = [GlobalFloodMakeError::class, 'call'];
    $u->feature_add = [GlobalFloodFeatureAdd::class, 'call'];
    $u->feature_hook = [GlobalFloodFeatureHook::class, 'call'];
    $u->feature_init = [GlobalFloodFeatureInit::class, 'call'];
    $u->fetcher = [GlobalFloodFetcher::class, 'call'];
    $u->make_fetch_def = [GlobalFloodMakeFetchDef::class, 'call'];
    $u->make_context = [GlobalFloodMakeContext::class, 'call'];
    $u->make_options = [GlobalFloodMakeOptions::class, 'call'];
    $u->make_request = [GlobalFloodMakeRequest::class, 'call'];
    $u->make_response = [GlobalFloodMakeResponse::class, 'call'];
    $u->make_result = [GlobalFloodMakeResult::class, 'call'];
    $u->make_point = [GlobalFloodMakePoint::class, 'call'];
    $u->make_spec = [GlobalFloodMakeSpec::class, 'call'];
    $u->make_url = [GlobalFloodMakeUrl::class, 'call'];
    $u->param = [GlobalFloodParam::class, 'call'];
    $u->prepare_auth = [GlobalFloodPrepareAuth::class, 'call'];
    $u->prepare_body = [GlobalFloodPrepareBody::class, 'call'];
    $u->prepare_headers = [GlobalFloodPrepareHeaders::class, 'call'];
    $u->prepare_method = [GlobalFloodPrepareMethod::class, 'call'];
    $u->prepare_params = [GlobalFloodPrepareParams::class, 'call'];
    $u->prepare_path = [GlobalFloodPreparePath::class, 'call'];
    $u->prepare_query = [GlobalFloodPrepareQuery::class, 'call'];
    $u->result_basic = [GlobalFloodResultBasic::class, 'call'];
    $u->result_body = [GlobalFloodResultBody::class, 'call'];
    $u->result_headers = [GlobalFloodResultHeaders::class, 'call'];
    $u->transform_request = [GlobalFloodTransformRequest::class, 'call'];
    $u->transform_response = [GlobalFloodTransformResponse::class, 'call'];
});
