---
layout: post
title:  "Open Graph"
date:   2015-11-23
categories: web
comments: true
---

###Using Open Graph
Open Graph is a protocol used for easy sharing on social media.

####<span style="color:green">+</span> Pros
+ The fact that you can use variables in the CSS-code should be more than enough to get you excited. Variables can be used to assign a hex-number to an easy-to-remember variable name.
+ Nesting gives us a good way to structure the code and also easier to read and maintain.
+ Since all of the CSS files get compiled to just one stylesheet, the user only need to send one HTTP-request for all the stylesheets.

####<span style="color:red">-</span> Cons
- The main disadvantage is debugging your code. Since the the CSS code used in the browser is the one we generated from our SCSS files, the code will look different.
- It can also take some time to compile the CSS and before the changes are visible.
