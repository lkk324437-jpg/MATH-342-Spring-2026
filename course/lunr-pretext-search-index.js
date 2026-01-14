var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "syllabus",
  "level": "1",
  "url": "syllabus.html",
  "type": "Section",
  "number": "",
  "title": "Syllabus",
  "body": " Syllabus   Instructors reserve the right to make changes to this syllabus as needed. Only work assigned by and submitted to the instructor of record will count toward the final grade in this course.     Course Information     Instructor  Yuju Kuo    Office  STRGT 314    Email   yjkuo@iup.edu .    Office Hours  Monday 12:30 PM - 1:30 PM  Tuesday 1:00 PM - 2:00 PM, 5:00 PM - 6:00 PM  Wednesday 12:30 PM - 2:30 PM  Thursday 1:00 PM - 2:00 PM (via Zoom)   Important : I want to see you in office hours, and will happily make appointments with you outside of the regular hours. I am avilable by email and will respond within 24 hours, usually much sooner, during the weekdays. You can also make appointments through     Class meets  Tuesday 9:35 AM-10:50 AM STRGT 220  Thursday 9:35 AM-10:50 AM STRGT 202    Course Description  Applies advanced mathematics to problems of science. Identifies the three phases of such an application and develops skills necessary to carry out each step: a) translation of the given physical information into a mathematical model; b) treatment of the model by mathematical methods; c) interpretation of the mathematical result in physical terms. Investigates topics including vector analysis, Taylor and Fourier series, partial differential equations and their applications.    Prerequisite  MATH 341 AND (MATH 122 OR MATH 225)    Textbook and course materials   Advanced Engineering Mathematics by Zill, Dennis G.  Software: Jupyter Notebook, Mathematica, Octave       Assessments and Grades   Learning Outcomes  By the end of this course, you should be able to:   Apply techniques from multivariable analysis to construct mathematical models and obtain results,    Construct series representations of functions and use them to solve applied problems,    Investigate partial differential equations and their solutions.       Assessment Categories     Category   Weight    Grade   Percentage     In-Class Activities\/Quizzes   12%    A  90-100%     Homework   17%    B  80-89%     2 Midterm Exams   30%    C  70-79%     Final Exam   20%    D  55-69%     COMAP   6%    F  Below 55%     Final Project   15%            Tentative Schedule    Week 1 Introduction, COMAP, Laplace Transform    Week 2- Week 4 Vector Calculus    Week 5- Week 7 Series Solution, Orthogonal Functions, Fourier Series    Week 8-Week 9 Boundarey Value Problems in Rectangular Coordinates    Week 10- Week 11 Numerical Methods for PDE    Week 12 BVP in other coordinate Systems    Week 13 Integral Transform Method    Week 14- Week 15 Final Project Presentation, Final Exam      Important Dates     COMAP Competition  January 29-February 2    Exam 1  February 11    Project Proposal Due  February 27    Exam 2  March 19    Exam 3  April 16    Final Project Presentation  April 30    Final Exam  May 7, 8AM-10AM       Course Policies   Attendance  Attendance and class participation is probably the single most important factor for your success in this course. The policy for this course is that students taking MATH 342 take responsibility for their own learning and regularly attend class. There will be occasional in-class activities completed and submitted in class. These activities are a graded part of the class, and you must be present to earn the points.    Late work  For Homework, the late submission is allowed with 25% penalty per day. For In-class Activities and Quizzes, the make-up is allowed for individual work but it must be done before the next class period. No make-up is allowed for group work. For exams, you must contact the instructor (via: email: yjkuo@iup.edu) within 24 hours of missing an exam and be prepared to provide documentation. Makeups are given at the discretion of the instructor and only in the case of verified medical or other documented emergencies.    Academic Integrity  All students are required to abide by the University Policy on Academic Integrity. YOU MUST DO ALL YOUR OWN WORK. See: and the section on Academic Policies and Academic Integrity: Indiana University of Pennsylvania is committed to the fundamental values of academic integrity. Academic integrity means honesty and responsibility in scholarly endeavors and behaviors; it means that all academic work should be the result of an individual's own effort. Academic assignments help students learn and allow them to exhibit this earning. Grades are an assessment of the extent to which learning has been demonstrated in assignments. Therefore, academic work and grades should be the result of a student’s own understanding and effort. All members of the IUP community-including students, faculty, and staff-are responsible for maintaining academic integrity, which includes knowing what IUP's academic integrity policies are and being able to identify academic misconduct. Academic misconduct includes any action which improperly impacts the assessment or representation of a student's academic achievement. Academic misconduct may result in disciplinary action, including expulsion from the University. Students who do not do their own work can be subject to penalty, including but not limited to zero grades on affected assignments and\/or referral to the University for academic integrity violations.    Department of Disability Advising and Access (D2A2)  Indiana University of Pennsylvania provides reasonable accommodations to students with disabilities who have self-identified and been approved by the Department for Disability Access and Advising (D2A2). If you have any kind of disability, whether apparent or non-apparent, learning, emotional, physical, or cognitive, chronic or short-term, please make an appointment to meet with me as soon as possible in order to discuss your accommodations and your access needs. All discussions will remain confidential. You must be registered with the Department for Disability Access and Advising (D2A2), and requested them to provide your accommodation letter to me, before I can accommodate you. If you have not yet contacted D2A2, and would like to request accommodations or have questions, you can make an appointment by emailing (preferred) D2A2 at or by calling 724-357-4067. The office is located in Pratt Hall, Room 216, 201 Pratt Drive. All services are confidential.    Title IX  Indiana University of Pennsylvania and its faculty are committed to assuring a safe and productive educational environment for all students. In order to meet this commitment and to comply with Title IX of the Education Amendments of 1972 and guidance from the Office for Civil Rights, the University requires faculty members to report incidents of sexual violence shared by students to the University's Title IX Coordinator. The only exceptions to the faculty member's reporting obligation are when incidents of sexual violence are communicated by a student during a classroom discussion, in a writing assignment for a class, or as part of a University-approved research project. Faculty members are obligated to report sexual violence or any other abuse of a student who was, or is, a child (a person under 18 years of age) when the abuse allegedly occurred to the Department of Human Services (1-800-932-0313) and University Police (724-357-2141). Information regarding the reporting of sexual violence and the resources that are available to victims of sexual violence is set forth at:     "
},
{
  "id": "week1-handout",
  "level": "1",
  "url": "week1-handout.html",
  "type": "Worksheet",
  "number": "",
  "title": "Week 1 Handout- Introduction to MATH 342 and Laplace Transform",
  "body": " Week 1 Handout- Introduction to MATH 342 and Laplace Transform   This is an outline of the topics we covered in the first week of class. You should have Jupyter Notebook , MATHEMATICA , and Octave ready before the 2nd week for practicing and doing assignments.     Overview   Investigating high dimensional systems using vector analysis  Constructing complicated functions using series expansion  Modeling and studying natural phenomena via partial differential equations (PDE)  Solving PDEs algebraically and numerically  Utilizing appropriate software packages ( Jupyter Notebook , MATHEMATICA , Octave ) for suitable tasks    Why do we need models?   All models are wrong. Some are useful.    Steps to create models:   Observing and recording the system  Describe how the system behaves (verbally and mathematically)-create a model  Verify whether that model behaves similar (or close enough) to what you observe. If not, modify it.  Investigate\/Study the system under different conditions using the model     COMAP    Laplace Transform: Definitions, Theorems, Examples, MATHEMATICA      If is a function defined for , then the integral is the Laplace transform of provided the integral converges.  Sufficient conditions for existence:    must be piecewise continuous on     must be of exponential order for          A function is said to be exponential order if there exists constants and such that       is a linear transform, i.e.,         Evaluate     Evaluate where   Graph of a piecewise function   The graph of a piecewise function with two horizontal segments. From t equals 0 to t equals 3, the graph is on the t-axis at y equals 0, ending with an open circle at (3, 0). For t greater than or equal to 3, the graph is a horizontal line at y equals 2, starting with a closed circle at (3, 2).             If represents the Laplace transform of a function then is the inverse Laplace transform of     is a linear transform,                                        Use Theorem to find each of the followings:                Find      Conceptually, the original DE is transformed to another equation in a different space. Ideally, this new equation is easier to solve in the new space. Finally, the solution in the new space is transformed back to the original space using the inverse transformation.   Steps in solving an IVP by the Laplace transform      There are many other transformations and each one is considering a different space, which also means each one is more suitable for solving some particular types of DEs. This is a typical issue for most of algebraic approaches for solving ODEs or PDEs.     Suppose are continuous on , is piecewise continuous on and are of exponential order with as specified in . Then for  where      Use the Laplace transform to solve the IVP    MATHEMATICA     You should be familiar with using MATHEMATICA to verify your algebraic work.     LaplaceTransform[f(t),t,s]   Find using MATHEMATICA.  LaplaceTransform[Cos[4*t - 5], t, s]     InverseLaplaceTransform[F[s],s,t]  Find using MATHEMATICA.  InverseLaplaceTransform[((5*s-1)\/(s^2+7), s, t]        "
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
  "type": "Remark",
  "number": "3",
  "title": "",
  "body": "  is a linear transform, i.e.,   "
},
{
  "id": "week1-handout-7",
  "level": "2",
  "url": "week1-handout.html#week1-handout-7",
  "type": "Example",
  "number": "4",
  "title": "",
  "body": "     Evaluate     Evaluate where   Graph of a piecewise function   The graph of a piecewise function with two horizontal segments. From t equals 0 to t equals 3, the graph is on the t-axis at y equals 0, ending with an open circle at (3, 0). For t greater than or equal to 3, the graph is a horizontal line at y equals 2, starting with a closed circle at (3, 2).          "
},
{
  "id": "def-laplace-inverse",
  "level": "2",
  "url": "week1-handout.html#def-laplace-inverse",
  "type": "Definition",
  "number": "6",
  "title": "",
  "body": "  If represents the Laplace transform of a function then is the inverse Laplace transform of     is a linear transform,    "
},
{
  "id": "thm-laplace-inverse",
  "level": "2",
  "url": "week1-handout.html#thm-laplace-inverse",
  "type": "Theorem",
  "number": "7",
  "title": "",
  "body": "                                 "
},
{
  "id": "week1-handout-10",
  "level": "2",
  "url": "week1-handout.html#week1-handout-10",
  "type": "Example",
  "number": "8",
  "title": "",
  "body": " Use Theorem to find each of the followings:             "
},
{
  "id": "week1-handout-11",
  "level": "2",
  "url": "week1-handout.html#week1-handout-11",
  "type": "Example",
  "number": "9",
  "title": "",
  "body": "  Find    "
},
{
  "id": "week1-handout-12",
  "level": "2",
  "url": "week1-handout.html#week1-handout-12",
  "type": "Remark",
  "number": "10",
  "title": "",
  "body": " Conceptually, the original DE is transformed to another equation in a different space. Ideally, this new equation is easier to solve in the new space. Finally, the solution in the new space is transformed back to the original space using the inverse transformation.   Steps in solving an IVP by the Laplace transform      There are many other transformations and each one is considering a different space, which also means each one is more suitable for solving some particular types of DEs. This is a typical issue for most of algebraic approaches for solving ODEs or PDEs.  "
},
{
  "id": "thm-laplace-properties",
  "level": "2",
  "url": "week1-handout.html#thm-laplace-properties",
  "type": "Theorem",
  "number": "12",
  "title": "",
  "body": "  Suppose are continuous on , is piecewise continuous on and are of exponential order with as specified in . Then for  where    "
},
{
  "id": "week1-handout-14",
  "level": "2",
  "url": "week1-handout.html#week1-handout-14",
  "type": "Example",
  "number": "13",
  "title": "",
  "body": " Use the Laplace transform to solve the IVP   "
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
  "id": "week2-handout",
  "level": "1",
  "url": "week2-handout.html",
  "type": "Worksheet",
  "number": "",
  "title": "Week 2 Handout- Vector Calculus- Part 1",
  "body": " Week 2 Handout- Vector Calculus- Part 1   This is an outline of the topics we covered in Week 2. You should have Jupyter Notebook , MATHEMATICA , and Octave ASAP.   "
},
{
  "id": "hw1",
  "level": "1",
  "url": "hw1.html",
  "type": "Worksheet",
  "number": "",
  "title": "Homework 1",
  "body": " Homework 1    Instructions: Complete all the parts below on a separate page . Submit your work by uploading a single PDF to D2L. This can either be a scan of handwritten solutions or a PDF you created by first typing your solutions. Your work must clearly label which definition, remark, theorem and\/or which part of theorem in Week 1 Handout is used for each step.      Deteremine whether each of the following functions is of exponential order. If it is, find minimum c and minimum T. If it is not, justify your answer.                Find the Laplace transform of each of the following functions if it exists. Provide a brief justification if it doesn't exist. You must also include Mathematica code for verifying your answers.                     Find the given inverse transform. You must also include Mathematica code for verifying your answers.                     Solve each of IVPs using the Laplace transform and its inverses.                "
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
