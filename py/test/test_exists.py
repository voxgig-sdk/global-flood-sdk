# ProjectName SDK exists test

import pytest
from globalflood_sdk import GlobalFloodSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = GlobalFloodSDK.test(None, None)
        assert testsdk is not None
