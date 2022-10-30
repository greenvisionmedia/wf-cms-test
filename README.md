# wf-cms-test
## EXPLANATION
This is a repo I made for insight into how exporting webflow code works. 
  
I made a webflow project called CMS/NO-CMS. It's in the GV sites folder.  
  
I made 4 pages:
  - A homepage with CMS functionality
  - A copy of that homepage, remade without CMS
  - A product template page
  - A copy of that template page with no CMS
  
There's one collection in the project called 'Products' that I used top populate the CMS collection list. There are your standard data links, a heading linked to the 'Name' field, a paragraph linked to the 'Price' field, an image linked to the 'Image' field. There are also HTML embed elements that include CMS data, based on [this](https://university.webflow.com/lesson/use-collection-fields-in-custom-code-embeds).
  
## REPO
I exported the code for the project, it's in the folder called `CMSTEST/gv-cms-test.webflow`.  
  
I also duplicated the project and ran the Udesly extension on it. I exported that code; that's in the folder called `UDESLYTEST/gv-udesly-test.webflow`. I ran THAT code through the udesly app, and got the resulting 11ty theme, it's in the folder called `UDESLYTEST/gv-udesly-test`  
  
I also got the JSON at `webflow.com/api/sites/<project-name>/dom` for both projects and put that JSON in the corresponding folder.  
  
Hope this all helps!