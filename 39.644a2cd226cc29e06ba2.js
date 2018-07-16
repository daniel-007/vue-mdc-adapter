(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{148:function(s,a,t){s.exports=t(65)},65:function(s,a,t){"use strict";t.r(a);var l=t(0),n=Object(l.a)(null,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("article",[t("h2",[s._v("Usage")]),s._v(" "),t("h3",[s._v("Grid")]),s._v(" "),t("p",[s._v("A grid is a container that consists of a group of cells.\nCells get positioned in a sequence according to a predefined number of columns.\nThe grid and cells are not styled in any way, serving only for alignment and\npositioning of elements.")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mdc-layout-grid")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mdc-layout-cell")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("Cell 1"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mdc-layout-cell")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mdc-layout-cell")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("Cell 2"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mdc-layout-cell")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mdc-layout-cell")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("Cell 3"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mdc-layout-cell")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mdc-layout-grid")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("p",[s._v("Grid can define its own max-width or designate its columns to be a certain width.")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("prop")]),s._v(" "),t("th",[s._v("Type")]),s._v(" "),t("th",[s._v("Default")]),s._v(" "),t("th",[s._v("Description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[s._v("fixed-column-width")])]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("whether columns have fixed width")])])])]),s._v(" "),t("p",[s._v("The grid has 12 columns in desktop mode (>= 840px), 8 columns in tablet mode\n(>= 480px), and 4 columns in phone mode (< 480px).")]),s._v(" "),t("p",[s._v("In accordance with the Material Design spec, layout grids set default margins and gutters to 24px on desktop and 16px on tablet\nand phone.")]),s._v(" "),t("h3",[s._v("Cells")]),s._v(" "),t("p",[s._v("Cells specify how many columns to span (the default is 4).\nCells are placed side by side until there is no more room,\nat which point the next cell is placed at the beginning of the next row.")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[s._v("  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mdc-layout-grid")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mdc-layout-cell")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("desktop")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("3")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("tablet")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("3")]),s._v(" >")]),s._v("\n      Cell\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mdc-layout-cell")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mdc-layout-cell")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("desktop")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("3")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("tablet")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("5")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("align")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"top"')]),s._v(" >")]),s._v("\n      Top\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mdc-layout-cell")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mdc-layout-cell")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("desktop")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("3")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("tablet")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("5")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("align")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"middle"')]),s._v(">")]),s._v("\n      Middle\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mdc-layout-cell")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mdc-layout-cell")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("desktop")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("3")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("tablet")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("3")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("align")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"bottom"')]),s._v(">")]),s._v("\n      Bottom\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mdc-layout-cell")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mdc-layout-grid")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("prop")]),s._v(" "),t("th",[s._v("Type")]),s._v(" "),t("th",[s._v("Default")]),s._v(" "),t("th",[s._v("Description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[s._v("span")])]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td",[s._v("4")]),s._v(" "),t("td",[s._v("how many columns to span from 1 to 12")])]),s._v(" "),t("tr",[t("td",[t("code",{pre:!0},[s._v("phone")])]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td",[s._v("4")]),s._v(" "),t("td",[s._v("how many columns to span in phone mode")])]),s._v(" "),t("tr",[t("td",[t("code",{pre:!0},[s._v("tablet")])]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td",[s._v("4")]),s._v(" "),t("td",[s._v("how many columns to span in tablet mode")])]),s._v(" "),t("tr",[t("td",[t("code",{pre:!0},[s._v("desktop")])]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td",[s._v("4")]),s._v(" "),t("td",[s._v("how many columns to span in desktop mode")])]),s._v(" "),t("tr",[t("td",[t("code",{pre:!0},[s._v("align")])]),s._v(" "),t("td",[s._v("String")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("whether cell content is aligned to the "),t("code",{pre:!0},[s._v("top")]),s._v(", "),t("code",{pre:!0},[s._v("bottom")]),s._v(" or "),t("code",{pre:!0},[s._v("middle")])])]),s._v(" "),t("tr",[t("td",[t("code",{pre:!0},[s._v("order")])]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("cell order from 1 to 12")])])])]),s._v(" "),t("h3",[s._v("Nesting")]),s._v(" "),t("p",[s._v("When your contents need extra structure that cannot be supported by single\nlayout grid, you can nest layout grid within each other with "),t("code",{pre:!0},[s._v("mdc-layout-inner-grid")])]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mdc-layout-grid")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mdc-layout-cell")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mdc-layout-inner-grid")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mdc-layout-cell")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("Second Level"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mdc-layout-cell")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mdc-layout-cell")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("Second Level"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mdc-layout-cell")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mdc-layout-inner-grid")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mdc-layout-cell")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mdc-layout-cell")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("First Level"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mdc-layout-cell")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mdc-layout-cell")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("First Level"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mdc-layout-cell")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mdc-layout-grid")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("blockquote",[t("p",[s._v("However, the Material Design guidelines do not recommend a deeply nested grid since\nit could indicate an overly complicated UX.")])]),s._v(" "),t("h3",[s._v("Customizing the Grid")]),s._v(" "),t("p",[s._v("The max width,  fixed column width, margins, gutters and spans can be customized\nwith CSS custom properties:")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-css"}},[t("span",{attrs:{class:"hljs-selector-pseudo"}},[s._v(":root")]),s._v(" {\n  "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("--mdc-layout-grid-column-width-desktop")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("84px")]),s._v(";\n  "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("--mdc-layout-grid-margin-desktop")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("40px")]),s._v(";\n  "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("--mdc-layout-grid-gutter-tablet")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("16px")]),s._v(";\n  "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("--mdc-layout-grid-gutter-phone")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("8px")]),s._v(";\n}\n")])]),s._v(" "),t("p",[s._v("or SASS mixins:")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-scss"}},[t("span",{attrs:{class:"hljs-selector-class"}},[s._v(".my-grid")]),s._v(" {\n  @include mdc-layout-grid-inner(desktop, 16px, 16px);\n}\n\n"),t("span",{attrs:{class:"hljs-selector-class"}},[s._v(".my-cell")]),s._v(" {\n  @include mdc-layout-grid-cell(desktop, 4, 16px);\n}\n")])]),s._v(" "),t("p",[s._v("see MDC reference documentation for more:\n"),t("a",{attrs:{href:"https://material.io/components/web/catalog/layout-grids"}},[s._v("https://material.io/components/web/catalog/layout-grids")])])])}],!1,null,null,null);a.default=n.exports}}]);
//# sourceMappingURL=39.644a2cd226cc29e06ba2.js.map