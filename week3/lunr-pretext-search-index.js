var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "week3-handout",
  "level": "1",
  "url": "week3-handout.html",
  "type": "Worksheet",
  "number": "",
  "title": "Week 3 Handout- Vector Calculus- Part 2",
  "body": " Week 3 Handout- Vector Calculus- Part 2      Vector calculus (Chap 9 in the textbook) contains two parts:   Calculus of scalar functions that have more than one variables    Calculus of vector functions     In Week 3, we mainly discuss calculus of functions of two or more variables. (Section 9.6 - Section 9.8)    In Week 4, we will discuss a few important theorems in vector calculus. (Section 9.12, 9.14, 9.16)    Exam 1 is on Feb. 12, 3:45pm-5:45pm in STRGT 320. No class in the morning.       When the vector differential operator , is applied to a differentiable function we say that the vector is the gradient of the respective function       The directional derivative of in the direction of a unit vector is provided the limit exists.      If is a differentiable function of and and then Similarly, for a function and where and are the direction angles of the unit vector measured relative to the positive and axes, respectively, it can be shown that       The gradient vector points in the direction in which increases most rapidly, whereas points in the direction of the most rapid decrease of       The temperature in a rectangular box is approximated by If a mosquito is located at in which direction should it fly to cool off as rapidly as possible?      The temperature at a point in space is inversely proportional to the square of the distance from to the origin. It is known that Find the rate of change of at in the direction of In which direction form does the temperature increase most rapidly? At what is the maximum rate of change of ?      Let be the level surface of a differentiable function that passes through If the differentiable function are the parametric equation of a curve on the surface for which The derivative of implies that i.e., is normal to the level surface at       Let be a point on the graph of where is not Then an equation of the tangent plane at is Furthermore, the line containing that is parallel to is called the normal line to the surface at P, which can be expressed as symmetric equations  or parametric equations        Given and Answer the followings:   Sketch the level surface passing through the indicated point.    Sketch the gradient at the point.    Find an equation of the tangent plane at the indicated point.   Find parametric equations and symmetric equations for the normal line at the indicated point         Vector functions of two and three variables,       Graph the 2-dimensional vector field       The curl of a vector field is the vector field It can be computed from the cross product,       The divergence of a vector field is the scalar function which can also be written as       Suppose that is the velocity field of a flowing fluid. At a point   represents the tendency of particles at to rotate about the axis that points in the direction of     If then the fluid is called irrotational.  If is a conservative vector field , then   If is defined on the entire whose components have continuous 1st order partial derivative and then is a conservative vector field .         represents the net rate of change of the mass of the fluid flowing from the point per unit volumne, i.e., the tendency of a fluid to diverge from the point.       If then is called incompressible near    If then is said to be a source of    If then is said to be a sink pf            The velocity vector field for the 2-D flow of an ideal fluid around a cylinder is given by for some positive constant   Create a plot in Mathematica to show the vector field for each of .   Show that when the point is far from the origin,     Show that is irrotational.    Show that is incompressible.         Suppose is a curve parameterized by  , , and and are the points and , respectively.    is a smooth curve if and are continuous on the closed interval and not simultaneously zero on the open intervals     is a closed curve if         Let be a function of two variables and defined on a region of the plane containing a smooth curve    The line integral of G along C from A to B w.r.t x is     The line integral of G along C from A to B w.r.t y is     The line integral of G along C from A to B w.r.t arc length is     is the norm of the partition of the length of the longest subarc.      In many applications, line integral appear as a sum A line integral along a closed curve  is often denoted by       Evalute on the given curve between and   A curve between and           Evaluate on the given closed curve   A closed curve , a counterclockwise triangle with vertices .         "
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
  "type": "Example",
  "number": "11",
  "title": "",
  "body": "  Graph the 2-dimensional vector field    "
},
{
  "id": "week3-handout-14",
  "level": "2",
  "url": "week3-handout.html#week3-handout-14",
  "type": "Definition",
  "number": "12",
  "title": "",
  "body": "  The curl of a vector field is the vector field It can be computed from the cross product,    "
},
{
  "id": "def-divergence",
  "level": "2",
  "url": "week3-handout.html#def-divergence",
  "type": "Definition",
  "number": "13",
  "title": "",
  "body": "  The divergence of a vector field is the scalar function which can also be written as    "
},
{
  "id": "week3-handout-16",
  "level": "2",
  "url": "week3-handout.html#week3-handout-16",
  "type": "Remark",
  "number": "14",
  "title": "",
  "body": "  Suppose that is the velocity field of a flowing fluid. At a point   represents the tendency of particles at to rotate about the axis that points in the direction of     If then the fluid is called irrotational.  If is a conservative vector field , then   If is defined on the entire whose components have continuous 1st order partial derivative and then is a conservative vector field .         represents the net rate of change of the mass of the fluid flowing from the point per unit volumne, i.e., the tendency of a fluid to diverge from the point.       If then is called incompressible near    If then is said to be a source of    If then is said to be a sink pf         "
},
{
  "id": "week3-handout-17",
  "level": "2",
  "url": "week3-handout.html#week3-handout-17",
  "type": "Example",
  "number": "15",
  "title": "",
  "body": "  The velocity vector field for the 2-D flow of an ideal fluid around a cylinder is given by for some positive constant   Create a plot in Mathematica to show the vector field for each of .   Show that when the point is far from the origin,     Show that is irrotational.    Show that is incompressible.      "
},
{
  "id": "def-shapes",
  "level": "2",
  "url": "week3-handout.html#def-shapes",
  "type": "Definition",
  "number": "16",
  "title": "",
  "body": "  Suppose is a curve parameterized by  , , and and are the points and , respectively.    is a smooth curve if and are continuous on the closed interval and not simultaneously zero on the open intervals     is a closed curve if      "
},
{
  "id": "def-line-integral",
  "level": "2",
  "url": "week3-handout.html#def-line-integral",
  "type": "Definition",
  "number": "17",
  "title": "",
  "body": "  Let be a function of two variables and defined on a region of the plane containing a smooth curve    The line integral of G along C from A to B w.r.t x is     The line integral of G along C from A to B w.r.t y is     The line integral of G along C from A to B w.r.t arc length is     is the norm of the partition of the length of the longest subarc.   "
},
{
  "id": "week3-handout-20",
  "level": "2",
  "url": "week3-handout.html#week3-handout-20",
  "type": "Remark",
  "number": "18",
  "title": "",
  "body": "  In many applications, line integral appear as a sum A line integral along a closed curve  is often denoted by    "
},
{
  "id": "week3-handout-21",
  "level": "2",
  "url": "week3-handout.html#week3-handout-21",
  "type": "Example",
  "number": "19",
  "title": "",
  "body": "  Evalute on the given curve between and   A curve between and        "
},
{
  "id": "week3-handout-22",
  "level": "2",
  "url": "week3-handout.html#week3-handout-22",
  "type": "Example",
  "number": "21",
  "title": "",
  "body": "  Evaluate on the given closed curve   A closed curve , a counterclockwise triangle with vertices .        "
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
