var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "handouts",
  "level": "1",
  "url": "handouts.html",
  "type": "Chapter",
  "number": "",
  "title": "Handouts",
  "body": " Handouts    PreTeXt  "
},
{
  "id": "week3-handout-2-1-1-1",
  "level": "2",
  "url": "week3-handout.html#week3-handout-2-1-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Vector calculus (Chap 9 in the textbook) "
},
{
  "id": "def-gradient",
  "level": "2",
  "url": "week3-handout.html#def-gradient",
  "type": "Definition",
  "number": "1",
  "title": "",
  "body": "  When the vector differential operator , is applied to a differentiable function we say that the vector is the gradient of the respective function    "
},
{
  "id": "def-directional",
  "level": "2",
  "url": "week3-handout.html#def-directional",
  "type": "Definition",
  "number": "2",
  "title": "",
  "body": "  The directional derivative of in the direction of a unit vector is provided the limit exists.   "
},
{
  "id": "thm-compu-directional",
  "level": "2",
  "url": "week3-handout.html#thm-compu-directional",
  "type": "Theorem",
  "number": "3",
  "title": "",
  "body": "  If is a differentiable function of and and then Similarly, for a function and where and are the direction angles of the unit vector measured relative to the positive and axes, respectively, it can be shown that    "
},
{
  "id": "week3-handout-6",
  "level": "2",
  "url": "week3-handout.html#week3-handout-6",
  "type": "Remark",
  "number": "4",
  "title": "",
  "body": "  The gradient vector points in the direction in which increases most rapidly, whereas points in the direction of the most rapid decrease of    "
},
{
  "id": "week3-handout-7",
  "level": "2",
  "url": "week3-handout.html#week3-handout-7",
  "type": "Example",
  "number": "5",
  "title": "",
  "body": "  The temperature in a rectangular box is approximated by If a mosquito is located at in which direction should it fly to cool off as rapidly as possible?   "
},
{
  "id": "week3-handout-8",
  "level": "2",
  "url": "week3-handout.html#week3-handout-8",
  "type": "Example",
  "number": "6",
  "title": "",
  "body": "  The temperature at a point in space is inversely proportional to the square of the distance from to the origin. It is known that Find the rate of change of at in the direction of In which direction form does the temperature increase most rapidly? At what is the maximum rate of change of ?   "
},
{
  "id": "week3-handout-9",
  "level": "2",
  "url": "week3-handout.html#week3-handout-9",
  "type": "Remark",
  "number": "7",
  "title": "",
  "body": "  Let be the level surface of a differentiable function that passes through If the differentiable function are the parametric equation of a curve on the surface for which The derivative of implies that i.e., is normal to the level surface at    "
},
{
  "id": "thm-tangent-plane",
  "level": "2",
  "url": "week3-handout.html#thm-tangent-plane",
  "type": "Theorem",
  "number": "8",
  "title": "",
  "body": "  Let be a point on the graph of where is not Then an equation of the tangent plane at is Furthermore, the line containing that is parallel to is called the normal line to the surface at P, which can be expressed as symmetric equations  or parametric equations     "
},
{
  "id": "week3-handout-11",
  "level": "2",
  "url": "week3-handout.html#week3-handout-11",
  "type": "Example",
  "number": "9",
  "title": "",
  "body": "  Given and Answer the followings:   Sketch the level surface passing through the indicated point.    Sketch the gradient at the point.    Find an equation of the tangent plane at the indicated point.   Find parametric equations and symmetric equations for the normal line at the indicated point      "
},
{
  "id": "def-vector-fields",
  "level": "2",
  "url": "week3-handout.html#def-vector-fields",
  "type": "Definition",
  "number": "10",
  "title": "",
  "body": "  Vector functions of two and three variables,    "
},
{
  "id": "week3-handout-13",
  "level": "2",
  "url": "week3-handout.html#week3-handout-13",
  "type": "Definition",
  "number": "11",
  "title": "",
  "body": "  The curl of a vector field is the vector field It can be computed from the cross product,    "
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
