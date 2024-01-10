/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DtoConfirmation
 */
export interface DtoConfirmation {
    /**
     * 
     * @type {string}
     * @memberof DtoConfirmation
     */
    confirmationNumber: string;
    /**
     * 
     * @type {string}
     * @memberof DtoConfirmation
     */
    externalReferenceId: string;
    /**
     * 
     * @type {string}
     * @memberof DtoConfirmation
     */
    transactionTime: string;
}

/**
 * Check if a given object implements the DtoConfirmation interface.
 */
export function instanceOfDtoConfirmation(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "confirmationNumber" in value;
    isInstance = isInstance && "externalReferenceId" in value;
    isInstance = isInstance && "transactionTime" in value;

    return isInstance;
}

export function DtoConfirmationFromJSON(json: any): DtoConfirmation {
    return DtoConfirmationFromJSONTyped(json, false);
}

export function DtoConfirmationFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoConfirmation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'confirmationNumber': json['confirmationNumber'],
        'externalReferenceId': json['externalReferenceId'],
        'transactionTime': json['transactionTime'],
    };
}

export function DtoConfirmationToJSON(value?: DtoConfirmation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'confirmationNumber': value.confirmationNumber,
        'externalReferenceId': value.externalReferenceId,
        'transactionTime': value.transactionTime,
    };
}

