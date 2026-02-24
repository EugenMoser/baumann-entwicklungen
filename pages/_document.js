import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="de">
      <Head>
        {/* Globale Meta-Tags für alle Seiten */}
        <meta charSet="utf-8" />
        <meta
          name="author"
          content="Tilo Baumann Spritzgussteile e.K."
        />
        <meta
          name="geo.region"
          content="DE-BY"
        />
        <meta
          name="geo.placename"
          content="Gestratz"
        />
        <meta
          httpEquiv="content-language"
          content="de"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
