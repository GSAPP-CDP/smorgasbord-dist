__NUXT_JSONP__("/modules/4-grasshopper-intro/49-Procedural-Rules", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad){return {data:[{path:E,_img:{}}],fetch:{"data-v-13708080:0":{module:{slug:F,moduleid:49,title:G,published:true,authors:["Luc Wilson"],toc:[{id:H,depth:o,text:I},{id:J,depth:o,text:K},{id:L,depth:u,text:M},{id:N,depth:o,text:O},{id:P,depth:u,text:Q},{id:R,depth:u,text:S},{id:T,depth:u,text:U},{id:V,depth:u,text:W},{id:X,depth:o,text:Y},{id:Z,depth:o,text:_},{id:$,depth:o,text:aa}],body:{type:"root",children:[{type:b,tag:"h1",props:{id:F},children:[{type:b,tag:f,props:{href:"#parametric-to-procedural",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:G}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{alt:h,src:"images\u002F4-6-0_Teaser.gif"},children:[]}]},{type:a,value:c},{type:b,tag:p,props:{id:H},children:[{type:b,tag:f,props:{href:"#module-summary",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:I}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"So far we've created a tower with a direct relationship between the input (slider controlling rotation step) and the Output (rotation of each tower floor) of our parametric model. In this module we are going to introduce intermediate rules or "},{type:b,tag:n,props:{},children:[{type:a,value:"procedural relationships"}]},{type:a,value:" for generating geometry based on data, in this case relating the size of the windows to the view analysis from the previous module."}]},{type:a,value:c},{type:b,tag:p,props:{id:J},children:[{type:b,tag:f,props:{href:"#why-is-this-important",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:K}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Strictly parametric modeling can only get you so far. By introducing procedural relationships into our grasshopper definitions we are adding intelligence (essentially designing algorithms) that is beyond what is possible just based on a set of inputs, such as geometry and number sliders. It will allow us to model complex systems not otherwise possible."}]},{type:a,value:c},{type:b,tag:v,props:{id:L},children:[{type:b,tag:f,props:{href:"#what-is-procedural-modeling-and-how-is-it-different-form-parametric-modeling",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:M}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{alt:h,src:"images\u002F4-6-0_NoMan.PNG"},children:[]}]},{type:a,value:c},{type:b,tag:w,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:n,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fwww.theatlantic.com\u002Ftechnology\u002Farchive\u002F2016\u002F02\u002Fartificial-universe-no-mans-sky\u002F463308\u002F",rel:[q,r,s],target:t},children:[{type:a,value:"Inside the Artificial Universe That Creates Itself"}]}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:x,props:{},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Procedural modeling or "},{type:b,tag:f,props:{href:ab,rel:[q,r,s],target:t},children:[{type:a,value:"procedural generation"}]},{type:a,value:" is a technique of creating 3D models from a set of rules and is most commonly used in video games. It is how you get the infinite worlds in Minecraft or infinite galaxies with planets and their flora and fauna in No Man's Sky. These games have a random seed (number) as an input for each new world created from a complex set of rules for the generation of the elements that make each unique world. The game designers are not manually modeling each element of the world but rather designing the rules by which the world is generated given a set of inputs."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Sound familiar? But wait, isn't that what we've already been doing with our parametric tower? Yes and no. In our parametric tower there is a direct relationship between static inputs and the form. In a procedural model there are a set of intermediate rules that drive dynamic variation. This allows you to create complex variation from a relatively simple set of inputs."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Sounds confusing? Yeah, it is. You could probably argue that procedural modeling is just a type of parametric modeling, but lets illustrate with some examples of procedural relationships to clarify the difference."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:n,props:{},children:[{type:a,value:"In an urban scale model having building density defined by the distance from transit is a procedural rule. The density is dynamically generated by each individual buildings' distance to transit, the closer the higher the density."}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:n,props:{},children:[{type:a,value:"In a urban scale model having the height of each building defined by the size of the floor plate to maintain a target gross floor area is a procedural rule. (ie the smaller the floor plate the tall the building.)"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:n,props:{},children:[{type:a,value:"In a building scale model having the size of your windows defined by the quality of the view is a procedural rule. The size is dynamically generate by each individual windows view quality."}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Sounds like our module? It sure is! Through this and future modules we will continue to introduce procedural relationships, driven by both data (as is the case with this module) and geometry to continue to illustrate the power of procedural modeling in creating complex systems."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{alt:h,src:"images\u002F4-6-0_Minecraft.PNG"},children:[]}]},{type:a,value:c},{type:b,tag:w,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:n,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fwww.engadget.com\u002F2015-03-04-how-minecraft-worlds-are-made.html",rel:[q,r,s],target:t},children:[{type:a,value:"Here's how 'Minecraft' creates its gigantic worlds"}]}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:x,props:{},children:[]},{type:a,value:c},{type:b,tag:p,props:{id:N},children:[{type:b,tag:f,props:{href:"#tutorial",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:O}]},{type:a,value:c},{type:b,tag:v,props:{id:P},children:[{type:b,tag:f,props:{href:"#1-best-practices",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:Q}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{alt:h,src:"images\u002F4-6-1_Clean-Up.gif"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"House keeping! Lets do some clean up before we get started introducing procedural relationships. We are going to dynamically generate the size of our windows, which are created by scaling our vertical panels, so lets make room between the view analysis and the generation of our windows."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{alt:h,src:"images\u002F4-6-1_Scale-Factor.PNG"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Pull the portion of the definition generating the windows to the right along with all outputs (view analysis included.) Introduce intermediate parameter holders along the way. By adding space and labeling groups previously it is relatively easy to add in new content to your definition. Continue to adjust spacing as needed as you go through the tutorial."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{alt:h,src:"images\u002F4-6-1_Space-Lines.PNG"},children:[]}]},{type:a,value:c},{type:b,tag:w,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:n,props:{},children:[{type:a,value:"Intermediate parameter holders highlighted. \"--\u003E\" indicates where we will be getting our data to procedural scale the windows"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:x,props:{},children:[]},{type:a,value:c},{type:b,tag:v,props:{id:R},children:[{type:b,tag:f,props:{href:"#1-inputs",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:S}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{alt:h,src:"images\u002F4-6-2_Inputs.PNG"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"We are going to introduce two types of procedural generation, each based on the metrics created in the previous module. We will use the "},{type:b,tag:e,props:{},children:[{type:a,value:y}]},{type:a,value:" coming our of the "},{type:b,tag:e,props:{},children:[{type:a,value:"Division"}]},{type:a,value:" component and the "},{type:b,tag:e,props:{},children:[{type:a,value:"Is a good view?"}]},{type:a,value:" boolean pattern coming out of the "},{type:b,tag:e,props:{},children:[{type:a,value:"Larger Than"}]},{type:a,value:" component for our procedural modeling. Add labeled parameter holders and copy over to be in vertical alignment with the "},{type:b,tag:e,props:{},children:[{type:a,value:"Srf: Panels"}]},{type:a,value:" parameter holder input of the group that generates the windows"}]},{type:a,value:c},{type:b,tag:v,props:{id:T},children:[{type:b,tag:f,props:{href:"#2-procedural-generation-based-on-view-distance",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:U}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The first procedural relationship will be driven by "},{type:b,tag:e,props:{},children:[{type:a,value:y}]},{type:a,value:". We will use the "},{type:b,tag:e,props:{},children:[{type:a,value:"remap component"}]},{type:a,value:" to remap the 0 to 1 domain of the % distance values to a number of different domains."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{alt:h,src:"images\u002F4-6-3_P1.PNG"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Add the Remap component to the canvas, plug the distance per window in the (V) input -- these are our values to remap -- and a panel with a domain of "},{type:b,tag:e,props:{},children:[{type:a,value:"0.4 to 0.8"}]},{type:a,value:" in the (T) input. (S) is the looking for the source domain, however, the default domain is 0 to 1, which matches the domain of distance to view so we don't need to change any thing."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Next input the "},{type:b,tag:e,props:{},children:[{type:a,value:"remapped domain"}]},{type:a,value:" (R) in the "},{type:b,tag:e,props:{},children:[{type:a,value:"scale factor"}]},{type:a,value:" (F) of the Scale component. Windows with no views are scaled by 40% and windows with unobstructed views are scaled by 80% and all other windows are scaled proportionally to their remapped values along the 0.4 to 0.8 domain. Adjust the values in the domain to see how they control the size of the windows."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{alt:h,src:"images\u002F4-6-3_Remap.PNG"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The domain we've choosen makes the assumption that a better view gets a bigger window. Good views drive value and glazing is expensive so why waste larger windows on poor views, right? But what if you wanted to increase daylight to rooms with poor daylight access and reduce solar heat gain to rooms with too much daylight access? (Open views are a reasonable proxy for daylight.) Lets reverse our domain to implement this procedural relationship. Edit the panel containing the target domain (T) from .4 to .8 to "},{type:b,tag:e,props:{},children:[{type:a,value:".8 to .4"}]},{type:a,value:". Now the relationship has flipped! Worse views get a larger window and better views get a smaller one."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{alt:h,src:"images\u002F4-6-3_Remap-Inverse.PNG"},children:[]}]},{type:a,value:c},{type:b,tag:z,props:{className:[A]},children:[{type:b,tag:B,props:{className:[C,D]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"Tip\nSo far we have been visualizing our parametric tower window geometry using the red transparent material that\nis the default in grasshopper. Lets introduce some visualization components to improve the representation of our\ntower. First, add the 'Custom Preview' component to the canvas. Plug in the 'Brep: Walls' to the (G) input.\nNext add a 'Colour Swatch' component and plug it into (M). You'll notice that it displays as a flat white\nwith no edges making it difficult to see. To remedy this add the 'Brep Edges' component and plug in\nthe walls. Hide the Brep Edges preview and plug the (En) and (Ei) outputs into a 'Merge' component. Make\na copy of the Custom Preview and Colour Swatch. Plug the merged Brep edges into the (G) and change their\ncolor by right clicking on the white portion of the Colour Swatch to bring up a dialogue box.\n"}]}]}]},{type:a,value:c},{type:b,tag:z,props:{className:[A]},children:[{type:b,tag:B,props:{className:[C,D]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"Tip\nWhy did we Merge the Brep Edges? Why not just hold shift to add both to the Custom Preview. Using shift can\nmessy fast. It also makes it cumbersome to change the inputs if you need to later. As best practice, use the Merge\ncomponent to first merge multiple data or geometry sources rather the using shift.\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{alt:h,src:"images\u002F4-6-3_Vis-Tip.PNG"},children:[]}]},{type:a,value:c},{type:b,tag:v,props:{id:V},children:[{type:b,tag:f,props:{href:"#3-procedural-generation-based-on-view-distance-threshold",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:W}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"In practice, having the amount of variation we have in our windows with the above method of generating windows would be prohibitively expensive to construct. Lets use our other metric, the one based on a view distance threshold to create two types of windows: one for windows below the threshold and one for windows above it."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{alt:h,src:"images\u002F4-6-4_P2-Inputs.PNG"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"We are going to use "},{type:b,tag:e,props:{},children:[{type:a,value:"Dispatch"}]},{type:a,value:" to separate our panels before scaling into two separate lists. "},{type:b,tag:e,props:{},children:[{type:a,value:ac}]},{type:a,value:" needs geometry (G) and a center point (C) so we will need to dispatch both the panels and their center points. Make parameter holders for each and bring them down to where you have "},{type:b,tag:e,props:{},children:[{type:a,value:"Bool: Is a Good View?"}]},{type:a,value:"parameter."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Next we are going to use the Bool: Is Good View to Dispatch the Pt: Center and Srf: Panels. To maintain the order of the points and surfaces to correctly merge back with the rest of the definition we need to graft all the inputs: Points, Surfaces and Boolean."}]},{type:a,value:c},{type:b,tag:z,props:{className:[A]},children:[{type:b,tag:B,props:{className:[C,D]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"Tip\nBefore making data tree changes (grafting, flattening, etc.) across multiple components or parameters\nfirst lock the solver by right clicking any where on the canvas and selecting 'lock solver'. This is to\nprevent grasshopper from solving before you finish making all the data tree changes. While it doesn't matter\nin this case, doing this will prevent data tree mismatches that could cause Grasshopper to crash.\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{alt:h,src:"images\u002F4-6-4_P2-Locked-Solver.PNG"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"So why is it necessary to graft the inputs before dispatching? Doing this maintains an empty branch for items that have been dispatched. This way when we merge back together, we maintain the original order."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{alt:h,src:"images\u002F4-6-4_P2-Data-Tree.PNG"},children:[]}]},{type:a,value:c},{type:b,tag:w,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:n,props:{},children:[{type:a,value:"Check out the two sets of dispatched lists. (A) has empty branches where (B) has items and (B) has empty branches where (A) has items."}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:x,props:{},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{alt:h,src:"images\u002F4-6-4_P2-Complete.PNG"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Finally, add two "},{type:b,tag:e,props:{},children:[{type:a,value:ac}]},{type:a,value:" components and plug the (A) outputs for the Surfaces and Points into (G) and (C) respectively of the Scale. Repeat for (B) outputs. Plug a panel with "},{type:b,tag:e,props:{},children:[{type:a,value:".4"}]},{type:a,value:" in the (F) input of the Scale for the panels with good views (A)and plug a panel with "},{type:b,tag:e,props:{},children:[{type:a,value:".8"}]},{type:a,value:" into the Scale Factor (F) for the (B) output. "},{type:b,tag:e,props:{},children:[{type:a,value:"Merge"}]},{type:a,value:" the outputs of Scaling and replace the input to the "},{type:b,tag:e,props:{},children:[{type:a,value:"Brep Edges"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"We've replicated the goal of the previous procedural rule -- good views get smaller windows and poor views get larger windows -- but with just two window types instead of dozens."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If your completed definition isn't working as it should, here is a "},{type:b,tag:f,props:{href:"https:\u002F\u002Fgithub.com\u002FGSAPP-CDP\u002FSmorgasbord\u002Fraw\u002Fmain\u002Fsrc\u002Fcontent\u002Fmodules\u002F4-grasshopper-intro\u002FDefinitions\u002F4-9_Complete.gh",rel:[q,r,s],target:t},children:[{type:a,value:"completed grasshopper definition"}]},{type:a,value:" of this tutorial."}]},{type:a,value:c},{type:b,tag:p,props:{id:X},children:[{type:b,tag:f,props:{href:"#conclusion",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:Y}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"There was a lot of talk at the start of this module about the power of procedural modeling to realize complex systems, so creating dynamically sized windows might feel underwhelming. (We thought it was pretty cool.) Don't worry, through both of the second Grasshopper Intro sequences you will continue to "},{type:b,tag:n,props:{},children:[{type:a,value:"design"}]},{type:a,value:" procedural rules and develop complex models."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"As you design procedural rules there will continue to be less and less of a direct relationship between the inputs and outputs, which obscures the assumptions you've made and potential bias in your model. Essentially creating a 'black box'. Diagram and document your procedural rules to make transparent the decision making and intent of your computational design model. This will also make it easier to return to and edit your definitions."}]},{type:a,value:c},{type:b,tag:p,props:{id:Z},children:[{type:b,tag:f,props:{href:"#assignment",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:_}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Try introducing another procedural rule. Use the "},{type:b,tag:e,props:{},children:[{type:a,value:y}]},{type:a,value:" to procedurally scale the tower floors to create baloneys based on the average view quality of each floor. You'll need to change the "},{type:b,tag:e,props:{},children:[{type:a,value:"target domain"}]},{type:a,value:" of the remmaper and determine a view score for each floor since you currently have scores per window. Compare the data tree structure for your "},{type:b,tag:e,props:{},children:[{type:a,value:y}]},{type:a,value:" and your "},{type:b,tag:e,props:{},children:[{type:a,value:"Srf: Floors"}]},{type:a,value:". They match but have differen list lengths per branch. How can you aggregae the view scores?"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{alt:h,src:"images\u002F4-6-5_Assignment.gif"},children:[]}]},{type:a,value:c},{type:b,tag:w,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:n,props:{},children:[{type:a,value:"Floors at the top with better views get a larger balconey."}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:x,props:{},children:[]},{type:a,value:c},{type:b,tag:p,props:{id:$},children:[{type:b,tag:f,props:{href:"#additional-resources",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:aa}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:ad,props:{},children:[{type:b,tag:f,props:{href:ab,rel:[q,r,s],target:t},children:[{type:a,value:"More on Procedural Generation in General."}]},{type:a,value:" There are not a lot of good overviews of procedural generation. This Wikipedia article is actually pretty good."}]},{type:a,value:c},{type:b,tag:ad,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fstatic1.squarespace.com\u002Fstatic\u002F568ee2b4cbced6419694f1fc\u002Ft\u002F5c78636b1905f46a4b109aa3\u002F1551393648032\u002F63_How+to+Generate+a+Thousand+Master+Plans-A+Framework.pdf",rel:[q,r,s],target:t},children:[{type:a,value:"\"How to Generate a Thousand Master Plans\""}]},{type:a,value:" Outlines a computational urban design methodology, illustrating how procedural generation can be used to model a complex system (ie a neighborhood.)"}]},{type:a,value:c}]}]},dir:"\u002Fmodules\u002F4-grasshopper-intro",path:E,extension:".md",createdAt:"2022-04-08T22:08:13.058Z",updatedAt:"2022-04-08T22:08:13.087Z"}},"data-v-9c60a860:0":{_error:{message:"Cannot read property 'forEach' of undefined",statusCode:500}}},mutations:[]}}("text","element","\n","p","code","a","content-img","description","true",-1,"span","icon","icon-link","em",2,"h2","nofollow","noopener","noreferrer","_blank",3,"h3","blockquote","br","% distance per window","div","nuxt-content-highlight","pre","language-text","line-numbers","\u002Fmodules\u002F4-grasshopper-intro\u002F49-Procedural-Rules","parametric-to-procedural","Parametric to Procedural","module-summary","Module Summary","why-is-this-important","Why is this important?","what-is-procedural-modeling-and-how-is-it-different-form-parametric-modeling","What is procedural modeling and how is it different form parametric modeling?","tutorial","Tutorial","1-best-practices","1. Best Practices","1-inputs","1. Inputs","2-procedural-generation-based-on-view-distance","2. Procedural generation based on view distance","3-procedural-generation-based-on-view-distance-threshold","3. Procedural generation based on view distance threshold","conclusion","Conclusion","assignment","Assignment","additional-resources","Additional Resources","https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FProcedural_generation","Scale","li")));