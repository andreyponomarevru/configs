# How to use

`img-svg` component can be implemented in one of three ways:

- `<img src='...'>` tag
```pug
img(
  src='./../img/logo.svg' 
  alt='Logoipsum logo'
  title='Logoipsum'
  class='img-svg'
)
```

- `<div>` tag with css `background-image`. If you need more then one `img-svg`, implement new instances of `img-svg` right in the SASS file, as block modifiers (`img-svg_bg1`, `img-svg_bg2`, ...) and use `classList` parameter of mixin to add new modifiers
```pug
div(class='img-svg img-svg_bg')
```

- and if you need interactivity, use SVG with the help of `<object>` tag
```pug
object(
  type="image/svg+xml" 
  data='./../img/logo.svg'
  class=`img-svg ${classList}`
) Your browser does not support SVG
```