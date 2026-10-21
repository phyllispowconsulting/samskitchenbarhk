# Sam's Kitchen + Bar website (test version)

Pages: `index.html` (home) and `menu.html` (full menu). Everything is plain HTML, CSS and JavaScript, so it works on GitHub Pages with no build step.

## Put it online on GitHub Pages (about 5 minutes)

1. Unzip this folder on your computer.
2. Go to github.com, sign in, click **+ > New repository**. Name it `sams-kitchen-bar`, choose **Public**, click **Create repository**.
3. On the new repository page click **uploading an existing file**.
4. Open the unzipped folder and drag **everything inside it** (`index.html`, `menu.html`, and the `css`, `js`, `fonts`, `img`, `logos` folders) into the browser. Wait for the upload to finish, then click **Commit changes**.
   - `index.html` must sit at the top level of the repository, not inside another folder.
5. Go to **Settings > Pages**. Under **Build and deployment**, set **Source** to **Deploy from a branch**, **Branch** to `main` and folder `/ (root)`, then click **Save**.
6. Wait 1 to 2 minutes and refresh. The site address will be `https://YOUR-USERNAME.github.io/sams-kitchen-bar/`. Open it on your phone to test.

## Links to fill in (js/config.js)

Open `js/config.js` and paste the booking link, WhatsApp number, email, Instagram link and Google Maps embed link between the quotes. Every "Book a table" and "Reserve online" button then goes to the booking link automatically.

## Changing the menu

Open `menu.html`, find the block marked MENU CONTENT, and edit the items. Items marked "Sample" are placeholders. Delete the `<em>Sample</em>` part once an item is real.

## Brand

Colours: Cherry #BA272D, Walnut #3D1A1C, Oat #F3EADE. Fonts: Queso, Ruffle Beauty, Montserrat. Logo files are in `logos/`.
