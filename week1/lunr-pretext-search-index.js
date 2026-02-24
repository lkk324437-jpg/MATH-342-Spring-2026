var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "week1-handout",
  "level": "1",
  "url": "week1-handout.html",
  "type": "Worksheet",
  "number": "",
  "title": "Week 1 Handout- Introduction to MATH 342 and Laplace Transform",
  "body": " Week 1 Handout- Introduction to MATH 342 and Laplace Transform   This is an outline of the topics we covered in the first week of class. You should have Jupyter Notebook , MATHEMATICA , and Octave ready before the 2nd week for practicing and doing assignments.     Overview   Investigating high dimensional systems using vector analysis  Constructing complicated functions using series expansion  Modeling and studying natural phenomena via partial differential equations (PDE)  Solving PDEs algebraically and numerically  Utilizing appropriate software packages ( Jupyter Notebook , MATHEMATICA , Octave ) for suitable tasks    Why do we need models?   All models are wrong. Some are useful.    Steps to create models:   Observing and recording the system  Describe how the system behaves (verbally and mathematically)-create a model  Verify whether that model behaves similar (or close enough) to what you observe. If not, modify it.  Investigate\/Study the system under different conditions using the model     COMAP    Laplace Transform: Definitions, Theorems, Examples, MATHEMATICA      If is a function defined for , then the integral is the Laplace transform of provided the integral converges.  Sufficient conditions for existence:    must be piecewise continuous on     must be of exponential order for          A function is said to be exponential order if there exists constants and such that       Determine whether the Laplace transform of each of the functions exists. Justify your answer.                          is a linear transform, i.e.,         Evaluate     Evaluate where   Graph of a piecewise function   The graph of a piecewise function with two horizontal segments. From t equals 0 to t equals 3, the graph is on the t-axis at y equals 0, ending with an open circle at (3, 0). For t greater than or equal to 3, the graph is a horizontal line at y equals 2, starting with a closed circle at (3, 2).             If represents the Laplace transform of a function then is the inverse Laplace transform of     is a linear transform,                                        Use Theorem to find each of the followings:                Find      Conceptually, the original DE is transformed to another equation in a different space. Ideally, this new equation is easier to solve in the new space. Finally, the solution in the new space is transformed back to the original space using the inverse transformation.   Steps in solving an IVP by the Laplace transform      There are many other transformations and each one is considering a different space, which also means each one is more suitable for solving some particular types of DEs. This is a typical issue for most of algebraic approaches for solving ODEs or PDEs.     Suppose are continuous on , is piecewise continuous on and are of exponential order with as specified in . Then for  where     MATHEMATICA     You should be familiar with using MATHEMATICA to verify your algebraic work.     LaplaceTransform[f(t),t,s]   Find using MATHEMATICA.  LaplaceTransform[Cos[4*t - 5], t, s]     InverseLaplaceTransform[F[s],s,t]  Find using MATHEMATICA.  InverseLaplaceTransform[((5*s-1)\/(s^2+7), s, t]         Use the Laplace transform to solve the IVP    "
},
{
  "id": "def-laplace",
  "level": "2",
  "url": "week1-handout.html#def-laplace",
  "type": "Definition",
  "number": "1",
  "title": "",
  "body": "  If is a function defined for , then the integral is the Laplace transform of provided the integral converges.  Sufficient conditions for existence:    must be piecewise continuous on     must be of exponential order for       "
},
{
  "id": "def-exponential-order",
  "level": "2",
  "url": "week1-handout.html#def-exponential-order",
  "type": "Definition",
  "number": "2",
  "title": "",
  "body": "  A function is said to be exponential order if there exists constants and such that    "
},
{
  "id": "week1-handout-6",
  "level": "2",
  "url": "week1-handout.html#week1-handout-6",
  "type": "Example",
  "number": "3",
  "title": "",
  "body": "  Determine whether the Laplace transform of each of the functions exists. Justify your answer.                       "
},
{
  "id": "week1-handout-7",
  "level": "2",
  "url": "week1-handout.html#week1-handout-7",
  "type": "Remark",
  "number": "4",
  "title": "",
  "body": "  is a linear transform, i.e.,   "
},
{
  "id": "week1-handout-8",
  "level": "2",
  "url": "week1-handout.html#week1-handout-8",
  "type": "Example",
  "number": "5",
  "title": "",
  "body": "     Evaluate     Evaluate where   Graph of a piecewise function   The graph of a piecewise function with two horizontal segments. From t equals 0 to t equals 3, the graph is on the t-axis at y equals 0, ending with an open circle at (3, 0). For t greater than or equal to 3, the graph is a horizontal line at y equals 2, starting with a closed circle at (3, 2).          "
},
{
  "id": "def-laplace-inverse",
  "level": "2",
  "url": "week1-handout.html#def-laplace-inverse",
  "type": "Definition",
  "number": "7",
  "title": "",
  "body": "  If represents the Laplace transform of a function then is the inverse Laplace transform of     is a linear transform,    "
},
{
  "id": "thm-laplace-inverse",
  "level": "2",
  "url": "week1-handout.html#thm-laplace-inverse",
  "type": "Theorem",
  "number": "8",
  "title": "",
  "body": "                                 "
},
{
  "id": "week1-handout-11",
  "level": "2",
  "url": "week1-handout.html#week1-handout-11",
  "type": "Example",
  "number": "9",
  "title": "",
  "body": " Use Theorem to find each of the followings:             "
},
{
  "id": "week1-handout-12",
  "level": "2",
  "url": "week1-handout.html#week1-handout-12",
  "type": "Example",
  "number": "10",
  "title": "",
  "body": "  Find    "
},
{
  "id": "week1-handout-13",
  "level": "2",
  "url": "week1-handout.html#week1-handout-13",
  "type": "Remark",
  "number": "11",
  "title": "",
  "body": " Conceptually, the original DE is transformed to another equation in a different space. Ideally, this new equation is easier to solve in the new space. Finally, the solution in the new space is transformed back to the original space using the inverse transformation.   Steps in solving an IVP by the Laplace transform      There are many other transformations and each one is considering a different space, which also means each one is more suitable for solving some particular types of DEs. This is a typical issue for most of algebraic approaches for solving ODEs or PDEs.  "
},
{
  "id": "thm-laplace-properties",
  "level": "2",
  "url": "week1-handout.html#thm-laplace-properties",
  "type": "Theorem",
  "number": "13",
  "title": "",
  "body": "  Suppose are continuous on , is piecewise continuous on and are of exponential order with as specified in . Then for  where    "
},
{
  "id": "week1-handout-15",
  "level": "2",
  "url": "week1-handout.html#week1-handout-15",
  "type": "Remark",
  "number": "14",
  "title": "<em class=\"alert\">MATHEMATICA<\/em>.",
  "body": "MATHEMATICA     You should be familiar with using MATHEMATICA to verify your algebraic work.     LaplaceTransform[f(t),t,s]   Find using MATHEMATICA.  LaplaceTransform[Cos[4*t - 5], t, s]     InverseLaplaceTransform[F[s],s,t]  Find using MATHEMATICA.  InverseLaplaceTransform[((5*s-1)\/(s^2+7), s, t]       "
},
{
  "id": "week1-handout-16",
  "level": "2",
  "url": "week1-handout.html#week1-handout-16",
  "type": "Example",
  "number": "17",
  "title": "",
  "body": " Use the Laplace transform to solve the IVP   "
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
