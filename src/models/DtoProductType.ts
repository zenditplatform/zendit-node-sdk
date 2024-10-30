/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 */
export const DtoProductType = {
    ProductTypeTopup: 'TOPUP',
    ProductTypeESIM: 'ESIM',
    ProductTypeVoucher: 'VOUCHER',
    ProductTypeWalletRecharge: 'WALLET_RECHARGE',
    ProductTypeRefund: 'REFUND'
} as const;
export type DtoProductType = typeof DtoProductType[keyof typeof DtoProductType];


export function instanceOfDtoProductType(value: any): boolean {
    for (const key in DtoProductType) {
        if (Object.prototype.hasOwnProperty.call(DtoProductType, key)) {
            if (DtoProductType[key as keyof typeof DtoProductType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function DtoProductTypeFromJSON(json: any): DtoProductType {
    return DtoProductTypeFromJSONTyped(json, false);
}

export function DtoProductTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoProductType {
    return json as DtoProductType;
}

export function DtoProductTypeToJSON(value?: DtoProductType | null): any {
    return value as any;
}

export function DtoProductTypeToJSONTyped(value: any, ignoreDiscriminator: boolean): DtoProductType {
    return value as DtoProductType;
}

