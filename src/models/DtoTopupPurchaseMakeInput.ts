/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
import type { DtoPurchaseValue } from './DtoPurchaseValue';
import {
    DtoPurchaseValueFromJSON,
    DtoPurchaseValueFromJSONTyped,
    DtoPurchaseValueToJSON,
} from './DtoPurchaseValue';
import type { DtoTopupSender } from './DtoTopupSender';
import {
    DtoTopupSenderFromJSON,
    DtoTopupSenderFromJSONTyped,
    DtoTopupSenderToJSON,
} from './DtoTopupSender';

/**
 * 
 * @export
 * @interface DtoTopupPurchaseMakeInput
 */
export interface DtoTopupPurchaseMakeInput {
    /**
     * 
     * @type {string}
     * @memberof DtoTopupPurchaseMakeInput
     */
    offerId: string;
    /**
     * 
     * @type {string}
     * @memberof DtoTopupPurchaseMakeInput
     */
    recipientPhoneNumber: string;
    /**
     * 
     * @type {DtoTopupSender}
     * @memberof DtoTopupPurchaseMakeInput
     */
    sender?: DtoTopupSender;
    /**
     * 
     * @type {string}
     * @memberof DtoTopupPurchaseMakeInput
     */
    transactionId: string;
    /**
     * 
     * @type {DtoPurchaseValue}
     * @memberof DtoTopupPurchaseMakeInput
     */
    value?: DtoPurchaseValue;
}

/**
 * Check if a given object implements the DtoTopupPurchaseMakeInput interface.
 */
export function instanceOfDtoTopupPurchaseMakeInput(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "offerId" in value;
    isInstance = isInstance && "recipientPhoneNumber" in value;
    isInstance = isInstance && "transactionId" in value;

    return isInstance;
}

export function DtoTopupPurchaseMakeInputFromJSON(json: any): DtoTopupPurchaseMakeInput {
    return DtoTopupPurchaseMakeInputFromJSONTyped(json, false);
}

export function DtoTopupPurchaseMakeInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoTopupPurchaseMakeInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'offerId': json['offerId'],
        'recipientPhoneNumber': json['recipientPhoneNumber'],
        'sender': !exists(json, 'sender') ? undefined : DtoTopupSenderFromJSON(json['sender']),
        'transactionId': json['transactionId'],
        'value': !exists(json, 'value') ? undefined : DtoPurchaseValueFromJSON(json['value']),
    };
}

export function DtoTopupPurchaseMakeInputToJSON(value?: DtoTopupPurchaseMakeInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'offerId': value.offerId,
        'recipientPhoneNumber': value.recipientPhoneNumber,
        'sender': DtoTopupSenderToJSON(value.sender),
        'transactionId': value.transactionId,
        'value': DtoPurchaseValueToJSON(value.value),
    };
}

