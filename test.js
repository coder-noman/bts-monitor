
// Gauge data array with static values
const gaugeData = [
    {
        id: "pdb",
        value: 220,
        max: 240,
        unit: "V",
        ranges: { green: [200, 240], orange: [180, 199], red: [0, 179] },
    },
    {
        id: "ups1",
        value: 230,
        max: 240,
        unit: "V",
        ranges: { green: [200, 240], orange: [180, 199], red: [0, 179] },
    },
    {
        id: "ups2",
        value: 235,
        max: 240,
        unit: "V",
        ranges: { green: [200, 240], orange: [180, 199], red: [0, 179] },
    },
    {
        id: "sts",
        value: 225,
        max: 240,
        unit: "V",
        ranges: { green: [200, 240], orange: [180, 199], red: [0, 179] },
    },
    {
        id: "grounds",
        value: 5,
        max: 100,
        unit: "Ω",
        ranges: { green: [0, 10], orange: [11, 20], red: [21, 100] },
    },
    {
        id: "battery1",
        value: 48,
        max: 48,
        unit: "V",
        ranges: { green: [40, 48], orange: [30, 39], red: [0, 29] },
    },
    {
        id: "battery2",
        value: 46,
        max: 48,
        unit: "V",
        ranges: { green: [40, 48], orange: [30, 39], red: [0, 29] },
    },
    {
        id: "rft",
        value: 50,
        max: 60,
        unit: "Hz",
        ranges: { green: [48, 60], orange: [45, 47], red: [0, 44] },
    },
    {
        id: "rrt",
        value: 49,
        max: 60,
        unit: "Hz",
        ranges: { green: [48, 60], orange: [45, 47], red: [0, 44] },
    },
    {
        id: "ot",
        value: 65,
        max: 100,
        unit: "°C",
        ranges: { green: [0, 70], orange: [71, 85], red: [86, 100] },
    },
    {
        id: "rt",
        value: 45,
        max: 100,
        unit: "°C",
        ranges: { green: [0, 50], orange: [51, 70], red: [71, 100] },
    },
    {
        id: "nt",
        value: 30,
        max: 100,
        unit: "°C",
        ranges: { green: [0, 40], orange: [41, 60], red: [61, 100] },
    },
    {
        id: "gt",
        value: 75,
        max: 100,
        unit: "°C",
        ranges: { green: [0, 80], orange: [81, 90], red: [91, 100] },
    },
    {
        id: "dbt",
        value: 25,
        max: 100,
        unit: "°C",
        ranges: { green: [0, 30], orange: [31, 40], red: [41, 100] },
    },
];

//.........websocket_client code Start..............
// var socket = new WebSocket("ws://27.147.170.162:81");
var socket = new WebSocket("ws://27.147.170.162:8");
socket.onmessage = function (event) {
    const data = event.data.split(":");
    const data_catagory = data[0] || "";
    const msg = data[1] || "";

    // checking data is coming or not start
    if (data_catagory == "Hams_HO") {
        // dataReceived = true;
        // clearTimeout(timeout);
    } else {
        return;
    }
    clearAllData();

    console.log(data[1]);
    console.log(data[2]);
    console.log(data[3]);
    console.log(data[4]);

    var splited_data = data[4].split(",");

    // Main Gauge
    updateAllGauges();

    // Device Inforfation
    deviceInformation(
        splited_data[12],
        splited_data[13],
        splited_data[14],
        splited_data[15],
        splited_data[16],
        splited_data[17],
        splited_data[18]
    );
};
//.........websocket_client code end..............

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

    // if(gsmOp == 0){
    //   gsmOperator.innerText = ': Not Found';
    // }else if(gsmOp == 1){
    //   gsmOperator.innerText = ': GP';
    // }else if(gsmOp == 2){
    //   gsmOperator.innerText = ': Robi';
    // }else if(gsmOp == 3){
    //   gsmOperator.innerText = ': Banglalink';
    // }else if(gsmOp == 4){
    //   gsmOperator.innerText = ': Airtel';
    // }else if(gsmOp == 5){
    //   gsmOperator.innerText = ': Teletalk';
    // }

    // Gsm Signal
    gsmSignal.innerText = `: ${gsmSig} %`;

    // Internal Battery
    internalBattery.innerText = `: ${ib} V`;

    // Psu Stutus 1
    if (psu1 == 1) {
        devicePsu1.innerText = `: OK`;
    } else {
        devicePsu1.innerText = `: Failed`;
    }

    // Psu Stutus 2
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
// device Information end

// clear all data function start
function clearAllData() {
    document.getElementById("alert-list").innerHTML = "";
}
// clear all data function end

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
function updateGauge(elementId, value, ranges, max) {
    const fillElement = document.getElementById(`${elementId}-fill`);
    const valueElement = document.getElementById(`${elementId}-value`);
    const statusElement = document.getElementById(`${elementId}-status`);

    // Calculate rotation based on value (0 to 360 degrees for 0 to max value)
    const rotation = (value / max) * 360;

    // Get color and status
    const color = getColor(value, ranges);
    const status = getStatus(value, ranges);

    // Update gauge fill
    fillElement.style.background = `conic-gradient(${color} 0deg ${rotation}deg, transparent ${rotation}deg 360deg)`;
    fillElement.style.color = color;

    // Update value (keep the unit span)
    const unit =
        valueElement.querySelector(".gauge-unit")?.textContent || "";
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
function updateAllGauges() {
    gaugeData.forEach((gauge) => {
        updateGauge(gauge.id, gauge.value, gauge.ranges, gauge.max);

        // Check for alerts
        if (
            gauge.value < gauge.ranges.green[0] ||
            gauge.value > gauge.ranges.green[1]
        ) {
            const status = getStatus(gauge.value, gauge.ranges);
            gaugeAlert(gauge.id.toUpperCase(), status.text.toLowerCase());
        }
    });
}

// Initialize all gauges on page load
window.addEventListener("load", function () {
    updateAllGauges();
});
// gauge data end

// banasree: 230, 220, 240, 300, 22, 20, 23, 50, 37, 58, 40, 45, 42, 61, 28, 48, 50, 27, 43, 59, 50, 30, 46, 32, 30, 35, 42, 172.24.19.122, NUL, 0, 4.23, 1, 1, 0