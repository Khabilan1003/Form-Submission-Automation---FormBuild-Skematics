import { FieldKindEnum } from "./enum";
import type { Form } from "./schema";

export const FORM: Form = {
  id: "00000000-0000-0000-0000-000000000008",
  groups: [
    {
      groupId: "00000000-0000-0000-0000-00000000000a",
      fields: [
        {
          id: "00000000-0000-0000-0000-00000000001a",
          kind: FieldKindEnum.YES_NO,
          required: true,
          property: {
            choices: [
              {
                id: 1,
                label: "yes",
              },
              {
                id: 2,
                label: "no",
              },
            ],
          },
        },
        {
          id: "00000000-0000-0000-0000-00000000001b",
          kind: FieldKindEnum.YES_NO,
          required: true,
          property: {
            choices: [
              {
                id: 1,
                label: "yes",
              },
              {
                id: 2,
                label: "no",
              },
            ],
          },
        },
        {
          id: "00000000-0000-0000-0000-00000000001c",
          kind: FieldKindEnum.YES_NO,
          required: true,
          property: {
            choices: [
              {
                id: 1,
                label: "yes",
              },
              {
                id: 2,
                label: "no",
              },
            ],
          },
        },
        {
          id: "00000000-0000-0000-0000-00000000001d",

          kind: FieldKindEnum.YES_NO,
          required: true,
          property: {
            choices: [
              {
                id: 1,
                label: "yes",
              },
              {
                id: 2,
                label: "no",
              },
            ],
          },
        },
        {
          id: "00000000-0000-0000-0000-00000000001e",

          kind: FieldKindEnum.YES_NO,
          required: true,
          property: {
            choices: [
              {
                id: 1,
                label: "yes",
              },
              {
                id: 2,
                label: "no",
              },
            ],
          },
        },
        {
          id: "00000000-0000-0000-0000-00000000001f",

          kind: FieldKindEnum.YES_NO,
          required: true,
          property: {
            choices: [
              {
                id: 1,
                label: "yes",
              },
              {
                id: 2,
                label: "no",
              },
            ],
          },
        },
      ],
    },
    {
      groupId: "00000000-0000-0000-0000-00000000000b",
      fields: [
        {
          id: "00000000-0000-0000-0000-000000000020",
          kind: FieldKindEnum.YES_NO,
          required: true,
          property: {
            choices: [
              {
                id: 1,
                label: "yes",
              },
              {
                id: 2,
                label: "no",
              },
            ],
          },
        },
      ],
    },
    {
      groupId: "00000000-0000-0000-0000-00000000000c",

      fields: [
        {
          id: "00000000-0000-0000-0000-000000000021",
          kind: FieldKindEnum.YES_NO,
          required: true,
          property: {
            choices: [
              {
                id: 1,
                label: "yes",
              },
              {
                id: 2,
                label: "no",
              },
            ],
          },
        },
      ],
    },
    {
      groupId: "00000000-0000-0000-0000-00000000000d",
      fields: [
        {
          id: "00000000-0000-0000-0000-000000000022",

          kind: FieldKindEnum.YES_NO,
          required: true,
          property: {
            choices: [
              {
                id: 1,
                label: "yes",
              },
              {
                id: 2,
                label: "no",
              },
            ],
          },
        },
      ],
    },
    {
      groupId: "00000000-0000-0000-0000-00000000000e",
      fields: [
        {
          id: "00000000-0000-0000-0000-000000000023",
          kind: FieldKindEnum.LONG_TEXT,
          required: true,
          property: {},
        },
        {
          id: "00000000-0000-0000-0000-000000000024",
          kind: FieldKindEnum.LONG_TEXT,
          required: true,
          property: {},
        },
        {
          id: "00000000-0000-0000-0000-000000000025",
          kind: FieldKindEnum.LONG_TEXT,
          required: true,
          property: {},
        },
      ],
    },
    {
      groupId: "00000000-0000-0000-0000-00000000000f",
      fields: [
        {
          id: "00000000-0000-0000-0000-000000000026",
          kind: FieldKindEnum.SHORT_TEXT,
          required: true,
          property: {},
        },
      ],
    },
    {
      groupId: "00000000-0000-0000-0000-000000000010",
      fields: [
        {
          id: "00000000-0000-0000-0000-000000000027",
          kind: FieldKindEnum.SHORT_TEXT,
          required: true,
          property: {},
        },
        {
          id: "00000000-0000-0000-0000-000000000028",
          kind: FieldKindEnum.SHORT_TEXT,
          required: true,
          property: {},
        },
        {
          id: "00000000-0000-0000-0000-000000000029",
          kind: FieldKindEnum.SHORT_TEXT,
          required: true,
          property: {},
        },
        {
          id: "00000000-0000-0000-0000-00000000002a",
          kind: FieldKindEnum.DATE,
          required: true,
          property: {
            allowTime: false,
          },
        },
        {
          id: "00000000-0000-0000-0000-00000000002b",
          kind: FieldKindEnum.EMAIL,
          required: true,
          property: {},
        },
        {
          id: "00000000-0000-0000-0000-00000000002c",
          kind: FieldKindEnum.PHONE_NUMBER,
          required: true,
          property: {
            defaultCountryCode: "+91",
          },
        },
        {
          id: "00000000-0000-0000-0000-00000000002d",
          kind: FieldKindEnum.PHONE_NUMBER,
          required: false,
          property: {
            defaultCountryCode: "+91",
          },
        },
        {
          id: "00000000-0000-0000-0000-00000000002e",
          kind: FieldKindEnum.MULTIPLE_CHOICE,
          required: true,
          property: {
            choices: [
              {
                id: 1,
                label: "male",
              },
              {
                id: 2,
                label: "female",
              },
              {
                id: 3,
                label: "others",
              },
            ],
          },
        },
        {
          id: "00000000-0000-0000-0000-00000000002f",
          kind: FieldKindEnum.MULTIPLE_CHOICE,
          required: true,
          property: {
            choices: [
              {
                id: 1,
                label: "General",
              },
              {
                id: 2,
                label: "SC",
              },
              {
                id: 3,
                label: "ST",
              },
              {
                id: 4,
                label: "OBC",
              },
            ],
          },
        },
        {
          id: "00000000-0000-0000-0000-000000000030",
          kind: FieldKindEnum.SHORT_TEXT,
          required: true,
          property: {},
        },
        {
          id: "00000000-0000-0000-0000-000000000031",
          kind: FieldKindEnum.LONG_TEXT,
          required: true,
          property: {},
        },
        {
          id: "00000000-0000-0000-0000-000000000032",
          kind: FieldKindEnum.LONG_TEXT,
          required: true,
          property: {},
        },
        {
          id: "00000000-0000-0000-0000-000000000033",
          kind: FieldKindEnum.FILE_UPLOAD,
          required: true,
          property: {},
        },
        {
          id: "00000000-0000-0000-0000-000000000034",
          kind: FieldKindEnum.FILE_UPLOAD,
          required: true,
          property: {},
        },
        {
          id: "00000000-0000-0000-0000-000000000035",
          kind: FieldKindEnum.FILE_UPLOAD,
          required: true,
          property: {},
        },
        {
          id: "00000000-0000-0000-0000-000000000036",
          kind: FieldKindEnum.FILE_UPLOAD,
          required: true,
          property: {},
        },
        {
          id: "00000000-0000-0000-0000-000000000037",
          kind: FieldKindEnum.SHORT_TEXT,
          required: true,
          property: {},
        },
        {
          id: "00000000-0000-0000-0000-000000000038",
          kind: FieldKindEnum.SHORT_TEXT,
          required: true,
          property: {},
        },
        {
          id: "00000000-0000-0000-0000-000000000039",
          kind: FieldKindEnum.SHORT_TEXT,
          required: true,
          property: {},
        },
        {
          id: "00000000-0000-0000-0000-00000000003a",

          kind: FieldKindEnum.LONG_TEXT,
          required: true,
          property: {},
        },
        {
          id: "00000000-0000-0000-0000-00000000003b",
          kind: FieldKindEnum.FILE_UPLOAD,
          required: true,
          property: {},
        },
        {
          id: "00000000-0000-0000-0000-00000000003c",
          kind: FieldKindEnum.FILE_UPLOAD,
          required: true,
          property: {},
        },
        {
          id: "00000000-0000-0000-0000-00000000003d",
          kind: FieldKindEnum.SHORT_TEXT,
          required: true,
          property: {},
        },
        {
          id: "00000000-0000-0000-0000-00000000003e",
          kind: FieldKindEnum.SHORT_TEXT,
          required: true,
          property: {},
        },
      ],
    },
    {
      groupId: "00000000-0000-0000-0000-000000000011",
      fields: [
        {
          id: "00000000-0000-0000-0000-00000000003f",
          kind: FieldKindEnum.LONG_TEXT,
          required: true,
          property: {},
        },
        {
          id: "00000000-0000-0000-0000-000000000040",

          kind: FieldKindEnum.LONG_TEXT,
          required: false,
          property: {},
        },
        {
          id: "00000000-0000-0000-0000-000000000041",
          kind: FieldKindEnum.MULTIPLE_CHOICE,
          required: true,
          property: {
            allowMultiple: true,
            choices: [
              {
                id: 1,
                label: "Idea Level",
              },
              {
                id: 2,
                label: "College Project",
              },
              {
                id: 3,
                label: "Lab Level-proof of concept",
              },
              {
                id: 4,
                label: "Paper Presentations",
              },
              {
                id: 5,
                label: "Working Prototype Ready",
              },
              {
                id: 6,
                label: "Any Other",
              },
            ],
          },
        },
        {
          id: "00000000-0000-0000-0000-000000000042",
          kind: FieldKindEnum.SHORT_TEXT,
          required: true,
          property: {},
        },
        {
          id: "00000000-0000-0000-0000-000000000043",
          kind: FieldKindEnum.SHORT_TEXT,
          required: true,
          property: {},
        },
        {
          id: "00000000-0000-0000-0000-000000000044",
          kind: FieldKindEnum.LONG_TEXT,
          required: true,
          property: {},
        },
      ],
    },
  ],
};
