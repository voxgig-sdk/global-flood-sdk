<?php
declare(strict_types=1);

// GlobalFlood SDK base feature

class GlobalFloodBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(GlobalFloodContext $ctx, array $options): void {}
    public function PostConstruct(GlobalFloodContext $ctx): void {}
    public function PostConstructEntity(GlobalFloodContext $ctx): void {}
    public function SetData(GlobalFloodContext $ctx): void {}
    public function GetData(GlobalFloodContext $ctx): void {}
    public function GetMatch(GlobalFloodContext $ctx): void {}
    public function SetMatch(GlobalFloodContext $ctx): void {}
    public function PrePoint(GlobalFloodContext $ctx): void {}
    public function PreSpec(GlobalFloodContext $ctx): void {}
    public function PreRequest(GlobalFloodContext $ctx): void {}
    public function PreResponse(GlobalFloodContext $ctx): void {}
    public function PreResult(GlobalFloodContext $ctx): void {}
    public function PreDone(GlobalFloodContext $ctx): void {}
    public function PreUnexpected(GlobalFloodContext $ctx): void {}
}
