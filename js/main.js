$(document).ready(function(){
    $('.carousel').carousel({
      interval: 3000
    })
  });   

var tableRows = $('#myTable tbody tr')
filterBoxes = $('.column.right :checkbox').on('change', filterTable);

console.log(tableRows)
function filterTable() {
  var filter_selector = '';
  $('.column.right :checked').each(function() {
    filter_selector += '[' + $(this).attr('name') + '=' + '"' + $(this).val() + '"]';
    console.log(filter_selector)
  });
  if (filter_selector.length < 1) {
    tableRows.show();
  } else {
    tableRows.hide().filter(filter_selector).show();
  }
}


function myFunction() {
  // Declare variables
  var authorInput, authorFilter, table, tr, td, i, txtValue;
  authorInput = document.getElementById("myInput");
  authorFilter = authorInput.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  var yearInput, yearFilter
  yearInput = document.getElementById("myInput_year");
  yearFilter = yearInput.value.toUpperCase();



  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(authorFilter) > -1 && txtValue.toUpperCase().indexOf(yearFilter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function myFunction_year() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput_year");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}


//Sort by class..
function filterSelection(thing) {

var tabhead = "header"
$("#myTable tbody tr:not(."+thing + ')').hide();

$("#myTable tr.header").show();

}

//display all
function displayAll() {


$("#myTable tr").show();

$("#myTable tr.header").show();





}


$('#red').click(function(){
    if (this.checked) {
        $('p').css('color', '#0099ff')
    }
}) 



$('#red').change(function() {
  alert($(this).prop('checked'))
  console.log("checked")
})

$('#red').on('click', function(event) {

  console.log($("#red.btn.btn-primary").hasClass('active'))
  var myTr = document.getElementsByTagName('tr');

/*
       for(var i=myTr.length; i--;){
           if(myTr[i].className.match('(^|\\s+)selected(\\s+|$)')){
               alert('true');//return true;
               return;
           }
       }
       alert('false'); //return false
*/
});

//console.log($("#red.btn.btn-primary").hasClass('active'))


var tableRows = document.getElementsByTagName('tr');






$('.btn').on('click', function(event){

  var value = $(this).val();
  console.log(value)

 
  
  console.log('clicked!')

  table = $("#myTable"); //set table name
            search_field = new Object();

                search_field['Filho']      = $( "#Filho" ).val();
                search_field['Gibbs']  = $("#Gibbs").val();
                search_field['Spawn']    = $("#Spawn").val();


                var myTr = document.getElementsByTagName('tr');



                console.log($( "#Filho" ).val())
                /*
      var display = 0;
       for(var i=myTr.length; i--;){
        console.log(myTr[i].className)
           if(myTr[i].className.match('(^|\\s+)Filho(\\s+|$)')){
               alert('true!');//return true;
               return;
           }
       }
       alert('false'); //return false
       */


  table.find('tr').each(function () {

                    current_row = $(this); //keep track of the row being checked, iterate through it's cells
                    var rowClass = current_row.attr("class") // class of row
                    console.log(rowClass)
                    var display = 0;
                    current_row.show();


                    if (rowClass == search_field[rowClass]){
                      console.log('match')
                      display++
                    }

                    /*
                    $(this).find('td').each(function() {
                    //when we stumble upon the data used as a search criteria
                        cell_value = $(this).html(); //gets the value of the cell being checked
                        console.log(cell_value)
                        console.log(search_field[this.id])
                        if (cell_value == search_field[this.id]) {
                            display++;    
                        }
                    });
  */

                    if (display < 3) {
                        current_row.hide(); //if this cell is a match, or we no longer want to use it as a search criteria, the row is displayed
                    }
})

})

