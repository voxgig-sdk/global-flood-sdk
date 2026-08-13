# GlobalFlood SDK utility: make_context

from projectname_sdk.core.context import GlobalFloodContext


def make_context_util(ctxmap, basectx):
    return GlobalFloodContext(ctxmap, basectx)
