import { DtoCost } from './dtoCost';
import { DtoPrice } from './dtoPrice';
import { DtoPriceType } from './dtoPriceType';
import { DtoProductType } from './dtoProductType';
import { DtoZend } from './dtoZend';

export class DtoVoucherOffer {
    'brand'?: string;
    'cost'?: DtoCost;
    'country'?: string;
    'createdAt'?: string;
    'enabled'?: boolean;
    'notes'?: string;
    'offerId'?: string;
    'price'?: DtoPrice;
    'priceType'?: DtoPriceType;
    'productType'?: DtoProductType;
    'requiredFields'?: Array<string>;
    'send'?: DtoZend;
    'shortNotes'?: string;
    'subTypes'?: Array<string>;
    'updatedAt'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "brand",
            "baseName": "brand",
            "type": "string"
        },
        {
            "name": "cost",
            "baseName": "cost",
            "type": "DtoCost"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "string"
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        },
        {
            "name": "notes",
            "baseName": "notes",
            "type": "string"
        },
        {
            "name": "offerId",
            "baseName": "offerId",
            "type": "string"
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "DtoPrice"
        },
        {
            "name": "priceType",
            "baseName": "priceType",
            "type": "DtoPriceType"
        },
        {
            "name": "productType",
            "baseName": "productType",
            "type": "DtoProductType"
        },
        {
            "name": "requiredFields",
            "baseName": "requiredFields",
            "type": "Array<string>"
        },
        {
            "name": "send",
            "baseName": "send",
            "type": "DtoZend"
        },
        {
            "name": "shortNotes",
            "baseName": "shortNotes",
            "type": "string"
        },
        {
            "name": "subTypes",
            "baseName": "subTypes",
            "type": "Array<string>"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DtoVoucherOffer.attributeTypeMap;
    }
}

export namespace DtoVoucherOffer {
}
