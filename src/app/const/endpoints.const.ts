import { environment } from "../../environment/environment";

export const SlotsEndpointsEnum = {
  BASE: environment.apiUrl,
  getCategories: () =>
    SlotsEndpointsEnum.BASE + `/v2/slot/categories?include=games`,
  getProviders: () => SlotsEndpointsEnum.BASE + `?type=slot&platform=desktop`,
  getSlotsByProvider: (provider: string) =>
    SlotsEndpointsEnum.BASE + `/v2/slot/providers/` + provider,
};
