const CHART = document.getElementById("myChart");

Chart.defaults.global.responsive = false;
let type = "radar";
let url = "https://json-server-v1.herokuapp.com/data";
render();
function render() {
  $.getJSON(url, function (json) {
    const sector = [
      "Energy",
      "Environment",
      "Manufacturing",
      "Transport",
      "Construction",
      "Food & agriculture",
      "Automotive",
      "Aerospace & defence",
      "Financial services",
      "Retail",
    ];

    const energy = json.filter(function (el) {
      return el.sector === "Energy";
    });
    const energyI = energy.reduce(
      (iMax, x, i, energy) => (x.intensity > energy[iMax].intensity ? i : iMax),
      0
    );
    const energyR = energy.reduce(
      (iMax, x, i, energy) => (x.relevance > energy[iMax].relevance ? i : iMax),
      0
    );
    const energyL = energy.reduce(
      (iMax, x, i, energy) =>
        x.likelihood > energy[iMax].likelihood ? i : iMax,
      0
    );

    var environment = json.filter(function (el) {
      return el.sector === "Environment";
    });
    const environmentI = environment.reduce(
      (iMax, x, i, environment) =>
        x.intensity > environment[iMax].intensity ? i : iMax,
      0
    );
    const environmentR = environment.reduce(
      (iMax, x, i, environment) =>
        x.relevance > environment[iMax].relevance ? i : iMax,
      0
    );
    const environmentL = environment.reduce(
      (iMax, x, i, environment) =>
        x.likelihood > environment[iMax].likelihood ? i : iMax,
      0
    );
    console.log(environmentL);
    console.log(environment);

    //console.log(environment[environmentI].intensity);
    //console.log(environment[environmentR].relevance);
    //console.log(environment[environmentL].likelihood);

    var aerospace = json.filter(function (el) {
      return el.sector === "Aerospace & defence";
    });
    const aerospaceI = aerospace.reduce(
      (iMax, x, i, aerospace) =>
        x.intensity > aerospace[iMax].intensity ? i : iMax,
      0
    );
    const aerospaceR = aerospace.reduce(
      (iMax, x, i, aerospace) =>
        x.relevance > aerospace[iMax].relevance ? i : iMax,
      0
    );
    const aerospaceL = aerospace.reduce(
      (iMax, x, i, aerospace) =>
        x.likelihood > aerospace[iMax].likelihood ? i : iMax,
      0
    );

    var manufacturing = json.filter(function (el) {
      return el.sector === "Manufacturing";
    });
    const manufacturingI = manufacturing.reduce(
      (iMax, x, i, manufacturing) =>
        x.intensity > manufacturing[iMax].intensity ? i : iMax,
      0
    );
    const manufacturingR = manufacturing.reduce(
      (iMax, x, i, manufacturing) =>
        x.relevance > manufacturing[iMax].relevance ? i : iMax,
      0
    );
    const manufacturingL = manufacturing.reduce(
      (iMax, x, i, manufacturing) =>
        x.likelihood > manufacturing[iMax].likelihood ? i : iMax,
      0
    );

    var retail = json.filter(function (el) {
      return el.sector === "Retail";
    });
    const retailI = retail.reduce(
      (iMax, x, i, retail) => (x.intensity > retail[iMax].intensity ? i : iMax),
      0
    );
    const retailR = retail.reduce(
      (iMax, x, i, retail) => (x.relevance > retail[iMax].relevance ? i : iMax),
      0
    );
    const retailL = retail.reduce(
      (iMax, x, i, retail) =>
        x.likelihood > retail[iMax].likelihood ? i : iMax,
      0
    );

    var financial = json.filter(function (el) {
      return el.sector === "Financial services";
    });
    const financialI = financial.reduce(
      (iMax, x, i, financial) =>
        x.intensity > financial[iMax].intensity ? i : iMax,
      0
    );
    const financialR = financial.reduce(
      (iMax, x, i, financial) =>
        x.relevance > financial[iMax].relevance ? i : iMax,
      0
    );
    const financialL = financial.reduce(
      (iMax, x, i, financial) =>
        x.likelihood > financial[iMax].likelihood ? i : iMax,
      0
    );

    var food = json.filter(function (el) {
      return el.sector === "Food & agriculture";
    });
    const foodI = food.reduce(
      (iMax, x, i, food) => (x.intensity > food[iMax].intensity ? i : iMax),
      0
    );
    const foodR = food.reduce(
      (iMax, x, i, food) => (x.relevance > food[iMax].relevance ? i : iMax),
      0
    );
    const foodL = food.reduce(
      (iMax, x, i, food) => (x.likelihood > food[iMax].likelihood ? i : iMax),
      0
    );

    var automotive = json.filter(function (el) {
      return el.sector === "Automotive";
    });
    const automotiveI = automotive.reduce(
      (iMax, x, i, automotive) =>
        x.intensity > automotive[iMax].intensity ? i : iMax,
      0
    );
    const automotiveR = automotive.reduce(
      (iMax, x, i, automotive) =>
        x.relevance > automotive[iMax].relevance ? i : iMax,
      0
    );
    const automotiveL = automotive.reduce(
      (iMax, x, i, automotive) =>
        x.likelihood > automotive[iMax].likelihood ? i : iMax,
      0
    );

    var construction = json.filter(function (el) {
      return el.sector === "Construction";
    });
    const constructionI = construction.reduce(
      (iMax, x, i, construction) =>
        x.intensity > construction[iMax].intensity ? i : iMax,
      0
    );
    const constructionR = construction.reduce(
      (iMax, x, i, construction) =>
        x.relevance > construction[iMax].relevance ? i : iMax,
      0
    );
    const constructionL = construction.reduce(
      (iMax, x, i, construction) =>
        x.likelihood > construction[iMax].likelihood ? i : iMax,
      0
    );

    var transport = json.filter(function (el) {
      return el.sector === "Transport";
    });
    const transportI = transport.reduce(
      (iMax, x, i, transport) =>
        x.intensity > transport[iMax].intensity ? i : iMax,
      0
    );
    const transportR = transport.reduce(
      (iMax, x, i, transport) =>
        x.relevance > transport[iMax].relevance ? i : iMax,
      0
    );
    const transportL = transport.reduce(
      (iMax, x, i, transport) =>
        x.likelihood > transport[iMax].likelihood ? i : iMax,
      0
    );
    let myChart = new Chart(CHART, {
      type: type,
      data: {
        labels: sector,
        datasets: [
          {
            label: "Intensity ",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(192, 75, 192, 0.4)",
            borderColor: "rgba(192, 75, 192, 1)",
            borderCapStyle: "butt",
            borderDash: [],
            border: 0.3,
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(192, 75, 192, 1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointBorderRadius: 5,
            pointHoverBackgroundColor: "rgba(75, 75, 75, 1)",
            pointHoverBorderColor: "rgba(175, 175, 100, 1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [
              energy[energyI].intensity,
              environment[environmentI].intensity,
              manufacturing[manufacturingI].intensity,
              transport[transportI].intensity,
              construction[constructionI].intensity,
              food[foodI].intensity,
              automotive[automotiveI].intensity,
              aerospace[aerospaceI].intensity,
              financial[financialI].intensity,
              retail[retailI].intensity,
            ],
          },
          {
            label: "Relevance ",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(75, 192, 192, 0.4)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderCapStyle: "butt",
            borderDash: [],
            border: 0.3,
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75, 192, 192, 1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointBorderRadius: 5,
            pointHoverBackgroundColor: "rgba(75, 192, 192, 1)",
            pointHoverBorderColor: "rgba(220, 220, 220, 1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [
              energy[energyR].relevance,
              environment[environmentR].relevance,
              manufacturing[manufacturingR].relevance,
              transport[transportR].relevance,
              construction[constructionR].relevance,
              food[foodR].relevance,
              automotive[automotiveR].relevance,
              aerospace[aerospaceR].relevance,
              financial[financialR].relevance,
              retail[retailR].relevance,
            ],
          },
          {
            label: "Likelihood ",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(112, 100, 112, 0.4)",
            borderColor: "rgba(112, 100, 112, 1)",
            borderCapStyle: "butt",
            borderDash: [],
            border: 0.3,
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(112, 75, 112, 1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointBorderRadius: 5,
            pointHoverBackgroundColor: "rgba(100, 100, 200, 1)",
            pointHoverBorderColor: "rgba(100, 100, 220, 1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [
              energy[energyL].likelihood,
              environment[environmentL].likelihood,
              manufacturing[manufacturingL].likelihood,
              transport[transportL].likelihood,
              construction[constructionL].likelihood,
              food[foodL].likelihood,
              automotive[automotiveL].likelihood,
              aerospace[aerospaceL].likelihood,
              financial[financialL].likelihood,
              retail[retailL].likelihood,
            ],
          },
        ],
      },
    });
  });
}
const btn = document.querySelector("#btn");
btn.onclick = function () {
  const rbs = document.querySelectorAll('input[name="chart"]');
  let selectedValue;
  for (const rb of rbs) {
    if (rb.checked) {
      selectedValue = rb.value;
      break;
    }
  }
  type = selectedValue;
  console.log(type);
  render();
};
