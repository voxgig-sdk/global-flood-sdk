<?php
declare(strict_types=1);

// GlobalFlood SDK utility: feature_add

class GlobalFloodFeatureAdd
{
    public static function call(GlobalFloodContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
