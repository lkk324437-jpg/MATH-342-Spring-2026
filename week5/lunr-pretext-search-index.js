var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "week5-handout",
  "level": "1",
  "url": "week5-handout.html",
  "type": "Worksheet",
  "number": "",
  "title": "Week 5 Handout- Series Solution-Part 1",
  "body": " Week 5 Handout- Series Solution-Part 1    We will discuss the following topics related to Series Solution :   Week 5: Power Series about Ordinary Points and Singular Points (Section 5.1-5.2)    Week 6-7: Orthogonal Functions (Section 12.1), Legendre Function (Section 5.3), Fourier Series (Section 12.2-12.3)         A power series in is an infinite series of the form It is also called a power series centered at .       A few issues are important to consider when using a series:   Is the series convergent ?    If the series is convergent,   What is the radius of convergence? That is the same question as \"What is the interval of convergence?\".    Is it convergent absolutely? Is it convergent pointwisely?    Is it convergent to the function we are looking for? Are the derivatives or the anti-derivatives of the series the same with the derivatives or the anti-derivatives of the function we are looking for?      Why is constructing a series solution important?  Iterative  Truncated Series vs Error         A function is said to be analytic at a point if it can be represented by a power series in with either a positive or an infinite radius of convergence.     Find the radius of convergence and interval of convergence for the given power series.                   Taylor series centered at is also called Maclaurin series . The five functions below are analytic at  Power Series of Basic Functions    Power Series  Interval of Convergence                             Using the power series in the Remark, find the first 4 terms of a power series in for each function below.                  Verify by direct substituion that the given power series is a particular solution of the indicated differential equation.       The standard form of a linear second order differential equation is defined as   A point is said to be an ordinary point of the differential equation if both and in the standard form are analytic at A point that is not an ordinary point is said to be a singular point of the equation.      Identify all ordinary points and singular points of    Convert to the standard form:    and are analytic at all real numbers, except or Thus singular points for the given DE are and the ordinary points are and i.e.,       If is an ordinary point of a 2nd order linear differential equation, we can always find 2 linearly independent solutions in the form of a power series centered at ; that is called a solution about the ordinary point A series solution converges at least on some interval defined by where is the distance from to be the closest singular point.      Find a power series solution of each given differential equation about the ordinary point and a lower bound for the radius of convergence.                   Considering  is an ordinary point. By , there exists a solution in the form of    From the above relations, there are two free variables and which generate two sequences of coefficients, and Thus, we have          A singular point is said to be a regular singular point of the 2nd order linear differential equation if the functions and are both analytic at A singular point is not regular is said to be an irregular singular point of the equation.      Determine the singular points of each given differential equation. Classify each singular point as regular or irregular.                 Method of Frobenius   If is a regular singular point of the 2nd order linear differential equation, then there exists at least one nonzero solution of the form   where the number is a constant to be determined. The series will converge at least on some interval defined by       Find a solution of the form for       After substituting into the given differential equation and simplifying, the indicial equation is a equation in that results from equating the total coefficient of the lowest power of to zero. The solutions to the indicial equation are called indicial roots , or exponents of the singularity When the given differential equations are in the standard form of the 2nd order DE, the indicial equation is quadratic.      3 Cases of and :   Case I:  and are distinct and do not differ by an integer   Case II:  , where is a positive integer   Case III:           For each given differential equations, show that the indicial roots of the singularity do not differ by an integer, use the method of Frobenius to obtain 2 linearly independent series solution about and form the general solution on the interval                  The differential equation (DE) has an irregular singular point at   Show that the substitution yields the DE which now has a regular singular point at    Find two series solutions of the above equation about the singular point     Express each solution of the original equation in terms of elementary functions.      "
},
{
  "id": "week5-handout-2-1-1",
  "level": "2",
  "url": "week5-handout.html#week5-handout-2-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Series Solution "
},
{
  "id": "def-power-series",
  "level": "2",
  "url": "week5-handout.html#def-power-series",
  "type": "Definition",
  "number": "1",
  "title": "",
  "body": "  A power series in is an infinite series of the form It is also called a power series centered at .    "
},
{
  "id": "week5-handout-4",
  "level": "2",
  "url": "week5-handout.html#week5-handout-4",
  "type": "Remark",
  "number": "2",
  "title": "",
  "body": "  A few issues are important to consider when using a series:   Is the series convergent ?    If the series is convergent,   What is the radius of convergence? That is the same question as \"What is the interval of convergence?\".    Is it convergent absolutely? Is it convergent pointwisely?    Is it convergent to the function we are looking for? Are the derivatives or the anti-derivatives of the series the same with the derivatives or the anti-derivatives of the function we are looking for?      Why is constructing a series solution important?  Iterative  Truncated Series vs Error      "
},
{
  "id": "def-analytic",
  "level": "2",
  "url": "week5-handout.html#def-analytic",
  "type": "Definition",
  "number": "3",
  "title": "",
  "body": "  A function is said to be analytic at a point if it can be represented by a power series in with either a positive or an infinite radius of convergence.  "
},
{
  "id": "week5-handout-6",
  "level": "2",
  "url": "week5-handout.html#week5-handout-6",
  "type": "Example",
  "number": "4",
  "title": "",
  "body": "  Find the radius of convergence and interval of convergence for the given power series.               "
},
{
  "id": "rem-power-series",
  "level": "2",
  "url": "week5-handout.html#rem-power-series",
  "type": "Remark",
  "number": "5",
  "title": "",
  "body": "   Taylor series centered at is also called Maclaurin series . The five functions below are analytic at  Power Series of Basic Functions    Power Series  Interval of Convergence                          "
},
{
  "id": "week5-handout-8",
  "level": "2",
  "url": "week5-handout.html#week5-handout-8",
  "type": "Example",
  "number": "6",
  "title": "",
  "body": "  Using the power series in the Remark, find the first 4 terms of a power series in for each function below.               "
},
{
  "id": "week5-handout-9",
  "level": "2",
  "url": "week5-handout.html#week5-handout-9",
  "type": "Example",
  "number": "7",
  "title": "",
  "body": "  Verify by direct substituion that the given power series is a particular solution of the indicated differential equation.    "
},
{
  "id": "def-ordinary-point",
  "level": "2",
  "url": "week5-handout.html#def-ordinary-point",
  "type": "Definition",
  "number": "8",
  "title": "",
  "body": "  The standard form of a linear second order differential equation is defined as   A point is said to be an ordinary point of the differential equation if both and in the standard form are analytic at A point that is not an ordinary point is said to be a singular point of the equation.   "
},
{
  "id": "week5-handout-11",
  "level": "2",
  "url": "week5-handout.html#week5-handout-11",
  "type": "Example",
  "number": "9",
  "title": "",
  "body": "  Identify all ordinary points and singular points of    Convert to the standard form:    and are analytic at all real numbers, except or Thus singular points for the given DE are and the ordinary points are and i.e.,    "
},
{
  "id": "thm-existence-power-solution",
  "level": "2",
  "url": "week5-handout.html#thm-existence-power-solution",
  "type": "Theorem",
  "number": "10",
  "title": "",
  "body": "  If is an ordinary point of a 2nd order linear differential equation, we can always find 2 linearly independent solutions in the form of a power series centered at ; that is called a solution about the ordinary point A series solution converges at least on some interval defined by where is the distance from to be the closest singular point.   "
},
{
  "id": "week5-handout-13",
  "level": "2",
  "url": "week5-handout.html#week5-handout-13",
  "type": "Example",
  "number": "11",
  "title": "",
  "body": "  Find a power series solution of each given differential equation about the ordinary point and a lower bound for the radius of convergence.                   Considering  is an ordinary point. By , there exists a solution in the form of    From the above relations, there are two free variables and which generate two sequences of coefficients, and Thus, we have       "
},
{
  "id": "def-regular-singular",
  "level": "2",
  "url": "week5-handout.html#def-regular-singular",
  "type": "Definition",
  "number": "12",
  "title": "",
  "body": "  A singular point is said to be a regular singular point of the 2nd order linear differential equation if the functions and are both analytic at A singular point is not regular is said to be an irregular singular point of the equation.   "
},
{
  "id": "week5-handout-15",
  "level": "2",
  "url": "week5-handout.html#week5-handout-15",
  "type": "Example",
  "number": "13",
  "title": "",
  "body": "  Determine the singular points of each given differential equation. Classify each singular point as regular or irregular.               "
},
{
  "id": "thm-Frobenius",
  "level": "2",
  "url": "week5-handout.html#thm-Frobenius",
  "type": "Theorem",
  "number": "14",
  "title": "Method of Frobenius.",
  "body": " Method of Frobenius   If is a regular singular point of the 2nd order linear differential equation, then there exists at least one nonzero solution of the form   where the number is a constant to be determined. The series will converge at least on some interval defined by    "
},
{
  "id": "week5-handout-17",
  "level": "2",
  "url": "week5-handout.html#week5-handout-17",
  "type": "Example",
  "number": "15",
  "title": "",
  "body": "  Find a solution of the form for    "
},
{
  "id": "def-indicial",
  "level": "2",
  "url": "week5-handout.html#def-indicial",
  "type": "Definition",
  "number": "16",
  "title": "",
  "body": "  After substituting into the given differential equation and simplifying, the indicial equation is a equation in that results from equating the total coefficient of the lowest power of to zero. The solutions to the indicial equation are called indicial roots , or exponents of the singularity When the given differential equations are in the standard form of the 2nd order DE, the indicial equation is quadratic.   "
},
{
  "id": "week5-handout-19",
  "level": "2",
  "url": "week5-handout.html#week5-handout-19",
  "type": "Remark",
  "number": "17",
  "title": "",
  "body": "  3 Cases of and :   Case I:  and are distinct and do not differ by an integer   Case II:  , where is a positive integer   Case III:        "
},
{
  "id": "week5-handout-20",
  "level": "2",
  "url": "week5-handout.html#week5-handout-20",
  "type": "Example",
  "number": "18",
  "title": "",
  "body": "  For each given differential equations, show that the indicial roots of the singularity do not differ by an integer, use the method of Frobenius to obtain 2 linearly independent series solution about and form the general solution on the interval               "
},
{
  "id": "week5-handout-21",
  "level": "2",
  "url": "week5-handout.html#week5-handout-21",
  "type": "Example",
  "number": "19",
  "title": "",
  "body": "  The differential equation (DE) has an irregular singular point at   Show that the substitution yields the DE which now has a regular singular point at    Find two series solutions of the above equation about the singular point     Express each solution of the original equation in terms of elementary functions.     "
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
