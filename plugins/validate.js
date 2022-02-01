/* eslint-disable camelcase */
import { extend } from 'vee-validate'
import { email, alpha_spaces, required, regex } from 'vee-validate/dist/rules'

extend('required', required)
extend('alpha_spaces', alpha_spaces)
extend('email', email)
extend('regex', regex)
