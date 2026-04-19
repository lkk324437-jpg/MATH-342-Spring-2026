var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "week14-handout",
  "level": "1",
  "url": "week14-handout.html",
  "type": "Worksheet",
  "number": "",
  "title": "Week 13-14 Handout-Integral Transforms",
  "body": " Week 13-14 Handout-Integral Transforms    We will discuss the following topics related to Integral Transforms (Chap 15) :   Laplace Transforms (15.2)    Fourier Transforms (15.4)        Laplace Transform  The Laplace transform of with respect to is defined as  where is treated as a parameter.      In Week 1, we used Laplace Transform to reduce the ODE to an algebraic equation. Here, we will use Laplace Transform to reduce a PDE to an ODE. Here are a few useful properties:                      Solve the boundary value problem using Laplace Transform:       Use the Laplace transform to solve the heat equation subjec to       Integral transforms appear in transform pairs. If is transformed into by an integral transform  then the function can be recovered by another integral transform called the inverse transform. The functions and in and are called kernels of their respective transforms. In Laplace transform , and      Fourier Transform Pairs         Fourier Transform :    Inverse Fourier Transform :             Fourier cosine Transform :    Inverse Fourier cosine Transform :             Fourier sine Transform :    Inverse Fourier sine Transform :             Existence and Properties of Fourier Transform     Sufficient conditions for existence of , , and are that be absolutely integrable on the appropriate interval and that and be piecewise continuous on every finite interval.      , and  do not exist.    All 6 transforms in are linear transforms.    Suppose that is continuous and absolute integrable on the interval and is piecewise continuous on every finite interval. If as then       With added assumptions that is continuous on , is piecewise continuous on every finite interval, and as , we have     Similarly, we have where        For Fourier Cosine Transform and Fourier Sine Transform : under the same assumptions mentioned above:                              Use a Fourier transform to solve:     "
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
  "body": "  In Week 1, we used Laplace Transform to reduce the ODE to an algebraic equation. Here, we will use Laplace Transform to reduce a PDE to an ODE. Here are a few useful properties:                   "
},
{
  "id": "week14-handout-5",
  "level": "2",
  "url": "week14-handout.html#week14-handout-5",
  "type": "Example",
  "number": "3",
  "title": "",
  "body": "  Solve the boundary value problem using Laplace Transform:    "
},
{
  "id": "week14-handout-6",
  "level": "2",
  "url": "week14-handout.html#week14-handout-6",
  "type": "Example",
  "number": "4",
  "title": "",
  "body": "  Use the Laplace transform to solve the heat equation subjec to    "
},
{
  "id": "week14-handout-7",
  "level": "2",
  "url": "week14-handout.html#week14-handout-7",
  "type": "Remark",
  "number": "5",
  "title": "",
  "body": "  Integral transforms appear in transform pairs. If is transformed into by an integral transform  then the function can be recovered by another integral transform called the inverse transform. The functions and in and are called kernels of their respective transforms. In Laplace transform , and    "
},
{
  "id": "def-fourier-transform",
  "level": "2",
  "url": "week14-handout.html#def-fourier-transform",
  "type": "Definition",
  "number": "6",
  "title": "Fourier Transform Pairs.",
  "body": " Fourier Transform Pairs         Fourier Transform :    Inverse Fourier Transform :             Fourier cosine Transform :    Inverse Fourier cosine Transform :             Fourier sine Transform :    Inverse Fourier sine Transform :           "
},
{
  "id": "week14-handout-9",
  "level": "2",
  "url": "week14-handout.html#week14-handout-9",
  "type": "Remark",
  "number": "7",
  "title": "Existence and Properties of Fourier Transform.",
  "body": " Existence and Properties of Fourier Transform     Sufficient conditions for existence of , , and are that be absolutely integrable on the appropriate interval and that and be piecewise continuous on every finite interval.      , and  do not exist.    All 6 transforms in are linear transforms.    Suppose that is continuous and absolute integrable on the interval and is piecewise continuous on every finite interval. If as then       With added assumptions that is continuous on , is piecewise continuous on every finite interval, and as , we have     Similarly, we have where        For Fourier Cosine Transform and Fourier Sine Transform : under the same assumptions mentioned above:                           "
},
{
  "id": "week14-handout-10",
  "level": "2",
  "url": "week14-handout.html#week14-handout-10",
  "type": "Example",
  "number": "8",
  "title": "",
  "body": "  Use a Fourier transform to solve:    "
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
