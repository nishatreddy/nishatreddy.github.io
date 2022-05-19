// One Direction Music Videos
$(function () {
  "use strict";
  // Initialize the Gallery as video carousel:
  // eslint-disable-next-line new-cap

  blueimp.Gallery(
    [
      {
        title: 'What Makes You Beautiful',
        type: "text/html",
        youtube: "QJO3ROT-A4E",
      },

      {
        title: "Gotta Be You",
        type: "text/html",
        youtube: "nvfejaHz-o0",
      },

      {
        title: "One Thing",
        type: "text/html",
        youtube: "Y1xs_xPb46M",
      },

      {
        title: "Live While We're Young",
        type: "text/html",
        youtube: "AbPED9bisSc",
      },

      {
        title: "Kiss You",
        type: "text/html",
        youtube: "T4cdfRohhcg",
      },

      {
        title: "Little Things",
        type: "text/html",
        youtube: "xGPeNN9S0Fg",
      },

      {
        title: "One Way or Another",
        type: "text/html",
        youtube: "36mCEZzzQ3o",
      },

      {
        title: "Best Song Ever",
        type: "text/html",
        youtube: "o_v9MY_FMcw",
      },

      {
        title: "Story of My Life",
        type: "text/html",
        youtube: "W-TE_Ys4iwM",
      },

      {
        title: "Midnight Memories",
        type: "text/html",
        youtube: "bkx9kCdaaMg",
      },

      {
        title: "You & I",
        type: "text/html",
        youtube: "_kqQDCxRCzM",
      },

      {
        title: "Steal My Girl",
        type: "text/html",
        youtube: "UpsKGvPjAgw",
      },

      {
        title: "Night Changes",
        type: "text/html",
        youtube: "syFZfO_wfMQ",
      },

      {
        title: "Drag Me Down",
        type: "text/html",
        youtube: "Jwgf3wmiA04",
      },

      {
        title: "Perfect",
        type: "text/html",
        youtube: "Ho32Oh6b4jc",
      },

      {
        title: "History",
        type: "text/html",
        youtube: "yjmp8CoZBIo",
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