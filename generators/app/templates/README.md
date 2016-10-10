[![Build status][travis-image]][travis-url]

## \<<%= name %>\>

<%= description %>.

Example:
<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="<%= name %>.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<<%= name %>></<%= name %>>
```

[travis-image]: https://travis-ci.org/<%= organization %>/<%= name %>.svg?branch=master
[travis-url]: https://travis-ci.org/<%= organization %>/<%= name %>
