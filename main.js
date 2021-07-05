$(document).ready(function () {

    // Create a "close" button and append it to each list item
    var myNodelist = document.getElementsByTagName("LI");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
        var span = document.createElement("BUTTON");
        var txt = document.createTextNode("\u00D7");
        span.className = "close-324";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }

    // Click on a close button to hide the current list item
    var close = document.getElementsByClassName("close-324");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

    // Create a new list item when clicking on the "Add" button
    $('.addBtn-324').on('click', function newElement(e) {
        // function newElement1() {
        var li = document.createElement("li");
        var inputValue = document.getElementById("myInput").value;
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
            alert("You must write something!");
        } else {
            document.getElementById("myUL").appendChild(li);
        }
        document.getElementById("myInput").value = "";
        // var qtyVal = document.getElementsByClassName("qty-324").value;
        var qtyVal = $('.qty-324').val();
        var qtyValue = " (" + qtyVal + ")";
        console.log("qtyVal: "+qtyVal + "qtyValue: "+qtyValue);
        var span = document.createElement("SPAN");
        var txt1 = document.createTextNode(qtyValue);
        span.className = "disQty-324";
        span.appendChild(txt1);
        var btn = document.createElement("BUTTON");
        var txt2 = document.createTextNode("\u00D7");
        btn.className = "close-324";
        btn.appendChild(txt2);
        li.appendChild(span);
        li.appendChild(btn);
    
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
                var div = this.parentElement;
                div.style.display = "none";
            }
        }
        $('.qty-324').val(1);
    });

    // $('.minus-btn').prop('disabled',true);
    $('.minus-btn').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $('.qty-324');
        var value = parseInt($input.val());
    
        if (value > 1) {
            value = value - 1;
        } else {
            value = 1;
        }
        $input.val(value);
    });
    
    $('.plus-btn').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $('.qty-324');
        var value = parseInt($input.val());
    
        if (value < 5) {
            value = value + 1;
            // $('.minus-btn').prop('disabled',false);
        } else {
            value =5;
        }
        $input.val(value);
    });

});