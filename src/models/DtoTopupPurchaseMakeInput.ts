/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
import type { DtoPurchaseValue } from './DtoPurchaseValue';
import {
    DtoPurchaseValueFromJSON,
    DtoPurchaseValueFromJSONTyped,
    DtoPurchaseValueToJSON,
    DtoPurchaseValueToJSONTyped,
} from './DtoPurchaseValue';
import type { DtoTopupSender } from './DtoTopupSender';
import {
    DtoTopupSenderFromJSON,
    DtoTopupSenderFromJSONTyped,
    DtoTopupSenderToJSON,
    DtoTopupSenderToJSONTyped,
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
export function instanceOfDtoTopupPurchaseMakeInput(value: object): value is DtoTopupPurchaseMakeInput {
    if (!('offerId' in value) || value['offerId'] === undefined) return false;
    if (!('recipientPhoneNumber' in value) || value['recipientPhoneNumber'] === undefined) return false;
    if (!('transactionId' in value) || value['transactionId'] === undefined) return false;
    return true;
}

export function DtoTopupPurchaseMakeInputFromJSON(json: any): DtoTopupPurchaseMakeInput {
    return DtoTopupPurchaseMakeInputFromJSONTyped(json, false);
}

export function DtoTopupPurchaseMakeInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoTopupPurchaseMakeInput {
    if (json == null) {
        return json;
    }
    return {
        
        'offerId': json['offerId'],
        'recipientPhoneNumber': json['recipientPhoneNumber'],
        'sender': json['sender'] == null ? undefined : DtoTopupSenderFromJSON(json['sender']),
        'transactionId': json['transactionId'],
        'value': json['value'] == null ? undefined : DtoPurchaseValueFromJSON(json['value']),
    };
}

export function DtoTopupPurchaseMakeInputToJSON(json: any): DtoTopupPurchaseMakeInput {
    return DtoTopupPurchaseMakeInputToJSONTyped(json, false);
}

export function DtoTopupPurchaseMakeInputToJSONTyped(value?: DtoTopupPurchaseMakeInput | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'offerId': value['offerId'],
        'recipientPhoneNumber': value['recipientPhoneNumber'],
        'sender': DtoTopupSenderToJSON(value['sender']),
        'transactionId': value['transactionId'],
        'value': DtoPurchaseValueToJSON(value['value']),
    };
}

