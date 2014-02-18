marqueeize
==========

An marquee jquery extension using webkit transitions for smoother transitions.


Specifically designed for webkit. Will not work on non-webkit browsers (like firefox)


Must ensure that parent element is smaller than the container for the child element.

Example usage

```javascript
$("#MyElement").marqueeize(); //Simple

$("#MyElement").marqueeize({
    speed: 55, /* Speed, in pixels per second of how quickly it animates  */
    wait: 1000, /* Delay time before it starts moving and after it finishes moving in milliseconds */
    started: function() {
      console.log("It has begun"); /* Callback function once the element has started moving  */
    },
    reached: function() {
      console.log("It has finished animating"); /*  callback after it has finished moving, but before it resets */
    },
    finished: function() {
      console.log("And now it has reset back to the beginning") /* Final callback after it has reset */
    }
});
