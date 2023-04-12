# to-do-list

Simple to-do-list application that allows user to add tasks, mark them as complete, move to backlog or delete them.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```
### Tech Stack


Vue 3 <br>
Vite <br>
Vue Router <br>
Tailwind CSS <br>
TypeScript <br>
Pinia <br>
SCSS <br>
Semantic HTML <br>

### Description

Pinia is used as a state management library to handle the todo items in different sections.

Vue Router is used to manage routes while clicking on navigation links. 

Tailwind CSS is used to create the layout and some custom configurations are defined in tailwind.config.js  as per the styleguide provided.

TypeScript and vue composition API is used for creating the components.

Common types and enums are stored in separate files.

Resources folder is created to store all the svg icons used in the application.

Some common UI components(such as Button, Input, Icon) are located in common folder inside components directory.

Separate views folder handle the rendering of all the views as per the url, including the 404 Page.

All the routes are listed in the router folder with index.ts file.

Separate unit tests for components and stores are under(__tests__) folder in respective directories.

The application allows to add the todo, which is initially in pending state. <br>
The user can either -  <br>
    1. Mark it as complete <br>
    2. Delete it <br>
    3. Or can move it to backlog and vice-versa. <br>

While navigating to the backlog todos, there is also searching and sorting functionality implemented, to allow users to search and sort the todos.

Each todo is created with a text, unique ID, status and created date.

Transition property of Vue is used to provide transition animations while adding, deleting or moving a todo item.