<?php
declare(strict_types=1);

// GlobalFlood SDK utility: prepare_body

class GlobalFloodPrepareBody
{
    public static function call(GlobalFloodContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
