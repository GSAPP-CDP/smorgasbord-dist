__NUXT_JSONP__("/modules/4-grasshopper-intro/47-documentation-best-practices", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U){return {data:[{path:t,_img:{}}],fetch:{"data-v-13708080:0":{module:{slug:u,moduleid:47,title:v,published:true,authors:["Luc Wilson"],toc:[{id:w,depth:n,text:x},{id:y,depth:n,text:z},{id:A,depth:n,text:B},{id:C,depth:p,text:D},{id:E,depth:p,text:F},{id:G,depth:p,text:H},{id:I,depth:p,text:J},{id:K,depth:n,text:L},{id:M,depth:n,text:N}],body:{type:"root",children:[{type:b,tag:"h1",props:{id:u},children:[{type:b,tag:g,props:{href:"#grasshopper-documentation-best-practices",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:v}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{alt:f,src:"images\u002F4-4-0_Overview-Image.PNG"},children:[]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"Documentation best practices applied to the parametric tower."}]}]},{type:a,value:c},{type:b,tag:o,props:{id:w},children:[{type:b,tag:g,props:{href:"#module-summary",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Before we develop our parametric tower further, we are going to pause and introduce best practices for developing clean and clear grasshopper definitions through techniques for organizing, grouping, labeling and color coding."}]},{type:a,value:c},{type:b,tag:o,props:{id:y},children:[{type:b,tag:g,props:{href:"#why-is-this-important",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:z}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"You might be thinking, why am I taking a break from developing an awesome parametric tower just to organize and label my definition? That sounds "},{type:b,tag:m,props:{},children:[{type:a,value:"super boring"}]},{type:a,value:" and a waste of time. Much like in computer programming, maintaining best practices for clean and clear definitions is critical for building and maintaining complex parametric models, creating re-usable and modular definitions, and allowing for collaboration with others. Taking the time to implement best practices while your develop you definitions will also save you time and frustration later."}]},{type:a,value:c},{type:b,tag:o,props:{id:A},children:[{type:b,tag:g,props:{href:"#tutorial",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:B}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The following sequence will take you through best practices for developing a grasshopper definition."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Follow these high level guiding principles as you work:"}]},{type:a,value:c},{type:b,tag:"ol",props:{},children:[{type:a,value:c},{type:b,tag:O,props:{},children:[{type:a,value:"Model in straight lines that following the primary flow of geometry or data -- this allows you or a collaborator to easily follow the flow of your definition."}]},{type:a,value:c},{type:b,tag:O,props:{},children:[{type:a,value:"Give yourself plenty of space -- this makes it easier for you or a collaborator to make revisions or additions in the future."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Take a look at the intro image again for an illustration of straight lines and plenty of space."}]},{type:a,value:c},{type:b,tag:q,props:{id:C},children:[{type:b,tag:g,props:{href:"#1-organize-inputs-add-parameter-holders-and-label",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:D}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{alt:f,src:"images\u002F4-4-1_Organizing-Inputs_v2.PNG"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"First, put all of your inputs in vertical alignment on the left side of the canvas. This includes pulling out any inputs you may have introduced later in the definition. Having all inputs in one place makes editing and combining with other definitions easy."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Next, put the inputs through a parameter holder of the appropriate geometry type, ie \"Point,\" \"Number,\" \"Brep,\" etc. Name both the input itself (like the slider) and the parameter holder to reflect the input. Right click on the input and parameter holder to edit the name. (Right clicking on anything in Grasshopper will bring up a menu of options that includes editing the name.) For the parameter holder, keep the text for the geometry or data type, ie \"Pt: Tower Location.\" We will also introduce labeled parameter holders throughout the definition in a similar manner. This makes the definition easier to revisit and more modular."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{alt:f,src:"images\u002F4-4-1_Labeling.gif"},children:[]}]},{type:a,value:c},{type:b,tag:P,props:{className:[Q]},children:[{type:b,tag:R,props:{className:[S,T]},children:[{type:b,tag:U,props:{},children:[{type:a,value:"Tip\nIf you don't know (or forgot) where a particular parameter or component is on the toolbar ribbon\ndo a left mouse double click anywhere on the canvas to pull up a search option for the parameter or\ncomponent. Once you have found the component ctrl + alt + left click will show its location on the toolbar.\n"}]}]}]},{type:a,value:c},{type:b,tag:q,props:{id:E},children:[{type:b,tag:g,props:{href:"#2-group-and-label-sequences-of-components",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:F}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{alt:f,src:"images\u002F4-4-2_Grouping-Labeling.PNG"},children:[]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:r}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{alt:f,src:"images\u002F4-4-2_Grouping-Labeling_After.PNG"},children:[]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:s}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Next, group and label any sequences of components for which you can you can concisely describe their operation, ie \"Moves and Rotates Tower Floors.\" Add labeled parameter holders to the outputs of the group."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{alt:f,src:"images\u002F4-4-3_Grouping-Labeling-p2.PNG"},children:[]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:r}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{alt:f,src:"images\u002F4-4-3_Grouping-Labeling-p2-after.PNG"},children:[]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:s}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"As you introduce parameter holders, more is better then too few. Having these are key to the modularity of your definition. In the example above \"Pt: Floor Subdivisions\" occurs twice right next to each other, which might have you scratching your head. This is because the same input goes into two different sequences of operations. Providing each with its own input allows you to move and modify them independently."}]},{type:a,value:c},{type:b,tag:q,props:{id:G},children:[{type:b,tag:g,props:{href:"#3-organizing-outputs",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:H}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{alt:f,src:"images\u002F4-4-4_Outputs.PNG"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Next, put all of the outputs into labeled parameter holders and pull all of the outputs into vertical alignment on the right. (More on the use of colored groupings in the next section.) Doing this for both the inputs and outputs makes it easier to cluster your definitions, making them modular and easier to integrate with other definitions in the future."}]},{type:a,value:c},{type:b,tag:q,props:{id:I},children:[{type:b,tag:g,props:{href:"#4-colors--notes",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:J}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{alt:f,src:"images\u002F4-4-6_Input-Colors-Notes.PNG"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Finally, develop a set of colors for your groups and panels to indicate different categories of information, such as inputs, outputs, action items, intermediate steps, etc. In the two examples above green = outputs, pink = static inputs, blue = dynamic inputs and white = intermediate steps. Right click on a group or panel to change its color."}]},{type:a,value:c},{type:b,tag:P,props:{className:[Q]},children:[{type:b,tag:R,props:{className:[S,T]},children:[{type:b,tag:U,props:{},children:[{type:a,value:"Tip\nMatching colors can be cumbersome. Once you've developed color conventions,\nPut examples of each group and panel in the upper left of each of your definitions.\nTo make applying a specific color faster, right click on the group or panel with the\ncolor you want to match and select \"make color default\" or \"set default color.\"\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"We've been labeling groups and parameters as we go, but also introducing panels with more detailed notes can be useful. In the example above we've added a note to explain the dynamic input."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{alt:f,src:"images\u002F4-4-5_Panel-Colors.PNG"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Use group or panel colors within the body of the definition to call out specific items that may be important later. For example, we did not pull the Scale input into vertical alignment with the other static inputs to the left of the definition. Why not? In this case it is because we are going to modify it in a future tutorial. Because of that we have given it the \"static input\" color so that it is easy to find in the future."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If your completed definition isn't working as it should, here is a "},{type:b,tag:g,props:{href:"https:\u002F\u002Fgithub.com\u002FGSAPP-CDP\u002FSmorgasbord\u002Fraw\u002Fmain\u002Fsrc\u002Fcontent\u002Fmodules\u002F4-grasshopper-intro\u002FDefinitions\u002F4-7_Complete.gh",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"completed grasshopper definition"}]},{type:a,value:" of this tutorial."}]},{type:a,value:c},{type:b,tag:o,props:{id:K},children:[{type:b,tag:g,props:{href:"#assignment",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:L}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Develop your own color and naming conventions by applying these best practices to the parametric tower you have developed so far. There is no standard best practices in grasshopper. Use these as a guide to develop what works best for you."}]},{type:a,value:c},{type:b,tag:o,props:{id:M},children:[{type:b,tag:g,props:{href:"#bonus",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:N}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"It was years before the author of this module developed and enforced their own best practices. Below is an example of what can happen if you develop complex definitions without best practices and the result when you take "},{type:b,tag:m,props:{},children:[{type:a,value:"days"}]},{type:a,value:" to retroactively add them."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{alt:f,src:"images\u002F4-4-7_Bonus-Before.jpg"},children:[]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:r}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{alt:f,src:"images\u002F4-4-7_Bonus-After.jpg"},children:[]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:s}]}]}]},dir:"\u002Fmodules\u002F4-grasshopper-intro",path:t,extension:".md",createdAt:"2022-04-08T22:08:13.056Z",updatedAt:"2022-04-08T22:08:13.057Z"}},"data-v-9c60a860:0":{_error:{message:"Cannot read property 'forEach' of undefined",statusCode:500}}},mutations:[]}}("text","element","\n","p","content-img","description","a","true",-1,"span","icon","icon-link","em",2,"h2",3,"h3","Before","After","\u002Fmodules\u002F4-grasshopper-intro\u002F47-documentation-best-practices","grasshopper-documentation-best-practices","Grasshopper Documentation Best Practices","module-summary","Module Summary","why-is-this-important","Why is this important?","tutorial","Tutorial","1-organize-inputs-add-parameter-holders-and-label","1. Organize Inputs, Add Parameter Holders and Label","2-group-and-label-sequences-of-components","2. Group and Label Sequences of Components","3-organizing-outputs","3. Organizing Outputs","4-colors--notes","4. Colors & Notes","assignment","Assignment","bonus","Bonus","li","div","nuxt-content-highlight","pre","language-text","line-numbers","code")));