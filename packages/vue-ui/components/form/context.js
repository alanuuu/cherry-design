export function noop() {}

export const formKey = Symbol('formcCtx');
export const formItemKey = Symbol('formItemCtx');

export const FormItemInfo = {
  field: '',
  disabled: false,
  error: false,
  validate: noop,
  clearValidate: noop,
  resetField: noop,
  setField: noop,
};

export const status = {
  success: 'success',
  error: 'error',
  validating: 'validating',
};
