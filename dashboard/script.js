// Get location from URL parameter
function getLocationFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('location') || 'banasree';
}

// Update page title with location
function updatePageTitle(locationName) {
    const titleElement = document.getElementById('pageTitle');
    const formattedName = locationName
        .replace(/_/g, " ")
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    titleElement.textContent = `Dashboard: ${formattedName}`;
    document.title = `AdminSite - ${formattedName}`;
}

let barChart;
let loadDataArr = [0, 0, 0, 0, 0];
const cbArr = [0, 0, 0, 0, 0, 0, 0];
let alarm_arr = [0, 0, 0, 0, 0, 0];
let currentLocation = '';

function initializePage() {
    currentLocation = getLocationFromURL();
    updatePageTitle(currentLocation);

    // Default Data Show
    updateAllData(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    updateBarChart();
    alarmData(alarm_arr);
    updateCircuitBreakerStatus(cbArr);
    initializeWebSocket();
}

function initializeWebSocket() {
    var socket = new WebSocket("ws://27.147.170.162:81");

    socket.onmessage = function (event) {
        const data = event.data.split(":");
        const data_category = data[0] || "";
        const msg = data[1] || "";

        // current location
        if (data_category.toLowerCase() == currentLocation.toLowerCase()) {
            updateLastSyncTime();

            console.log(`Data for ${currentLocation}:`, msg);

            var splited_data = msg.split(",");

            clearAllData();

            // all gauges data
            updateAllData(
                splited_data[0],
                splited_data[1],
                splited_data[2],
                splited_data[3],
                splited_data[4],
                splited_data[5],
                splited_data[6],
                splited_data[7],
                splited_data[8],
                splited_data[9],
                splited_data[10],
                splited_data[11],
                splited_data[12],
                splited_data[13]
            );

            // Bar Chart data
            loadDataArr[0] = splited_data[14];
            loadDataArr[1] = splited_data[15];
            loadDataArr[2] = splited_data[16];
            loadDataArr[3] = splited_data[17];
            loadDataArr[4] = splited_data[18];
            updateBarChart();

            // alarm data
            alarm_arr[0] = splited_data[19];
            alarm_arr[1] = splited_data[20];
            alarm_arr[2] = splited_data[21];
            alarm_arr[3] = splited_data[22];
            alarm_arr[4] = splited_data[23];
            alarm_arr[5] = splited_data[24];
            alarmData(alarm_arr)

            // circuit breaker data

            cbArr[0] = splited_data[25];
            cbArr[1] = splited_data[26];
            cbArr[2] = splited_data[27];
            cbArr[3] = splited_data[28];
            cbArr[4] = splited_data[29];
            cbArr[5] = splited_data[30];
            cbArr[6] = splited_data[31];
            updateCircuitBreakerStatus(cbArr);


            deviceInformation(
                splited_data[32],
                splited_data[33],
                splited_data[34],
                splited_data[35],
                splited_data[36],
                splited_data[37],
                splited_data[38]
            );

            socket.onerror = function (error) {
                console.error("WebSocket Error:", error);
            };

            socket.onclose = function () {
                console.log("WebSocket connection closed. Attempting to reconnect...");
                setTimeout(initializeWebSocket, 3000); // Reconnect after 3 seconds
            };
        }
    }
}

// Update last sync time
function updateLastSyncTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const dateString = now.toLocaleDateString();

    document.getElementById("lastUpdateTime").textContent = timeString;
    document.getElementById("lastUpdateDate").textContent = dateString;
}

// device Information start
function deviceInformation(lan, gsmOp, gsmSig, ib, psu1, psu2, ds) {
    const lanIp = document.getElementById("device-lan");
    const gsmOperator = document.getElementById("gsm-operator");
    const gsmSignal = document.getElementById("gsm-signal");
    const internalBattery = document.getElementById("internal-battery");
    const devicePsu1 = document.getElementById("device-psu1");
    const devicePsu2 = document.getElementById("device-psu2");
    const dataSource = document.getElementById("data-source");

    // Lan IP
    lanIp.innerHTML = `: ${lan}`;

    // Gsm Operator
    gsmOperator.innerText = `: ${gsmOp}`;

    // Gsm Signal
    gsmSignal.innerText = `: ${gsmSig}%`;

    // Internal Battery
    internalBattery.innerText = `: ${ib} V`;

    // Psu Status 1
    if (psu1 == 1) {
        devicePsu1.innerText = `: OK`;
    } else {
        devicePsu1.innerText = `: Failed`;
    }

    // Psu Status 2
    if (psu2 == 1) {
        devicePsu2.innerText = `: OK`;
    } else {
        devicePsu2.innerText = `: Failed`;
    }

    // Data Source
    if (ds == 0) {
        dataSource.innerText = `: LAN`;
    } else if (ds == 1) {
        dataSource.innerText = `: WIFI`;
    } else if (ds == 2) {
        dataSource.innerText = `: GPRS`;
    }
}

// gauge data start
function gaugeAlert(data, status) {
    let ul = document.getElementById("alert-list");
    let li = document.createElement("li");
    li.classList.add("alert-list-card");
    li.textContent = `${data} is ${status}.`;
    ul.appendChild(li);
}

function getColor(value, ranges) {
    if (value >= ranges.green[0] && value <= ranges.green[1]) {
        return "#4ECDC4";
    } else if (value >= ranges.orange[0] && value <= ranges.orange[1]) {
        return "#FE9B13";
    } else {
        return "#FC5C65";
    }
}

function getStatus(value, ranges) {
    if (value >= ranges.green[0] && value <= ranges.green[1]) {
        return { text: "Normal", class: "status-normal" };
    } else if (value >= ranges.orange[0] && value <= ranges.orange[1]) {
        return { text: "Warning", class: "status-warning" };
    } else {
        return { text: "Danger", class: "status-danger" };
    }
}

function updateGauge(elementId, value, ranges) {
    const fillElement = document.getElementById(`${elementId}-fill`);
    const valueElement = document.getElementById(`${elementId}-value`);
    const statusElement = document.getElementById(`${elementId}-status`);

    const rotation = (value / ranges.max) * 360;

    const color = getColor(value, ranges);
    const status = getStatus(value, ranges);

    fillElement.style.background = `conic-gradient(${color} 0deg ${rotation}deg, transparent ${rotation}deg 360deg)`;
    fillElement.style.color = color;

    const unit = valueElement.querySelector(".gauge-unit")?.textContent || "";
    valueElement.innerHTML = `${value} <span class="gauge-unit">${unit}</span>`;

    statusElement.textContent = status.text;
    statusElement.className = `status ${status.class}`;

    if (status.class !== "status-normal") {
        statusElement.classList.add("pulse");
    } else {
        statusElement.classList.remove("pulse");
    }
}

function updateAllData(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    const pdbVoltage = a;
    updateGauge("pdb", pdbVoltage, {
        green: [181, 270],
        orange: [0, 180],
        red: [271, 300],
        max: 300,
    });

    if (pdbVoltage >= 0 && pdbVoltage <= 180) {
        gaugeAlert("PDB Voltage", "low");
    } else if (pdbVoltage >= 271 && pdbVoltage <= 300) {
        gaugeAlert("PDB Voltage", "high");
    }

    const ups1Voltage = b;
    updateGauge("ups1", ups1Voltage, {
        green: [211, 230],
        orange: [0, 210],
        red: [231, 300],
        max: 300,
    });

    if (ups1Voltage >= 0 && ups1Voltage <= 210) {
        gaugeAlert("UPS1 Voltage", "low");
    } else if (ups1Voltage >= 231 && ups1Voltage <= 300) {
        gaugeAlert("UPS1 Voltage", "high");
    }

    const ups2Voltage = c;
    updateGauge("ups2", ups2Voltage, {
        green: [211, 230],
        orange: [0, 210],
        red: [231, 300],
        max: 300,
    });

    if (ups2Voltage >= 0 && ups2Voltage <= 210) {
        gaugeAlert("UPS2 Voltage", "low");
    } else if (ups2Voltage >= 231 && ups2Voltage <= 300) {
        gaugeAlert("UPS2 Voltage", "high");
    }

    const stsVoltage = d;
    updateGauge("sts", stsVoltage, {
        green: [211, 230],
        orange: [0, 210],
        red: [231, 300],
        max: 300,
    });

    if (stsVoltage >= 0 && stsVoltage <= 210) {
        gaugeAlert("STS Voltage", "low");
    } else if (stsVoltage >= 231 && stsVoltage <= 300) {
        gaugeAlert("STS Voltage", "high");
    }

    const groundVoltage = e;
    updateGauge("grounds", groundVoltage, {
        green: [0, 5],
        orange: [5.1, 15.9],
        red: [16, 60],
        max: 60,
    });

    if (groundVoltage >= 5.1 && groundVoltage <= 15.9) {
        gaugeAlert("Ground Voltage", "low");
    } else if (groundVoltage >= 16 && groundVoltage <= 60) {
        gaugeAlert("Ground Voltage", "high");
    }

    const batteryVoltage1 = f;
    updateGauge("battery1", batteryVoltage1, {
        green: [48, 57],
        orange: [0, 47.9],
        red: [57.1, 60],
        max: 60,
    });

    if (batteryVoltage1 >= 0 && batteryVoltage1 <= 47.9) {
        gaugeAlert("Battery1 Voltage", "low");
    } else if (batteryVoltage1 >= 57.1 && batteryVoltage1 <= 60) {
        gaugeAlert("Battery1 Voltage", "High");
    }

    const batteryVoltage2 = g;
    updateGauge("battery2", batteryVoltage2, {
        green: [48, 57],
        orange: [0, 47.9],
        red: [57.1, 60],
        max: 60,
    });

    if (batteryVoltage2 >= 0 && batteryVoltage2 <= 47.9) {
        gaugeAlert("Battery2 Voltage", "low");
    } else if (batteryVoltage2 >= 57.1 && batteryVoltage2 <= 60) {
        gaugeAlert("Battery2 Voltage", "High");
    }

    const rackFrontTemp = h;
    updateGauge("rft", rackFrontTemp, {
        green: [0, 30.9],
        orange: [31, 35.9],
        red: [36, 65],
        max: 65,
    });

    if (rackFrontTemp >= 31 && rackFrontTemp <= 35.9) {
        gaugeAlert("Rack Front Temperature", "high");
    } else if (rackFrontTemp >= 36 && rackFrontTemp <= 65) {
        gaugeAlert("Rack Front Temperature", "very high");
    }

    const rackRearTemp = i;
    updateGauge("rrt", rackRearTemp, {
        green: [0, 30.9],
        orange: [31, 35.9],
        red: [36, 65],
        max: 65,
    });

    if (rackRearTemp >= 31 && rackRearTemp <= 35.9) {
        gaugeAlert("Rack Rear Temperature", "high");
    } else if (rackRearTemp >= 36 && rackRearTemp <= 65) {
        gaugeAlert("Rack Rear Temperature", "very high");
    }

    const outSideTemp = j;
    updateGauge("ot", outSideTemp, {
        green: [0, 32.9],
        orange: [33, 37.9],
        red: [38, 65],
        max: 65,
    });

    if (outSideTemp >= 33 && outSideTemp <= 37.9) {
        gaugeAlert("Outside Temperature", "high");
    } else if (outSideTemp >= 38 && outSideTemp <= 65) {
        gaugeAlert("Outside Temperature", "very high");
    }

    const dbTemp = k;
    updateGauge("dbt", dbTemp, {
        green: [0, 33.9],
        orange: [34, 38.9],
        red: [39, 65],
        max: 65,
    });

    if (dbTemp >= 34 && dbTemp <= 38.9) {
        gaugeAlert("DB Temperature", "high");
    } else if (dbTemp >= 39 && dbTemp <= 65) {
        gaugeAlert("DB Temperature", "very high");
    }

    const busBarPTemp = l;
    updateGauge("bpt", busBarPTemp, {
        green: [0, 35.9],
        orange: [36, 42.9],
        red: [43, 65],
        max: 65,
    });

    if (busBarPTemp >= 36 && busBarPTemp <= 42.9) {
        gaugeAlert("Busbar P Temp", "high");
    } else if (busBarPTemp >= 43 && busBarPTemp <= 65) {
        gaugeAlert("Busbar P Temp", "very high");
    }

    const busBarNTemp = m;
    updateGauge("bnt", busBarNTemp, {
        green: [0, 35.9],
        orange: [36, 42.9],
        red: [43, 65],
        max: 65,
    });

    if (busBarNTemp >= 36 && busBarNTemp <= 42.9) {
        gaugeAlert("Busbar N Temp", "high");
    } else if (busBarNTemp >= 43 && busBarNTemp <= 65) {
        gaugeAlert("Busbar N Temp", "very high");
    }

    const busBarGTemp = n;
    updateGauge("bgt", busBarGTemp, {
        green: [0, 35.9],
        orange: [36, 42.9],
        red: [43, 65],
        max: 65,
    });

    if (busBarGTemp >= 36 && busBarGTemp <= 42.9) {
        gaugeAlert("Busbar G Temp", "high");
    } else if (busBarGTemp >= 43 && busBarGTemp <= 65) {
        gaugeAlert("Busbar G Temp", "very high");
    }
}

// chart start
let color = "white";

function initializeCharts() {
    const voltageCtx = document.getElementById("voltage-chart").getContext("2d");
    barChart = new Chart(voltageCtx, {
        type: "bar",
        data: {
            labels: ["BTS", "UPS1", "UPS2", "Air Cooler", "Others"],
            datasets: [
                {
                    label: "Load (VA)",
                    data: loadDataArr,
                    backgroundColor: [
                        "rgba(78, 205, 196, 0.7)",
                        "#e2111b9a",
                        "#3a67d1af",
                        "#fe9c13d3",
                        "#b5d13aaf",
                    ],
                    borderRadius: 10,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: "rgba(160, 174, 192, 0.1)",
                    },
                    ticks: {
                        color: `${color}`,
                        font: {
                            size: 12,
                        },
                    },
                },
                x: {
                    grid: {
                        display: false,
                    },
                    ticks: {
                        color: `${color}`,
                        font: {
                            size: 12,
                        },
                    },
                },
            },
        },
    });
}

function updateBarChart() {
    if (barChart) {
        barChart.data.datasets[0].data = loadDataArr;
        barChart.update("none");
    }
}

// Other Alarm Unit start
function alarmData(x) {
    const alarmId = [
        "water-leakage",
        "door-open",
        "human-presence",
        "smoke-sensor",
        "surge-protector-status",
        "air-quality",
    ];
    const alarmCardId = [
        "Water Leakage",
        "Door",
        "Human Presence",
        "Smoke",
        "Surge Protector Status",
        "Air Quality"
    ];
    const alarmData = [
        ["Detected", "No Alarm"],
        ["Opened", "Closed"],
        ["Detected", "Not Detected"],
        ["Detected", "Not Detected"],
        ["Fail", "Active"],
        ["Dirty", "Fresh"],
    ];

    for (i = 0; i <= 5; i++) {
        if (x[i] == 1) {
            document.getElementById(alarmId[i]).innerText = alarmData[i][1];
            document.getElementById(alarmId[i]).className = "on-btn";
        } else {
            document.getElementById(alarmId[i]).innerText = alarmData[i][0];
            document.getElementById(alarmId[i]).className = "off-btn";
            let ul = document.getElementById("alert-list");
            let li = document.createElement("li");
            li.classList.add("alert-list-card");
            li.textContent = `${alarmCardId[i]} is ${alarmData[i][0]}`;
            ul.appendChild(li);
        }
    }
}

function clearAllData() {
    document.getElementById("alert-list").innerHTML = "";
    const alarmId = [
        "water-leakage",
        "door-open",
        "human-presence",
        "smoke-sensor",
        "surge-protector-status",
        "air-quality",
    ];
    for (let j = 0; j < alarmId.length; j++) {
        const alarmElem = document.getElementById(alarmId[j]);
        if (alarmElem) {
            alarmElem.innerText = "";
            alarmElem.className = "";
        }
    }
}

// Circuit Breaker Start
function updateCircuitBreakerStatus(cbData) {
    const cbGrids = document.querySelectorAll('.cb-grid');

    for (let i = 0; i < 7; i++) {
        const cbGrid = cbGrids[i];
        const status = cbData[i];

        const cbSwitch = cbGrid.querySelector('.cb-switch');
        const cbLabel = cbGrid.querySelector('.cb-label');

        if (status == 1) {
            cbSwitch.classList.add('on');
            cbSwitch.classList.remove('off');
            cbSwitch.style.backgroundColor = '#4ECDC4';
            cbLabel.textContent = 'ON';
            cbLabel.className = 'cb-label cb-on';
        } else if (status == 0) {
            cbSwitch.classList.remove('on');
            cbSwitch.classList.add('off');
            cbSwitch.style.backgroundColor = '#FC5C65';
            cbLabel.textContent = 'OFF';
            cbLabel.className = 'cb-label cb-off';
        }
    }
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    initializeCharts();
    initializePage();
});