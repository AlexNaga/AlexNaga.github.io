---
layout: post
title:  "Pre-compiled CSS"
date:   2016-11-16
categories: web
comments: true
---

###Why would I use pre-compiled CSS?
Pre-compiled CSS seems to make life *much* easier. It can be a hassle to get things up and running at first but afterwards it all works seamlessly smooth.

####<span style="color:green">+</span> Pros
+ The fact that you can use variables in the CSS-code should be more than enough to get you excited. Variables can be used to assign a hex-number to an easy-to-remember variable name.
+ Nesting gives us a good way to structure the code and also easier to read and maintain.
+ Since all of the CSS files get compiled to just one stylesheet, the user only need to send one HTTP-request for all the stylesheets.

####<span style="color:red">-</span> Cons
- The main disadvantage is debugging your code. Since the the CSS code used in the browser is the one we generated from our SCSS files, the code will look different.
- It can also take some time to compile the CSS and before the changes are visible.
