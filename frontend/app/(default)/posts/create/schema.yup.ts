import YupSettings from "@/lib/configuration/yup.configuration";
import { FieldNames } from "@/lib/enums/field-name.enum";

export const CreatePostYupFormSchema = YupSettings.object().shape({
  [FieldNames.Title]: YupSettings.string().required(),
});
