# Section Title

This is the introduction for this section. It has no special formatting applied to it. Therefore, it is just written as plain text allowing you to focus on the content rather than the formatting. 

This is an example of **bold text**, which is written as follows:

```
**bold text**
```

This is an example of *emphasised text*, which is written as follows:

```
*emphasised text*
```

## Sub-section heading

Headings in markdown use the ```#``` character. For example:

```
# Title (is only used once per file)

## Heading 1
### Sub-Heading 1.1

## Heading 2
### Sub-Heading 2.1
#### Sub-Sub-Heading 2.1.1
```

## Lists and Links

Lists in markdown use the ```-``` character or numbers, depending on whether you want unordered or ordered lists:

To get the following:

- Item 1
- Item 2
    - Item 2.1
    - Item 2.2

You would use this (note the tabbed indents):

```
- Item 1
- Item 2
   - Item 2.1
    - Item 2.2
```

To get the following:

1. Item 1
2. Item 2
    - Item 2.1
    - Item 2.2

You would use this (note the tabbed indents):

```
1. Item 1
2. Item 2
   - Item 2.1
    - Item 2.2
```

Links are also easy to do. They just require the following syntax:

```
[text to display](https://turing-commons.netlify.app)
```

This would then show up as [a link](https://turing-commons.netlify.app).

For the AEG guidebook, you can use the chapter and section structure to create internal links:

```
[link to section 2](section2.md)
```

If you're referencing a section in a different chapter to the one you're currently in, just use the following syntax:

```
[link to chapter 3, section 1](../chapter3/section1.md)
```

## Images

There are two ways to display images.

### Method 1

Use this method if you just want an image to be displayed without any caption or reference.

```
![](linktoimage.jpg)
```

![](https://i.imgur.com/Geor9PW.jpg)

### Method 2

Otherwise, you can use this method to generate a caption and change properties of the image.

````
```{image} directory/nameoffile.png
---
align: center
name: imagename
alt: A description of the image to support accessibility
---
Caption that you want to display under the image.
```
````

:::danger
HackMD does not support method 2 so I cannot show you how it looks. 
Here is [an example](https://turing-commons.netlify.app/rri/chapter3/project_lifecycle.html).
:::

## Citations, Glossary Terms, and Footnotes

The website supports citations from Zotero using citekeys. The following [Zotero library](https://www.zotero.org/groups/4441221/turing_commons/library) has already been set-up to link with the platform, and has a folder for the AEG course. All you need to do is use the citekey for the relevant reference. 

### Option 1

Using ```{cite:p}`leslie2021``` will result in a reference with this format: (Leslie, 2021)

### Option 2

Using ```{cite:t}`leslie2021``` will result in a reference with this format: Leslie (2021)

Either option will result in a in-line citation that is linked to the full reference in the blibliography. The bibliography has also been set-up: https://turing-commons.netlify.app/bibliography.html

### Glossary Terms

The website supports glossary terms, which can set-up in the relevant sections using the following syntax:

````
This is a sentence with includes the definiendum, {term}`Term 1`. 
It automatically generates a link to the term in the glossary. 

--------
Glossary
--------

```{glossary}
Term 1
  An indented explanation of term 1

Term 2
  An indented explanation of term 2 
```
````



### Footnotes

You can also use footnotes, such as this one[^footnote], using this syntax:

```
This is a sentence with a footnote[^footnote_label].

[^footnote_label]: This is the content of the footnote, which can be placed anywhere in the document, but after the original label.
```

[^footnote]: This is a footnote.

## Content Blocks

If you want to use special content blocks to emphasise portions of text, the website has a range of options. I can't show these in HackMD, but they look like the following examples:

:::info
**Title**
This is an example of a content block.
:::

:::warning
**Title**
This is another example of a content block. 
:::

This [guide](https://book.org/content/content-blocks.html) shows you how to do the blocks.

## Tables

Simple tables, such as the following are easy in Markdown.

| Column Heading | Second Heading |
| --- | --- |
| Item one | Item two |

They just use the ```|``` character to separate columns, and new lines to start a new row. For example, the above table can be done as follows:

```
| Column Heading | Second Heading |
| --- | --- |
| Item one | Item two |
```

More advanced tables need HTML, so try to avoid them if possible. If you have to create a more complex table, then do so Excel and just send me the link.
