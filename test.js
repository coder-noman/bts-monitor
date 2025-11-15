const socket = new WebSocket("ws://27.147.170.162:81");

socket.onopen = () => {
  console.log("✅ Connected to WebSocket server");
};

let receivedJsonData = false; // flag to capture only the first JSON message

socket.onmessage = (event) => {
  const msg = event.data.trim();
  console.log(msg)

  // If we've already captured JSON, ignore everything else
  if (receivedJsonData) return;

  // Try to parse JSON
  try {
    const data = JSON.parse(msg); // will throw if not JSON
    console.log("📦 BTS & System Data:", data);

    receivedJsonData = true; // stop after the first JSON
  } catch (err) {
    // Not JSON, ignore
    // console.log("Non-JSON message skipped:", msg);
  }
};
