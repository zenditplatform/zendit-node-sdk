/* tslint:disable */
/* eslint-disable */

/**
 * 
 * @export
 */
export const DtoTransactionType = {
    Credit: 'CREDIT',
    Debit: 'DEBIT'
} as const;
export type DtoTransactionType = typeof DtoTransactionType[keyof typeof DtoTransactionType];


export function DtoTransactionTypeFromJSON(json: any): DtoTransactionType {
    return DtoTransactionTypeFromJSONTyped(json, false);
}

export function DtoTransactionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoTransactionType {
    return json as DtoTransactionType;
}

export function DtoTransactionTypeToJSON(value?: DtoTransactionType | null): any {
    return value as any;
}

