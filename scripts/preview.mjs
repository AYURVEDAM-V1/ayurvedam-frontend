// Serves the static build in out/ the way public/.htaccess does on Hostinger,
// so it can be checked before uploading. Run `npm run build` first.
import { createReadStream, existsSync } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize, resolve, sep } from "node:path";

const root = resolve("out");
const port = Number(process.env.PORT) || 3000;

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".xml": "application/xml",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
};

if (!existsSync(join(root, "index.html"))) {
  console.error("No build found in out/. Run `npm run build` first.");
  process.exit(1);
}

/** Tries the exact file, then page.html, then folder/index.html. */
async function findFile(pathname) {
  const base = join(root, normalize(pathname));
  if (base !== root && !base.startsWith(root + sep)) return null;

  for (const candidate of [base, `${base}.html`, join(base, "index.html")]) {
    try {
      if ((await stat(candidate)).isFile()) return candidate;
    } catch {
      // Not there: try the next one.
    }
  }
  return null;
}

createServer(async (request, response) => {
  let pathname;
  try {
    pathname = decodeURIComponent(
      new URL(request.url ?? "/", "http://localhost").pathname,
    );
  } catch {
    response.writeHead(400).end("Bad request");
    return;
  }

  const file = await findFile(pathname);
  const body = file ?? join(root, "404.html");

  response.writeHead(file ? 200 : 404, {
    "Content-Type": contentTypes[extname(body)] ?? "application/octet-stream",
  });

  if (request.method === "HEAD") {
    response.end();
    return;
  }
  createReadStream(body).pipe(response);
}).listen(port, () => {
  console.log(`Previewing out/ at http://localhost:${port}`);
});
