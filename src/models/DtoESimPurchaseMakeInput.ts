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
    iccid?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoESimPurchaseMakeInput
     */
    offerId: string;
    /**
     * 
     * @type {string}
     * @memberof DtoESimPurchaseMakeInput
     */
    transactionId: string;
}

/**
 * Check if a given object implements the DtoESimPurchaseMakeInput interface.
 */
export function instanceOfDtoESimPurchaseMakeInput(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "offerId" in value;
    isInstance = isInstance && "transactionId" in value;

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
        
        'iccid': !exists(json, 'iccid') ? undefined : json['iccid'],
        'offerId': json['offerId'],
        'transactionId': json['transactionId'],
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
        
        'iccid': value.iccid,
        'offerId': value.offerId,
        'transactionId': value.transactionId,
    };
}

