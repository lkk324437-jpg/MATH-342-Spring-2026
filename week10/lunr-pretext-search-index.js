var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "week10-handout",
  "level": "1",
  "url": "week10-handout.html",
  "type": "Worksheet",
  "number": "",
  "title": "Week 10 Handout-Numerical Solutions of PDEs- Part 2",
  "body": " Week 10 Handout-Numerical Solutions of PDEs- Part 2    We will discuss the following topics related to Numerical Methods of PDEs (Chap 16) :   Week 9: Introduction to Finite Difference (6.5), Laplace Equations (16.1)    Week 10: Heat Equations (16.2), Wave Equations (16.3)        1D Heat Equation         Similar to what we did in Week 9, we need to replace the PDE with approximation of derivatives. For we still use central difference , For we use forward difference to avoid \"negative time\", Substitue them to , we have Let , the equation can be simplified to   Three-point stencil from time level to .          Solve the 1D heat equation with and the following boundary and initial conditions: Use  and    and        Stability  A numerical method is unstable if round-off errors or any other errors grow too rapidly as the computations proceed. It can be proved that the precedure is stable if , but unstable otherwise. For a small and small , is unlikely satisfied the stability condition of less than or equation 0.5.    Crank-Nicholson Method   The algorithm consists of replacing the 2nd order PDE in the heat equation by the average of two central differences, one evaluated at and the other at :       The Crank-Nicholson method is an implicit finite difference method . It requires that we solve a system of equations to determine the approximate value of on -st time line. However, implicit methods do not suffer from instability problems.  Again, we let After rearranging , we can write it as where and  and At -st timeline, we have equations (one for each interior point), which looks like , where Since is a tridiagonal matrix . can be solved efficiently.      Solve using the Crank-Nicholson method.     1D Wave Equation         Use 2 central differences, we replace by Let , then yields for and   Five-point stencil from time level to .          Use Finite Difference to approximate the solution of the BVP: with , and .    "
},
{
  "id": "week10-handout-2-1-1",
  "level": "2",
  "url": "week10-handout.html#week10-handout-2-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Numerical Methods of PDEs (Chap 16) "
},
{
  "id": "def-1d-heat",
  "level": "2",
  "url": "week10-handout.html#def-1d-heat",
  "type": "Definition",
  "number": "1",
  "title": "1D Heat Equation.",
  "body": " 1D Heat Equation       "
},
{
  "id": "week10-handout-4",
  "level": "2",
  "url": "week10-handout.html#week10-handout-4",
  "type": "Remark",
  "number": "2",
  "title": "",
  "body": " Similar to what we did in Week 9, we need to replace the PDE with approximation of derivatives. For we still use central difference , For we use forward difference to avoid \"negative time\", Substitue them to , we have Let , the equation can be simplified to   Three-point stencil from time level to .       "
},
{
  "id": "example-week10-1d-heat",
  "level": "2",
  "url": "week10-handout.html#example-week10-1d-heat",
  "type": "Example",
  "number": "4",
  "title": "",
  "body": "  Solve the 1D heat equation with and the following boundary and initial conditions: Use  and    and      "
},
{
  "id": "week10-handout-6",
  "level": "2",
  "url": "week10-handout.html#week10-handout-6",
  "type": "Remark",
  "number": "5",
  "title": "Stability.",
  "body": " Stability  A numerical method is unstable if round-off errors or any other errors grow too rapidly as the computations proceed. It can be proved that the precedure is stable if , but unstable otherwise. For a small and small , is unlikely satisfied the stability condition of less than or equation 0.5.  "
},
{
  "id": "def-Crank-Nicholson",
  "level": "2",
  "url": "week10-handout.html#def-Crank-Nicholson",
  "type": "Definition",
  "number": "6",
  "title": "Crank-Nicholson Method.",
  "body": " Crank-Nicholson Method   The algorithm consists of replacing the 2nd order PDE in the heat equation by the average of two central differences, one evaluated at and the other at :    "
},
{
  "id": "week10-handout-8",
  "level": "2",
  "url": "week10-handout.html#week10-handout-8",
  "type": "Remark",
  "number": "7",
  "title": "",
  "body": "  The Crank-Nicholson method is an implicit finite difference method . It requires that we solve a system of equations to determine the approximate value of on -st time line. However, implicit methods do not suffer from instability problems.  Again, we let After rearranging , we can write it as where and  and At -st timeline, we have equations (one for each interior point), which looks like , where Since is a tridiagonal matrix . can be solved efficiently.   "
},
{
  "id": "week10-handout-9",
  "level": "2",
  "url": "week10-handout.html#week10-handout-9",
  "type": "Example",
  "number": "8",
  "title": "",
  "body": "  Solve using the Crank-Nicholson method.   "
},
{
  "id": "def-1d-wave",
  "level": "2",
  "url": "week10-handout.html#def-1d-wave",
  "type": "Definition",
  "number": "9",
  "title": "1D Wave Equation.",
  "body": " 1D Wave Equation      "
},
{
  "id": "week10-handout-11",
  "level": "2",
  "url": "week10-handout.html#week10-handout-11",
  "type": "Remark",
  "number": "10",
  "title": "",
  "body": "  Use 2 central differences, we replace by Let , then yields for and   Five-point stencil from time level to .       "
},
{
  "id": "week10-handout-12",
  "level": "2",
  "url": "week10-handout.html#week10-handout-12",
  "type": "Example",
  "number": "12",
  "title": "",
  "body": "  Use Finite Difference to approximate the solution of the BVP: with , and .   "
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
