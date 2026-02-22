var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "week2-handout",
  "level": "1",
  "url": "week2-handout.html",
  "type": "Worksheet",
  "number": "",
  "title": "Week 2 Handout- Vector Calculus- Part 1",
  "body": " Week 2 Handout- Vector Calculus- Part 1            Vector calculus (Chap 9 in the textbook) contains two parts:   Calculus of scalar functions that have more than one variables    Calculus of vector functions      In Week 2, we mainly discuss calculus of vector functions of one variable. (Section 9.1 - Section 9.3)   Review Section 9.4 Partial Derivative and Section 9.5 Directional Derivative for Week 3.    You should have Jupyter Notebook , MATHEMATICA , and Octave ASAP.       There are two types of quantities: scalars and vectors .   A scalar is a real number or a quantity that has magnitude.     A vector is usually described as a quantity that has both magnitude and direction. In different spaces, we might need different number of components to describe a direction. Furthermore, the magnitude of a vecto may required additional calculations from the vector to obtain.         There are several sets of notations to describe a vector or properties related to a vector:    : A vector whose initial point is and whose terminal point is      is a vector in where are scalars and said to be the components of the vector . In mathematics, it is often written as a column vector, i.e., In 2-D, can also be written as In 3-D, can also be written as     The magnitude , length , or norm of a vector u is denoted by . A common norm defined in is    A vector that has a magnitude of 1 is called a unit vector .         Given the point and Complete the followings:     Draw the vector on the graph.    Calculate     Find two pairs of points that produce the same vector as    Find the unit vector of       The graph of the 2-D cartesian plane with range of [0,8] by [0,8]        Consider and Answer each of the followings:  Find     Find algebraically and graphically.   Find algebraically and graphically.    Find the unit vecotr of .        A 3D vector function has components that are functions of a parameter , i.e., For a given value of , is the position vector of a point on a curve       Graph for in green and then draw a black point at and the red vector on the same graph. curve[t_] := {Cos[t], -Sin[t], t\/2} t0 = Pi\/5; point = curve[t0]; Graphics3D[{Thick, Green, Line[Table[curve[t], {t, 0, 4*Pi, 0.01}]], Black, PointSize[Large], Point[point], Red, Arrow[{{0, 0, 0}, point}]}, Axes -> True, AxesLabel -> {\"x\", \"y\", \"z\"}, Boxed -> True]          If limits of the component functions exist,    For all for which the limit exists,   If the components are differentiable,   If the components are integrable,       When the component functions of a vector function have continuous first derivatives and for all in the open interval then is said to be a smooth function and the curve traced by is called a smooth curve.     Consider Answer each of the followings. If the answer doesn't exist, explain why.   Find     Find     Find     Find     Find    Graph the curve that is described by and graph at the   Find parametric equations of the tangent line to the graph of the curve at    Find       Review and practice using Chain Rule and Rules of differentiation in the textbook: Theorem 9.1.3 and Theorem 9.1.4.     If is a smooth function, the length of the smooth curve traced by is given by A curve in the plane or in space can be parameterized in terms of the arc length .     Find a vector function that satisfies the indicated conditions.                  Consider    Find the length of the curve traced by on the indicated interval.    Express as a function of arc length          For a body moving along a curve,    Position      Velocity       Acceleration       For circular motion in a plane,    Position      Centripetal Acceleration            Graph the curve described by over the given interval and graph the velocity and accleration vectors at the indicated time.                Suppose is the position vector of a moving particle.  At what points does the particle pass through the -plane? What are its velocity and acceleration at these points?   At what points does the particle pass through the -plane? What are its velocity and acceleration at these points?         Let be a vector function defining a smooth curve If is the arc length parameter and is the unit tangent vector, then the curvature of at point is The radius of curvature  is  Furthermore, the velocity of the particle moving along the curve is , whereas its speed is The acceleration can be written in the following formats:        where The scalar functions and are called tangential and normal components of the acceleration, respectively.                         at point on a curve is the radius of a circle that best fits the curve   The circle is the circle of curvature     the center is the center of curvature             Given as the position vector of a moving particle.  Find and     Find the tangential and normal components of the acceleratin.    Graph the curve described by over , including unit tangents at , and the unit tangent, the principal normal, and the circle of the curvature at       "
},
{
  "id": "week2-handout-8-1-1-1",
  "level": "2",
  "url": "week2-handout.html#week2-handout-8-1-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Vector calculus (Chap 9 in the textbook) "
},
{
  "id": "def-scalar-vec",
  "level": "2",
  "url": "week2-handout.html#def-scalar-vec",
  "type": "Definition",
  "number": "1",
  "title": "",
  "body": "  There are two types of quantities: scalars and vectors .   A scalar is a real number or a quantity that has magnitude.     A vector is usually described as a quantity that has both magnitude and direction. In different spaces, we might need different number of components to describe a direction. Furthermore, the magnitude of a vecto may required additional calculations from the vector to obtain.      "
},
{
  "id": "def-vec-notation",
  "level": "2",
  "url": "week2-handout.html#def-vec-notation",
  "type": "Definition",
  "number": "2",
  "title": "",
  "body": "  There are several sets of notations to describe a vector or properties related to a vector:    : A vector whose initial point is and whose terminal point is      is a vector in where are scalars and said to be the components of the vector . In mathematics, it is often written as a column vector, i.e., In 2-D, can also be written as In 3-D, can also be written as     The magnitude , length , or norm of a vector u is denoted by . A common norm defined in is    A vector that has a magnitude of 1 is called a unit vector .      "
},
{
  "id": "week2-handout-11",
  "level": "2",
  "url": "week2-handout.html#week2-handout-11",
  "type": "Example",
  "number": "3",
  "title": "",
  "body": "  Given the point and Complete the followings:     Draw the vector on the graph.    Calculate     Find two pairs of points that produce the same vector as    Find the unit vector of       The graph of the 2-D cartesian plane with range of [0,8] by [0,8]       "
},
{
  "id": "week2-handout-12",
  "level": "2",
  "url": "week2-handout.html#week2-handout-12",
  "type": "Example",
  "number": "5",
  "title": "",
  "body": "Consider and Answer each of the followings:  Find     Find algebraically and graphically.   Find algebraically and graphically.    Find the unit vecotr of .     "
},
{
  "id": "def-vector-fun",
  "level": "2",
  "url": "week2-handout.html#def-vector-fun",
  "type": "Definition",
  "number": "6",
  "title": "",
  "body": "  A 3D vector function has components that are functions of a parameter , i.e., For a given value of , is the position vector of a point on a curve    "
},
{
  "id": "week2-handout-14",
  "level": "2",
  "url": "week2-handout.html#week2-handout-14",
  "type": "Example",
  "number": "7",
  "title": "",
  "body": "  Graph for in green and then draw a black point at and the red vector on the same graph. curve[t_] := {Cos[t], -Sin[t], t\/2} t0 = Pi\/5; point = curve[t0]; Graphics3D[{Thick, Green, Line[Table[curve[t], {t, 0, 4*Pi, 0.01}]], Black, PointSize[Large], Point[point], Red, Arrow[{{0, 0, 0}, point}]}, Axes -> True, AxesLabel -> {\"x\", \"y\", \"z\"}, Boxed -> True]    "
},
{
  "id": "def-vector-calculus",
  "level": "2",
  "url": "week2-handout.html#def-vector-calculus",
  "type": "Definition",
  "number": "8",
  "title": "",
  "body": "     If limits of the component functions exist,    For all for which the limit exists,   If the components are differentiable,   If the components are integrable,      "
},
{
  "id": "week2-handout-16",
  "level": "2",
  "url": "week2-handout.html#week2-handout-16",
  "type": "Remark",
  "number": "9",
  "title": "",
  "body": "When the component functions of a vector function have continuous first derivatives and for all in the open interval then is said to be a smooth function and the curve traced by is called a smooth curve.  "
},
{
  "id": "week2-handout-17",
  "level": "2",
  "url": "week2-handout.html#week2-handout-17",
  "type": "Example",
  "number": "10",
  "title": "",
  "body": "  Consider Answer each of the followings. If the answer doesn't exist, explain why.   Find     Find     Find     Find     Find    Graph the curve that is described by and graph at the   Find parametric equations of the tangent line to the graph of the curve at    Find     "
},
{
  "id": "week2-handout-18",
  "level": "2",
  "url": "week2-handout.html#week2-handout-18",
  "type": "Remark",
  "number": "11",
  "title": "",
  "body": " Review and practice using Chain Rule and Rules of differentiation in the textbook: Theorem 9.1.3 and Theorem 9.1.4.  "
},
{
  "id": "def-length-curve",
  "level": "2",
  "url": "week2-handout.html#def-length-curve",
  "type": "Definition",
  "number": "12",
  "title": "",
  "body": "  If is a smooth function, the length of the smooth curve traced by is given by A curve in the plane or in space can be parameterized in terms of the arc length .   "
},
{
  "id": "week2-handout-20",
  "level": "2",
  "url": "week2-handout.html#week2-handout-20",
  "type": "Example",
  "number": "13",
  "title": "",
  "body": " Find a vector function that satisfies the indicated conditions.               "
},
{
  "id": "week2-handout-21",
  "level": "2",
  "url": "week2-handout.html#week2-handout-21",
  "type": "Example",
  "number": "14",
  "title": "",
  "body": "  Consider    Find the length of the curve traced by on the indicated interval.    Express as a function of arc length       "
},
{
  "id": "def-motion-curve",
  "level": "2",
  "url": "week2-handout.html#def-motion-curve",
  "type": "Definition",
  "number": "15",
  "title": "",
  "body": "  For a body moving along a curve,    Position      Velocity       Acceleration       For circular motion in a plane,    Position      Centripetal Acceleration          "
},
{
  "id": "week2-handout-23",
  "level": "2",
  "url": "week2-handout.html#week2-handout-23",
  "type": "Example",
  "number": "16",
  "title": "",
  "body": " Graph the curve described by over the given interval and graph the velocity and accleration vectors at the indicated time.              "
},
{
  "id": "week2-handout-24",
  "level": "2",
  "url": "week2-handout.html#week2-handout-24",
  "type": "Example",
  "number": "17",
  "title": "",
  "body": " Suppose is the position vector of a moving particle.  At what points does the particle pass through the -plane? What are its velocity and acceleration at these points?   At what points does the particle pass through the -plane? What are its velocity and acceleration at these points?      "
},
{
  "id": "def-curvature",
  "level": "2",
  "url": "week2-handout.html#def-curvature",
  "type": "Definition",
  "number": "18",
  "title": "",
  "body": "  Let be a vector function defining a smooth curve If is the arc length parameter and is the unit tangent vector, then the curvature of at point is The radius of curvature  is  Furthermore, the velocity of the particle moving along the curve is , whereas its speed is The acceleration can be written in the following formats:        where The scalar functions and are called tangential and normal components of the acceleration, respectively.          "
},
{
  "id": "week2-handout-26",
  "level": "2",
  "url": "week2-handout.html#week2-handout-26",
  "type": "Remark",
  "number": "19",
  "title": "",
  "body": "              at point on a curve is the radius of a circle that best fits the curve   The circle is the circle of curvature     the center is the center of curvature          "
},
{
  "id": "week2-handout-27",
  "level": "2",
  "url": "week2-handout.html#week2-handout-27",
  "type": "Example",
  "number": "20",
  "title": "",
  "body": "  Given as the position vector of a moving particle.  Find and     Find the tangential and normal components of the acceleratin.    Graph the curve described by over , including unit tangents at , and the unit tangent, the principal normal, and the circle of the curvature at      "
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
