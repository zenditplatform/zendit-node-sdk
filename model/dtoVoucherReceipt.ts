export class DtoVoucherReceipt {
    /**
    * The 3-letter ISO currency code for the send
    */
    'currency'?: string;
    'epin'?: string;
    'expiresAt'?: string;
    'instructions'?: string;
    /**
    * Additional message information about the voucher
    */
    'notes'?: string;
    'recipientCustomerServiceNumber'?: string;
    /**
    * The value delivered by the voucher
    */
    'send'?: number;
    'senderCustomerServiceNumber'?: string;
    'terms'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "epin",
            "baseName": "epin",
            "type": "string"
        },
        {
            "name": "expiresAt",
            "baseName": "expiresAt",
            "type": "string"
        },
        {
            "name": "instructions",
            "baseName": "instructions",
            "type": "string"
        },
        {
            "name": "notes",
            "baseName": "notes",
            "type": "string"
        },
        {
            "name": "recipientCustomerServiceNumber",
            "baseName": "recipientCustomerServiceNumber",
            "type": "string"
        },
        {
            "name": "send",
            "baseName": "send",
            "type": "number"
        },
        {
            "name": "senderCustomerServiceNumber",
            "baseName": "senderCustomerServiceNumber",
            "type": "string"
        },
        {
            "name": "terms",
            "baseName": "terms",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DtoVoucherReceipt.attributeTypeMap;
    }
}

