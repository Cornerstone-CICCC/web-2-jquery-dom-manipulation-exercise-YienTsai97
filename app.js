// COMPLETE THE CODE

$(function() {
    // Exercise 1: Find all <li> elements within a <ul> and change their text color to blue
    $("#exercise1Button").on('click', function() {
      $("#exercise1 ul").css('color','blue')
    });

    // Exercise 2: Find the parent <div> of a paragraph and change its background color
    $("#exercise2Button").on('click', function() {
      $("#exercise2 p").parent('div').css('background-color','yellow')
    });

    // Exercise 3: Find all ancestor <div> elements of a paragraph and change their background color
    $("#exercise3Button").on('click', function() {
      $("#exercise3 p").parent('div').css('background-color','green')
    });

    // Exercise 4: From the `this` selector, find and hide only the second <p> sibling of the <h3> element. The `this` keyword refers to the clicked button
    $("#exercise4Button").on('click', function() {
      $(this).siblings('h3').next().next().fadeOut()
    });

    // Exercise 5: From the `this` selector, find all <p> elements within the <div> and add a border to them. The `this` keyword refers to the clicked button
    $("#exercise5Button").on('click', function() {
      $(this).siblings('div').find('p').css('border','1px, solid black')
    });

    // Exercise 6: From the `this` selector, find and change the color of <span>Item 5</span>. The `this` keyword refers to the clicked button
    $("#exercise6Button").on('click', function() {
      $(this).prevAll('div').find('ul').find('li').find('span').css('color','red')
    });
})