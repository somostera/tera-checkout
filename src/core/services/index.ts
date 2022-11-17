import { jwt } from "core/adapters/jwt";
import { Requests } from "core/adapters/requests";
import { ENVIRONMENT } from "core/utils/environment";
import { SendProfileInput } from "./types/SendProfileInput";
import { SendProfileResponse } from "./types/SendProfileResponse";

export class CheckinService {
  constructor(
    private readonly checkoutApi = new Requests(ENVIRONMENT.CHECKOUT_API_URL)
  ) {}

  async sendProfile(input: SendProfileInput): Promise<SendProfileResponse> {
    const data = jwt.encode(input);
    const path = "/checkin/contact";
    const body = { data };
    return await this.checkoutApi.post({ path, body });
  }

  async getStudentDealsWithPublicJourneys(email: string) {
    const path = `/checkin/contact/${email}/deals`;
    return await this.checkoutApi.get({ path });
  }
}
