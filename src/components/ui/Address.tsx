import { siteConfig } from "@/config/site";

/**
 * The full address on its natural lines, so that a place name or the PIN code
 * never ends up split or alone. A line that is too wide for its column wraps
 * evenly instead of leaving one word by itself.
 */
export function Address() {
  return siteConfig.contact.addressLines.map((line) => (
    <span key={line} className="block text-balance">
      {line}
    </span>
  ));
}
