# Spin and Sip Website
[Live website](https://iterating.github.io/ps-sba-html-css/)
[Github source](https://github.com/iterating/ps-sba-html-css)

I'm inspired by how Nuxt/Vue/React works and started this project with a goal of dynamically rendering most of the content. 

## Objectives
- Populate homepage dynamically from yml file
- Programatically create cards and sections according to yml data
- Prioritize UX 

## Tools Used
- jsyaml for processing yaml into json. I decided to use CDN delivered to keep the files light. I would include local libraries if I were to prioritize long term reliability and interoperability. For larger projects, I would consider usig a framework for package management. My tech choices here reflect this project as a learning project with a goal of gaining deeper insight of current web standards of HTML, CSS and Javascript.
- Flexbox is used heavily for   

# Outcomes
- Designed and built a cohesive theme that conveys critical information first that is applied though the website and each element. This work requires much time consuming design and implementation. It explains why many websites nowadays look similar to each other. They share common UI components for user familiartity and developer efficiency.   
    - I challenged myself to use overlays and overcoming to have some elements shrink with device size and some elements stay at a readable size. This was accomplished with CSS selectors and Flexbox.  
    - While learning and implementing Tailwind CSS, I judged the time it wil take me to familiarize with Tailwind could be a barrier to finishing a MVP by the deadline, and the addition of framework also goes against the objective of learning fundamental web standards with this project. I decided to use the CSS skills I have learned in class to build this
- Learned some details of using modules. I thought deeply about adding page components programatically when possible, and used modules for flexibility and keeping DRY. As I write my code from what I want it to do and keep refactoring it, I better conceptualize how start with building with the end in mind.
- I'm excited to apply my resourcefulness and build with the plethora of open source code and libraries in the world eventually. For this project and my status as a novice, I am coding from flow, familiarizing with the fundamentals, and at times banging my head against debugging and troubleshooting. This way I can prioritize applying the fundementals over how frameworks can influence and shape my habits. 
- Running into bugs exposes me to the way code can break, and how to build my code to handle errors. By running my code on an empty HTML document, I found how my implementation of `addEventListener` breaks when `getElementbyID` doesnt find its elements, and became aware of implementing error handling as a write my code. 

## Further Projects
- [ ] In the future, I would like learn to build Webcomponents to build and use HTML by components to promote DRY. For example, the `side menu drawer`,`navbar`, and `login` components ideally should be referenced, not repeated, in each page
    - [ ] Understand how shadow DOM works and how to utilize it effectively and cleanly
    - [ ] Build my own collection of components for practice and future use in projects
- [ ] Include a drinks menu page that's rendered from a markdown document. 
- Build a working calendar booking component. Programatically check the month and add empty `<td class="day">` elements to fill up the first week calendar cells according to the date. 
    - Explore different compnents, libraries, APIs, and methods of offering a public facing way to interface with calendar booking. This might be a long project. 
        - Explore working with iCalendar format and with gCal API 


### HTML Requirements
- [x] Have at least three pages.
- [x] Keep the grid system consistent between pages as much as possible.
- [x] Use at least ten different HTML tags.
- [x] Include at least one table.
    - the calendar in /book
- [x] Include at least two forms.
- [x] Include at least one dropdown menu.
- [x] Include at least one of each of the following forms of content: 
    - [x] Text.
    - [x] Images.
    - [x] GIFs
#### CSS Requirements
- [x] Make use of inline, internal, and external styling.
- [x] Use five different CSS selectors.
- [x] Use colors that complement each other.
    - I used color picker pick and choose complementary colors from the images
- [x] Use Flexbox and/or the Bootstrap Grid. 
    - Utilized Flexbox for mobile first design
- [x] Use at least two CSS animations. 
    - there is a fun animation /about 
    - The sidebar drawer is animated

### Deliverables
- [x] Your completed project in a ZIP file, which should include all HTML files and any external CSS files. 
- [x] Include a README file that includes technical specifications and a description of your website.
- [x] A GitHub link to your project’s repository.
- [x] Include the link to your GitHub account in your README file.
- [x] Upload the GitHub link to this project to Canvas.

