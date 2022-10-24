//usage: Add this AFTER the closing </body> tag. This should ensure that it is not executed until the page is loaded.

//VW and VH (respectively, viewport width and viewport height) are far more reliable than percentages when assigning width or height. 
//They ensure that the value passed is always calculated in respect of the size of the browser window, rather than the containing element. They are 
//valid just about anywhere, and are very useful in conjunction with flexboxes.

$(".container:first").css({ "width": "80vw", "margin-left": "0", "max-width": "auto !important" });
$(".table-responsive:first").css("width", "80vw");
