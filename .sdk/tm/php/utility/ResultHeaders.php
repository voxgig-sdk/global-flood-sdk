<?php
declare(strict_types=1);

// GlobalFlood SDK utility: result_headers

class GlobalFloodResultHeaders
{
    public static function call(GlobalFloodContext $ctx): ?GlobalFloodResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
