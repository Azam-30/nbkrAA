document.getElementById("loadData").addEventListener("click", function () {
  var filePath = "./static/assignmentData(1).xlsx";
  // var filePath =
  //   "https://drive.google.com/uc?export=view&id=1ogLPzZSun9UVO95MM9hmh7N9eXU0vQVL";
  var rollNumberInput = document.getElementById("rollNumber").value.trim();
  var rollNumber = isNaN(rollNumberInput)
    ? rollNumberInput
    : parseInt(rollNumberInput);
  const boldSpan = document.createElement("span");

  fetch(filePath)
    .then((response) => response.arrayBuffer())
    .then((buffer) => readXlsxFile(new Uint8Array(buffer)))
    .then((data) =>
     {
      //console.log(data); 
      let table = document.getElementById("tbl-data");
      let messageDiv = document.getElementById("message");
      table.innerHTML = ""; // Clear existing table data
      messageDiv.innerHTML = ""; // Clear existing message

      let headerRow = data[0];
      let rollNumberIndex = headerRow.indexOf("roll_no");
      let normalizedRollNumberInput = rollNumberInput
        .replace(/\s+/g, "")
        .toLowerCase();

      // Find the row corresponding to the entered roll number
      // let rowToDisplay = data.find(
      //   (row) =>
      //     (isNaN(rollNumber) && row[rollNumberIndex] === rollNumber) || // Alphanumeric check
      //     (!isNaN(rollNumber) && parseInt(row[rollNumberIndex]) === rollNumber) // Numeric check
      // );
      let rowToDisplay = data.find((row) => {
        let rowRollNumber = row[rollNumberIndex]
          .toString()
          .replace(/\s+/g, "")
          .toLowerCase();
        return (
          rowRollNumber === normalizedRollNumberInput ||
          rowRollNumber === rollNumberInput
        );
      });

      
      if (rowToDisplay) {
        generateTableHead(table, headerRow);
        generateTableRows(table, rowToDisplay);

        let numSubmittedAssignments = rowToDisplay
          .slice(rollNumberIndex + 1)
          .filter(
            (cellValue) =>
              cellValue !== null && cellValue.toLowerCase() === "yes"
          ).length;

        if (numSubmittedAssignments > 0) {
          // messageDiv.textContent = `Number of assignments submitted for ${rollNumber}: ${numSubmittedAssignments}`;
          messageDiv.textContent = `Number of assignments submitted for ${rollNumber}:`;
          messageDiv.style.color = "green"; // Example: Change message color to green
          boldSpan.textContent = numSubmittedAssignments;
          boldSpan.style.fontSize = "30px";
          boldSpan.style.fontWeight = "bold";
          boldSpan.style.backgroundColor = "yellow";
          boldSpan.style.color = "black";
          boldSpan.style.marginLeft = "6px";
          messageDiv.appendChild(boldSpan);
        } else {
          messageDiv.textContent = `No assignments submitted for ${rollNumber}`;
          messageDiv.style.color = "red"; // Example: Change message color to red
        }
      } else {
        alert("Roll number not found in the Excel sheet.");
      }
    })
    .catch((error) =>
      console.error("Error loading or parsing the Excel file:", error)
    );
});

function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.append(text);
    row.append(th);
  }
}

function generateTableRows(table, data) {
  let newRow = table.insertRow(-1);
  data.forEach((cellValue) => {
    let newCell = newRow.insertCell();
    let newText = document.createTextNode(cellValue);
    newCell.append(newText);
    // if (cellValue.toLowerCase() === "yes") {
    //   // newCell.classList.add("table-success");
    //   newCell.style.color = "green";
    // } else if (cellValue == "null") {
    //   newCell.classList.add("table-danger");
    // }
  });
}

// Particles Javascript code
particlesJS("particles-js", {
  particles: {
    number: { value: 160, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 1,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 4, size_min: 0.3, sync: false },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 600 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "bubble" },
      onclick: { enable: true, mode: "repulse" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
      repulse: { distance: 400, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);