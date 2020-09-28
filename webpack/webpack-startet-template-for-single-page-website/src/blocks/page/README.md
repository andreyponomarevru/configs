Whenever you don’t have any `<script></script>` tags on the page, Google Chrome fires CSS-`transition` on page load. Prevent this by applying `&__preload` class with `transition: none` property to all descendants of `<body>`. Then we remove this class name with the help of a small script `page.js`

```css
  &__preload * {
    transition: none !important;
  }
```
