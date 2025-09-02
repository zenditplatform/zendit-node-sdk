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
import type { DtoRecipient } from './DtoRecipient';
import {
    DtoRecipientFromJSON,
    DtoRecipientFromJSONTyped,
    DtoRecipientToJSON,
    DtoRecipientToJSONTyped,
} from './DtoRecipient';
import type { DtoSender } from './DtoSender';
import {
    DtoSenderFromJSON,
    DtoSenderFromJSONTyped,
    DtoSenderToJSON,
    DtoSenderToJSONTyped,
} from './DtoSender';
import type { DtoPurchaseField } from './DtoPurchaseField';
import {
    DtoPurchaseFieldFromJSON,
    DtoPurchaseFieldFromJSONTyped,
    DtoPurchaseFieldToJSON,
    DtoPurchaseFieldToJSONTyped,
} from './DtoPurchaseField';

/**
 * 
 * @export
 * @interface DtoBillPayPurchaseInput
 */
export interface DtoBillPayPurchaseInput {
    /**
     * 
     * @type {Array<DtoPurchaseField>}
     * @memberof DtoBillPayPurchaseInput
     */
    fields: Array<DtoPurchaseField>;
    /**
     * 
     * @type {string}
     * @memberof DtoBillPayPurchaseInput
     */
    offerId: string;
    /**
     * 
     * @type {DtoRecipient}
     * @memberof DtoBillPayPurchaseInput
     */
    recipient: DtoRecipient;
    /**
     * 
     * @type {DtoSender}
     * @memberof DtoBillPayPurchaseInput
     */
    sender: DtoSender;
    /**
     * 
     * @type {string}
     * @memberof DtoBillPayPurchaseInput
     */
    transactionId: string;
    /**
     * 
     * @type {DtoPurchaseValue}
     * @memberof DtoBillPayPurchaseInput
     */
    value?: DtoPurchaseValue;
}

/**
 * Check if a given object implements the DtoBillPayPurchaseInput interface.
 */
export function instanceOfDtoBillPayPurchaseInput(value: object): value is DtoBillPayPurchaseInput {
    if (!('fields' in value) || value['fields'] === undefined) return false;
    if (!('offerId' in value) || value['offerId'] === undefined) return false;
    if (!('recipient' in value) || value['recipient'] === undefined) return false;
    if (!('sender' in value) || value['sender'] === undefined) return false;
    if (!('transactionId' in value) || value['transactionId'] === undefined) return false;
    return true;
}

export function DtoBillPayPurchaseInputFromJSON(json: any): DtoBillPayPurchaseInput {
    return DtoBillPayPurchaseInputFromJSONTyped(json, false);
}

export function DtoBillPayPurchaseInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoBillPayPurchaseInput {
    if (json == null) {
        return json;
    }
    return {
        
        'fields': ((json['fields'] as Array<any>).map(DtoPurchaseFieldFromJSON)),
        'offerId': json['offerId'],
        'recipient': DtoRecipientFromJSON(json['recipient']),
        'sender': DtoSenderFromJSON(json['sender']),
        'transactionId': json['transactionId'],
        'value': json['value'] == null ? undefined : DtoPurchaseValueFromJSON(json['value']),
    };
}

export function DtoBillPayPurchaseInputToJSON(json: any): DtoBillPayPurchaseInput {
    return DtoBillPayPurchaseInputToJSONTyped(json, false);
}

export function DtoBillPayPurchaseInputToJSONTyped(value?: DtoBillPayPurchaseInput | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'fields': ((value['fields'] as Array<any>).map(DtoPurchaseFieldToJSON)),
        'offerId': value['offerId'],
        'recipient': DtoRecipientToJSON(value['recipient']),
        'sender': DtoSenderToJSON(value['sender']),
        'transactionId': value['transactionId'],
        'value': DtoPurchaseValueToJSON(value['value']),
    };
}

