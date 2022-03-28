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

  console.log("filtering by thing")

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

  console.log("filtering by thing")

  var rows = $('#myTable').find('tr:not(:has(th))').get();
  console.log(rows)

$("#myTable tr").show()


$('#myTable').find('tr:not(:has(th))').not('thead td').not("[name*=" + thing + "]").fadeOut(300)



var tabhead = "header"

$("#myTable").find("tr.header:has(+ tr.header)").hide()
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

$('.col-6.col-md-3.p-4.alumni').fadeOut(0);

//$('.col-6.col-md-3.p-4.alumni').css("background-color:red");

$('.btn').not(".showAll").click(function() {
    $(".btn").removeClass('active');
});


$(".showAll").click(function() {
    console.log("showAll")
});

// .btn is the class of the element you want to change color

var $btns = $('.btn').click(function() {
  console.log(this.id)
  if (this.id == 'all') {
    $('#parent > div').fadeIn(450);
    $('.col-6.col-md-3.p-4.alumni').fadeOut(450);
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


//Set dynamic content for teaching page

var capstone_HTML = '<div class="container">' +
                        '<h3> <strong>Comprehensive Outcome, Research and Evaluation</strong></h3>' +
                        '<br>'+
                        '<p> The CORE Reporting System is designed to collect participant-level data for treatment court and diversion programs in the State of Wisconsin. The data can be utilized for performance measurement, evaluation, and tracking of participant progress through various programs. This is a secure site intended for authorized users at the state and local level.</p>' +
                        '<p>The BJIA also serves as the Statistical Analysis Center (SAC) for the State of Wisconsin and contributes directly to the ability of the Department of Justice to provide research results that aid in decision making for criminal justice programs and policies.  The BJIA provides additional program information, including data publications and UCR forms and manuals on the Department’s Law Enforcement website  <a href = "https://wilenet.org/html/justice-programs/programs/justice-stats/index.htm/" target="_blank">wilenet.org</a>.' +
                    '</div>';



var geog_env_309_HTML = '<div class="col-md-10">' +
                          '<h2 class="mb-3" contenteditable="true">Geog / Env. St 309: People, Land & Food</h2>' +
                          '<h6 class="mb-3">Welcome to the “People, Land and Food” course website!  You can download a syllabus <a class = "more_news_link" href = "http://www.gibbs-lab.com/wp-content/uploads/2019/09/Gibbs_syllaubus_People_Land_Food_Spring_2018_Final_REVISED.pdf" target="_blank"><b><i>here</i></b></a> to learn more.</h6>' +
                          '<p>'+
                            'The ways in which our society uses and transforms land to produce food has impacted our world more than any other environmental change.  This course will explore real-world examples and together we will investigate solutions to improve our use of land and food production strategies. We will also go beyond the walls of the classroom to study our campus and city community, and work towards making change on the ground.'+
                          '</p>'+
                          '<p>'+
                            'I greatly enjoy teaching this course, and it has been very well received in the past.  You can read a sample of direct quotes from students here. Here are some examples of student outreach projects aiming to reduce household food waste, encourage reuse of containers and use of more sustainable packaging. I hope you can join us!'+
                          '</p>'+
                          '<p>'+
                            'P.S. Some good news!!  I’m honored to have been awarded the Chancellor’s Distinguished Teaching Award in 2016 and the University Housing Honored Instructor Award 2015!  My warmest thanks to the students and faculty who took the time to nominate me!'+
                            '</p>'+
                            '<p>'+
                            'Please email me with any questions (hkgibbs@wisc.edu).'+
                          '</p>'+
                        '<p class=course-photo>'+              
                          '<div class="col-8 course">' +
                            '<a href="http://www.gibbs-lab.com/wp-content/uploads/2013/01/urban_farming.jpg">'+
                            '<img class="img-fluid course" src="http://www.gibbs-lab.com/wp-content/uploads/2013/01/urban_farming.jpg" alt="Card image cap">'+
                            '</a>'+
                          '</div>'+
                          '</p>'+
                          '<p>'+
                            'PROFESSOR BIO'+
                          '</p>'+
                          '<p>'+
                          '<div class="row">'+
                            '<div class="col-md-6 course">'+
                              'I am an Associate Professor of Geography and Environmental Studies, and part of the Center for Sustainability and the Global Environment and the Wisconsin Energy Initiative.  A physical scientist by training, I focus on interdisciplinary, applied questions around land-use change, globalization, environment, and policy.  I investigate how and why people clear tropical forests or change agricultural practices around the world and what that means for climate change, biodiversity and social justice.  Much of my time is spent behind a computer using satellite images and models to understand land use but I also spend quite a bit of time exploring communities and conditions in tropical countries especially Brazil, Indonesia, Malaysia and Ethiopia.' +
                            '</div>'+
                              '<div class="col-md-6">' +
                                '<a href="http://www.gibbs-lab.com/wp-content/uploads/2013/01/urban_farming.jpg">'+
                                  '<img class="img-fluid course hollybio" src="bio_img/Holly_headshot_2019-768x512.jpeg" alt="Card image cap">'+
                                '</a>'+
                            '</div>' +
                          '</div>' +
                          '</p>'+
                           '<p>'+
                            'I am passionate about using my academic scholarship to change the world. Throughout my career, I have worked closely with policymakers, business leaders and non-governmental organizations to ensure that the science I conduct matters.  Accordingly, I am highly committed to teaching and love the opportunity to share my experience and expertise with students while also learning from them.  Teaching “People, Land and Food” is a dream come true for me as I am passionate about the topic and eager to consider opportunities to make a difference here at home as well as around the world!  I enjoy sharing my on-the-ground experiences with students whether from testifying at a political hearing about the impacts of crop-based biofuels on climate, assisting climate negotiators from developing countries, measuring trees or interviewing farmers in the tropics.'+
                            '</p>'+
                            '<p>'+
                            'You can learn more about me and my research here: gibbs-lab.com'+
                          '</p>'+




                    '</div>' 
                        
               

               

var grad_seminar = '<div class="col-md-10">' +
                          '<h2 class="mb-3" contenteditable="true">Graduate Seminars</h2>' +
                          '<h6 class="mb-3">I generally teach one graduate level seminar each year often on interdisciplinary topics around land change science.</h6>' +
                          '<p>'+
                          '</p>' +
                          '<h6 class="mb-3">Approaches to Reducing Tropical Deforestation</h6>' +
                          '<p>'+
                            'In this graduate seminar, we will explore a range of approaches aiming to reduce deforestation looking across the tropics and through time.  We will consider the social and environmental implications of various efforts including REDD+, payments for ecosystem services, demand-side conservation such as eco-certification and zero-deforestation agreements, and command-and-control interventions including land use zoning and protected areas.  Are they effective?  Where and under what circumstances?  What are the unintended consequences?   All major forest regions will be considered but Brazil will be a focus as we examine the dramatic fluctuations in rates of forest clearing.  This is an interdisciplinary seminar, leaning heavily on literature from “land change science”, which seeks to understand the dynamics of land cover and land use and their various consequences through an examination of coupled human-environment systems.  By the end of the class, you will be conversant in the major issues surrounding tropical deforestation, and complete an in-depth research paper or project.'+
                          '</p>'+
                          '<h6 class="mb-3">Emerging Market Impacts on Global Agriculture</h6>' +
                          '<p>'+
                            'In this graduate seminar, we will explore a range of approaches aiming to reduce deforestation looking across the tropics and through time.  We will consider the social and environmental implications of various efforts including REDD+, payments for ecosystem services, demand-side conservation such as eco-certification and zero-deforestation agreements, and command-and-control interventions including land use zoning and protected areas.  Are they effective?  Where and under what circumstances?  What are the unintended consequences?   All major forest regions will be considered but Brazil will be a focus as we examine the dramatic fluctuations in rates of forest clearing.  This is an interdisciplinary seminar, leaning heavily on literature from “land change science”, which seeks to understand the dynamics of land cover and land use and their various consequences through an examination of coupled human-environment systems.  By the end of the class, you will be conversant in the major issues surrounding tropical deforestation, and complete an in-depth research paper or project.'+
                          '</p>'+
                          '<h6 class="mb-3">The Global Land Reserve</h6>' +
                          '<p>'+
                            'Land suitable for agricultural production is becoming an increasingly scarce resource globally as demands for food, feed and fuel grow.  This graduate–level discussion seminar will investigate the location and potential of the world’s available land bank (aka relatively unused, productive lands) to produce the needed agricultural products.  Most studies have quantified the global land reserve from a top-down perspective relying on global models and statistics that neglect spatial information and local realities such as use by local communities, degraded soils, land zoning, land tenure, conservation concerns and transportation infrastructure.  We will explore these issues using peer-reviewed manuscripts, grey literature, newspaper articles, maps, and census data, and attempt to navigate the constraints and opportunities to utilize the land reserve over the next 5-10 years.  The land reserve is concentrated in Latin America’s cerrados and grasslands, Indonesia grasslands, African savannas and abandoned / idle farmland in the US, Europe and following the collapse of the Soviet Union.'+
                          '</p>'
                    '</div>'





//Set event listeners for programs

$(document).ready(function(){ 
  $('#coreNav').on('click', function(e) {

    // Prevent the page from reloading
  
  document.getElementById("course-info").innerHTML = coreHTML;
  });
});

$(document).ready(function(){ 
  $('#geog-env-309').on('click', function(e) {

    // Prevent the page from reloading
  
  document.getElementById("course-info").innerHTML = geog_env_309_HTML;
  });
});

$(document).ready(function(){ 
  $('#grad-seminar').on('click', function(e) {

    // Prevent the page from reloading
  
  document.getElementById("course-info").innerHTML = grad_seminar;
  });
});



const trs=[...document.querySelector("#myTable>tbody").children];
function fltTbl(pat){
  trs
   .filter(tr=>(tr.style.display="none",tr.classList.contains("header")||
tr.dataset.name&&tr.dataset.name.indexOf(pat)>-1))
   .forEach((tr,i,a)=>{
  if (tr.dataset.name
      || a[i+1]&&a[i+1].dataset.name)
    tr.style.display="";
 });
}