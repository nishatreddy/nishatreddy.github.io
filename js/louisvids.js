// Louis Tomlinson Music Videos
$(function () {
  "use strict";

  // Initialize the Gallery as video carousel:
  // eslint-disable-next-line new-cap

  blueimp.Gallery(
    [
      {
        title: "Just Hold On",
        type: "text/html",
        youtube: "Vt4Tq89R8u0",
      },

      {
        title: "Back to You (ft. Bebe Rexha)",
        type: "text/html",
        youtube: "-HjpL-Ns6_A",
      },

      {
        title: "Miss You",
        type: "text/html",
        youtube: "inZzcTXYowY",
      },

      {
        title: "Two of Us",
        type: "text/html",
        youtube: "5oX_gwwACls",
      },

      {
        title: "Kill My Mind",
        type: "text/html",
        youtube: "IzuvvjrUBEw",
      },

      {
        title: "We Made It",
        type: "text/html",
        youtube: "XWXRh6icAzQ",
      },

      {
        title: "Don't Let it Break Your Heart",
        type: "text/html",
        youtube: "xhjCkwFMb_Q",
      },

      {
        title: "Walls",
        type: "text/html",
        youtube: "ASt2TJ48r6k",
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