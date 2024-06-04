import {
  generateChoice,
  generateDate,
  generateEmailUrlPhone,
  generateFile,
  generateRating,
  generateTextOrNumber,
} from "./ helper";
import { FieldKindEnum } from "./enum";
import type { Form, Submission, SubmissionField } from "./schema";

export async function generate(form: Form): Promise<Submission> {
  let submission: Submission = {
    formId: form.id,
    groups: [],
    startAt: Date.now() - 300,
    endAt: Date.now(),
  };
  for (const group of form.groups) {
    submission.groups.push({
      groupId: group.groupId,
      fields: [],
    });

    const index = submission.groups.length - 1;
    for (const field of group.fields) {
      let value: SubmissionField | null = null;

      if (
        [
          FieldKindEnum.SHORT_TEXT,
          FieldKindEnum.LONG_TEXT,
          FieldKindEnum.NUMBER,
        ].includes(field.kind)
      )
        value = generateTextOrNumber(field);
      else if (
        [FieldKindEnum.OPINION_SCALE, FieldKindEnum.RATING].includes(field.kind)
      )
        value = generateRating(field);
      else if (
        [FieldKindEnum.MULTIPLE_CHOICE, FieldKindEnum.YES_NO].includes(
          field.kind
        )
      )
        value = generateChoice(field);
      else if (
        [
          FieldKindEnum.EMAIL,
          FieldKindEnum.URL,
          FieldKindEnum.PHONE_NUMBER,
        ].includes(field.kind)
      )
        value = generateEmailUrlPhone(field);
      else if (
        [FieldKindEnum.DATE, FieldKindEnum.DATE_RANGE].includes(field.kind)
      )
        value = generateDate(field);
      else if (field.kind === FieldKindEnum.FILE_UPLOAD)
        value = await generateFile(field);

      if (value) submission.groups[index].fields.push(value);
    }
  }

  return submission;
}
