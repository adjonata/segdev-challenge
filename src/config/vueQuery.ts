import { VueQueryPluginOptions } from "vue-query";
import { DAY } from "../utils/time";

export const vueQueryDefaultOptions: VueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        cacheTime: DAY,
        staleTime: DAY
      }
    }
  }
};
