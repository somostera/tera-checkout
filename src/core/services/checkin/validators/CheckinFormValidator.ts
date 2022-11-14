import { validateEmail } from "core/utils/validators/email";
import { SendProfileInput } from "../types/SendProfileInput";

export class CheckinFormValidator {
  static validate(input: SendProfileInput) {
    const isValid =
      validateEmail(input.email) &&
      input.first_name !== "" &&
      input.last_name !== "" &&
      input.accepted_terms &&
      input.accepted_receive_notifications;
      
    return isValid
  }
}
