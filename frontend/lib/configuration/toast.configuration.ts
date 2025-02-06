import { toast } from "react-toastify";

export function dispatchSuccessToastMessage(message?: string) {
  toast.success(message ?? "validation.request_success");
}

export function dispatchWarningToastMessage(message?: string) {
  toast.warning(message ?? "validation.request_error");
}

export function dispatchErrorToastMessage(message?: string) {
  toast.error(message ?? "validation.request_error");
}
