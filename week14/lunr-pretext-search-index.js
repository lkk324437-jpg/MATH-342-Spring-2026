var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "week14-handout",
  "level": "1",
  "url": "week14-handout.html",
  "type": "Worksheet",
  "number": "",
  "title": "Week 13-14 Handout-Integral Transforms",
  "body": " Week 13-14 Handout-Integral Transforms    We will discuss the following topics related to Integral Transforms (Chap 15) :   Week 13: Laplace Transforms (15.2) , Fourier Transforms (15.4)    Week 14: Fourier Transforms (15.4), Finite Fourier Transforms (15.5)        Laplace Transform  The Laplace transform of with respect to is defined as  where is treated as a parameter.      In Week 1, we used to reduce the ODE to an algebraic equation. Here, we will use to reduce a PDE to an ODE. Here are a few useful properties:                    "
},
{
  "id": "week14-handout-2-1-1",
  "level": "2",
  "url": "week14-handout.html#week14-handout-2-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Integral Transforms (Chap 15) "
},
{
  "id": "def-laplace-transform-partial",
  "level": "2",
  "url": "week14-handout.html#def-laplace-transform-partial",
  "type": "Definition",
  "number": "1",
  "title": "Laplace Transform.",
  "body": " Laplace Transform  The Laplace transform of with respect to is defined as  where is treated as a parameter.   "
},
{
  "id": "week14-handout-4",
  "level": "2",
  "url": "week14-handout.html#week14-handout-4",
  "type": "Remark",
  "number": "2",
  "title": "",
  "body": "  In Week 1, we used to reduce the ODE to an algebraic equation. Here, we will use to reduce a PDE to an ODE. Here are a few useful properties:                   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
