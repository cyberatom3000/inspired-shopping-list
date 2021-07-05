$(document).ready(function () {

    // Create a "close" button and append it to each list item
    var myNodelist = document.getElementsByClassName("_3dY_ZR");
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
    
        var span = document.createElement("DIV");
        // var txt = document.createTextNode("\u00D7");
        // var txt1 = '<button class="minus-btn"> – </button><input type="text" class="qty-324" value="1"><button class="plus-btn"> + </button><button class="close-324">×</button>';
        span.className = "_3dY_ZR";
        // span.appendChild(txt1);
        $('._3dY_ZR').appendChild('<button class="minus-btn"> – </button><input type="text" class="qty-324" value="1"><button class="plus-btn"> + </button><button class="close-324">×</button>');
        li.appendChild(span);
    
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
                var div = this.parentElement;
                div.style.display = "none";
            }
        }
    });

    // $('.minus-btn').prop('disabled',true);
    $('.minus-btn').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var value = parseInt($input.val());
    
        if (value > 1) {
            value = value - 1;
        } else {
            value = 1;
            // $this.prop('disabled',true);
        }
    
    $input.val(value);
    
    });
    
    $('.plus-btn').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('input');
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