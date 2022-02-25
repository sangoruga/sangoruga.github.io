dataSetVersion = "2022-02-25"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "Phoenix Wright: Ace Attorney", key: "PW:AA" },
      { name: "Phoenix Wright: Ace Attorney — Justice for All", key: "PW:JA" },
      { name: "Phoenix Wright: Ace Attorney — Trials and Tribulations", key: "PW:TT" },
      { name: "Apollo Justice: Ace Attorney", key: "AA:AA" },
      { name: "Phoenix Wright: Ace Attorney - Dual Destinies", key: "PW:DD" },
      { name: "Phoenix Wright: Ace Attorney — Spirit of Justice", key: "PW:SJ" },
      { name: "Ace Attorney Investigations: Miles Edgeworth", key: "AAI:ME" },
      { name: "Gyakuten Kenji 2", tooltip: "AAI: Miles Edgeworth 2", key: "AAI:ME2" },
      { name: "Professor Layton vs. Ace Attorney", key: "PLvsAA" },
      { name: "The Great Ace Attorney: Adventures", key: "TGAA:A" },
      { name: "The Great Ace Attorney 2: Resolve", key: "TGAA2:R" },
    ]
  },

];

dataSet[dataSetVersion].characterData = [
  {
    name: "Phoenix Wright",
    img: "Ao1Mxc4.png",
    opts: {
      series: [ "PW:AA", "PW:JA", "PW:TT", "PW:DD", "PW:SJ", "PLvsAA", "AA:AA"]
    }
  },
  {
    name: "Mia Fey",
    img: "jiYZwWY.png",
    opts: {
      series: [ "PW:AA", "PW:JA", "PW:TT"]
    }
  },
  {
    name: "Maya Fey",
    img: "951nl5l.png",
    opts: {
      series: ["PW:AA", "PW:JA", "PW:TT", "PW:SJ"]
    }
  },
  {
    name: "Miles Edgeworth",
    img: "WM17J7C.png",
    opts: {
      series: ["PW:AA", "PW:JA", "PW:TT", "AAI:ME", "AAI:ME2", "PW:DD", "PW:SJ"]
    },
  },

];