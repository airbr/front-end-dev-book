### Front-End Web Development && More 
--

##### Collection of web development material worked through by Morgan Murrah and commentary

Includes:

* [The Big Nerd Ranch Guide to Front End Web Development](https://www.bignerdranch.com/books/front-end-web-development/)
* [Javscript30 by Wes Bos](https://javascript30.com/)
* [Ruby Koans](http://rubykoans.com/)
  


`1/1/2017- Preface`

This repo started from working through the Front-End Web Development Guide by the Big Nerd Ranch. As I went along I figured I might as well add work/solutions from other great resources in to one repository to keep things organized. 

I intend to add some commentary as I go along which maybe adds some kind of value even if just for my own learning. 

A lot of the material in the BNR book for example touches similar areas and accomplishes similar things covered in the [Atlanta WDI Curriculum](https://github.com/ATL-WDI-Curriculum).
However, from a glance I observe that the BNR book uses slightly different methods and approaches for similar objectives. I believe I will get a lot out of it/it will re-enforce what I know.

The Ruby Koans exercises approaches Ruby from the perspective of edge cases and unit-testing.

Wes Bos does an excellent job of zoning in on applying new and modern JavaScript techniques such as ES6.

#BNR

`Chapter 1-2: Getting started`
--
I have completed Chapters 1 and 2 with relative ease and quickly. I have gained some benefit from becoming familiar with Atom as I have previously only used Sublime Text. 

As embarassing as it is to admit after 12 weeks of intensive full time development... I only now have learned once and for all the proper way to add a favicon to a web page. Feels good to banish that missing favicon error forever.

Learning to use Browsersync has also been a bonus, I definitely think I will be incorporating this in future development.

`Chapter 3: Styles`
--
*Atomized styling.* was another seemingly simple but important turn of approach. Heretofore I have approached problems as a process of scaffolding a framework first - like setting our rows or columns or major shapes - and then placing the specific objects within the scaffold.

From my very brief introduction to atomized styling I can see how from a process of development starting from the more specific, interesting elements and then building them up into a scaffold could make a difference. It seems much more fluid and adaptable.

This chapter was also a reminder to choose HTML tags based on what they are i.e. unordered list elements for an actually unorded list - and not something else dependent how the browser will style them by default- something that might be easy to forget when you mentally feel you have 'moved past basic HTML'. 

HSLA values for color which are not always supported are a thing I had forgot existed. 

`Chapter 4: Flexbox`
--
Learning [Flexbox in WDI 7](https://github.com/ATL-WDI-Curriculum/css-flexbox) supplemented with games such as [Flexbox froggy](http://flexboxfroggy.com/) turned out to be very memorable. This was because I went home one day and  was surprised as I talked to some very senior/experienced IT friends who were just as new Flexbox as I was. As it turns out, some problems just before Flexbox really seem like the ['bad old days'](https://github.com/philipwalton/solved-by-flexbox).

This chapter in the BNR book much like the WDI class is invaluable and accurately represents the state of the 'art' in this area.

**Highlights/gaps in my knowledge:**

* Overflow-x - A simple and useful scrolling property I had overlooked.
* The [flex shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/flex). Used flexbox a fair bit but under-used this sh property.
* Absolute positioning. A well known "Gotcha" and sometimes interview question:

> **An absolute position must have:**

>* a property position: absolute (fair enough...)
* coordinates such as top/right/bottom/left, pixels or relatives lengths (ok..)
* **an ancestor element with an explicitly declared position property with a value of relative or absolute - if no ancestor has a declared position property, the absolutley defined positioned element with be placed relevative to the <html> element (Yikes!)**

`Chapter 5: Adaptive Layouts with Media Queries`
--

This chapter was a breeze - and relatively short - but quality. I particularly appreciate the way the authors pepper in a little bit of detail to explain things, such as why media queries almost always use 'all':

`@media all and ... {
	/*Styles go here*/
}`

When media queries were first being introduced it was planned that in the place of 'all' would eventually be device specific tags such as `phone` or `tv` ...  or just as likely `toaster` or `refridgerator` these days it seems. These device specific tags haven't really worked out as planned so 'all' is the catch-all.

I always find little bits of context or explanation like this help me remember things.

`Chapter 6: Handling Events in Javascript`
--

"Bottom up approach". Another reminder to start small and work up. A reminder that Nodelist's existed and generally should always be transmuted into a regular JS Array. 

Generally a good practice/refresher chapter.

`Chapter 7: Visual Effects with CSS`
--
After a short break from finishing the book due to work and commitments, what can I say, this chapter blew my socks of (with [cubic-bezier transitions](http://cubic-bezier.com/#.17,.67,.83,.67) you might even say).

One 'aha' moment was being exposed to the keycode event objects that are easily loggable. This made a bunch of code I had seen before including early hard-coded games involving playing keyboards to music immediately make more sense.

This chapter has got me back in to finish it for sure.

`Chapters 8, 9, 10`
--
TBC. Chapter 8 on Modules is one of the longer and more difficult and most valuable to revise. I am happy to say that the chapters on Bootstrap and Jquery/Form Handling that followed were relatively a breeze. 


# Javascript30
--

1. WesBos starts outs with a fun challenge focused on using keyevents to interact with DOM elements to play music. Keywords:
 * ES6 Template Strings
 * classList.add(`css class goes here`)
 * Drawbacks of using set-timeouts with css transition effects
 * `data-*` data attribute practices


# Koans
--

`0-15`

* Every object has a unique object id's, small integers have fixed object id's... and these folow the fibonnaci sequence for some reason. 
* `assert_equal true, nil.nil?`is apparently the only method on nil that returns true