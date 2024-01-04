export function windowOpen(url: string) {
  if (typeof window !== "undefined") {
    window.open(url, "_blank");
  }
}

export function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}
