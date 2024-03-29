import { OldTypesBundle } from "./types";

export const bundle: OldTypesBundle = {
    types: {
        CurrencyId: {
            _enum: [
                'KMA'
            ]
        },
        CurrencyIdOf: 'CurrencyId',
        Amount: 'i128',
        AmountOf: 'Amount',
        AccountInfo: 'AccountInfoWithDualRefCount'
    }
}