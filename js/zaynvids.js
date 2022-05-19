// Zayn Malik Music Videos
$(function () {
  "use strict";

  // Initialize the Gallery as video carousel:
  // eslint-disable-next-line new-cap

  blueimp.Gallery(
    [
      {
        title: "PILLOWTALK",
        type: "text/html",
        youtube: "C_3d6GntKbk",
      },

      {
        title: "BeFoUr",
        type: "text/html",
        youtube: "_EaPxw5exts",
      },

      {
        title: "iT's YoU",
        type: "text/html",
        youtube: "1seDBXvGYcc",
      },

      {
        title: "LIKE I WOULD",
        type: "text/html",
        youtube: "pTaqcGz2O5o",
      },

      {
        title: "Cruel (ft. Snakehips)",
        type: "text/html",
        youtube: "WfqDSnCkaro",
      },

      {
        title: "I Don't Wanna Live Forever",
        type: "text/html",
        youtube: "AY9blLYMKnI",
      },

      {
        title: "Still Got Time",
        type: "text/html",
        youtube: "cHOrHGpL4u0",
      },

      {
        title: "Dusk Till Dawn",
        type: "text/html",
        youtube: "tt2k8PGm-TI",
      },

      {
        title: "Let Me",
        type: "text/html",
        youtube: "J-dv_DcDD_A",
      },

      {
        title: "Entertainer",
        type: "text/html",
        youtube: "voG07pt-KYI",
      },

      {
        title: "Satisfaction",
        type: "text/html",
        youtube: "r2zyYAClv1g",
      },

      {
        title: "Stand Still",
        type: "text/html",
        youtube: "5yj9ZbsYef8",
      },

      {
        title: "Sour Diesel",
        type: "text/html",
        youtube: "033499WBFTM",
      },

      {
        title: "Flames (ft. R3HAB & Jungleboi)",
        type: "text/html",
        youtube: "LWEG5xHgM7c",
      },

      {
        title: "Better",
        type: "text/html",
        youtube: "NAo38Q9c4xA",
      },

      {
        title: "Vibez",
        type: "text/html",
        youtube: "VSpgaN3wuag",
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