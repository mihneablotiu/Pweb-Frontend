/**
 * Todo Lists System API
 * This API exposes endpoints to manage todos / users / etc.
 *
 * OpenAPI spec version: 1.0
 * Contact: mblotiu.ss@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class FeedbackDTO {
    'feedbackType'?: FeedbackDTOFeedbackTypeEnum;
    'satisfactionLevel'?: number;
    'acceptTerms'?: boolean;
    'comment'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "feedbackType",
            "baseName": "feedbackType",
            "type": "FeedbackDTOFeedbackTypeEnum",
            "format": ""
        },
        {
            "name": "satisfactionLevel",
            "baseName": "satisfactionLevel",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "acceptTerms",
            "baseName": "acceptTerms",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "comment",
            "baseName": "comment",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FeedbackDTO.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum FeedbackDTOFeedbackTypeEnum {
    Suggestion = 'SUGGESTION',
    Complaint = 'COMPLAINT',
    BugReport = 'BUG_REPORT',
    Other = 'OTHER'
}
