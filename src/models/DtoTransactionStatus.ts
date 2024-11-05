/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 */
export const DtoTransactionStatus = {
    TransactionStatusAccepted: 'ACCEPTED',
    TransactionStatusPending: 'PENDING',
    TransactionStatusAuthorized: 'AUTHORIZED',
    TransactionStatusInProgress: 'IN_PROGRESS',
    TransactionStatusDone: 'DONE',
    TransactionStatusFailed: 'FAILED'
} as const;
export type DtoTransactionStatus = typeof DtoTransactionStatus[keyof typeof DtoTransactionStatus];


export function instanceOfDtoTransactionStatus(value: any): boolean {
    for (const key in DtoTransactionStatus) {
        if (Object.prototype.hasOwnProperty.call(DtoTransactionStatus, key)) {
            if (DtoTransactionStatus[key as keyof typeof DtoTransactionStatus] === value) {
                return true;
            }
        }
    }
    return false;
}

export function DtoTransactionStatusFromJSON(json: any): DtoTransactionStatus {
    return DtoTransactionStatusFromJSONTyped(json, false);
}

export function DtoTransactionStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoTransactionStatus {
    return json as DtoTransactionStatus;
}

export function DtoTransactionStatusToJSON(value?: DtoTransactionStatus | null): any {
    return value as any;
}

export function DtoTransactionStatusToJSONTyped(value: any, ignoreDiscriminator: boolean): DtoTransactionStatus {
    return value as DtoTransactionStatus;
}

