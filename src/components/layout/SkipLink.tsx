/** The first stop for keyboard users. It stays hidden until it has focus. */
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="fixed top-3 left-3 z-50 -translate-y-24 bg-ivory px-4 py-2 font-medium text-cocoa transition-transform focus:translate-y-0"
    >
      Skip to main content
    </a>
  );
}
