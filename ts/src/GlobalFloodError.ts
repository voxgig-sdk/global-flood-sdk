
import { Context } from './Context'


class GlobalFloodError extends Error {

  isGlobalFloodError = true

  sdk = 'GlobalFlood'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  GlobalFloodError
}

