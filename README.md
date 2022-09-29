# Products App for Getir Case Study

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn storybook`

Starts storybook server for UI documentation.
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

#### Tech Stack

- Frontend
  - Development
    - [React](https://beta.reactjs.org/)
    - [TypeScript](https://www.typescriptlang.org/)
    - [styled-components](https://styled-components.com/)
    - [Redux](https://redux.js.org/)
  - UI Documentation
    - [Storybook](https://storybook.js.org/)
  - Testing
    - [Jest](https://jestjs.io/)

- Backend
  - [JsonServer](https://github.com/typicode/json-server)

- Live Versions
  - Frontend Application Production Build via Netlify [link](https://getir-case-market.netlify.app/)
  - Backend Application Production Build via Heroku [link](https://getircase-api.herokuapp.com)

- Folder Structure

  ```bash
    __tests__/                              => includes test files
    src/
    ├── App.tsx
    ├── assets                              => includes assets to use across the application
    │   └── icons
    │       ├── arrow-left.svg
    │       ├── arrow-right.svg
    │       ├── basket.svg
    │       ├── close.svg
    │       ├── index.ts
    │       ├── loading.svg
    │       ├── logo.svg
    │       ├── menu.svg
    │       ├── minus.svg
    │       ├── plus.svg
    │       ├── threeDots.svg
    │       └── vector.svg
    ├── components                          => components to use in across the application
    │   ├── Button
    │   │   ├── Button.stories.tsx
    │   │   └── index.tsx
    │   ├── ButtonGroup
    │   │   ├── ButtonGroup.stories.tsx
    │   │   └── index.tsx
    │   ├── Card                            => name of the component
    │   │   ├── Card.stories.tsx            => story of the component to document UI
    │   │   ├── index.tsx                   => souce code of the component
    │   │   └── utils.ts                    => utility functions of the component
    │   ├── Checkbox
    │   │   ├── Checkbox.stories.tsx
    │   │   └── index.tsx
    │   ├── Counter
    │   │   ├── Counter.stories.tsx
    │   │   ├── index.tsx
    │   │   └── styles.ts                  => styles of the component
    │   ├── Icon
    │   │   ├── Icon.stories.tsx
    │   │   └── index.tsx
    │   ├── Input
    │   │   ├── Input.stories.tsx
    │   │   └── index.tsx
    │   ├── LoadingSpinner
    │   │   ├── LoadingSpinner.stories.tsx
    │   │   └── index.tsx
    │   ├── Modal
    │   │   ├── Modal.stories.tsx
    │   │   ├── index.tsx
    │   │   └── utils.ts
    │   ├── Pagination
    │   │   ├── Pagination.stories.tsx
    │   │   ├── index.tsx
    │   │   └── styles.ts
    │   ├── ProductItem
    │   │   ├── ProductItem.stories.tsx
    │   │   └── index.tsx
    │   ├── Radios
    │   │   ├── Radios.stories.tsx
    │   │   └── index.tsx
    │   └── index.ts
    ├── constants                         => application constants
    │   ├── api.ts
    │   ├── productCount.ts
    │   └── theme.ts
    ├── hooks                             => custom react hooks
    │   └── useOutsideClick.ts
    ├── index.tsx
    ├── layouts                           => layouts to display in different routes
    │   └── AppLayout
    │       ├── BasketList.tsx
    │       ├── Footer.tsx
    │       ├── Header.tsx
    │       ├── Products.tsx
    │       └── Sidebar.tsx
    ├── lib                               => global utility functions
    │   ├── globalStyles.ts
    │   └── styleHelpers.ts
    ├── pages                             => pages to display on different routes
    │   └── Home
    │       └── index.tsx
    ├── react-app-env.d.ts
    ├── setupTests.ts
    ├── store
    │   ├── actions                       => redux actions
    │   │   ├── brand.ts
    │   │   ├── company.ts
    │   │   ├── products.ts
    │   │   ├── tags.ts
    │   │   └── types.ts
    │   ├── index.ts
    │   └── reducers                      => redux reducers
    │       ├── basket.ts
    │       ├── brands.ts
    │       ├── companies.ts
    │       ├── index.ts
    │       ├── pagination.ts
    │       ├── products.ts
    │       ├── sidebar.ts
    │       ├── sorting.ts
    │       └── tags.ts
    ├── types                             => types to use in the app
    │   └── index.ts
    └── typings                           => customizing module types
        └── styled.d.ts
  ```
