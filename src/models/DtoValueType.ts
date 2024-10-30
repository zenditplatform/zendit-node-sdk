/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 */
export const DtoValueType = {
    ValueTypeZend: 'ZEND',
    ValueTypePrice: 'PRICE',
    ValueTypeCost: 'COST'
} as const;
export type DtoValueType = typeof DtoValueType[keyof typeof DtoValueType];


export function instanceOfDtoValueType(value: any): boolean {
    for (const key in DtoValueType) {
        if (Object.prototype.hasOwnProperty.call(DtoValueType, key)) {
            if (DtoValueType[key as keyof typeof DtoValueType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function DtoValueTypeFromJSON(json: any): DtoValueType {
    return DtoValueTypeFromJSONTyped(json, false);
}

export function DtoValueTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoValueType {
    return json as DtoValueType;
}

export function DtoValueTypeToJSON(value?: DtoValueType | null): any {
    return value as any;
}

export function DtoValueTypeToJSONTyped(value: any, ignoreDiscriminator: boolean): DtoValueType {
    return value as DtoValueType;
}

