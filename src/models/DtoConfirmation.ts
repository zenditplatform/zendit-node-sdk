/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
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
export function instanceOfDtoConfirmation(value: object): value is DtoConfirmation {
    if (!('confirmationNumber' in value) || value['confirmationNumber'] === undefined) return false;
    if (!('externalReferenceId' in value) || value['externalReferenceId'] === undefined) return false;
    if (!('transactionTime' in value) || value['transactionTime'] === undefined) return false;
    return true;
}

export function DtoConfirmationFromJSON(json: any): DtoConfirmation {
    return DtoConfirmationFromJSONTyped(json, false);
}

export function DtoConfirmationFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoConfirmation {
    if (json == null) {
        return json;
    }
    return {
        
        'confirmationNumber': json['confirmationNumber'],
        'externalReferenceId': json['externalReferenceId'],
        'transactionTime': json['transactionTime'],
    };
}

  export function DtoConfirmationToJSON(json: any): DtoConfirmation {
      return DtoConfirmationToJSONTyped(json, false);
  }

  export function DtoConfirmationToJSONTyped(value?: DtoConfirmation | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'confirmationNumber': value['confirmationNumber'],
        'externalReferenceId': value['externalReferenceId'],
        'transactionTime': value['transactionTime'],
    };
}

