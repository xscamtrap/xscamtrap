var alldm = [];
clearInterval(intervalID);
var lastblock = ""
document.querySelector('[data-testid^="dm-message-list-container"]').getElementsByTagName('div')[1].scrollTo(0,0);
var intervalID = window.setInterval(myCallback, 1000);

function myCallback() 
{ document.querySelector('[data-testid^="dm-message-list-container"]').getElementsByTagName('div')[1].scrollBy(0,400);
  var element = document.querySelector('[data-testid^="dm-message-list"]').getElementsByTagName('ul')[0].innerHTML;
  if (lastblock === element)
	{ clearInterval(intervalID);
      console.log("Exit");
	  console.log(alldm);
    } else
	{ alldm.push(element);
      lastblock = element;
    }
}
