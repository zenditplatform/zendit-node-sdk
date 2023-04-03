import { DtoPurchaseValue } from './dtoPurchaseValue';
import { DtoVoucherField } from './dtoVoucherField';
import { DtoValueType } from './dtoValueType';

export class DtoVoucherPurchaseInput {
    'fields'?: Array<DtoVoucherField>;
    'offerId'?: string;
    'transactionId'?: string;
    'value'?: DtoPurchaseValue;

    constructor(transactionId: string, offerId: string, fields: Array<DtoVoucherField>, value?: DtoPurchaseValue) {
        this.transactionId = transactionId;
        this.offerId = offerId;
        this.fields = fields;
        if (value !== undefined) 
            this.value = value;
        
    }

    

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fields",
            "baseName": "fields",
            "type": "Array<DtoVoucherField>"
        },
        {
            "name": "offerId",
            "baseName": "offerId",
            "type": "string"
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
        return DtoVoucherPurchaseInput.attributeTypeMap;
    }
}

