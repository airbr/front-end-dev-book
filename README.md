### Front-End Web Development 
--
###The Big Nerd Ranch Guide  
####Review/ Material by Morgan Murrah


`11/3/2016- Preface`

This repo is from working through the Front-End Web Development Guide by the Big Nerd Ranch. I intend to add some commentary as I go along. From the contents page a lot of the material touches similar areas and accomplishes similar things covered in the [Atlanta WDI Curriculum](https://github.com/ATL-WDI-Curriculum).
However, from a glance I observe that the BNR book uses slightly different methods and approaches for similar objectives. I believe I will get a lot out of it/it will re-enforce what I know.

I am particularly looking forward to working towards the end of the book and approaching the EmberJS framework which I have sparse experience with.

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

