/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 */
export const DtoPromoStatus = {
    PromoStatusActive: 'active',
    PromoStatusExpired: 'expired',
    PromoStatusPending: 'pending'
} as const;
export type DtoPromoStatus = typeof DtoPromoStatus[keyof typeof DtoPromoStatus];


export function instanceOfDtoPromoStatus(value: any): boolean {
    for (const key in DtoPromoStatus) {
        if (Object.prototype.hasOwnProperty.call(DtoPromoStatus, key)) {
            if (DtoPromoStatus[key as keyof typeof DtoPromoStatus] === value) {
                return true;
            }
        }
    }
    return false;
}

export function DtoPromoStatusFromJSON(json: any): DtoPromoStatus {
    return DtoPromoStatusFromJSONTyped(json, false);
}

export function DtoPromoStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoPromoStatus {
    return json as DtoPromoStatus;
}

export function DtoPromoStatusToJSON(value?: DtoPromoStatus | null): any {
    return value as any;
}

export function DtoPromoStatusToJSONTyped(value: any, ignoreDiscriminator: boolean): DtoPromoStatus {
    return value as DtoPromoStatus;
}

