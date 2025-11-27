import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import TabNavigation from "./components/nav/tabNavigation";
export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="preconnect" href="https://cdn.shopify.com/" />
        <link
          rel="stylesheet"
          href="https://cdn.shopify.com/static/fonts/inter/v4/styles.css"
        />
        <Meta />
        <Links />
        
      </head>
      <body style={{padding:"0px", margin:"0px"}}>
       
       <TabNavigation/>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
