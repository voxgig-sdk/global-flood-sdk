# GlobalFlood SDK feature factory

from globalflood_sdk.feature.base_feature import GlobalFloodBaseFeature
from globalflood_sdk.feature.ratelimit_feature import GlobalFloodRatelimitFeature
from globalflood_sdk.feature.retry_feature import GlobalFloodRetryFeature
from globalflood_sdk.feature.test_feature import GlobalFloodTestFeature
from globalflood_sdk.feature.timeout_feature import GlobalFloodTimeoutFeature


_FEATURES = {
    "base": lambda: GlobalFloodBaseFeature(),
    "ratelimit": lambda: GlobalFloodRatelimitFeature(),
    "retry": lambda: GlobalFloodRetryFeature(),
    "test": lambda: GlobalFloodTestFeature(),
    "timeout": lambda: GlobalFloodTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
