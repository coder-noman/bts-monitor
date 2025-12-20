let barChart;
let ipduSum_arr = [10, 20, 30, 40, 20];
const cbArr = [0, 1, 0, 1, 0, 1, 1];
let alarm_arr = [0, 1, 1, 0, 0, 1];

// Default Data Show Start
updateAllData(10, 20, 30, 10, 20, 57, 10, 20, 30, 10, 20, 30, 40, 20);
updateBarChart();
alarmData(alarm_arr);
updateCircuitBreakerStatus(cbArr);
// Default Data Show end

// //.........websocket_client code Start..............
var socket = new WebSocket("");
socket.onmessage = function (event) {
    const data = event.data.split(":");
    const data_catagory = data[0] || "";
    const msg = data[1] || "";

    // checking data is coming or not start
    if (data_catagory == "banasree") {
        // Update last sync time
        updateLastSyncTime();
    } else {
        return;
    }

    console.log(msg);
    // checking data is coming or not end

    // console.log("Data received:", data);
    // console.log("Data received:", data_catagory);

    var splited_data = msg;

    console.log(splited_data[0]);
    // Update all gauges with the received data
    updateAllGauges(
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
        splited_data[13],
        splited_data[14]
    );

    // Update device information if available
    if (splited_data.length >= 18) {
        deviceInformation(
            splited_data[15] || "192.168.0.128",  // LAN IP
            splited_data[16] || "GP",             // GSM Operator
            splited_data[17] || "50",             // GSM Signal
            splited_data[18] || "4.1",            // Internal Battery
            splited_data[19] || "1",              // PSU Status 1
            splited_data[20] || "1",              // PSU Status 2
            splited_data[21] || "0"               // Data Source
        );
    }
};

// Update last sync time
function updateLastSyncTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const dateString = now.toLocaleDateString();

    document.getElementById("lastUpdateTime").textContent = timeString;
    document.getElementById("lastUpdateDate").textContent = dateString;
}

// .........websocket_client code end..............

// Clear all data function
function clearAllData() {
    const alertList = document.getElementById("alert-list");
    if (alertList) {
        alertList.innerHTML = "";
    }
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
        devicePsu1.style.color = "#4ECDC4";
    } else {
        devicePsu1.innerText = `: Failed`;
        devicePsu1.style.color = "#FC5C65";
    }

    // Psu Status 2
    if (psu2 == 1) {
        devicePsu2.innerText = `: OK`;
        devicePsu2.style.color = "#4ECDC4";
    } else {
        devicePsu2.innerText = `: Failed`;
        devicePsu2.style.color = "#FC5C65";
    }

    // Data Source
    if (ds == 0) {
        dataSource.innerText = `: LAN`;
        dataSource.style.color = "#4ECDC4";
    } else if (ds == 1) {
        dataSource.innerText = `: WIFI`;
        dataSource.style.color = "#FE9B13";
    } else if (ds == 2) {
        dataSource.innerText = `: GPRS`;
        dataSource.style.color = "#FE9B13";
    }
}
// device Information end

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
        green: [180, 260],
        orange: [0, 180],
        red: [261, 300],
        max: 300,
    });

    if (pdbVoltage >= 0 && pdbVoltage <= 180) {
        gaugeAlert("PDB Voltage", "low");
    } else if (pdbVoltage >= 261 && pdbVoltage <= 300) {
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
        orange: [6, 10],
        red: [11, 60],
        max: 60,
    });

    if (groundVoltage >= 0 && groundVoltage <= 5) {
        gaugeAlert("Ground Voltage", "low");
    } else if (groundVoltage >= 11 && groundVoltage <= 60) {
        gaugeAlert("Ground Voltage", "high");
    }

    const batteryVoltage1 = f;
    updateGauge("battery1", batteryVoltage1, {
        green: [48, 57],
        orange: [58, 60],
        red: [30, 47],
        max: 60,
    });

    if (batteryVoltage1 >= 30 && batteryVoltage1 <= 47) {
        gaugeAlert("Battery1 Voltage", "low");
    } else if (batteryVoltage1 >= 58 && batteryVoltage1 <= 60) {
        gaugeAlert("Battery1 Voltage", "very Low");
    }
    const batteryVoltage2 = g;
    updateGauge("battery2", batteryVoltage2, {
        green: [48, 57],
        orange: [58, 60],
        red: [30, 47],
        max: 60,
    });

    if (batteryVoltage2 >= 30 && batteryVoltage2 <= 47) {
        gaugeAlert("Battery2 Voltage", "low");
    } else if (batteryVoltage2 >= 58 && batteryVoltage2 <= 220) {
        gaugeAlert("Battery2 Voltage", "very Low");
    }

    const rackFrontTemp = h;
    updateGauge("rft", rackFrontTemp, {
        green: [0, 30],
        orange: [31, 35],
        red: [36, 65],
        max: 65,
    });

    if (rackFrontTemp >= 26 && rackFrontTemp <= 31) {
        gaugeAlert("Rack Front Temperature", "high");
    } else if (rackFrontTemp >= 32 && rackFrontTemp <= 55) {
        gaugeAlert("Rack Front Temperature", "very high");
    }
    const rackRearTemp = i;
    updateGauge("rrt", rackRearTemp, {
        green: [0, 30],
        orange: [31, 35],
        red: [36, 65],
        max: 65,
    });

    if (rackRearTemp >= 26 && rackRearTemp <= 31) {
        gaugeAlert("Rack Rear Temperature", "high");
    } else if (rackRearTemp >= 32 && rackRearTemp <= 55) {
        gaugeAlert("Rack Rear Temperature", "very high");
    }
    const outSideTemp = j;
    updateGauge("ot", outSideTemp, {
        green: [0, 32],
        orange: [33, 37],
        red: [38, 65],
        max: 65,
    });

    if (outSideTemp >= 26 && outSideTemp <= 31) {
        gaugeAlert("Outside Temperature", "high");
    } else if (outSideTemp >= 32 && outSideTemp <= 55) {
        gaugeAlert("Outside Temperature", "very high");
    }
    const dbTemp = k;
    updateGauge("dbt", dbTemp, {
        green: [0, 33],
        orange: [34, 38],
        red: [39, 65],
        max: 65,
    });

    if (dbTemp >= 26 && dbTemp <= 31) {
        gaugeAlert("DB Temperature", "high");
    } else if (dbTemp >= 32 && dbTemp <= 55) {
        gaugeAlert("DB Temperature", "very high");
    }
    const busBarPTemp = l;
    updateGauge("bpt", busBarPTemp, {
        green: [0, 35],
        orange: [36, 42],
        red: [43, 65],
        max: 65,
    });

    if (busBarPTemp >= 26 && busBarPTemp <= 31) {
        gaugeAlert("Busbar P Temp", "high");
    } else if (busBarPTemp >= 32 && busBarPTemp <= 55) {
        gaugeAlert("Busbar P Temp", "very high");
    }
    const busBarNTemp = m;
    updateGauge("bnt", busBarNTemp, {
        green: [0, 35],
        orange: [36, 42],
        red: [43, 65],
        max: 65,
    });

    if (busBarNTemp >= 26 && busBarNTemp <= 31) {
        gaugeAlert("Busbar N Temp", "high");
    } else if (busBarNTemp >= 32 && busBarNTemp <= 55) {
        gaugeAlert("Busbar N Temp", "very high");
    }
    const busBarGTemp = n;
    updateGauge("bgt", busBarGTemp, {
        green: [0, 35],
        orange: [36, 42],
        red: [43, 65],
        max: 65,
    });

    if (busBarGTemp >= 26 && busBarGTemp <= 31) {
        gaugeAlert("Busbar G Temp", "high");
    } else if (busBarGTemp >= 32 && busBarGTemp <= 55) {
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
                    data: ipduSum_arr,
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

window.addEventListener("load", initializeCharts);
function updateBarChart() {
    console.log("ipduSum_arr update= ", ipduSum_arr);
    if (barChart) {
        barChart.data.datasets[0].data = ipduSum_arr;
        barChart.update("none");
    }
}

// chart end

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
        ["Dirty", "Freash"],
    ];

    for (i = 0; i <= 5; i++) {
        if (x[i] == 1) {
            document.getElementById(alarmId[i]).innerText = alarmData[i][1];
            document.getElementById(alarmId[i]).classList.add("on-btn");
        } else {
            document.getElementById(alarmId[i]).innerText = alarmData[i][0];
            document.getElementById(alarmId[i]).classList.add("off-btn");
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
// Other Alarm Unit end

// Circuit Breaker Start
function updateCircuitBreakerStatus(cbData) {
    const cbGrids = document.querySelectorAll('.cb-grid');

    // Update each circuit breaker
    for (let i = 0; i < 7; i++) {
        const cbGrid = cbGrids[i];
        const status = cbData[i];

        // Get the switch element
        const cbSwitch = cbGrid.querySelector('.cb-switch');
        // Get the label element
        const cbLabel = cbGrid.querySelector('.cb-label');

        if (status === 1) {
            // ON state - Green
            cbSwitch.classList.add('on');
            cbSwitch.classList.remove('off');
            cbSwitch.style.backgroundColor = '#4ECDC4';
            cbLabel.textContent = 'ON';
            cbLabel.className = 'cb-label cb-on';
        } else if (status === 0) {
            // OFF state - Red
            cbSwitch.classList.remove('on');
            cbSwitch.classList.add('off');
            cbSwitch.style.backgroundColor = '#FC5C65';
            cbLabel.textContent = 'OFF';
            cbLabel.className = 'cb-label cb-off';
        }
    }
}
// Circuit Breaker end