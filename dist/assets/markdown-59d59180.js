import{j as s,e as i,C as t,p,S as h,o as e,D as a,W as c}from"./index-27ffd735.js";import{M as r}from"./markdown-61d29bd3.js";import{C as d}from"./custom-breadcrumbs-891ee9b7.js";import{C as n}from"./CardHeader-8b482d81.js";import{C as l}from"./CardContent-9855c600.js";import"./highlight-d4e5d3fc.js";import"./image-7d02ef11.js";import"./index-e5978b8b.js";const m=`

<h1>h1</h1>

<br/>

<h2>h2</h2>

<br/>

<p> <strong>Paragraph</strong> Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups</p>

<br/>

<p>
  <a href='https://www.google.com/'>Link (https://www.google.com/)</a>
</p>

<br/>

<h6>Lists</h6>

<br/>

<ul>
  <li>
    <input type="checkbox" disabled="" checked=""> Write the press release
  </li>
  <li>
    <input type="checkbox" disabled=""> Update the website
  </li>
  <li>
    <input type="checkbox" disabled=""> Contact the media
  </li>
</ul>

<br/>

<hr/>

<br/>

<h6>A table:</h6>

<br/>

<table>
  <thead>
    <tr>
      <th style="text-align: left;">Syntax</th>
      <th style="text-align: center;">Description</th>
      <th style="text-align: right;">Test Text</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: left;">Header</td>
      <td style="text-align: center;">Title</td>
      <td style="text-align: right;">Here's this</td>
    </tr>
    <tr>
      <td style="text-align: left;">Paragraph</td>
      <td style="text-align: center;">Text</td>
      <td style="text-align: right;">And more</td>
    </tr>
  </tbody>
</table>

<br/>

<pre class="ql-syntax" spellcheck="false"><span class="hljs-keyword">import</span> <span class="hljs-title class_">React</span> <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">ReactDOM</span> <span class="hljs-keyword">from</span> <span class="hljs-string">'react-dom'</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">ReactMarkdown</span> <span class="hljs-keyword">from</span> <span class="hljs-string">'react-markdown'</span>;
<span class="hljs-keyword">import</span> rehypeHighlight <span class="hljs-keyword">from</span> <span class="hljs-string">'rehype-highlight'</span>;

<span class="hljs-title class_">ReactDOM</span>.<span class="hljs-title function_">render</span>(
  <span class="hljs-tag">&lt;<span class="hljs-name">ReactMarkdown</span> <span class="hljs-attr">rehypePlugins</span>=<span class="hljs-string">{[rehypeHighlight]}</span>&gt;</span>{'# Your markdown here'}<span class="hljs-tag">&lt;/<span class="hljs-name">ReactMarkdown</span>&gt;</span>,
  <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">querySelector</span>(<span class="hljs-string">'#content'</span>)
);
</pre>

<br/>

<img alt='cover' src='https://res.cloudinary.com/trinhmai/image/upload/v1660897321/_minimal_mock/_Cover/cover_19.jpg'>

<blockquote> <p>A block quote with <s>strikethrough</s> and a URL: <a href='https://reactjs.org'>https://reactjs.org</a>.</p> </blockquote>
`,g=`
# h1

<br/>

## h2

<br/>

**Paragraph** Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.

<br/>

[Link (https://www.google.com/)](https://www.google.com/)

<br/>

###### Lists

<br/>

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

<br/>

---

<br/>

###### A table:

<br/>

| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |

<br/>

\`\`\`tsx
import React from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';

ReactDOM.render(
  <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{'# Your markdown here'}</ReactMarkdown>,
  document.querySelector('#content')
);
\`\`\`

<br/>

![cover](https://res.cloudinary.com/trinhmai/image/upload/v1660897321/_minimal_mock/_Cover/cover_19.jpg)

> A block quote with ~~strikethrough~~ and a URL: [https://reactjs.org](https://reactjs.org).
`;function j(){return s.jsxs(s.Fragment,{children:[s.jsx(i,{sx:{py:5,bgcolor:o=>o.palette.mode==="light"?"grey.200":"grey.800"},children:s.jsx(t,{children:s.jsx(d,{heading:"Markdown",links:[{name:"Components",href:p.components},{name:"Markdown"}],moreLink:["https://www.npmjs.com/package/react-markdown"]})})}),s.jsx(t,{sx:{my:10},children:s.jsxs(h,{spacing:3,direction:{xs:"column",md:"row"},children:[s.jsxs(e,{children:[s.jsx(n,{title:"Html content",sx:{pb:3}}),s.jsx(a,{sx:{borderStyle:"dashed"}}),s.jsx(l,{children:s.jsx(r,{children:m})})]}),s.jsxs(e,{children:[s.jsx(n,{title:"Mardown content",sx:{pb:3}}),s.jsx(a,{sx:{borderStyle:"dashed"}}),s.jsx(l,{children:s.jsx(r,{children:g})})]})]})})]})}function M(){return s.jsxs(s.Fragment,{children:[s.jsx(c,{children:s.jsx("title",{children:" Components: Markdown"})}),s.jsx(j,{})]})}export{M as default};
