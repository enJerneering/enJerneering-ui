import { windowOpen } from "@/_utils/helpers";

export default function useRedirect() {
  const url = "https://www.vagaro.com/revitalizemedspa";

  const handleRedirect = (): void => {
    windowOpen(url);
  };

  return { handleRedirect };
}
