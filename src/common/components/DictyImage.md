Uses the HTML5 `<picture>` element to take advantage of newer, and more efficient image formats, while also supporting older browsers.

<br />

### Basic usage
Creates a `picture` element with an `img` element and `src` attribute.
```js
<DictyImage>
    <img src="/src/images/slideshow-images/ctr9-mutant-DG1071.png" />
</DictyImage>
```

### Adding next-gen images
The `nextGenSources` prop allows usage of modern image formats if the browser supports them. If not it will automatically fallback to the image specified with the `src` prop. In this example, browsers that _do not_ support next-gen image formats will always see the sad dicty logo instead.
```js
<DictyImage 
    nextGenSources={
        [
            {
                srcSet: "/src/images/slideshow-images/tipB-mutant-DG1036.avif",
                type: "image/avif"
            },
            {
                srcSet: "/src/images/slideshow-images/tipB-mutant-DG1036.webp",
                type: "image/wepb"
            }
        ]
    }
>
    <img 
        src="/src/images/sad-dicty.png" 
        alt="dicty logo" />
</DictyImage>
```