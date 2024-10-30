/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 */
export const DtoReportStatus = {
    ReportStatusRequested: 'REQUESTED',
    ReportStatusInProgress: 'IN_PROGRESS',
    ReportStatusReady: 'READY',
    ReportStatusFailed: 'FAILED'
} as const;
export type DtoReportStatus = typeof DtoReportStatus[keyof typeof DtoReportStatus];


export function instanceOfDtoReportStatus(value: any): boolean {
    for (const key in DtoReportStatus) {
        if (Object.prototype.hasOwnProperty.call(DtoReportStatus, key)) {
            if (DtoReportStatus[key as keyof typeof DtoReportStatus] === value) {
                return true;
            }
        }
    }
    return false;
}

export function DtoReportStatusFromJSON(json: any): DtoReportStatus {
    return DtoReportStatusFromJSONTyped(json, false);
}

export function DtoReportStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoReportStatus {
    return json as DtoReportStatus;
}

export function DtoReportStatusToJSON(value?: DtoReportStatus | null): any {
    return value as any;
}

export function DtoReportStatusToJSONTyped(value: any, ignoreDiscriminator: boolean): DtoReportStatus {
    return value as DtoReportStatus;
}

