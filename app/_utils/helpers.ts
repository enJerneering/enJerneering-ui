export function windowOpen(url: string) {
  if (typeof window !== "undefined") {
    window.open(url, "_blank");
  }
}
