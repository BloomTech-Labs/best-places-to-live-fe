## Live in the Best Place Styling System

Libraries: Styled System & Styled Components

[Styled Components Docs](https://www.styled-components.com/docs/basics)
[Styled Systems Docs](https://styled-system.com/getting-started)

### [Theme](../theme.js)

[Reference Table](https://styled-system.com/table)

- Breakpoints
- Colors
- Space
- Fonts
- FontSizes

### Global

- Normalize.css
- Base font size: 62.5%

### [Components](./index.js)

| Name              | SS Props                           | Description                          |
| ----------------- | ---------------------------------- | ------------------------------------ |
| Box               | layout, space, display, typography |
| Card              | space, border, width               |
| CheckBoxContainer |                                    | Checkbox functionality, but as ovals |
| Button            | typography, space, color, border   |
| Hero              | layout, space, flexbox, background |
| Flex              | layout, flexbox, display           |
| Container         | layout, space, flexbox, typography |
| Image             | layout, space                      |
| Text              | typography, color                  |
| Link              | typography, color                  |
| Nav               | layout, flexbox                    |
| Form              |                                    |
| Input             |                                    |

#### Components can receive an "as" prop, Example:

```js
<Text as="h2" />
```

[As Polymorphic Prop](https://www.styled-components.com/docs/api#as-polymorphic-prop)
