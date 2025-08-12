const cardList = [
  {
    title: "Kitten 2",
    image: "images/kitten.jpg",
    link: "About Kitten 2",
    desciption: "Demo desciption about kitten 2",
    des2: "Hello There! I just wanted to say HI to you guys. See ya!"
  },
  {
    title: "Kitten 3",
    image: "images/kitten.jpg",
    link: "About Kitten 3",
    desciption: "Demo desciption about kitten 3",
    des2: "Hello There! I just wanted to say HI to you guys. See ya!"
  },
];
const clickMe = () => {
  alert("Thanks for clicking me. Hope you have a nice day!");
};

const submitForm = () => {
  let formData = {};
  formData.first_name = $("#first_name").val();
  formData.last_name = $("#last_name").val();
  formData.password = $("#password").val();
  formData.email = $("#email").val();
  console.log("Form Data Submitted: ", formData);
  
  // Show toast notification
  M.toast({html: 'Form submitted successfully!', classes: 'green'});
};

const addCards = (items) => {
  items.forEach((item) => {
    let itemToAppend =
      '<div class="col s4 center-align">' +
      '<div class="card"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' +
      item.image +
      '">' +
      '</div><div class="card-content">' +
      '<span class="card-title activator grey-text text-darken-4">' +
      item.title +
      '<i class="material-icons right">more_vert</i></span><p><a href="#">' +
      item.link +
      "</a></p></div>" +
      '<div class="card-reveal">' +
      '<span class="card-title grey-text text-darken-4">' +
      item.des2 +
      '<i class="material-icons right">close</i></span>' +
      '<p class="card-text">' +
      item.desciption +
      "</p>" +
      "</div></div></div>";
    $("#card-section").append(itemToAppend);
  });
};
$(document).ready(function () {
  $(".materialboxed").materialbox();
  $(".modal").modal();
  
  // Initialize Floating Action Button
  $('.fixed-action-btn').floatingActionButton({
    direction: 'left',
    hoverEnabled: false
  });
  
  $("#clickMeButton").click(() => {
    $("#modal1").modal("open");
  });
  $("#formSubmit").click(() => {
    submitForm();
    $("#modal1").modal("close");
  });
  
  // Navigation menu button click handler
  $("#navMenuButton").click((e) => {
    e.preventDefault();
    M.toast({html: 'Navigation menu clicked!', classes: 'blue'});
  });
  
  // Preloader toggle functionality
  $("#togglePreloader").click(() => {
    const preloader = $("#preloader");
    if (preloader.hasClass("active")) {
      preloader.removeClass("active");
      M.toast({html: 'Preloader stopped!', classes: 'red'});
    } else {
      preloader.addClass("active");
      M.toast({html: 'Preloader started!', classes: 'green'});
    }
  });
  
  addCards(cardList);
});