// Default Data Show Start
let alarm_arr = [0, 0, 0, 0, 0];
updateAllGauges(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
alarmData(alarm_arr);
// Default Data Show end

//.........websocket_client code Start..............
var socket = new WebSocket("ws://27.147.170.162:81");
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

    var splited_data = msg;

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

    // Update circuit breaker status if available
    if (splited_data.length >= 29) {
        const cbData = [
            parseInt(splited_data[22]) || 0,
            parseInt(splited_data[23]) || 0,
            parseInt(splited_data[24]) || 0,
            parseInt(splited_data[25]) || 0,
            parseInt(splited_data[26]) || 0,
            parseInt(splited_data[27]) || 0,
            parseInt(splited_data[28]) || 0
        ];
        updateCircuitBreakerStatus(cbData);
    }

    // Update chart data if available
    if (splited_data.length >= 34) {
        const loadData = [
            parseFloat(splited_data[29]) || 0,
            parseFloat(splited_data[30]) || 0,
            parseFloat(splited_data[31]) || 0,
            parseFloat(splited_data[32]) || 0,
            parseFloat(splited_data[33]) || 0
        ];
        updateLoadChart(loadData);
    }

    // Update alarm data if available
    if (splited_data.length >= 39) {
        const alarmData = [
            parseInt(splited_data[34]) || 0,
            parseInt(splited_data[35]) || 0,
            parseInt(splited_data[36]) || 0,
            parseInt(splited_data[37]) || 0,
            parseInt(splited_data[38]) || 0
        ];
        alarmData(alarmData);
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

//.........websocket_client code end..............

// Clear all data function
function clearAllData() {
    const alertList = document.getElementById("alert-list");
    if (alertList) {
        alertList.innerHTML = "";
    }
}

//Gauge alert start
function gaugeAlert(data, status) {
    let ul = document.getElementById("alert-list");
    let li = document.createElement("li");
    li.classList.add("alert-list-card");
    li.textContent = `${data} is ${status}.`;
    ul.appendChild(li);
}

//Gauge alert end

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
//getting color
function getColor(value, ranges) {
    if (value >= ranges.green[0] && value <= ranges.green[1]) {
        return "#4ECDC4"; // Green
    } else if (value >= ranges.orange[0] && value <= ranges.orange[1]) {
        return "#FE9B13"; // Orange
    } else {
        return "#FC5C65"; // Red
    }
}

// get status
function getStatus(value, ranges) {
    if (value >= ranges.green[0] && value <= ranges.green[1]) {
        return { text: "Normal", class: "status-normal" };
    } else if (value >= ranges.orange[0] && value <= ranges.orange[1]) {
        return { text: "Warning", class: "status-warning" };
    } else {
        return { text: "Danger", class: "status-danger" };
    }
}

// update circular gauge
function updateGauge(elementId, value, ranges) {
    const fillElement = document.getElementById(`${elementId}-fill`);
    const valueElement = document.getElementById(`${elementId}-value`);
    const statusElement = document.getElementById(`${elementId}-status`);

    // Calculate rotation based on value (0 to 360 degrees for 0 to max value)
    const rotation = (value / ranges.max) * 360;

    // Get color and status
    const color = getColor(value, ranges);
    const status = getStatus(value, ranges);

    // Update gauge fill
    fillElement.style.background = `conic-gradient(${color} 0deg ${rotation}deg, transparent ${rotation}deg 360deg)`;
    fillElement.style.color = color;

    // Update value (keep the unit span)
    const unit = valueElement.querySelector(".gauge-unit")?.textContent || "";
    valueElement.innerHTML = `${value} <span class="gauge-unit">${unit}</span>`;

    // Update status
    statusElement.textContent = status.text;
    statusElement.className = `status ${status.class}`;

    // Add pulse animation for warning and danger statuses
    if (status.class !== "status-normal") {
        statusElement.classList.add("pulse");
    } else {
        statusElement.classList.remove("pulse");
    }
}

//update all gauge data
function updateAllGauges(pdb, ups1, ups2, sts, ground, bat1, bat2, rft, rrt, ot, dbt, bpt, bnt, bgt) {
    // Clear previous alerts
    clearAllData();

    // PDB Voltage (0-240V)
    updateGauge("pdb", pdb, {
        green: [210, 230],
        orange: [190, 209],
        red: [0, 189],
        max: 240,
    });
    if (pdb < 210 || pdb > 230) gaugeAlert("PDB Voltage", pdb < 210 ? "low" : "high");

    // UPS1 Voltage (0-240V)
    updateGauge("ups1", ups1, {
        green: [210, 230],
        orange: [190, 209],
        red: [0, 189],
        max: 240,
    });
    if (ups1 < 210 || ups1 > 230) gaugeAlert("UPS1 Voltage", ups1 < 210 ? "low" : "high");

    // UPS2 Voltage (0-240V)
    updateGauge("ups2", ups2, {
        green: [210, 230],
        orange: [190, 209],
        red: [0, 189],
        max: 240,
    });
    if (ups2 < 210 || ups2 > 230) gaugeAlert("UPS2 Voltage", ups2 < 210 ? "low" : "high");

    // STS Voltage (0-240V)
    updateGauge("sts", sts, {
        green: [210, 230],
        orange: [190, 209],
        red: [0, 189],
        max: 240,
    });
    if (sts < 210 || sts > 230) gaugeAlert("STS Voltage", sts < 210 ? "low" : "high");

    // Ground Resistance (0-100Ω)
    updateGauge("grounds", ground, {
        green: [0, 10],
        orange: [11, 25],
        red: [26, 100],
        max: 100,
    });
    if (ground > 10) gaugeAlert("Ground Resistance", "high");

    // Battery Bank 1 (0-48V)
    updateGauge("battery1", bat1, {
        green: [42, 48],
        orange: [38, 41],
        red: [0, 37],
        max: 48,
    });
    if (bat1 < 42) gaugeAlert("Battery Bank 1", "low");

    // Battery Bank 2 (0-48V)
    updateGauge("battery2", bat2, {
        green: [42, 48],
        orange: [38, 41],
        red: [0, 37],
        max: 48,
    });
    if (bat2 < 42) gaugeAlert("Battery Bank 2", "low");

    // Rack Front Temperature (0-60°C)
    updateGauge("rft", rft, {
        green: [0, 35],
        orange: [36, 45],
        red: [46, 60],
        max: 60,
    });
    if (rft > 35) gaugeAlert("Rack Front Temperature", "high");

    // Rack Rear Temperature (0-60°C)
    updateGauge("rrt", rrt, {
        green: [0, 35],
        orange: [36, 45],
        red: [46, 60],
        max: 60,
    });
    if (rrt > 35) gaugeAlert("Rack Rear Temperature", "high");

    // Outside Temperature (0-100°C)
    updateGauge("ot", ot, {
        green: [0, 40],
        orange: [41, 50],
        red: [51, 100],
        max: 100,
    });
    if (ot > 40) gaugeAlert("Outside Temperature", "high");

    // DB Temperature (0-100°C)
    updateGauge("dbt", dbt, {
        green: [0, 45],
        orange: [46, 55],
        red: [56, 100],
        max: 100,
    });
    if (dbt > 45) gaugeAlert("DB Temperature", "high");

    // Busbar P Temperature (0-100°C)
    updateGauge("bpt", bpt, {
        green: [0, 60],
        orange: [61, 75],
        red: [76, 100],
        max: 100,
    });
    if (bpt > 60) gaugeAlert("Busbar P Temperature", "high");

    // Busbar N Temperature (0-100°C)
    updateGauge("bnt", bnt, {
        green: [0, 60],
        orange: [61, 75],
        red: [76, 100],
        max: 100,
    });
    if (bnt > 60) gaugeAlert("Busbar N Temperature", "high");

    // Busbar G Temperature (0-100°C)
    updateGauge("bgt", bgt, {
        green: [0, 60],
        orange: [61, 75],
        red: [76, 100],
        max: 100,
    });
    if (bgt > 60) gaugeAlert("Busbar G Temperature", "high");
}

// Initialize with current time
updateLastSyncTime();

// Other Alarm Unit start
function alarmData(x) {
    const alarmId = [
        "water-leakage",
        "fire-Alarm",
        "generator-status",
        "ups1-cb-status",
        "ups2-cb-status",
    ];
    const alarmCardId = [
        "Water Leakage",
        "Fire-Alarm",
        "Generator Status",
        "Ups1 cb Status",
        "Ups2 cb Status",
    ];
    const alarmData = [
        ["Detected", "No Alarm"],
        ["Detected", "No Alarm"],
        ["Failed", "Running"],
        ["Tripped", "ok"],
        ["Tripped", "ok"],
    ];

    for (i = 0; i <= 4; i++) {
        const alarmElem = document.getElementById(alarmId[i]);
        alarmElem.className = "";
        alarmElem.classList.add("psu-display-text");

        if (x[i] == 1) {
            alarmElem.innerText = alarmData[i][1];
            alarmElem.classList.add("on-btn");
        } else {
            alarmElem.innerText = alarmData[i][0];
            alarmElem.classList.add("off-btn");
            let ul = document.getElementById("alert-list");
            let li = document.createElement("li");
            li.classList.add("alert-list-card");
            li.textContent = `${alarmCardId[i]} is ${alarmData[i][0]}`;
            ul.appendChild(li);
        }
    }
}

// Circuit Breaker Status Function
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

// Chart Function
let loadChart = null;

function initializeLoadChart() {
    const ctx = document.getElementById('load-chart').getContext('2d');

    loadChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [
                {
                    label: 'BTS Load',
                    data: [],
                    borderColor: '#4ECDC4',
                    backgroundColor: 'rgba(78, 205, 196, 0.1)',
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'UPS Load',
                    data: [],
                    borderColor: '#3867D6',
                    backgroundColor: 'rgba(56, 103, 214, 0.1)',
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'UPS2 Load',
                    data: [],
                    borderColor: '#FE9B13',
                    backgroundColor: 'rgba(254, 155, 19, 0.1)',
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'Air Cooler Load',
                    data: [],
                    borderColor: '#FC5C65',
                    backgroundColor: 'rgba(252, 92, 101, 0.1)',
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'Others Load',
                    data: [],
                    borderColor: '#9B59B6',
                    backgroundColor: 'rgba(155, 89, 182, 0.1)',
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#E2E8F0',
                        font: {
                            size: 12
                        }
                    }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    backgroundColor: 'rgba(15, 23, 42, 0.9)',
                    titleColor: '#E2E8F0',
                    bodyColor: '#E2E8F0',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    borderWidth: 1
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#94A3B8'
                    }
                },
                y: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#94A3B8',
                        callback: function (value) {
                            return value + '%';
                        }
                    }
                }
            },
            interaction: {
                intersect: false,
                mode: 'nearest'
            }
        }
    });
}

function updateLoadChart(loadData) {
    // Check if we have exactly 5 data points
    if (loadData.length !== 5) {
        console.error('Expected 5 load data points, received:', loadData.length);
        return;
    }

    // Check if chart is initialized
    if (!loadChart) {
        initializeLoadChart();
    }

    // Get current time for label
    const now = new Date();
    const timeLabel = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Add new data point to each dataset
    loadChart.data.datasets[0].data.push(loadData[0]); // BTS Load
    loadChart.data.datasets[1].data.push(loadData[1]); // UPS Load
    loadChart.data.datasets[2].data.push(loadData[2]); // UPS2 Load
    loadChart.data.datasets[3].data.push(loadData[3]); // Air Cooler Load
    loadChart.data.datasets[4].data.push(loadData[4]); // Others Load

    // Add time label
    loadChart.data.labels.push(timeLabel);

    // Keep only last 10 data points for better visualization
    if (loadChart.data.datasets[0].data.length > 10) {
        loadChart.data.datasets.forEach(dataset => {
            dataset.data.shift();
        });
        loadChart.data.labels.shift();
    }

    // Update the chart (only chart refreshes, not full page)
    loadChart.update('none');
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function () {
    // Initialize chart
    initializeLoadChart();

    // Initialize circuit breakers with default values (all off)
    updateCircuitBreakerStatus([0, 0, 0, 0, 0, 0, 0]);

    // Initialize chart with default values
    updateLoadChart([0, 0, 0, 0, 0]);
});