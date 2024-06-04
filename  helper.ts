import { faker } from "@faker-js/faker";
import type { FormField, SubmissionField } from "./schema";
import { FieldKindEnum } from "./enum";
import * as fs from "fs";
import axios from "axios";
import * as m from "mime-types";
import * as path from "path";

// 1.SHORT_TEXT, 2.LONG_TEXT and 3.NUMBER
export function generateTextOrNumber(field: FormField): SubmissionField | null {
  if (
    ![
      FieldKindEnum.SHORT_TEXT,
      FieldKindEnum.LONG_TEXT,
      FieldKindEnum.NUMBER,
    ].includes(field.kind)
  )
    throw new Error("Invalid Type: Expected SHORT_TEXT, LONG_TEXT or NUMBER");

  let value: string | number;

  if (field.kind === FieldKindEnum.NUMBER)
    value = faker.number.int({ min: 1, max: 10000 });
  else value = faker.person.fullName();

  if (field.required || Math.random() > 0.1)
    return {
      id: field.id,
      kind: field.kind,
      value: value,
    };

  return null;
}

// 4.YES_NO, 5.MULTIPLE_CHOICE(single and multiple)
export function generateChoice(field: FormField): SubmissionField | null {
  if (
    ![FieldKindEnum.YES_NO, FieldKindEnum.MULTIPLE_CHOICE].includes(field.kind)
  )
    throw new Error("Invalid Type: Expected YES_NO or MULTTPLE_CHOICE");

  let value: number | number[];

  if (field.kind === FieldKindEnum.YES_NO) {
    let choices = field.property.choices?.map((choice) => choice.id);
    if (typeof choices === "undefined") choices = [];

    value = faker.helpers.arrayElement(choices);
  } else {
    let choices = field.property.choices?.map((choice) => choice.id);
    if (typeof choices === "undefined") choices = [];

    if (field.property.allowMultiple)
      value = faker.helpers.arrayElements(choices, {
        min: 1,
        max: choices.length,
      });
    else value = [faker.helpers.arrayElement(choices)];
  }

  if (field.required || Math.random() > 0.1)
    return {
      id: field.id,
      kind: field.kind,
      value: value,
    };

  return null;
}

// 4.RATING, 5.OPINION_SCALE
export function generateRating(field: FormField): SubmissionField | null {
  if (![FieldKindEnum.RATING, FieldKindEnum.OPINION_SCALE].includes(field.kind))
    throw new Error("Invalid Type: Expected RATING or OPINION SCALE");

  const min = 1;
  const max = field.property.total || 5;
  const value = Math.floor(Math.random() * (max - min + 1)) + min;

  if (field.required || Math.random() > 0.1)
    return {
      id: field.id,
      kind: field.kind,
      value: value,
    };

  return null;
}

// 6.EMAIL, 7.URL, 8.PHONE_NUMBER
export function generateEmailUrlPhone(
  field: FormField
): SubmissionField | null {
  if (
    ![
      FieldKindEnum.EMAIL,
      FieldKindEnum.URL,
      FieldKindEnum.PHONE_NUMBER,
    ].includes(field.kind)
  )
    throw new Error("Invalid Type: Expected EMAIL, URL or PHONE_NUMBER");

  let value: string | { countryCode: string; phoneNumber: string };
  if (field.kind === FieldKindEnum.EMAIL) value = faker.internet.email();
  else if (field.kind === FieldKindEnum.URL) value = faker.internet.url();
  else
    value = {
      countryCode: field.property.defaultCountryCode || "+91",
      phoneNumber: faker.string.numeric({
        length: {
          min: 10,
          max: 10,
        },
      }),
    };

  if (field.required || Math.random() > 0.1)
    return {
      id: field.id,
      kind: field.kind,
      value: value,
    };

  return null;
}

// 9.DATE and 10.DATE_RANGE
export function generateDate(field: FormField): SubmissionField | null {
  if (![FieldKindEnum.DATE, FieldKindEnum.DATE_RANGE].includes(field.kind))
    throw new Error("Invalid Type: Expected DATE or DATE_RANGE");
  let value: string | { startDate: string; endDate: string };

  if (field.kind === FieldKindEnum.DATE) {
    value = faker.date.past().toISOString();
    if (!field.property.allowTime) value = value.split("T")[0];
  } else {
    value = {
      startDate: faker.date.past().toISOString(),
      endDate: faker.date.future().toISOString(),
    };

    if (!field.property.allowTime)
      value = {
        startDate: value.startDate.split("T")[0],
        endDate: value.endDate.split("T")[0],
      };
  }

  if (field.required || Math.random() > 0.1)
    return {
      id: field.id,
      kind: field.kind,
      value: value,
    };

  return null;
}

// 11. FILE_UPLOAD
export async function generateFile(
  field: FormField
): Promise<SubmissionField | null> {
  if (field.kind !== FieldKindEnum.FILE_UPLOAD)
    throw new Error("Invalid Type: Expected FILE_UPLOAD");

  try {
    const fileName = "sample";
    const extention = "docx";
    const filePath = `static/${fileName}.${extention}`;
    const type = m.lookup(extention);

    if (!type) throw new Error("Invalid File Type");

    const buffer = fs.readFileSync(filePath);
    const blob = new Blob([buffer], { type });
    const formData = new FormData();

    formData.append("file", blob, path.basename(filePath));
    formData.append("type", "file");

    const result = await axios.post(
      "http://localhost:8001/api/v1/static/upload",
      formData,
      {
        headers: {
          "Content-Type": `multipart/form-data`,
        },
      }
    );
    return {
      id: field.id,
      kind: field.kind,
      value: result.data,
    };
  } catch (err: any) {
    throw new Error("File Upload Exception", err.response.data);
  }
}
