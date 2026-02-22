var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "hw3",
  "level": "1",
  "url": "hw3.html",
  "type": "Worksheet",
  "number": "",
  "title": "Homework 3",
  "body": " Homework 3    Instructions: Submit your work by uploading a single PDF and a single Mathematica notebook to D2L. For the algebraic work, it can either be a scan of handwritten solutions or a PDF you created by typing your solutions. Clearly label each problem and include your reference to which definition, remark, theorem and\/or which part of theorem in which week's handout is used for each step. You can use Mathematica to help you with algebraic work, however, you must show the steps and include explanation and reasoning. In Mathematica, you must include text to clearly label your code and graphs.    Find the radius of convergence and the interval of convergence for the given power series. Plot the graphs of the truncated series of the first 2 terms, first 4 terms, first 6 terms, first 10 terms, and first 20 terms on the same graph over the interval of convergence with the legend. Describe your observations of the graphs as the number of terms in the truncated Taylor series increases.               is a regular singular point of the given differential equation. Use the method Frobenius to obtain two linearly independent series solution about Form the general solution on the inverval                 Show that the given set of functions are orthogonal on the indicated interval.               Find the Fourier series of the function on the given interval. Give the number to which the Fourier series converges at a point of discontinuity of Create the graph of the periodic extension of the indicated function.              Expand the given function in an appropriate cosine or sine series.             "
},
{
  "id": "hw3-3",
  "level": "2",
  "url": "hw3.html#hw3-3",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": " Find the radius of convergence and the interval of convergence for the given power series. Plot the graphs of the truncated series of the first 2 terms, first 4 terms, first 6 terms, first 10 terms, and first 20 terms on the same graph over the interval of convergence with the legend. Describe your observations of the graphs as the number of terms in the truncated Taylor series increases.            "
},
{
  "id": "hw3-4",
  "level": "2",
  "url": "hw3.html#hw3-4",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  is a regular singular point of the given differential equation. Use the method Frobenius to obtain two linearly independent series solution about Form the general solution on the inverval               "
},
{
  "id": "hw3-5",
  "level": "2",
  "url": "hw3.html#hw3-5",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": " Show that the given set of functions are orthogonal on the indicated interval.             "
},
{
  "id": "hw3-6",
  "level": "2",
  "url": "hw3.html#hw3-6",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": " Find the Fourier series of the function on the given interval. Give the number to which the Fourier series converges at a point of discontinuity of Create the graph of the periodic extension of the indicated function.            "
},
{
  "id": "hw3-7",
  "level": "2",
  "url": "hw3.html#hw3-7",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": " Expand the given function in an appropriate cosine or sine series.            "
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
