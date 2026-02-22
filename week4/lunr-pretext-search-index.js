var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "week4-handout",
  "level": "1",
  "url": "week4-handout.html",
  "type": "Worksheet",
  "number": "",
  "title": "Week 4 Handout- Vector Calculus- Part 3",
  "body": " Week 4 Handout- Vector Calculus- Part 3      Vector calculus (Chap 9 in the textbook) contains two parts:   Calculus of scalar functions that have more than one variables    Calculus of vector functions     On Tuesday, we mainly discuss a few important theorems in vector calculus (Section 9.12, 9.14, 9.16). On Thursday, No class in the morning and Exam 1 is between 3:45pm-5:45pm in STRGT 320.    In Week 5, we will start Series Solution (Chap 5) and Fourier Series (Chap 12).       Suppose that is a piecewise-smooth simple closed curve bounding a simply connected region If   , and are continuous on then       Let be a piecewise-smooth orientable surface bounded by a piecewise-smooth simple closed curve Let be a vector field for which  and are continuous and have coninuous first partial derivatives in a region of 3-space containing If is traversed in the positive direction, then where is a unit tangent vector to that points in the positive direction and is a unit normal to in the direction of orientation of       Let be a closed and bounded region in 3-space with a piecewise-smooth boundary that is oriented outward. Let be a vector field for which  and are continuous and have coninuous first partial derivatives in a region of 3-space containing      "
},
{
  "id": "week4-handout-2-1-1-1",
  "level": "2",
  "url": "week4-handout.html#week4-handout-2-1-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Vector calculus (Chap 9 in the textbook) "
},
{
  "id": "thm-greens",
  "level": "2",
  "url": "week4-handout.html#thm-greens",
  "type": "Theorem",
  "number": "1",
  "title": "",
  "body": "  Suppose that is a piecewise-smooth simple closed curve bounding a simply connected region If   , and are continuous on then    "
},
{
  "id": "thm-stokes",
  "level": "2",
  "url": "week4-handout.html#thm-stokes",
  "type": "Theorem",
  "number": "2",
  "title": "",
  "body": "  Let be a piecewise-smooth orientable surface bounded by a piecewise-smooth simple closed curve Let be a vector field for which  and are continuous and have coninuous first partial derivatives in a region of 3-space containing If is traversed in the positive direction, then where is a unit tangent vector to that points in the positive direction and is a unit normal to in the direction of orientation of    "
},
{
  "id": "thm-divergence",
  "level": "2",
  "url": "week4-handout.html#thm-divergence",
  "type": "Theorem",
  "number": "3",
  "title": "",
  "body": "  Let be a closed and bounded region in 3-space with a piecewise-smooth boundary that is oriented outward. Let be a vector field for which  and are continuous and have coninuous first partial derivatives in a region of 3-space containing     "
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
