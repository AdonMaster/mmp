init
```
npx create-expo-app@latest
```

reset
```
npm run reset-project
```

tailwind
```
npm i nativewind tailwindcss
npx tailwindcss init

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}

```
babel.config.js

```
module.exports = function (api) {
  api.cache(true)
  return {
    presets: [
      ["babel-preset-expo", {jsxImportSource: "nativewind"}],
      "nativewind/babel"
    ]
  }
}
```
metro
```
npx expo customize metro.config.js

// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro')

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, {
  input: './app/styles.css'
});
```
nativewind/types
```
// nativewind-env.d.ts
/// <reference types="nativewind/types" />
```

styles.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

