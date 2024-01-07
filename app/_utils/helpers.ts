export function windowOpen(url: string) {
  if (typeof window !== "undefined") {
    window.open(url, "_blank");
  }
}

export function classNames(...classes: any): string {
  return classes.filter(Boolean).join(" ");
}
