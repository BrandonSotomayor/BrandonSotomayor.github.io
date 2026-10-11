
// https://astro.build/config
export default defineConfig({
  site: 'https://BrandonSotomayor.github.io',
integrations: [tailwind(), react()],
vite: {
resolve: {
alias: {
"@": "/src",
"@components": "/src/components",
},
},
},
output: "static",
build: {
inlineStylesheets: "auto",
},
server: {
host: true,
port: 4321,
},
});
