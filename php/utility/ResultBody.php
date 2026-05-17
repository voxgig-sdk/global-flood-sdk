<?php
declare(strict_types=1);

// GlobalFlood SDK utility: result_body

class GlobalFloodResultBody
{
    public static function call(GlobalFloodContext $ctx): ?GlobalFloodResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
