package core

type GlobalFloodError struct {
	IsGlobalFloodError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewGlobalFloodError(code string, msg string, ctx *Context) *GlobalFloodError {
	return &GlobalFloodError{
		IsGlobalFloodError: true,
		Sdk:              "GlobalFlood",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *GlobalFloodError) Error() string {
	return e.Msg
}
