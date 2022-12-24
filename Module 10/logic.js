function getData() {
    //randomNumber is assigned a random value between 1 and 87 - that is how many star wars characters this API contains 
    const randomNumber = Math.floor(Math.random() * 87) + 1;
    //To use a function from the jQuery lib we just use $ then the function we want to call.
    $.ajax({  
      //This is the url to the api:
      url: "https://swapi.co/api/people/" + randomNumber,
  
      //This is where we handle the response from the API.
      //Data is just a name, you can call it "response" or anything you like!
      success: function(data) {
        //Find the div by using $ and the id of the the div.
        //Use JSON.stringify to transform the response data into text that the browser can handle. From the data object we pick out the properties we want to display on the page ex. name, height...
        $("#name").html(JSON.stringify(data.name));
        $("#height").html(JSON.stringify(data.height));
        $("#mass").html(JSON.stringify(data.mass));
        $("#hair_color").html(JSON.stringify(data.hair_color));
        $("#skin_color").html(JSON.stringify(data.skin_color));
        $("#eye_color").html(JSON.stringify(data.eye_color));
        $("#birth_year").html(JSON.stringify(data.birth_year));
        $("#gender").html(JSON.stringify(data.gender));
        $(".data-holder").removeClass('invisible');
      }
    });
  }
  
  