09-22-18 
-----------------------
requirements:
----------------------
User Stories (MVP)
As a user, I want a webpage that displays individual store data for my Salmon Cookie Shops, so that I can be informed about how to run my business
As a developer, I want to represent the store data in a list format on the webpage, so my client can view the information
As a developer, I want to use object-oriented programming to build this site, so that the site will be more effective and the code will be easier to read and understand
Technical Requirements
New repository properly set up with a license and README, and cloned to local machine
Working on a non-master branch, with regular commit history
Good use of Object Literals (no constructors allowed today); one for each store model; properties/values and methods are correctly constructed and given meaningful names
Main page meets requirements of the problem domain
Use template literals in your JS logic to render the stores as lists on the sales page
User Stories (Stretch... only after completing everything above)
As a developer, I want to make some headway on the public-facing page for the business

------------------
story
-------------------
Problem domain:
Your friend Pat has come up with a business idea by combining two signature Seattle icons: Pat has developed a recipe for a coffee-time confection called Salmon Cookies.

They're cookies made into the shape of a salmon, and actually made with salmon (though the fish is ground up so fine that you can't even taste it!) that is the ideal match for a steaming cup of coffee on a gray Seattle morning. Or gray Seattle afternoon... whatever. Tourists will go gaga for them, locals will begrudgingly fall in love with them, and Pat will make a ton of money.

But, Pat needs some help with the branding of the business, as well as some help with internal data management for the company, and has enlisted your assistance because of your extensive and proven work in developing web applications.

Pat's Salmon Cookies, soon with franchises all over town, needs to calculate the number of cookies each location must make every day so that it can manage its supplies inventory and baking schedule. The number of cookies to make depends on the hours of operation (6:00 AM to 8:00 PM for all locations) and a few factors unique to each location:

The minimum number of customers per hour.
The maximum number of customers per hour.
The average number of cookies purchased per customer.
Because we are early in the life of this business, we will need to build an application that is adaptable. Pat will need to be able to add and remove locations from the daily projections report, and Pat will also need to be able to easily modify the input numbers for each location based on day of the week, special events, and other factors. Pat would like to see these numbers with nice formatting in a web application, and oh yeah... one more thing:

Pat needs you to take a leading role in doing the design work and construction of a public-facing page, too. Pat has a logo image picked out, but that's it. Yep, all you're getting to work off of is an illustration of a fish:

A salmon

Pat has asked you to come up with all other aspects of the design for both documents, including a color scheme and a custom font, and maybe additional images, for a public-facing webpage.

So, in addition to building an application that calculates daily sales projections for each location (in a file called sales.html), you also need to create a pubic-facing page (in a file called index.html) that is colorful, eye-catching, readable, useful, informative... and ultimately of a quality ready for use on T-shirts, stickers, coffee mugs, cookie bags, napkins, and so on.

You've got a lot to do. Plan your work, and work your plan.

Calculate Daily Sales Projections (sales.html)
We're going to assemble this web application bit by bit.

First, create a separate JS object literal (no constructor functions... yet) for each shop location that does the following:

Stores the min/max hourly customers, and the average cookies per customer, in object properties

Uses a method of that object to generate a random number of customers per hour. Objects/Math/random

Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

Store the results for each location in a separate array... perhaps as a property of the object representing that location

Display the values of each array as unordered lists in the browser

Calculating the sum of these hourly totals; your output for each location should look like this:

1st and Pike

6am: 16 cookies
7am: 20 cookies
8am: 35 cookies
9am: 48 cookies
10am: 56 cookies
11am: 77 cookies
12pm: 93 cookies
1pm: 144 cookies
2pm: 119 cookies
3pm: 84 cookies
4pm: 61 cookies
5pm: 23 cookies
6pm: 42 cookies
7pm: 57 cookies
8pm: 29 cookies
Total: 657 cookies
Display the lists on sales.html. We will be adding features to this application and working with its layout throughout the week.

Here are the starting numbers that you'll need to build these objects:

Location	Min / Cust	Max / Cust	Avg Cookie / Sale
1st and Pike	23	65	6.3
SeaTac Airport	3	24	1.2
Seattle Center	11	38	3.7
Capitol Hill	20	38	2.3
Alki	2	16	4.6
These numbers are simply Pat's estimates for now, but eventually, once there has been some history collected that provides more accurate numbers, we'll want the ability to update these numbers for each location, and to add/remove locations. But we'll not build all of that today. Make sure to make each location is its own JavaScript object.

Public-Facing Page (index.html) (Stretch goal for Day 1, but all these are required by the end of the project)
Besides using the picture of the fish... you should use...

A custom Google font for highlights
A specified standard san-serif web font for data (such as Arial, Verdana, or Helvetica)
A specified standard serif web font for text (such as Georgia, Times, etc.)
Specified different font colors for all three font usages
A background color for the default page background (make sure font colors have good contrast and are readable on this background)
A different background color for elements such boxes and tables (so make sure the font colors contrast against this well, too!)
Anything else you'd like to add related to style. But remember: simplicity, clarity, and consistency are good things in design.
Be thoughtful about layout and overall organization of the page.
Include all of the typical stuff that you'll find on the home page of a business: locations, hours, contact information, some text about how awesome the business is, etc. Be creative, and again, think about what is meaningful to a typical end user.

====================================================
lab 7
=================================================
Assignment Overview: Lab 7
Implement a Constructor Function
In class, we learned how to refactor a group of object literals by using a constructor function and creating instances.

Let's replace your object literals for the salmon cookie stands with a single constructor function that, when called with 'new', creates new instances.

Your code will end up with probably 1/4 the number of lines it had before refactoring, and every line of code you don't have is one you don't need to debug!

See pages 106-109 in your textbook for a constructor example... and especially focus on 108 and 109. Also refer to the demo code from class that showed how we can view a constructor function as a translation of an object literal.

Replace the Lists with a Table
We will also be replacing the lists of data for each store, and building a single table of data instead! Tables are much easier to read than lists, and presenting data in a table makes analysis more intuitive and comprehensive.

What numbers should go into a table? Your client, Pat, has reviewed the lists of data you dutifully provided in the previous assignment, and has decided that's actually not the best way to view the information. Here's what Pat wants:

A table to show the total amount of projected cookie needs at each location, with the table displaying the cookie stand location, the total number of cookies needed for each location, an hourly breakdown of total cookies sales for each location, and [STRETCH GOAL] a footer row of totals for each column.
Here's what it should look like, in general (this example is for structural and layout purposes only, since you can style the table however you want):
Cookies Needed By Location Each Day
6:00am	7:00am	8:00am	9:00am	10:00am	11:00am	12:00pm	1:00pm	2:00pm	3:00pm	4:00pm	5:00pm	6:00pm	7:00pm	Daily Location Total
1st and Pike															
SeaTac Airport															
Seattle Center															
Capitol Hill															
Alki															
Totals															
User Stories (MVP)
As a developer, I want to implement a constructor function, so that I can reuse code and eliminate much of the duplication in my JavaScript
As a user, I want cookie sales data represented in tables rather than lists
Technical Requirements
Good use of a constructor function; style and syntax are correctly implemented
Each cookie stand location should have a separate render() method that creates and appends its row to the table
The header row and footer row are each created in their own stand-alone function
Duplicate code has been removed and DRY principles are evident
Working on a non-master branch for the day, with regular commit history. Basically, every time you get something to work, you should do a commit. But you only need to push every couple of hours or so, tops.
User Stories (Stretch... NOT REQUIRED)
As a developer, I will continue to work on design aspects of the public-facing page.
As a developer, to facilitate design work, I will build a style guide.
As a developer, to demonstrate to my client my ability to add value, I will create a second table that will help Pat manage staffing. Using the basic rubric that single Salmon Cookie Tosser can serve 20 customers per hour, and that each location should have a minimum of two Salmon Cookie Tossers on shift at all times, calculate how many Salmon Cookie Tossers are needed at each location each hour.

==========================
lab 8
==============================
Assignment Overview: Lab 8
Today you will be adding a form to your existing cookie stand project so that you can add new locations to the table by simply inputting their information with the form.

Also, Pat has decided that he would like a footer row after all.

Instructions
Here's some of the steps you'll need to take, but not necessarily in this order:

Add the necessary HTML to create the input form.
Don't forget <fieldset>!
Use the constructor function as your guide to determine what input fields your form needs (hint: also consider what is passed in when creating instances!)
Your JS will need an event listener and and event handler, and you may also want a variable to facilitate DOM access to the form.
As we saw in class, the event handler should use the take the data from the input field, pass it into the constructor function, and create a new instance of a cookie stand that then appends to the table.
Are you going to do any error correction on input? You probably should. Look at what kind of input validation is built in to HTML5.
Write a stand-alone function to generate a footer row which will display the total number of cookies sold per hour for all locations. When a new store is added using your form, the totals in the footer row should update to include these new sales numbers.
Build incrementally. Test frequently.
Be attentive to overall code structure.
This is a good point to refactor your code into smaller functions/methods if you have some huge functions going on. Remember that each function should do one thing, and then you can compose more complex behavior out of functions.
Anywhere you have repeated chunks of code, maybe you can start to apply some DRY principles. Generally, once some chunk of code is appearing for a 3rd time or so, that's when you want to consider refactoring.
When making code more DRY, look for repeated behaviors that act on different pieces of data. Put the behavior into a function that is declared with parameters to receive the unique data, and then replace the repeated code with the function called with the unique data in arguments.
Submit your assignment through Canvas as usual.
