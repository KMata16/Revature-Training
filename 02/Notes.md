selector{
	property:value
}

h2{
	background-color:red;
	color:blue
}

Types of CSS
1. INLINE CSS -- is in line with the element. In the element
2. INTERNAL CSS -- <style></style>
3. EXTERNAL CSS -- created in separate file, with the extension of .css is included in the html usink the <link> tag

rel -> relationship 
type -> render as text/css

which takes precedence between inline, internal, external
Inline > internal > external

Use Cases
1. INLINE - whenever we want to style a single element
2. INTERNAL - whenever we want to style a multiple element
3. EXTERNAL - different resource. can be used in multiple html files

Box model: consist of 4 things
inner most - content
padding - space between the content and the border
border - broder goes around the content
Margins - spaces between two elements

Selectors - are used to select the context you want to style. Part of CSS rules set

Types of selectors
1. Universal Selector (*)
2. Element Selector
3. ID Selector (#)
4. Class Selector (.)
5. Grouping Selector (h1,h2, p)
6. Attribute Selector ( [] ) 
7. Child Selectors
8. Pseudo Selectors


Responsive Web Design
- Layout
    - Flex - one dimensional layout. Used to arrange the elements 
    - Grid - Divides page into grids

- Media Queries 
@media (followed by device)



CSS Variables 

color:blue

--blue=#6495ed

color:var(--blue)
