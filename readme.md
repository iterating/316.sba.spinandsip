# Spin and Sip Website
[Live website](https://iterating.github.io/ps-sba-html-css/)
[Github source](https://github.com/iterating/ps-sba-html-css)

I'm inspired by how Nuxt/Vue/React works and started this project with a goal of dynamically rendering most of the content. 

## Objectives
- Populate homepage dynamically from yml file
- Programatically create cards and sections according to yml data
- Prioritize UX
- 
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
    - Utilized Flexbox  for mobile first design
- [x] Use at least two CSS animations. 
    - there is a fun animation /about 
    - The sidebar drawer is animated

### Deliverables
- [x] Your completed project in a ZIP file, which should include all HTML files and any external CSS files. 
- [x] Include a README file that includes technical specifications and a description of your website.
- [ ] Upload this ZIP file to Canvas.
- [x] A GitHub link to your project’s repository.
- [x] Include the link to your GitHub account in your README file.
- [x] Upload the GitHub link to this project to Canvas.

## Tools Used
- jsyaml for processing yaml into json 

# Outcomes
- Learned about some details of using modules. We cant directly call form the export modules file, We need to a seperate file to import the exported modules and then we can call them from there. 
- Designed and built a cohesive theme that conveys critical information first that is applied though the website and each element. This work requires much time consuming design and implementation. It explains why many websites nowadays look similar to each other. They share common UI components for user familiartity and developer efficiency.   
    - I challenged myself to use overlays and overcoming to have some elements shrink with device size and some elements stay at a readable size. I accomplished this with CSS selectors and flexbox.  
- In the future, I would like learn to build Webcomponents to build and use HTML by components to promote DRY. For example, the `side menu drawer`,`navbar`, and `login` components ideally should be referenced, not repeated, in each page