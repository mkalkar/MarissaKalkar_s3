var filter;



d3.csv("../data/cities.csv")
  .then(data => {

    console.log("Data loading complete. Work with dataset.");
    filter = data.filter(function(value) {
        return (value.eu == "true");
    });
    d3.select("body").append("h2").text(filter.length + " EU Countries ");
    for(var i=0; i<filter.length; ++i){
      filter[i].population = +filter[i].population;
      filter[i].x = +filter[i].x;
      filter[i].y = +filter[i].y;
    }

    var svg2 = d3.select("body").append("svg")
      .attr("width", 700)
      .attr("height", 500)


    svg2.selectAll("circle")
      .data(filter)
      .enter()
      .append("circle")
      // .text(function(d){ return d.city; })
      .attr("class", "city-label")
      .attr("stroke", "black")
      .style("r", function(d) {
          if(d.population < 1000000)
            return 4;
          else
            return 8;
      })

      .attr("cx", function(d, index) {
          return (filter[index].x);
        })
      .attr("cy", function(d, index) {
            return (filter[index].y);
      })

  })
  .catch(error => {
    console.error("Error loading the data")
  });
