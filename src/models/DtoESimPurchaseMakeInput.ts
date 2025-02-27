/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
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
export function instanceOfDtoESimPurchaseMakeInput(value: object): value is DtoESimPurchaseMakeInput {
    if (!('offerId' in value) || value['offerId'] === undefined) return false;
    if (!('transactionId' in value) || value['transactionId'] === undefined) return false;
    return true;
}

export function DtoESimPurchaseMakeInputFromJSON(json: any): DtoESimPurchaseMakeInput {
    return DtoESimPurchaseMakeInputFromJSONTyped(json, false);
}

export function DtoESimPurchaseMakeInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoESimPurchaseMakeInput {
    if (json == null) {
        return json;
    }
    return {
        
        'iccid': json['iccid'] == null ? undefined : json['iccid'],
        'offerId': json['offerId'],
        'transactionId': json['transactionId'],
    };
}

export function DtoESimPurchaseMakeInputToJSON(json: any): DtoESimPurchaseMakeInput {
    return DtoESimPurchaseMakeInputToJSONTyped(json, false);
}

export function DtoESimPurchaseMakeInputToJSONTyped(value?: DtoESimPurchaseMakeInput | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'iccid': value['iccid'],
        'offerId': value['offerId'],
        'transactionId': value['transactionId'],
    };
}

