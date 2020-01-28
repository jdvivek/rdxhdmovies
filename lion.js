/*VARIABLES*/

//set frame id
var movieframeId='proxyserverIframe';


/*Html function and events*/


function onMyFrameLoad(frame) {

  //clear console
   console.clear();
   console.log(frame);
   //remove links
RemoveLinksOpenInAnotherTab();
//make visible
document.getElementById(movieframeId).style.display="block";
setInterval(function(){ 
  
   window['FWVc9MragE']=false; 
   
   }, 500);


};


/*UTLITY FUNCTIONS*/

//Get Iframe 
function GetMovieIframeDocument()
{
  //myframe is
  var movieFrame=document.getElementById(movieframeId);
	var doc =movieFrame.contentDocument? movieFrame.contentDocument: movieFrame.contentWindow.document;
	return doc;
}
//Remove Link From Iframe
window.RemoveLinksOpenInAnotherTab=function ()
{
  var movieDocument=GetMovieIframeDocument();

 $(movieDocument.documentElement).click(function(){
   
   RemoveLinksOpenInAnotherTab();
    
    
  });

	var alllink=movieDocument.getElementsByTagName("a");
	for(var x=0; x<alllink.length; x++)
	{
		if(alllink[x].getAttribute("target")=="_blank")
		{
     
      alllink[x].remove();
    
		 // alllink[x].setAttribute("href","#");
		}	
  }
}