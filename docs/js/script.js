(function() {
  var $bg, campCount, html, preH3Bottom;

  campCount = 0;

  $bg = document.getElementById("bg");

  preH3Bottom = null;

  html = "";

  $.get("./backgrounds.json", function(backgrounds) {
    var bg;
    bg = function() {
      var $this, background, headingOffset;
      $this = $(this);
      headingOffset = $this.position().top;
      if (preH3Bottom != null) {
        background = backgrounds[campCount];
        html += "<div class='" + (!background ? "noimage" : "") + "' style='" + (background ? "background-image: url(" + background + ");" : "") + " height: " + (headingOffset - preH3Bottom) + "px; top: " + preH3Bottom + "px'></div>";
        campCount++;
      }
      return preH3Bottom = this.tagName === "H3" ? headingOffset + $this.outerHeight(true) : void 0;
    };
    $("#main h2, #main h3").each(bg);
    bg.call($("footer")[0]);
    return $bg.innerHTML = html;
  });

}).call(this);

(function() {
  $(".colorful, h2").each(function() {
    return this.innerHTML = this.innerText.replace(/./g, "<span>$&</span>");
  });

}).call(this);

(function() {
  var $mark, markLeft;

  $mark = $("#mark");

  markLeft = $mark.position().left;

  $mark.css({
    left: "50%",
    transform: "translateX(-50%)"
  });

  $(window).on("load", function() {
    return $("#loading").fadeOut("fast").promise().then(function() {
      $mark.animate({
        left: markLeft,
        transform: "translateX(0)"
      }, "slow");
      return $("#logo").animate({
        transform: "translateX(0)",
        opacity: 1
      }, "slow");
    }).then(function() {
      return $("h1 > span").animate({
        opacity: 1
      }, "slow");
    }).then(function() {
      return $("body").css({
        overflow: "auto"
      });
    });
  });

}).call(this);