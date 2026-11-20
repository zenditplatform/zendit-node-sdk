/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 */
export const DtoPaymentStatus = {
    PaymentStatusSuccess: 'SUCCESS',
    PaymentStatusFailure: 'FAILURE'
} as const;
export type DtoPaymentStatus = typeof DtoPaymentStatus[keyof typeof DtoPaymentStatus];


export function instanceOfDtoPaymentStatus(value: any): boolean {
    for (const key in DtoPaymentStatus) {
        if (Object.prototype.hasOwnProperty.call(DtoPaymentStatus, key)) {
            if (DtoPaymentStatus[key as keyof typeof DtoPaymentStatus] === value) {
                return true;
            }
        }
    }
    return false;
}

export function DtoPaymentStatusFromJSON(json: any): DtoPaymentStatus {
    return DtoPaymentStatusFromJSONTyped(json, false);
}

export function DtoPaymentStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoPaymentStatus {
    return json as DtoPaymentStatus;
}

export function DtoPaymentStatusToJSON(value?: DtoPaymentStatus | null): any {
    return value as any;
}

export function DtoPaymentStatusToJSONTyped(value: any, ignoreDiscriminator: boolean): DtoPaymentStatus {
    return value as DtoPaymentStatus;
}

