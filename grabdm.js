
var alldm = [];
var intervalID = "";
clearInterval(intervalID);
var lastblock = "";
document.querySelector('[data-testid^="dm-message-list-container"]').getElementsByTagName('div')[1].scrollTo(0,0);
intervalID = window.setInterval(myCallback, 1000);

function myCallback() 
{ document.querySelector('[data-testid^="dm-message-list-container"]').getElementsByTagName('div')[1].scrollBy(0,400);
  var el = document.querySelector('[data-testid^="dm-message-list"]').getElementsByTagName('ul')[0].innerHTML;
  if (lastblock.length == el.length)
	{ clearInterval(intervalID);
      console.log("Exit");
	  console.log(alldm);
    } else
	{ alldm.push(el);
      lastblock = el;
    }
}
