<?php
declare(strict_types=1);

// GlobalFlood SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class GlobalFloodFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new GlobalFloodBaseFeature();
            case "test":
                return new GlobalFloodTestFeature();
            default:
                return new GlobalFloodBaseFeature();
        }
    }
}
