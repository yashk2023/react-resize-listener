# react-resize-listener-hook
<img src="https://img.shields.io/npm/v/react-resize-listener-hook?style=flat-square" /> <img src="https://img.shields.io/npm/dm/react-resize-listener-hook?style=flat-square" />

A lightweight React hook to listen for window resize events and get the current window width.

## Installation

Install the package using npm or yarn:

```bash
npm install react-resize-listener-hook
# or
yarn add react-resize-listener-hook
```

## Usage

This package provides a `useResizeListener` hook that you can use to track the window's width dynamically.

### Example

```tsx
import React from "react";
import { useResizeListener } from "react-resize-listener-hook";

const App = () => {
  const { width } = useResizeListener();

  return (
    <div>
      <h1>Window Width: {width}px</h1>
    </div>
  );
};

export default App;
```

## API

### `useResizeListener()`

Returns an object containing the current width of the window.

#### Returns

| Key   | Type   | Description               |
|-------|--------|---------------------------|
| width | number | The current window width. |

## Features

- Automatically updates on window resize.
- Lightweight and easy to use.
- Cleanly manages event listeners.

## License

This project is licensed under the MIT License.

## Contributing

Feel free to submit issues or pull requests to improve the package. Contributions are always welcome!

