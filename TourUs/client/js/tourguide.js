Guides = new Mongo.Collection('guides');

if(Meteor.isServer){
  Meteor.publish('guides');
}

else if(Meteor.isClient){
  Meteor.subscribe('guides');
  Template.body.events({
    "submit .user_form": function (event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var firstName = event.target.guide_first.value;
      var lastName = event.target.guide_last.value;

      alert(firstName + " " + lastName)

      // Insert a task into the collection
     

      
    }
  });
}
  