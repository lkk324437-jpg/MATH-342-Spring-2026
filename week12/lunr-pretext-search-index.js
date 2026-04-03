var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "week12-handout",
  "level": "1",
  "url": "week12-handout.html",
  "type": "Worksheet",
  "number": "",
  "title": "Week 11-12 Handout-Boundary Value Problems in Other Coordinate Systems",
  "body": " Week 11-12 Handout-Boundary Value Problems in Other Coordinate Systems    To solve a PDE on the domain whose shape is a 2D disk, it is much more convenient to represent the solution in terms of the polar coordinate system than in terms of the usual Cartesian coordinate system. For example, the behavior of the drum surface when hitting it by a stick would be best described by the solution of the wave equation in the polar coordinate system. We will discuss the following topics related to BVP in other coordinate systems (Chap 14) :   Week 11: Polar Coordinates (14.1)    Week 12: Cylindrical Coordinates (14.2)        Relationship between Polar Coordinates and Rectangle Coordinates      Relationship between polar coordinates and rectangle coordinates.          Laplace's Equation in Polar Coordinates   The Laplace's equation in in terms of the Cartesian  coordinate system is: From , we can compute partial derivatives of with respect to from using implicit differentiation :  Next, we start rewriting and using Chain Rule :  Then we further compute and : Thus, Similarly, we can derive Adding and , we obtain Thus, the Laplace's equation in polar coordinates is       Solve the Laplace's Equation for steady state temperature in a circular plate with the radius of and the bounary condition of       Consider the steady-state temperature in the semicircular plate below:  Boundary conditions of Steady-State temperature $u(r,\\theta)$ on a semicircular plate         Write out the entire model.    Find the solution that satifies the given boundary conditions.       Cylindrical Coordinates      Heat Equation in polar coordinate system :    Wave Equation in polar coordinate system : The above two equations are in cylindrical coordinates since the time  gives the 3rd axis from the circular plate which produces a cylinder with infinite length as     Laplacian in Cylindrical Coordinates : Consider a domain of a cylinder for the Laplace's Equation:         "
},
{
  "id": "week12-handout-2-1-1",
  "level": "2",
  "url": "week12-handout.html#week12-handout-2-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "BVP in other coordinate systems (Chap 14) "
},
{
  "id": "rem-polar-rectangle",
  "level": "2",
  "url": "week12-handout.html#rem-polar-rectangle",
  "type": "Remark",
  "number": "1",
  "title": "Relationship between Polar Coordinates and Rectangle Coordinates.",
  "body": " Relationship between Polar Coordinates and Rectangle Coordinates      Relationship between polar coordinates and rectangle coordinates.        "
},
{
  "id": "def-Laplacian-Polar",
  "level": "2",
  "url": "week12-handout.html#def-Laplacian-Polar",
  "type": "Definition",
  "number": "3",
  "title": "Laplace’s Equation in Polar Coordinates.",
  "body": " Laplace's Equation in Polar Coordinates   The Laplace's equation in in terms of the Cartesian  coordinate system is: From , we can compute partial derivatives of with respect to from using implicit differentiation :  Next, we start rewriting and using Chain Rule :  Then we further compute and : Thus, Similarly, we can derive Adding and , we obtain Thus, the Laplace's equation in polar coordinates is    "
},
{
  "id": "week12-handout-5",
  "level": "2",
  "url": "week12-handout.html#week12-handout-5",
  "type": "Example",
  "number": "4",
  "title": "",
  "body": "  Solve the Laplace's Equation for steady state temperature in a circular plate with the radius of and the bounary condition of    "
},
{
  "id": "week12-handout-6",
  "level": "2",
  "url": "week12-handout.html#week12-handout-6",
  "type": "Example",
  "number": "5",
  "title": "",
  "body": "  Consider the steady-state temperature in the semicircular plate below:  Boundary conditions of Steady-State temperature $u(r,\\theta)$ on a semicircular plate         Write out the entire model.    Find the solution that satifies the given boundary conditions.     "
},
{
  "id": "def-heatwave-Polar",
  "level": "2",
  "url": "week12-handout.html#def-heatwave-Polar",
  "type": "Definition",
  "number": "7",
  "title": "Cylindrical Coordinates.",
  "body": " Cylindrical Coordinates      Heat Equation in polar coordinate system :    Wave Equation in polar coordinate system : The above two equations are in cylindrical coordinates since the time  gives the 3rd axis from the circular plate which produces a cylinder with infinite length as     Laplacian in Cylindrical Coordinates : Consider a domain of a cylinder for the Laplace's Equation:        "
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
