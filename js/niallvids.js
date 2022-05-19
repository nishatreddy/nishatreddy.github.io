// Niall Horan Music Videos
$(function () {
  "use strict";

  // Initialize the Gallery as video carousel:
  // eslint-disable-next-line new-cap

  blueimp.Gallery(
    [
      {
        title: "This Town",
        type: "text/html",
        youtube: "hNBlfyYHu80",
      },

      {
        title: "Slow Hands",
        type: "text/html",
        youtube: "nBmNcLBaPUE",
      },

      {
        title: "Too Much To Ask",
        type: "text/html",
        youtube: "ljXSjIph5ZM",
      },

      {
        title: "Flicker (Acoustic)",
        type: "text/html",
        youtube: "BUaLnDL3f-M",
      },

      {
        title: "On The Loose",
        type: "text/html",
        youtube: "wk99OKNE_Ro",
      },

      {
        title: "Finally Free",
        type: "text/html",
        youtube: "OWs7CRvV9Bg",
      },

      {
        title: "Nice To Meet Ya",
        type: "text/html",
        youtube: "k7jeYJA9bgY",
      },

      {
        title: "Put A Little Love On Me",
        type: "text/html",
        youtube: "bO3S8CKafbE",
      },

      {
        title: "No Judgement",
        type: "text/html",
        youtube: "CU5ImX_MNms",
      },

      {
        title: "Heartbreak Weather",
        type: "text/html",
        youtube: "S4L3EQ6ljcU",
      },

      {
        title: "No Judgement (Alternate Video)",
        type: "text/html",
        youtube: "GwaBeJ1B7KA",
      },

      {
        title: "Our Song (ft. Anne-Marie)",
        type: "text/html",
        youtube: "2Z8L4Qed8F8",
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