var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "week5-handout",
  "level": "1",
  "url": "week5-handout.html",
  "type": "Worksheet",
  "number": "",
  "title": "Week 5 Handout- Series Solution-Part 1",
  "body": " Week 5 Handout- Series Solution-Part 1    We will discuss the following topics related to Series Solution :   Power Series about Ordinary Points and Singular Points (Section 5.1-5.2)    Orthogonal Functions (Section 12.1), Legendre Function (Section 5.3), Fourier Series (Section 12.2-12.3)       "
},
{
  "id": "week5-handout-2-1-1",
  "level": "2",
  "url": "week5-handout.html#week5-handout-2-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Series Solution "
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
