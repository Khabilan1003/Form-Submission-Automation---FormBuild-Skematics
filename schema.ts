import { FieldKindEnum } from "./enum";

// Form Structure
export interface FormField {
  id: string;
  kind: FieldKindEnum;
  required: boolean;
  property: {
    allowOther?: boolean;
    allowMultiple?: boolean;
    choices?: { id: number; label: string }[];
    randomize?: boolean;
    shape?: string;
    total?: number;
    leftLabel?: string;
    centerLabel?: string;
    rightLabel?: string;
    defaultCountryCode?: string;
    allowTime?: boolean;
  };
}

export interface FormGroup {
  groupId: string;
  fields: FormField[];
}

export interface Form {
  id: string;
  groups: FormGroup[];
}

// Submission Structure
export interface SubmissionField {
  id: string;
  kind: FieldKindEnum;
  value:
    | string
    | number
    | number[]
    | { fileName: string; size: number; url: string }
    | { countryCode: string; phoneNumber: string }
    | { startDate: string; endDate: string };
}

export interface SubmissionGroup {
  groupId: string;
  fields: SubmissionField[];
}

export interface Submission {
  formId: string;
  groups: SubmissionGroup[];
  startAt: number;
  endAt: number;
}
