
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      // *if user is logged in, need data fetching
      var database = firebase.database();

      var messages = database.ref('channel/general');


      // hard code value  
       messages.push({
          text: "Hello, world",
          timestamp: new Date().getTime()  // *you can use firebase, moment time stamp, java api
      });

      messages.on('child_added', function(data) {

          var id = data.key; // *object
          var message = data.val(); // *unction
          //renderMessages(data.key, data.val())
      });

       messages.on('child_changed', function(data) {

          var id = data.key; 
          var message = data.val(); 
      });
      
         messages.on('child_removed', function(data) {

          var id = data.key;
          var message = data.val(); 
      });

  } else {
      // if not logged in redierct to index.thml
      window.location.href = "index.html"
  }
});

var messageForm = document.getElementById("message-form");
var messageInput= document.getElementById("message-input");

messageForm.addEventListener("submit", function (e){
    e.preventDefault();

    var database = firebase.database();
    var messages = database.ref('channels/general');

    var message = messageInput.value;

    messages.push({
        text: message,
        timestamp: new Date().getTime() // unix time stamp in milliseconds
    })
    .then(function (){

    })
    .catch(function(){

    });
});
