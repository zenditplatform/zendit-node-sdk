import { DtoPurchaseValue } from './dtoPurchaseValue';
import { DtoTopupSender } from './dtoTopupSender';

export class DtoTopupPurchaseMakeInput {
    'offerId'?: string;
    'recipientPhoneNumber'?: string;
    'sender'?: DtoTopupSender;
    'transactionId'?: string;
    'value'?: DtoPurchaseValue;

    constructor(transactionId: string, offerId: string, recipientPhoneNumber: string, value?: DtoPurchaseValue, sender?: DtoTopupSender) {
        this.transactionId = transactionId;
        this.offerId = offerId;
        this.recipientPhoneNumber = recipientPhoneNumber;
        if (sender !== undefined) 
           this.sender = sender;
        if (value !== undefined)
           this.value = value; 
    }

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "offerId",
            "baseName": "offerId",
            "type": "string"
        },
        {
            "name": "recipientPhoneNumber",
            "baseName": "recipientPhoneNumber",
            "type": "string"
        },
        {
            "name": "sender",
            "baseName": "sender",
            "type": "DtoTopupSender"
        },
        {
            "name": "transactionId",
            "baseName": "transactionId",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "DtoPurchaseValue"
        }    ];

    static getAttributeTypeMap() {
        return DtoTopupPurchaseMakeInput.attributeTypeMap;
    }
}

