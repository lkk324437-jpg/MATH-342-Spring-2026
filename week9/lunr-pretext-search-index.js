var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "week9-handout",
  "level": "1",
  "url": "week9-handout.html",
  "type": "Worksheet",
  "number": "",
  "title": "Week 9 Handout-Numerical Solutions of PDEs- Part 1",
  "body": " Week 9 Handout-Numerical Solutions of PDEs- Part 1    We will discuss the following topics related to Numerical Methods of PDEs (Chap 16) :   Week 9: Introduction to Finite Difference (6.5), Laplace Equations (16.1)    Week 10: Heat Equations (16.2), Wave Equations (16.3)        Taylor Series   The Taylor series expansion, centered at a point , of a function is Let , then the previous equation becomes       The commonly used format of Taylor series is If is small, the terms involving , can be ignored (assuming is finite.)     Finite Difference Methods   From we can derive the following approximations:   Forward Difference:      Backward Difference:      Central Difference for 1st order derivative:       Central Difference for 2nd order derivative:     This process is also called discretization since we focus on finding values of the solution on discrete points , instead of an explicit formula of the entire domain. This often provides more flexibility when simulating more realistic scenario.      Consider a linear 2nd order boundary value problem Use Finite Difference Method to solve for over Then build the programs in Python and test the correctness of the programs.      Given the following differential equations and their analytic solutions, find the errors between the numerical solutions from finite difference method and the analytic solution and construct graphs to show errors over     ;     ;     ;        Laplace's Equation         An Irregular shaped plate.       Central Difference in 2D            Five-Point Approximation.     At every point , we can approximate the Laplace's Equation using central difference ( 5-point approximation ): For simplicity, we denote . Then we can rewrite at as       Solve the Laplace's equation with the following boundary value conditions using central difference with the mesh size of      "
},
{
  "id": "week9-handout-2-1-1",
  "level": "2",
  "url": "week9-handout.html#week9-handout-2-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Numerical Methods of PDEs (Chap 16) "
},
{
  "id": "def-Taylor-series",
  "level": "2",
  "url": "week9-handout.html#def-Taylor-series",
  "type": "Definition",
  "number": "1",
  "title": "Taylor Series.",
  "body": " Taylor Series   The Taylor series expansion, centered at a point , of a function is Let , then the previous equation becomes    "
},
{
  "id": "week9-handout-4",
  "level": "2",
  "url": "week9-handout.html#week9-handout-4",
  "type": "Remark",
  "number": "2",
  "title": "",
  "body": "  The commonly used format of Taylor series is If is small, the terms involving , can be ignored (assuming is finite.)   "
},
{
  "id": "def-finite-deference",
  "level": "2",
  "url": "week9-handout.html#def-finite-deference",
  "type": "Definition",
  "number": "3",
  "title": "Finite Difference Methods.",
  "body": " Finite Difference Methods   From we can derive the following approximations:   Forward Difference:      Backward Difference:      Central Difference for 1st order derivative:       Central Difference for 2nd order derivative:     This process is also called discretization since we focus on finding values of the solution on discrete points , instead of an explicit formula of the entire domain. This often provides more flexibility when simulating more realistic scenario.   "
},
{
  "id": "week9-handout-6",
  "level": "2",
  "url": "week9-handout.html#week9-handout-6",
  "type": "Example",
  "number": "4",
  "title": "",
  "body": "  Consider a linear 2nd order boundary value problem Use Finite Difference Method to solve for over Then build the programs in Python and test the correctness of the programs.   "
},
{
  "id": "week9-handout-7",
  "level": "2",
  "url": "week9-handout.html#week9-handout-7",
  "type": "Example",
  "number": "5",
  "title": "",
  "body": "  Given the following differential equations and their analytic solutions, find the errors between the numerical solutions from finite difference method and the analytic solution and construct graphs to show errors over     ;     ;     ;      "
},
{
  "id": "def-laplace-eq",
  "level": "2",
  "url": "week9-handout.html#def-laplace-eq",
  "type": "Definition",
  "number": "6",
  "title": "Laplace’s Equation.",
  "body": " Laplace's Equation       "
},
{
  "id": "irregular-shaped-plate",
  "level": "2",
  "url": "week9-handout.html#irregular-shaped-plate",
  "type": "Figure",
  "number": "7",
  "title": "",
  "body": " An Irregular shaped plate.     "
},
{
  "id": "def-Central-2D",
  "level": "2",
  "url": "week9-handout.html#def-Central-2D",
  "type": "Definition",
  "number": "8",
  "title": "Central Difference in 2D.",
  "body": " Central Difference in 2D       "
},
{
  "id": "week9-handout-11",
  "level": "2",
  "url": "week9-handout.html#week9-handout-11",
  "type": "Remark",
  "number": "9",
  "title": "",
  "body": "    Five-Point Approximation.     At every point , we can approximate the Laplace's Equation using central difference ( 5-point approximation ): For simplicity, we denote . Then we can rewrite at as    "
},
{
  "id": "week9-handout-12",
  "level": "2",
  "url": "week9-handout.html#week9-handout-12",
  "type": "Example",
  "number": "11",
  "title": "",
  "body": "  Solve the Laplace's equation with the following boundary value conditions using central difference with the mesh size of     "
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
