# ifcjs-example
minimal example playing with IFC.js

---

## intro to JS development
notes here for convinience:
- need to instal `npm` runtime first on your operating system

- you need the javascript module bundler [whaa?bundler..?](https://snipcart.com/blog/javascript-module-bundler) generally it takes care of combining all javascript you produce and use from external js packages into one js file loaded in `index.html`, some bundlers do also *tree shaking*
  
- recomend you use VITE bundler, it does tree shaking, [quasar](Quasar.dev) has documentation around it and it uses *Rollup* package manager under the hood with some extra conviniences

- you can create *scripts* that are convinience tooling wraps i.e. for building app for distribution etc. (those are defined inside package.json)

- after some code written project can be build with `npx vite build`

### project setup
- if using **Vite** as ==javascript bundler== you can set up the project by using `npm create vite@latest` to create complete new project *(creates **root** project directory with app scaffolded, with .gitignore etc)*

- once app is set up, *Vite* got added to executable scripts so you can run scripts with **npx** `npx vite build` or `npx vite' to run dev server [Vite commands](https://vitejs.dev/guide/#command-line-interface)

### adding project dependencies

- all packages and tools in `npm` JavaScriptWorld get installed always "per project" (unlike in Python where you can have some general tooling installed once, for system runtime and not inside project's virtual env)

- install dev dependencies with `npm i vite --save-dev`

- install general dependencies with `npm i web-ifc-three` and `npm i three` [ifc.js example](https://ifcjs.github.io/info/docs/Hello%20world)
