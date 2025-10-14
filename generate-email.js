require("@babel/register")({ extensions: [".js", ".jsx"] });

const fs = require("fs");
const path = require("path");
const juice = require("juice");
const React = require("react");
const ReactDOMServer = require("react-dom/server");

const MainLayout = require("./src/MainLayout.js").default;

// Render the React component to HTML
const html = ReactDOMServer.renderToString(React.createElement(MainLayout));

// Load compiled CSS
const cssPath = path.resolve("./build/email.css");
const css = fs.readFileSync(cssPath, "utf8");

// Extract all @media queries from the CSS
const mediaQueries =
  css.match(/@media[^{]+\{([\s\S]+?\})\s*\}/g)?.join("\n") || "";

// Inline CSS
const inlinedHtml = juice.inlineContent(html, css, {
  preserveMediaQueries: true
});

// Wrap and save
const finalHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <link href="https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i" rel="stylesheet">
  <link href="https://www.ikea.com/global/assets/fonts/en/fonts.css" rel="stylesheet">
  ${mediaQueries ? `<style type="text/css">\n${mediaQueries}\n</style>` : ""}
</head>
<body>
${inlinedHtml}
</body>
</html>
`;

const outputPath = path.resolve("./build/email.html");
fs.writeFileSync(outputPath, finalHtml);

console.log(`✅ Email template generated: ${outputPath}`);
