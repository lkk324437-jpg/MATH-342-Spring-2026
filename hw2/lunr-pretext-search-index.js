var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "hw2",
  "level": "1",
  "url": "hw2.html",
  "type": "Worksheet",
  "number": "",
  "title": "Homework 2",
  "body": " Homework 2    Instructions: Submit your work by uploading a single PDF and a single Mathematica notebook to D2L. For the algebraic work, it can either be a scan of handwritten solutions or a PDF you created by typing your solutions. Clearly label each problem and include your reference to which definition, remark, theorem and\/or which part of theorem in which week's handout is used for each step. You can use Mathematica to help you with algebraic work, however, you must show the steps and include explanation and reasoning. In Mathematica, you must include text to clearly label your code and graphs.       is the position vector of a moving particle. Find the tangential and normal components of the acceleration at any and create a graph of the Curve described by consisted of the acceleration vector, and the tangential and normal components of acceleration at the given point.                Two surfaces are said to be orthogonal at a point of intersection if their normal lines at are orthogonal, i.e., two surfaces given by and are orthogonal at if and only if Use the given result to show that the given surfaces are orthogonal at a point of intersection and create a graph to show the two surfaces, the intersection point, and the normal lines at the intersection point.     Verify the given identify. Assume as a scalar function, as a vector function, and continuity of all partial derivatives .                Any scalar function for which is said to be harmonic. Determine whether each of the following scalar functions is harmonic.               "
},
{
  "id": "hw2-3",
  "level": "2",
  "url": "hw2.html#hw2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "orthogonal harmonic. "
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
