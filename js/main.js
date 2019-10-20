$(function() {
  const panel = $(".panel-body");

  $.ajax({
    url:
      "https://cors-anywhere.herokuapp.com/https://cat-fact.herokuapp.com/facts",
    success: function(facts) {
      console.log("DATA:", facts.all);
      let rand = Math.floor(Math.random() * 237 + 1);
      $.each(facts, function(i, fact) {
        panel.append("<p class='text'> " + fact[rand].text + " </p>");
      });
      $(".main").append("<button class='newFact'>Next Fact</button>");
      $(".newFact").click(function() {
        location.reload();
      });
    }
  });
});
