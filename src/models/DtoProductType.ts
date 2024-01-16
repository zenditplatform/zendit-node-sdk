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
    ProductTypeRechargeSandbox: 'RECHARGE_SANDBOX',
    ProductTypeRechargeWithCreditCard: 'RECHARGE_WITH_CREDIT_CARD'
} as const;
export type DtoProductType = typeof DtoProductType[keyof typeof DtoProductType];


export function DtoProductTypeFromJSON(json: any): DtoProductType {
    return DtoProductTypeFromJSONTyped(json, false);
}

export function DtoProductTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoProductType {
    return json as DtoProductType;
}

export function DtoProductTypeToJSON(value?: DtoProductType | null): any {
    return value as any;
}

