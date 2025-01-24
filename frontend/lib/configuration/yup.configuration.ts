import * as YupSettings from "yup";

YupSettings.setLocale({
  mixed: {
    required: "validation.required",
    default: "validation.invalid",
  },
  string: {
    email: "validation.invalid_email",
    min: "validation.min",
    max: "validation.max",
  },
  number: {
    min: "validation.field_too_short",
    max: "validation.field_too_big",
  },
});

export default YupSettings;
