// Liam Payne Music Videos
$(function () {
  "use strict";

  // Initialize the Gallery as video carousel:
  // eslint-disable-next-line new-cap

  blueimp.Gallery(
    [
      {
        title: "Strip That Down",
        type: "text/html",
        youtube: "vSW2M-BB1NE",
      },

      {
        title: "Bedroom Floor",
        type: "text/html",
        youtube: "E7q_wbbwGyU",
      },

      {
        title: "Familiar",
        type: "text/html",
        youtube: "oWw1BcFhk-k",
      },

      {
        title: "Stack It Up (ft. A Boogie wit da Hoodie)",
        type: "text/html",
        youtube: "e1r62iOPkGw",
      },

      {
        title: "All I Want (For Christmas)",
        type: "text/html",
        youtube: "C9vsr9i_AFM",
      },

      {
        title: "Cheat Codes",
        type: "text/html",
        youtube: "ID62BvdtmP0",
      },

      {
        title: "Naughty List",
        type: "text/html",
        youtube: "HXJcKeeXSlM",
      },

      {
        title: "Sunshine",
        type: "text/html",
        youtube: "H4S3K1VTr8I",
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