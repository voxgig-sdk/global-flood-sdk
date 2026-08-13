# GlobalFlood SDK feature factory

from globalflood_sdk.feature.base_feature import GlobalFloodBaseFeature
from globalflood_sdk.feature.test_feature import GlobalFloodTestFeature


def _make_feature(name):
    features = {
        "base": lambda: GlobalFloodBaseFeature(),
        "test": lambda: GlobalFloodTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
