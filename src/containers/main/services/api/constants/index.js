import { getDefaultNormalizer } from '@testing-library/react'
import { config } from '../../../config'

export const path = config.ssoAPI
export const headers = {
    'Accept': '*/*',
    'Content-Type': 'application/json; charset=utf-8'
}