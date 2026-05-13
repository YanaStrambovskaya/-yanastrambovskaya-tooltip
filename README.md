# @yanastrambovskaya/tooltip

A lightweight, accessible React tooltip component with compound components, automatic positioning, viewport flipping, and optional controlled mode.

## Features

- Accessible `role="tooltip"` support
- Compound component API
- Automatic position calculation
- Automatically flips when there is not enough viewport space
- Supports `top`, `bottom`, `left`, `right`
- Uncontrolled usage for standard tooltip behavior
- Controlled usage for app-driven tooltips like validation or errors
- Includes prebuilt CSS

## Installation

```bash
npm install @yanastrambovskaya/tooltip
```

```bash
pnpm add @yanastrambovskaya/tooltip
```

```bash
yarn add @yanastrambovskaya/tooltip
```

## Usage

### 1. Import

**Import the component and its styles:**

```tsx
import { Tooltip } from "@yanastrambovskaya/tooltip";
import "@yanastrambovskaya/tooltip/dist/index.css";
```

### 2. Basic Usage

```tsx
export default function Example() {
  return (
    <Tooltip placement="top">
      <Tooltip.Trigger>
        <button type="button">Hover me</button>
      </Tooltip.Trigger>

      <Tooltip.Content>Simple tooltip text</Tooltip.Content>
    </Tooltip>
  );
}
```

## Props

**Tooltip**

_Root provider component._

| Prop             | Type                                     | Default   | Description                                |
| ---------------- | ---------------------------------------- | --------- | ------------------------------------------ |
| children         | ReactNode                                | -         | Tooltip structure                          |
| placement        | `"top" \| "bottom" \| "left" \| "right"` | -         | Preferred tooltip position                 |
| offset           | number                                   | 10        | Distance between trigger and tooltip       |
| bgColor          | string                                   | "#333333" | Tooltip background color                   |
| textColor        | string                                   | "#ffffff" | Tooltip text color                         |
| maxWidth         | number                                   | 150       | Maximum tooltip width                      |
| isControlledOpen | boolean                                  | undefined | Controls the tooltip visibility externally |

**Tooltip.Trigger**

_The trigger element for the tooltip._

- Expects a single React element as a child
- Attaches interaction handlers and accessibility attributes

```tsx
<Tooltip.Trigger>
  <button type="button">Trigger</button>
</Tooltip.Trigger>
```

**Tooltip.Content**

_The tooltip body._

```tsx
<Tooltip.Content>Tooltip message</Tooltip.Content>
```

You can customize the tooltip content.

```tsx
<Tooltip.Content>
  <div className="text-center">Tooltip message</div>
</Tooltip.Content>
```

**Tooltip.Caret**

_The tooltip arrow._
You do not need to render it manually, because Tooltip.Content already includes it internally.

## Placement

**Supported placements:**

- top
- bottom
- left
- right

Example:

```tsx
<Tooltip placement="right">
  <Tooltip.Trigger>
    <button type="button">Open</button>
  </Tooltip.Trigger>

  <Tooltip.Content>Tooltip on the right</Tooltip.Content>
</Tooltip>
```

## Styling

_The package includes a CSS file:_

```tsx
import "@yanastrambovskaya/tooltip/dist/index.css";
```

**Default class names used internally:**

- yana-ui-tooltip
- yana-ui-tooltip-inner
- yana-ui-caret
- yana-ui-caretTop
- yana-ui-caretBottom
- yana-ui-caretLeft
- yana-ui-caretRight

You can customize colors through props:

```tsx
<Tooltip placement="top" bgColor="#ffffff" textColor="#222222">
  <Tooltip.Trigger>
    <button type="button">Hover me</button>
  </Tooltip.Trigger>

  <Tooltip.Content>Customized colors</Tooltip.Content>
</Tooltip>
```

## Controlled/Uncontrolled Usage

### Uncontrolled Mode

Default tooltip behavior using internal state.

### Controlled Mode

Visibility is managed externally through the `open` prop.

Use controlled mode when tooltip visibility should depend on your application state.

```tsx
import { useState } from "react";
import { Tooltip } from "@yanastrambovskaya/tooltip";
import "@yanastrambovskaya/tooltip/dist/index.css";

export default function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)}>
        Show tooltip
      </button>

      <Tooltip placement="top" isControlledOpen={isOpen}>
        <Tooltip.Trigger>
          <button type="button">Target</button>
        </Tooltip.Trigger>

        <Tooltip.Content>Controlled tooltip</Tooltip.Content>
      </Tooltip>
    </>
  );
}
```

**When to use controlled mode**

Controlled mode is useful for:

- validation errors
- form warnings
- onboarding hints
- server error messages
- app-driven tooltip visibility

## Accessibility

This component includes:

- `role="tooltip"` on tooltip content
- `aria-describedby` on the trigger while open
- keyboard close support with `Escape`
- `focus/blur` support

## Peer Dependencies

- React 18 or 19
- React DOM 18 or 19

## Notes

- Tooltip.Content should be used inside the matching Tooltip
- Tooltip.Trigger should be used inside the matching Tooltip
- Tooltip.Caret is rendered internally by Tooltip.Content
- If you use open, tooltip visibility is controlled by your app state

## License

MIT
