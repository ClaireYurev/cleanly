# cleanly

3.13.23

Existing elements:

/.github/
/node_modules/ (gitignored)
/public/
/src/
.eslintrc.json
.gitignore
next.config.js
package.json
package-lock.json
tsconfig.json

New elements:

/cypress/
/scripts/
/supabase/
.env
.env.development
.env.production
.env.test
cypress.config.ts
global.d.ts
postcss.config.js
tailwind.config.js

To begin work:

npm i

Next, run:

npm run supabase:start

(^^^ This requires Docker to be installed)
