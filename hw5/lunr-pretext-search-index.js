var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "hw5",
  "level": "1",
  "url": "hw5.html",
  "type": "Worksheet",
  "number": "",
  "title": "Homework 5",
  "body": " Homework 5    Instructions:   Make sure your write-up is readable. If what you submit is not readable in any part of your work, it will automatically be 0 points for that problem.   For , make sure your graph looks nice and professional like those in .  For graphs in you must upload your Mathematica notebook or Jupyter notebook.       Write out the boundary conditions mathematically from each graph.      Boundary conditions of Steady-State temperature on a sector plate           Boundary conditions of Steady-State temperature on a quarter plate            Boundary conditions of Steady-State temperature on a cylinder.            Construct a graph to demonstrate each set of boundary conditions.                Consider the steady-state temperature that satisfies Complete the following two parts for each set of boundary conditions.   Derive the analytic solution     Create the graph of using either Mathematica or Jupyter Notebook on the specified domain.   Consider the following two sets of boundary conditions separately:             "
},
{
  "id": "hw5-3",
  "level": "2",
  "url": "hw5.html#hw5-3",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": " Write out the boundary conditions mathematically from each graph.      Boundary conditions of Steady-State temperature on a sector plate           Boundary conditions of Steady-State temperature on a quarter plate            Boundary conditions of Steady-State temperature on a cylinder.          "
},
{
  "id": "hw5-4",
  "level": "2",
  "url": "hw5.html#hw5-4",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": " Construct a graph to demonstrate each set of boundary conditions.              "
},
{
  "id": "hw5-5",
  "level": "2",
  "url": "hw5.html#hw5-5",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": " Consider the steady-state temperature that satisfies Complete the following two parts for each set of boundary conditions.   Derive the analytic solution     Create the graph of using either Mathematica or Jupyter Notebook on the specified domain.   Consider the following two sets of boundary conditions separately:            "
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
