/**
 * Created by huxiaoyue on 2015/5/5.
 */
// Another simple message handler

// A simple message logger that logs any topics and data received through our
// subscriber
var messageLogger = function (topics, data) {
    console.log("Logging: " + topics + ": " + data);
};

// Subscribers listen for topics they have subscribed to and
// invoke a callback function (e.g messageLogger) once a new
// notification is broadcast on that topic
var subscription = pubsub.subscribe("inbox/newMessage", messageLogger);
pubsub.subscribe("inbox/newMessage", function(){console.log('second func')});


// Publishers are in charge of publishing topics or notifications of
// interest to the application. e.g:

pubsub.publish("inbox/newMessage", "hello world!");

// or
pubsub.publish("inbox/newMessage", ["test", "a", "b", "c"]);

// or
pubsub.subscribe("inbox/newMessage/2", messageLogger);
pubsub.publish("inbox/newMessage/2", {
    sender: "hello@google.com",
    body: "Hey again!"
});

// We can also unsubscribe if we no longer wish for our subscribers
// to be notified
//pubsub.unsubscribe( subscription );

// Once unsubscribed, this for example won't result in our
// messageLogger being executed as the subscriber is
// no longer listening
pubsub.publish("inbox/newMessage", "Hello! are you still there? before unsubscribe");
pubsub.unsubscribe(subscription);
pubsub.publish("inbox/newMessage", "Hello! are you still there? after unsubscribe");

