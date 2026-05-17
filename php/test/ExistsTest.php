<?php
declare(strict_types=1);

// GlobalFlood SDK exists test

require_once __DIR__ . '/../globalflood_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = GlobalFloodSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
