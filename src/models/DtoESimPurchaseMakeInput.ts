/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DtoESimPurchaseMakeInput
 */
export interface DtoESimPurchaseMakeInput {
    /**
     * 
     * @type {string}
     * @memberof DtoESimPurchaseMakeInput
     */
    offerId?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoESimPurchaseMakeInput
     */
    transactionId?: string;
}

/**
 * Check if a given object implements the DtoESimPurchaseMakeInput interface.
 */
export function instanceOfDtoESimPurchaseMakeInput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DtoESimPurchaseMakeInputFromJSON(json: any): DtoESimPurchaseMakeInput {
    return DtoESimPurchaseMakeInputFromJSONTyped(json, false);
}

export function DtoESimPurchaseMakeInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoESimPurchaseMakeInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'offerId': !exists(json, 'offerId') ? undefined : json['offerId'],
        'transactionId': !exists(json, 'transactionId') ? undefined : json['transactionId'],
    };
}

export function DtoESimPurchaseMakeInputToJSON(value?: DtoESimPurchaseMakeInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'offerId': value.offerId,
        'transactionId': value.transactionId,
    };
}

