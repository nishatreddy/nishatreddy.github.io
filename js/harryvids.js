// Harry Styles Music Videos
$(function () {
  "use strict";

  // Initialize the Gallery as video carousel:
  // eslint-disable-next-line new-cap

  blueimp.Gallery(
    [
      {
        title: "Sign of the Times",
        type: "text/html",
        youtube: "qN4ooNx77u0",
      },

      {
        title: "Kiwi",
        type: "text/html",
        youtube: "9wg3v-01yKQ",
      },

      {
        title: "Lights Up",
        type: "text/html",
        youtube: "9NZvM1918_E",
      },

      {
        title: "Adore You",
        type: "text/html",
        youtube: "VF-r5TtlT9w",
      },

      {
        title: "Falling",
        type: "text/html",
        youtube: "olGSAVOkkTI",
      },

      {
        title: "Watermelon Sugar",
        type: "text/html",
        youtube: "E07s5ZYygMg",
      },

      {
        title: "Golden",
        type: "text/html",
        youtube: "P3cffdsEXXw",
      },

      {
        title: "Treat People With Kindness",
        type: "text/html",
        youtube: "L0X03zR0rQk",
      },

      {
        title: "As It Was",
        type: "text/html",
        youtube: "H5v3kku4y6Q",
      },
    ],
    {
      container: "#blueimp-video-carousel",
      carousel: true,
      startSlideshow: false,
    }
  );

  $("#fullscreen").change(function () {
    $("#blueimp-gallery").data("fullscreen", this.checked);
  });
});
