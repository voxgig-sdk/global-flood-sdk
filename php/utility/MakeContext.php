<?php
declare(strict_types=1);

// GlobalFlood SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class GlobalFloodMakeContext
{
    public static function call(array $ctxmap, ?GlobalFloodContext $basectx): GlobalFloodContext
    {
        return new GlobalFloodContext($ctxmap, $basectx);
    }
}
