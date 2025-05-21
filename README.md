# React useAttach PoC

This project demonstrates a flexible React hook, `useAttach`, inspired by Svelte's [`@attach` API](https://svelte.dev/docs/svelte/@attach). It allows you to declaratively attach effects, behaviors, or third-party libraries to DOM elements in a composable and idiomatic way.

## Features

- **Inspired by Svelte's @attach**: Bring the power and ergonomics of Svelte's element actions to React.
- **Composable**: Attach any effect, event, or library to a DOM element via a simple hook.
- **Cleanup support**: Return a cleanup function to handle teardown automatically.
- **Type-safe**: Fully typed with TypeScript and supports generics for any element type.

## Installation

Clone this repo and install dependencies:

```bash
pnpm install
```

## The `useAttach` Hook

```ts
function useAttach<T extends HTMLElement = HTMLElement>(
  attachFn: (element: T) => void | (() => void),
  deps: unknown[] = []
): React.RefObject<T>;
```

- `attachFn`: A function that receives the DOM element and can optionally return a cleanup function.
- `deps`: Dependency array (like in `useEffect`).
- Returns a React ref to attach to your element.

## Examples

Explore the following examples in [`src/examples/`](src/examples/):

- [Tooltip with tippy.js](src/examples/Tooltip.tsx)
- [Multiple Attachments](src/examples/MultipleAttach.tsx)
- [Canvas Drawing](src/examples/Canvas.tsx)

---

Feel free to explore the `src/examples/` directory for more demos and inspiration!
