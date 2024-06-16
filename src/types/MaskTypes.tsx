import * as React from 'react'

export const maskCEP = (event: React.FormEvent<HTMLInputElement>) => {
    event.currentTarget.maxLength = 9
    const { value } = event.currentTarget
    return value.replace(/\D/g, '').replace(/^(\d{5})(\d{3})+?$/, '$1-$2')
}

export type MaskTypes = 'cep'

type Masks = Record<
    MaskTypes,
    (event: React.FormEvent<HTMLInputElement>) => string
>

const masks: Masks = {
    cep: maskCEP,
}

export default masks