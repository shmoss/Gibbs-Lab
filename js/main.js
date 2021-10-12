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
  console.log("hi")
  $(".btn").removeClass("active")
  $("#showAll").addClass("active")
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

 var table = $("#myTable") 

  table.find('tr').each(function () {
    current_row = $(this); //keep track of the row being checked, iterate through it's cells
                    var rowClass = current_row.attr("class") // class of row
                    console.log(rowClass)
  })

//Sort by class..
function filterSelection(thing) {

  var rows = $('#myTable').find('tr:not(:has(th))').get();
  console.log(rows)

$("#myTable tr").show()


$('#myTable').find('tr:not(:has(th))').not('thead tr').not("[name*=" + thing + "]").fadeOut(300)

var tabhead = "header"
//$("#myTable tbody tr:not(."+thing + ')').hide();

//$("#myTable tr.header").fadeIn(1)

}


//Sort by class..
function filterSelectionByTopic(thing) {

  var rows = $('#myTable').find('tr:not(:has(th))').get();
  console.log(rows)

$("#myTable tr").show()


$('#myTable').find('tr:not(:has(th))').not('thead td').not("[name*=" + thing + "]").fadeOut(300)

var tabhead = "header"
//$("#myTable tbody tr:not(."+thing + ')').hide();

//$("#myTable tr.header").fadeIn(1)

}

//Sort by class..
function filterYear(thing) {

  var rows = $('#myTable').find('tr:not(:has(th))').get();
  console.log(rows)

$("#myTable tr").show()


$('#myTable').find('tr:not(:has(th))').not('thead tr').not("[class*=" + thing + "]").fadeOut(300)

var tabhead = "header"
//$("#myTable tbody tr:not(."+thing + ')').hide();

//$("#myTable tr.header").fadeIn(1)

}

//display all
function displayAll() {


$("#myTable tr").show();

$("#myTable tr.header").show();





}

$('.btn').not(".showAll").click(function() {
    $(".btn").removeClass('active');
});

// .btn is the class of the element you want to change color

var $btns = $('.btn').click(function() {
  console.log(this.id)
  if (this.id == 'all') {
    $('#parent > div').fadeIn(450);
  } else {
    var $el = $('.' + this.id).fadeIn(450);
    console.log($el)
    $('#parent > div').not($el).hide();
  }
  $btns.removeClass('active');
  $(this).addClass('active');
})


// $('.nav .nav-link').click(function(){
//     $('.nav .nav-link').removeClass('active');
//     $(this).addClass('active');
// })
