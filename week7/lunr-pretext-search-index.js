var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "week5-handout",
  "level": "1",
  "url": "week5-handout.html",
  "type": "Worksheet",
  "number": "",
  "title": "Week 7 Handout- Series Solution-Part 3",
  "body": " Week 7 Handout- Series Solution-Part 3    We will discuss the following topics related to Series Solution :   Week 5: Power Series about Ordinary Points and Singular Points (Section 5.1-5.2)    Week 6-7: Orthogonal Functions (Section 12.1), Legendre Function (Section 5.3), Fourier Series (Section 12.2-12.4), Sturm-Liouville Problem (Section 12.5)            is the imaginary unit defined by    For a real number, Euler's formula    A complex number is a number where and are real numbers. The number is called the conjugate of          From , we can derive Then using to replace and in the defintion of Fourier Series.     Complex Fourier Series   The complex Fourier series of function defined on an interval is given by If is a periodic function and the fundamental period of is then becomes where is called fundamental angular frequency and is called frequency spectrum of       Find the complex Fourier series of on the given interval    Graph the periodic expansion of     Graph Frequency spectrum of    Sketch the graph of partial sum for        "
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
  "id": "def-complex",
  "level": "2",
  "url": "week5-handout.html#def-complex",
  "type": "Definition",
  "number": "1",
  "title": "",
  "body": "     is the imaginary unit defined by    For a real number, Euler's formula    A complex number is a number where and are real numbers. The number is called the conjugate of       "
},
{
  "id": "week5-handout-4",
  "level": "2",
  "url": "week5-handout.html#week5-handout-4",
  "type": "Remark",
  "number": "2",
  "title": "",
  "body": "  From , we can derive Then using to replace and in the defintion of Fourier Series.   "
},
{
  "id": "def-complex-fourier",
  "level": "2",
  "url": "week5-handout.html#def-complex-fourier",
  "type": "Definition",
  "number": "3",
  "title": "Complex Fourier Series.",
  "body": " Complex Fourier Series   The complex Fourier series of function defined on an interval is given by If is a periodic function and the fundamental period of is then becomes where is called fundamental angular frequency and is called frequency spectrum of    "
},
{
  "id": "week5-handout-6",
  "level": "2",
  "url": "week5-handout.html#week5-handout-6",
  "type": "Example",
  "number": "4",
  "title": "",
  "body": "  Find the complex Fourier series of on the given interval    Graph the periodic expansion of     Graph Frequency spectrum of    Sketch the graph of partial sum for       "
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
