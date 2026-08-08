KCA Digital Prospectus V2.2

Fix from V2.1:
- The interactive map code was present in V2.1.
- CSS and JS retained the same filenames as V2, so GitHub Pages / the browser could reuse cached V2 assets.
- V2.2 cache-busts both files with ?v=2.2 and adds an explicit map heading and more resilient JS.

Upload/replace index.html, styles.css and script.js together (plus existing assets).
