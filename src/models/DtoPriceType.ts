/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 */
export const DtoPriceType = {
    PriceTypeFixed: 'FIXED',
    PriceTypeRange: 'RANGE'
} as const;
export type DtoPriceType = typeof DtoPriceType[keyof typeof DtoPriceType];


export function instanceOfDtoPriceType(value: any): boolean {
    for (const key in DtoPriceType) {
        if (Object.prototype.hasOwnProperty.call(DtoPriceType, key)) {
            if (DtoPriceType[key as keyof typeof DtoPriceType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function DtoPriceTypeFromJSON(json: any): DtoPriceType {
    return DtoPriceTypeFromJSONTyped(json, false);
}

export function DtoPriceTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoPriceType {
    return json as DtoPriceType;
}

export function DtoPriceTypeToJSON(value?: DtoPriceType | null): any {
    return value as any;
}

export function DtoPriceTypeToJSONTyped(value: any, ignoreDiscriminator: boolean): DtoPriceType {
    return value as DtoPriceType;
}

