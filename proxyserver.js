/*VARIABLES*/

//set frame id
var movieframeId = 'proxyserverIframe';
var apiDoamin = "https://rdxhdmovies.jdvivek.repl.co";
var parentWebsite = "";
var fameloadercounter = 0;
var  hasPost=false;
window.blockcounter=0;
var myWindow;
/*Html function and events*/


function onMyFrameLoad(frame) {


try{
    //clear console
    //remove links
    document.getElementById(movieframeId).style.display = hasPost==false? "none":"block";
    document.getElementById("loadingCenter").style.display =hasPost==false? "block":"none";
        
   GenerateLinkForBlockWebsite();
    $(frame.contentDocument).ready(function(state) {


      
        //check if website is using any post service for block
        hasPost= SendPostToBlockWebiste();


        //make visible
        fameloadercounter++;
        if (fameloadercounter == 2) {
            document.getElementById(movieframeId).style.display = "block";
            document.getElementById("loadingCenter").style.display = "none";
            fameloadercounter = 0;
            RemoveLinksOpenInAnotherTab();
        }


    });




    setInterval(function() {

        window['FWVc9MragE'] = false;

    }, 500);


}
catch(ex)
{
handleError(ex);

  
}



}

/*UTLITY FUNCTIONS*/

function ReloadIframe(event)
{

if(document.getElementById('blockwebsiteLink').href.indexOf('proxyserver')==-1)
{
 ShowLoading(true);
openWindowForUnnblocked();
   event.preventDefault();

 setTimeout(function(){ 

 ShowLoading(false);
   document.getElementById(movieframeId).src= document.getElementById('blockwebsiteLink').href;
 
 }, 6000);


}
else
{
     document.getElementById("blockwebsiteLink").style.display = "none";
    event.preventDefault();
}

}
function ShowLoading(IsShow)
{
   if(IsShow)
   {

    document.getElementById("loadingCenter").style.display ="block";  
    document.getElementById(movieframeId).style.display = "none";
   }
   else
   {
         document.getElementById("loadingCenter").style.display ="none";  
    document.getElementById(movieframeId).style.display = "block";
    
   }

}
function callClickEvent2(element){
  try
  {
    var evt = document.createEvent("MouseEvents");
    evt.initMouseEvent("click", true, true, window,
    0, 0, 0, 0, 0, false, false, false, false, 0, null);
    element.dispatchEvent(evt);
  }
  catch(ex)
  {
     handleError(ex);
  }
}


function GenerateLinkForBlockWebsite()
{
 

 try
 {

 
 //  if(document.getElementById(movieframeId).innerText.trim()=="<p>error</p>")
 if(document.getElementById(movieframeId).contentWindow.window.length==0)
  {
   document.getElementById("blockwebsiteLink").style.display = "block";
 
   document.getElementById(movieframeId).style.display = "none";
 
   callClickEvent2(document.getElementById("blockwebsiteLink"))

   
  } 
  else
  {
       document.getElementById("blockwebsiteLink").style.display = "none";
 
   document.getElementById(movieframeId).style.display = "block";
     myWindow.close();
  }
 
 }
 catch(ex)
 {
   

handleError(ex);



 }
   
}

function openWindowForUnnblocked()
{
 myWindow = window.open(document.getElementById("blockwebsiteLink").href, "myWindow", "toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=10000, top=10000, width=1, height=1, visible=none","");

}
function SendPostToBlockWebiste()
{

try
{
        //check if website is using any post service for block
        if(document.getElementById(movieframeId).contentWindow.document.getElementsByTagName("form").length>0 && document.getElementById(movieframeId).contentWindow.document.getElementsByTagName("form")[0].action.indexOf(apiDoamin)!=-1)
        {
         document.getElementById(movieframeId).contentWindow.document.getElementsByTagName("form")[0].action=document.getElementById(movieframeId).contentWindow.document.getElementsByTagName("form")[0].action.replace(apiDoamin,    parentWebsite)
       
       document.getElementById("blockwebsiteLink").href=document.getElementById(movieframeId).contentWindow.document.getElementsByTagName("form")[0].action.replace(apiDoamin,    parentWebsite);
    
      
         return true;
        }
        else
        {
          return false;

        }
}
catch(ex)
{
handleError(ex);
 
}


}

function extractHostname(url) {
    var hostname;
    //find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf("//") > -1) {
        hostname = url.split('/')[2];
    } else {
        hostname = url.split('/')[0];
    }

    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];

    var lastindex = url.indexOf(hostname)
    hostname = url.substring(0, lastindex) + hostname


    return hostname;
}



//Get Iframe 
function GetMovieIframeDocument() {
    //myframe is
    var movieFrame = document.getElementById(movieframeId);
    var doc = movieFrame.contentDocument ? movieFrame.contentDocument : movieFrame.contentWindow.document;
    return doc;
}
//Remove Link From Iframe
RemoveLinksOpenInAnotherTab = function() {
    var movieDocument = GetMovieIframeDocument();

    var alllink = movieDocument.getElementsByTagName("a");
    for (var x = 0; x < alllink.length; x++) {
        if (alllink[x].getAttribute("target") == "_blank") {

            alllink[x].remove();

            // alllink[x].setAttribute("href","#");
        }

   
      if( alllink[x]!==undefined) 
      {
        alllink[x].addEventListener("click", function(event) {

            var newurl = "";
            // document.getElementById('myframe').src=apiDoamin+'?url='+parentWebsite+
            if (event.currentTarget.href != null && (event.currentTarget.href.indexOf(apiDoamin) != -1 || event.currentTarget.href.substring(0, 0) == "/")) {

                newurl = 'https://rdxhdmovies.jdvivek.repl.co/proxyserver?url=' + parentWebsite + event.currentTarget.href.replace(apiDoamin, "");

                // document.getElementById('myframe').src=newurl;
                window.location = newurl;
                return false;

            } else if (event.currentTarget.href.indexOf("http") != -1 || event.currentTarget.href.indexOf("www") != -1) {
                newurl = 'https://rdxhdmovies.jdvivek.repl.co/proxyserver?url=' + event.currentTarget.href.replace(apiDoamin, "");
                window.location = newurl;
                return false;
            } else {
                event.preventDefault();
                return false;
            }



        });
      }

        // alllink[x].setAttribute("href","#");
    }



}

//For Eror handling
function handleError (ex)
{
   try
   {
      console.clear();
        console.log(ex);
      console.log(ex);

   }
   catch(et)
   {

      console.clear();
      console.log(et);
   }

}