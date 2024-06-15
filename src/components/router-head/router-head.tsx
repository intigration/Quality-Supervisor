import { useDocumentHead, useLocation } from "@builder.io/qwik-city";

import { component$ } from "@builder.io/qwik";

export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>{head.title || 'QA Supervisor - The ultimate quality checklist and framework'}</title>
      <meta name="description" content="The ultimate quality checklist and framework" />
      
      {/* Site config */}
      <link rel="canonical" href={loc.url.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/favicon.png" />
      <meta name="theme-color" content="#6419e6" />
      <link rel="manifest" href="/manifest.json" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={loc.url.href} />
      <meta property="og:title" content="QA Supervisor - The ultimate quality checklist and framework" />
      <meta property="og:description" content="The ultimate quality checklist and framework" />
      <meta property="og:image" content="/banner.png" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="QA Supervisor - The ultimate quality checklist and framework" />
      <meta name="twitter:description" content="The ultimate quality checklist and framework" />
      <meta name="twitter:image" content="/banner.png" />
      {/* <link href="styles/a-standard.css" type="text/css" rel="stylesheet" /> */}
      <link href="styles/a-user.css" type="text/css" rel="stylesheet" />
      <link href="styles/jQuery/datatables/css/jquery.dataTables.css" type="text/css" rel="stylesheet" />
      <link href="styles/jQuery/jstree/default/style.css" type="text/css" rel="stylesheet" />
      <link href="styles/jQuery/smoothness/jquery-ui-1.8.21.custom.css" type="text/css" rel="stylesheet" />
      <link href="styles/z-standard.css" type="text/css" rel="stylesheet" />
      <link href="styles/z-user.css" type="text/css" rel="stylesheet" />
	    <link rel="stylesheet" href="style.css" />
      <script type="text/javascript" src="Scripts/jQuery/jquery-1.7.1.min.js" />
      <script type="text/javascript" src="Scripts/jQuery/jquery-pzalias.js" />
      <script type="text/javascript" src="Scripts/jQuery/jquery-ui-1.8.18.custom.min.js" />
      <script type="text/javascript" src="Scripts/jQuery/jquery.cookie.js" />
      <script type="text/javascript" src="Scripts/jQuery/jquery.jstree.js" />
      <script type="text/javascript" src="Scripts/jQuery/watermark/jquery.data.js" />
      <script type="text/javascript" src="Scripts/jQuery/watermark/jquery.watermark.min.js" />
      <script type="text/javascript" src="Scripts/_DiagramView.min.js" />
      <script type="text/javascript" src="Scripts/LegacyControls.min.js" />
      <script type="text/javascript" src="Scripts/LegacyFunctions.min.js" />
      <script type="text/javascript" src="Scripts/WebApp.min.js" />
      <script type="text/javascript" src="Scripts/Standard.min.js" />
      <script type="text/javascript" src="Scripts/Json2.min.js" />
      <script type="text/javascript" src="Scripts/Custom.min.js" />
      {/* <script type="text/javascript" src="Scripts/test.js" /> */}



    
      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {head.styles.map((s) => (
        <style key={s.key} {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}

      {head.scripts.map((s) => (
        <script key={s.key} {...s.props} dangerouslySetInnerHTML={s.script} />
      ))}
      {/* <script defer data-domain="digital-defense.io" src="https://no-track.as93.net/js/script.js" /> */}
    </>
  );
});
