__NUXT_JSONP__("/modules/15-intro-qgis/155-satellites", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab){return {data:[{path:E,_img:{}}],fetch:{"data-v-13708080:0":{module:{slug:"satellites",moduleid:155,title:F,published:true,authors:["Dare Brawley"],toc:[{id:G,depth:x,text:H},{id:I,depth:x,text:J},{id:K,depth:t,text:L},{id:M,depth:x,text:A},{id:N,depth:t,text:O},{id:P,depth:t,text:Q},{id:R,depth:t,text:S},{id:T,depth:t,text:U},{id:V,depth:x,text:W}],body:{type:"root",children:[{type:b,tag:"h1",props:{id:"making-data-from-satellites"},children:[{type:b,tag:f,props:{href:"#making-data-from-satellites",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:F}]},{type:a,value:c},{type:b,tag:y,props:{id:G},children:[{type:b,tag:f,props:{href:"#multispectral-satellite-imagery",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:H}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This module will introduce you to multispectral satellite imagery, and to the process of visualizing phenomena through 'false color composites'. As an introduction we will create false color composites using Landsat satellite imagery of Puerto Rico captured just before and after "},{type:b,tag:f,props:{href:"https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FHurricane_Maria",rel:[h,i,j],target:k},children:[{type:a,value:"Hurricane Maria"}]},{type:a,value:" (on September 17 2017 and October 3 2017)."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"After completing this exercise you will:"}]},{type:a,value:c},{type:b,tag:B,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"have familiarity with basic characteristics of multispectral satellite imagery"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"learned how to acquire Landsat satellite imagery through the U.S. Geological Survey"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"created a false color composite from multispectral Landsat dataset"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:y,props:{id:I},children:[{type:b,tag:f,props:{href:"#some-background-on-working-with-landsat-satellite-imagery",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:J}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:s,props:{},children:[{type:a,value:"Multispectral"}]},{type:a,value:" satellite imagery refers to a type of data that records specific wavelength ranges in the electromagnetic spectrum. In the case of the Landsat program, the Landsat Satellite has sensors that are able to detect light waves beyond the "},{type:b,tag:f,props:{href:"https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FVisible_spectrum",rel:[h,i,j],target:k},children:[{type:a,value:"visible light spectrum"}]},{type:a,value:" (both near infrared as well as ultra violet frequencies). Specific frequency ranges are each recorded in a distinct "},{type:b,tag:s,props:{},children:[{type:a,value:"band"}]},{type:a,value:z}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"A single Landsat 'image' is actually composed of multiple bands. Each band is an individual "},{type:b,tag:s,props:{},children:[{type:a,value:X}]},{type:a,value:" dataset where the value of each pixel corresponds to the wavelength of reflected light captured by the satellite. These datasets are stored as individual "},{type:b,tag:e,props:{},children:[{type:a,value:".tif"}]},{type:a,value:" files which appear as monochromatic images when we load them in QGIS individually."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"For example the image below shows band 5 from a Landsat 8 satellite image captured of the western portion of Puerto Rico on October 3, 2017:\n"},{type:b,tag:l,props:{alt:"satellite12a",src:"images\u002F155\u002Fsatellite12.png"},children:[]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:"Landsat 8, Band 5, October 3, 2017 Puerto Rico"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This image shows wavelengths along the electromagnetic spectrum as well as the ranges that are captured by each Landsat band."},{type:b,tag:C,props:{},children:[]},{type:a,value:c},{type:b,tag:l,props:{alt:"spectrum",src:"images\u002F155\u002FLandsat8_SpectralBands.jpg"},children:[]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:"Illustration of Landsat bands and the range of the electromagnetic spectrum that they are sensitive to, via "},{type:b,tag:f,props:{href:"https:\u002F\u002Flandsat.gsfc.nasa.gov\u002Fsatellites\u002Flandsat-9\u002Flandsat-9-bands\u002F",rel:[h,i,j],target:k},children:[{type:a,value:"NASA"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The field of remote sensing science is dedicated, in part, to understanding the different 'spectral signatures' of features on the earth's surface. In other words, what frequencies of light in the electromagnetic spectrum do various types of vegetation reflect? Do certain types of man-made surfaces reflect more ultra violet light? Does healthy vegetation reflect greater or less light in the near infrared range than vegetation in drought conditions?"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"From the answers to these questions researchers study topics like landscape change, "},{type:b,tag:f,props:{href:"https:\u002F\u002Flandsat.visibleearth.nasa.gov\u002Fview.php?id=88873",rel:[h,i,j],target:k},children:[{type:a,value:"ecological vulnerability"}]},{type:a,value:", and large scale "},{type:b,tag:f,props:{href:"https:\u002F\u002Fwww.wired.com\u002F2012\u002F07\u002Flandsat-city-change\u002F",rel:[h,i,j],target:k},children:[{type:a,value:"urban development"}]},{type:a,value:z}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"One of the ways that remote sensing scientists study these 'spectral signatures' is through creating color composite images using multiple of the monochromatic bands from multispectral imagery. This is a method by which each band is assigned a color (red, green, or blue) and its values are mapped onto an RGB color scale. We can make color composites that approximate a 'natural color' image of the earth's surface. Or we can combine different frequency ranges from the electro magnetic spectrum into "},{type:b,tag:s,props:{},children:[{type:a,value:"false color composites"}]},{type:a,value:" to reveal different phenomena on the ground.\nBelow shows natural color and 'near infrared' false color composite images:\n"},{type:b,tag:l,props:{alt:"compare",src:"images\u002F155\u002Fsatellite13.png"},children:[]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:"Comparison of natural color and false color image of Puerto Rico produced with Landsat 8"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fappliedsciences.nasa.gov\u002Fjoin-mission\u002Ftraining\u002Fenglish\u002Farset-fundamentals-remote-sensing",rel:[h,i,j],target:k},children:[{type:a,value:"This introduction"}]},{type:a,value:" to remote sensing from NASA provides a good entry point to further information on many of these concepts."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Students in this course might be interested in using Landsat satellite imagery as a base map for other analysis, or as an illustration of change over time in a particular area."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The Landsat satellite circles the globe on a 16 day cycle. "},{type:b,tag:f,props:{href:"https:\u002F\u002Flandsat.usgs.gov\u002Flandsat_acq",rel:[h,i,j],target:k},children:[{type:a,value:"This page"}]},{type:a,value:" from the USGS is helpful for identifying the days of coverage for a particular area. From it we can see that the western portion of Puerto Rico is falls between two paths of the landsat's orbit: the western portion of the island is captured on Day 1 of the cycle, and the easter portion is captured on the 10th day of the cycle."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"For a history of the Landsat Satellite program please see NASA's website "},{type:b,tag:f,props:{href:"https:\u002F\u002Flandsat.gsfc.nasa.gov\u002Fabout\u002Fhistory\u002F",rel:[h,i,j],target:k},children:[{type:a,value:u}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This exercise will walk through how to create false color composites using multiple landsat bands IN QGIS and also how to download Landsat data from USGS."}]},{type:a,value:c},{type:b,tag:v,props:{id:K},children:[{type:b,tag:f,props:{href:"#downloading-landsat-satellite-images",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:L}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Landsat satellite data is freely available and can be downloaded via a number of different websites. We will be using the USGS website: "},{type:b,tag:f,props:{href:"https:\u002F\u002Fearthexplorer.usgs.gov\u002F",rel:[h,i,j],target:k},children:[{type:a,value:"EarthExplorer"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"These are instructions for how to download Landsat satellite imagery via USGS for future reference, and for use in the assignment. These instructions are provided to assist you in obtaining your own satellite imagery for the assignment."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"But first complete this tutorial to get familiar with the steps involved -- for the tutorial landsat scenes have been provided to you, so scroll down to the next section "},{type:b,tag:s,props:{},children:[{type:a,value:A}]},{type:a,value:z}]},{type:a,value:c},{type:b,tag:D,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Select "},{type:b,tag:e,props:{},children:[{type:a,value:"Register"}]},{type:a,value:" and then follow steps to "},{type:b,tag:s,props:{},children:[{type:a,value:"Register for an EarthExplorer account"}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Use the map to zoom in to your area of interest"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"In the "},{type:b,tag:e,props:{},children:[{type:a,value:"Coordinates"}]},{type:a,value:" box select the "},{type:b,tag:e,props:{},children:[{type:a,value:"Use Map"}]},{type:a,value:" button. Coordinates around the area you are viewing will populate into this menu."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:l,props:{alt:"coordinates",src:"images\u002F155\u002Fsatellite001.png"},children:[]},{type:a,value:"\n4. Select the date range you are interested\n5. Click through to "},{type:b,tag:e,props:{},children:[{type:a,value:Y}]},{type:a,value:"\n6. In the "},{type:b,tag:e,props:{},children:[{type:a,value:Y}]},{type:a,value:" menu open the nested section for "},{type:b,tag:e,props:{},children:[{type:a,value:"Landsat"}]},{type:a,value:" and then for "},{type:b,tag:e,props:{},children:[{type:a,value:"Landsat Collection 1 Level-1"}]},{type:a,value:"\n7. Check the box next to "},{type:b,tag:e,props:{},children:[{type:a,value:"Landsat 8 OLI\u002FTIRS c1 Level-1"}]},{type:a,value:c},{type:b,tag:l,props:{alt:"datasets",src:"images\u002F155\u002Fsatellite002.png"},children:[]},{type:a,value:"\n8. Select "},{type:b,tag:e,props:{},children:[{type:a,value:"Additional Criteria"}]},{type:a,value:" we will not make any selections here in this exercise, but note for future reference that you can use this to search only for images with less than a certain percentage of cloud cover.\n9. Select "},{type:b,tag:e,props:{},children:[{type:a,value:"Results"}]},{type:a,value:". You should see a number of images for specified dates and paths. Here you can view the footprint of each image. As well as select images for download."}]},{type:a,value:c},{type:b,tag:D,props:{start:10},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Find the images you are interested in downloading."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Click on the download icon (looks like a hard drive and a green arrow) for the first image."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"In the Download Options menu that will open, select "},{type:b,tag:e,props:{},children:[{type:a,value:"Level -1 GeoTIFF Data Product"}]},{type:a,value:". This is the data set that will include all of the Landsat 8 multispectral bands discussed previously."}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:l,props:{alt:"download",src:"images\u002F155\u002Fsatellite003.png"},children:[]}]},{type:a,value:c},{type:b,tag:D,props:{start:13},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"a compressed file (a file with one of these extensions "},{type:b,tag:e,props:{},children:[{type:a,value:".zip"}]},{type:a,value:" or "},{type:b,tag:e,props:{},children:[{type:a,value:".tar.gz"}]},{type:a,value:") will download, unzip it and save in the working directory you are using for your project. (If you need help on how to unzip a file see wikihow "},{type:b,tag:f,props:{href:"https:\u002F\u002Fwww.wikihow.com\u002FUnzip-a-File",rel:[h,i,j],target:k},children:[{type:a,value:u}]},{type:a,value:")."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:y,props:{id:M},children:[{type:b,tag:f,props:{href:"#creating-false-color-composites",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:A}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"We will use a tool called the \"Semi-Automatic Classification Plugin\" (SCP) to assist us with creating composite images from the bands of the Landsat images we just downloaded. This plugin has been developed by Luca Congedo and is released under the \"Creative Commons Attribution-ShareAlike 4.0 International License.\" It is an example of the kind of open source tools being developed by the QGIS community."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Full documentation as well as related resources for this set of tools can be found "},{type:b,tag:f,props:{href:"https:\u002F\u002Ffromgistors.blogspot.com\u002Fp\u002Fsemi-automatic-classification-plugin.html",rel:[h,i,j],target:k},children:[{type:a,value:u}]},{type:a,value:z}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The SCP plugin provides a number of tools related to satellite image processing and analysis."}]},{type:a,value:c},{type:b,tag:v,props:{id:N},children:[{type:b,tag:f,props:{href:"#install-the-semi-automatic-classification-plugin",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:O}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Navigate to the "},{type:b,tag:e,props:{},children:[{type:a,value:"Plugins\u003EManage and Install Plugins"}]},{type:a,value:" from your menu bar."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Search for and install the "},{type:b,tag:e,props:{},children:[{type:a,value:"Semi-Automatic Classification Plugin"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"When the plugin has finished installing make sure the check box next to the plugin's name is checked and select "},{type:b,tag:e,props:{},children:[{type:a,value:"Close"}]},{type:a,value:".\n"},{type:b,tag:l,props:{alt:"install",src:"images\u002F155\u002FSatellite01.png"},children:[]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:"Install Plugins"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"A new toolbar and dock should have been added to your QGIS window. The are highlighted below in magenta. If these did not open for you, right click anywhere inside one of the grey toolbars surrounding the map canvas and select "},{type:b,tag:e,props:{},children:[{type:a,value:"SCP Dock"}]},{type:a,value:" in the panels section, and "},{type:b,tag:e,props:{},children:[{type:a,value:"SCP Tools"}]},{type:a,value:Z},{type:b,tag:e,props:{},children:[{type:a,value:"SCP toolbar"}]},{type:a,value:" in the toolbars section."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:l,props:{alt:"dock",src:"images\u002F155\u002Fsatellite02.png"},children:[]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:"Semi-Automatic Classification Plugin docks and menus"}]}]},{type:a,value:c},{type:b,tag:v,props:{id:P},children:[{type:b,tag:f,props:{href:"#load-landsat-data-and-create-a-band-set",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:Q}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Download the "},{type:b,tag:e,props:{},children:[{type:a,value:"landsat_sample"}]},{type:a,value:" folder from "},{type:b,tag:f,props:{href:"data\u002Flandsat_sample.zip"},children:[{type:a,value:u}]},{type:a,value:". This contains a clipped version of two landsat band sets showing the North West side of Puerto Rico before and after Hurricane Maria. They have been clipped to speed up processing times."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Save the folder within the "},{type:b,tag:e,props:{},children:[{type:a,value:"data"}]},{type:a,value:w},{type:b,tag:e,props:{},children:[{type:a,value:"original"}]},{type:a,value:" directory you have for this sequence."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"In QGIS launch a new project and then select "},{type:b,tag:e,props:{},children:[{type:a,value:"Layer"}]},{type:a,value:w},{type:b,tag:e,props:{},children:[{type:a,value:"add layer"}]},{type:a,value:w},{type:b,tag:e,props:{},children:[{type:a,value:_}]},{type:a,value:". Navigate to the "},{type:b,tag:e,props:{},children:[{type:a,value:"Shared_data"}]},{type:a,value:w},{type:b,tag:e,props:{},children:[{type:a,value:X}]},{type:a,value:w},{type:b,tag:e,props:{},children:[{type:a,value:"landsat_corrected"}]},{type:a,value:" folder in the source menu. Then choose the folder containing the September 17 Landsat image bundle "},{type:b,tag:e,props:{},children:[{type:a,value:"LC08_L1TP_005047_20170917_20170929_01_T1"}]},{type:a,value:". Select bands 1-7 in the folder (all of the files with a .tif ending) And click Open. Then click Add. Then Close the "},{type:b,tag:e,props:{},children:[{type:a,value:_}]},{type:a,value:" menu. You should now have 7 landsat bands in your layers panel."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Open the Semi Automatic Classification Plugin menu by clicking the icon circled in yellow above."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Load the landsat bands you have added to your project by clicking the "},{type:b,tag:e,props:{},children:[{type:a,value:"refresh list"}]},{type:a,value:" button circled in magenta below. Then select all of the bands listed in the Single band list and click the "},{type:b,tag:e,props:{},children:[{type:a,value:"add bands to Band list"}]},{type:a,value:" button circled below in yellow. The Semi Automatic Classification Plugin should now look like the image below, with the seven landsat bands we will use added to Band set 1."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:l,props:{alt:"Preprocessing",src:"images\u002F155\u002Fsatellite04.png"},children:[]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:"Preprocessing the band set"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Make sure to select "},{type:b,tag:e,props:{},children:[{type:a,value:"Landsat 8 OLI [bands 1,2,3,4,5,6,7]"}]},{type:a,value:" as the Wavelength quick settings and make sure that the wavelength unit matches what is listed above."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This automatically loads in information about the wavelengths of electromagnetic spectrum captured by each landsat band."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Close the SCP menu."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Then locate the "},{type:b,tag:e,props:{},children:[{type:a,value:$}]},{type:a,value:" option in the SCP Working toolbar."},{type:b,tag:C,props:{},children:[]},{type:a,value:c},{type:b,tag:l,props:{alt:$,src:"images\u002F155\u002Fsatellite05.png"},children:[]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:"Choosing band combinations"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This tool tells the program which band it should map to the red, green, or blue band of a standard RBG image. Setting band 4 and Red, band 3, as Green, and band 2 as Red will show a "},{type:b,tag:e,props:{},children:[{type:a,value:"natural color"}]},{type:a,value:" image whose colors are similar to what we are familiar with. This combination is similar to what we see with the naked eye because it uses the bands that capture electromagnetic wavelengths in the visible light spectrum. In other words for the Landsat 8 Satellite bands 4, 3, and 2 capture the wavelengths on the electromagetic spectrum that produce what our eyes see as red, green, and blue light  (see "},{type:b,tag:f,props:{href:aa,rel:[h,i,j],target:k},children:[{type:a,value:"this explanation"}]},{type:a,value:" of the wavelengths of electromagetic radiaion detected by each landsat band)."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Note: to make the image appear more saturated zoom in to a bright-ish area of the image and then click the "},{type:b,tag:e,props:{},children:[{type:a,value:"Local cumulative cut stretch"}]},{type:a,value:" button (circled in black above)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Further information about band combinations and the kinds of phenomena they make visible can be found "},{type:b,tag:f,props:{href:aa,rel:[h,i,j],target:k},children:[{type:a,value:"in this overview guide from the USGS about the different features of each band"}]},{type:a,value:Z},{type:b,tag:f,props:{href:"https:\u002F\u002Fwww.usgs.gov\u002Ffaqs\u002Fwhat-are-band-designations-landsat-satellites?qt-news_science_products=0#qt-news_science_products",rel:[h,i,j],target:k},children:[{type:a,value:"this guide"}]},{type:a,value:" to the different bands in each generation of Landsat. This guide provides an overview of "},{type:b,tag:f,props:{href:"https:\u002F\u002Fgisgeography.com\u002Flandsat-8-bands-combinations\u002F",rel:[h,i,j],target:k},children:[{type:a,value:"different common band combinations"}]},{type:a,value:"Take a look through these resources and test out combinations that are interesting to you."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"A color composite using "},{type:b,tag:e,props:{},children:[{type:a,value:"4-3-2"}]},{type:a,value:" for a 'natural color' image:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:l,props:{alt:"natural",src:"images\u002F155\u002Fsatellite09.png"},children:[]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:"A natural color image"}]},{type:b,tag:C,props:{},children:[]},{type:a,value:"\nOr to view a 'near infrared' image set the RGB band values to "},{type:b,tag:e,props:{},children:[{type:a,value:"5-4-3"}]},{type:a,value:". This type of 'false color composite' image is similar to infrared aerial photography and highlights vegetation in shades of red. Try these and others."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:l,props:{alt:"infrared",src:"images\u002F155\u002Fsatellite10.png"},children:[]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:"A false color image showing the near infrared range with red values"}]},{type:a,value:"\nThe combination of bands "},{type:b,tag:e,props:{},children:[{type:a,value:"6-4-2"}]},{type:a,value:" is particularly well suited for looking at agriculture. Band 6 includes short-wave infrared (SWIR) light and vegetation appears as shades of green and urban areas or bare soil appear as brown\u002Fmagenta."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:l,props:{alt:"agriculture",src:"images\u002F155\u002Fsatellite14.png"},children:[]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:"A false color image with short-wave infrared highlights agriculture"}]}]},{type:a,value:c},{type:b,tag:v,props:{id:R},children:[{type:b,tag:f,props:{href:"#export-false-color-composites",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:S}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"To export a false color composite as a GeoTiff image (that freezes the given false color composite you've chosen) right click on the "},{type:b,tag:e,props:{},children:[{type:a,value:"virtual band set"}]},{type:a,value:" in the layers menu. Select "},{type:b,tag:e,props:{},children:[{type:a,value:"save as"}]},{type:a,value:" and choose "},{type:b,tag:e,props:{},children:[{type:a,value:"rendered image"}]},{type:a,value:" as your output mode, and select a location and file name to save the image. This false color composite is now saved, you no longer have access to the raw data of each of the Landsat bands that originally comprised it but you can work with it as a base map or for other uses or bring it into a different program."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If you'd like you can repeat the steps above on the second Landsat image bundle we downloaded to compare false color composites before and after Hurricane Maria to see the visible flooding."}]},{type:a,value:c},{type:b,tag:v,props:{id:T},children:[{type:b,tag:f,props:{href:"#take-it-further-supervised-classification",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:U}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Beyond false color composites researchers use the spectral signatures for different features of the earths surface to classify land use and land cover and a variety of other phenomena. The "},{type:b,tag:f,props:{href:"https:\u002F\u002Fwww.usgs.gov\u002Fcore-science-systems\u002Fscience-analytics-and-synthesis\u002Fgap\u002Fscience\u002Fland-cover",rel:[h,i,j],target:k},children:[{type:a,value:"USGS for example"}]},{type:a,value:" produces and maintains data on land use and land cover which it creates using Landsat and other remotely sensed data."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"You can create your specific land use classifications using something called supervised classification. This is beyond the required scope of this assignment but if you are interested in going further please follow the instructions for using the SCP for creating your own land use classification contained in this external tutorial produced by the Applied Remote Sensing Training Program at NASA"},{type:b,tag:f,props:{href:"https:\u002F\u002Fappliedsciences.nasa.gov\u002Fjoin-mission\u002Ftraining\u002Fenglish\u002Farset-land-cover-classification-satellite-imagery",rel:[h,i,j],target:k},children:[{type:a,value:u}]}]},{type:a,value:c},{type:b,tag:y,props:{id:V},children:[{type:b,tag:f,props:{href:"#challenge",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:W}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Create a map using Landsat Satellite imagery that shows land use change over time. Download two (or more!) images captured by the Landsat 8 satellite of the same location on different dates, import them into QGIS and symbolize with a false color composite that helps to highlight a change in the landscape that is visible in your chosen location."}]},{type:a,value:c},{type:b,tag:"h4",props:{id:"requirements"},children:[{type:b,tag:f,props:{href:"#requirements",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:"Requirements"}]},{type:a,value:c},{type:b,tag:B,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Your final work must be a designed map composition (gifs are okay here too)"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Your designed map composition must include:\n"},{type:b,tag:B,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"title"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"legend"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"scale bar"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"north arrow (your map doesn't need to have north pointing vertically...)"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"citations for all data sources (please use Chicago style or an equivalent)"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"projection used"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]}]},dir:"\u002Fmodules\u002F15-intro-qgis",path:E,extension:".md",createdAt:ab,updatedAt:ab}},"data-v-9c60a860:0":{_error:{message:"Cannot read property 'forEach' of undefined",statusCode:500}}},mutations:[]}}("text","element","\n","p","code","a","li","nofollow","noopener","noreferrer","_blank","content-img","true",-1,"span","icon","icon-link","em","strong",3,"here","h3","\u003E",2,"h2",".","Creating False Color Composites","ul","br","ol","\u002Fmodules\u002F15-intro-qgis\u002F155-satellites","Making Data from Satellites","multispectral-satellite-imagery","Multispectral satellite imagery","some-background-on-working-with-landsat-satellite-imagery","Some Background on Working with Landsat Satellite Imagery","downloading-landsat-satellite-images","Downloading Landsat satellite images","creating-false-color-composites","install-the-semi-automatic-classification-plugin","Install the Semi-Automatic Classification Plugin","load-landsat-data-and-create-a-band-set","Load Landsat data and create a \"Band Set\"","export-false-color-composites","Export false color composites","take-it-further-supervised-classification","Take it further: supervised classification","challenge","Challenge","raster","Data Sets"," and ","Add raster layer","RGB","https:\u002F\u002Fwww.usgs.gov\u002Ffaqs\u002Fwhat-are-best-landsat-spectral-bands-use-my-research?qt-news_science_products=0#qt-news_science_products","2022-05-09T05:59:46.570Z")));