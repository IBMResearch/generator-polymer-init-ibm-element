[![Build status][travis-image]][travis-url]

## \<<%= elementName %>\>

<%= elementDescription %>.

Example:
<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="<%= elementName %>.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<<%= elementName %>></<%= elementName %>>
```

[travis-image]: https://travis-ci.org/<%= githubOrganization %>/<%= elementName %>.svg?branch=master
[travis-url]: https://travis-ci.org/<%= githubOrganization %>/<%= elementName %>
