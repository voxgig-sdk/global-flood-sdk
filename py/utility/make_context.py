# GlobalFlood SDK utility: make_context

from core.context import GlobalFloodContext


def make_context_util(ctxmap, basectx):
    return GlobalFloodContext(ctxmap, basectx)
