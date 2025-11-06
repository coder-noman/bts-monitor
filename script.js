// sidebar search funtionality start
        // BTS data mapping
        const btsData = {
          DHK282: "seed_store",
          DHK085: "Gulshan1",
          hams02: "btrc",
          DHK723: "Gazipur",
          DHK358: "Tangail",
          DHK033: "Savar_Epz",
          DHK013: "Concord",
          DHK483: "Dilkusha",
          DHK020: "Imamganj",
          DHK015: "Narayangonj",
          DHK385: "Shiddirgonj",
          DHK021: "Joypara",
          DHK019: "Ghorashal",
          DHK034: "Madhobdi",
          DHK118: "Brahmanbaria ",
          DHK143: "Kishorganj",
          DHK254: "Bhairab",
          DHK086: "Monipuri_Para",
          DHK571: "Nikunja",
          DHK094: "Eskaton",
          DHK088: "Banasree",
          DHK046: "Mawna",
          DHK225: "Hatirpul ",
          DHK230: "Mohammadpur",
          DHK227: "Mirpur_DOHS",
          DHK229: "Bashundhara_D",
          DHK522: "Bashundhara_I",
          DHK243: "Wari",
          DHK279: "Uttara_Sector_13",
          DHK048: "Manikganj",
          DHK388: "Mirpur_2",
          DHK147: "Munshiganj",
          DHK421: "Jamgora",
          DHK455: "Tongi ",
          DHK665: "Lalmatia",
          DHK686: "Agargaon",
          DHK026: "Cumilla",
          DHK130: "Chandpur",
          DHK489: "Shimultoli",
          DHK066: "Akhaura",
          DHK072: "Ashuganj",
          DHK056: "Dakshinkhan",
          DHK057: "Haluaghat",
          DHK063: "Chauddagram",
          DHK070: "West_Nakhalpara",
          DHK064: "Trishal",
          DHK065: "Shahjadpur",
          DHK069: "Salna ",
          DHK067: "Sakhipur",
          DHK061: "Dhamrai",
          DHK073: "Valuka",
          DHK068: "Shahjanpur",
          DHK059: "Goforgaon",
          DHK062: "Nowjor",
          DHK071: "East_Nakhalpara",
          CTG420: "Kaptai",
          CTG124: "Raozan",
          CTG516: "Ukhiya",
          CTG572: "Khagrachari",
          CTG071: "Mehedi_Tower",
          CTG072: "Khatunganj",
          CTG063: "Ali_plaza",
          CTG077: "Coxs_Bazar",
          CTG092: "KEPZ",
          CTG074: "Sagorika",
          CTG002: "Feni",
          CTG041: "Nazumiyarhat",
          CTG060: "Chowmohoni ",
          CTG073: "Khulshi ",
          CTG212: "Kalurghat",
          CTG009: "Oxygen",
          CTG056: "Eidgah",
          CTG076: "Lohagora",
          CTG452: "Potiya",
          CTG462: "Chakaria",
          CTG509: "Maijdee",
          KHL017: "Fultala",
          KHL018: "Barguna",
          KHL019: "Miarhat",
          KHL015: "Shibchar",
          KHL029: "Jashore",
          KHL032: "Benapole",
          KHL208: "Kushtia",
          KHL164: "Mongla",
          KHL161: "Chuadanga",
          KHL011: "Satkhira",
          KHL448: "Glaxomor",
          KHL447: "Daulatpur",
          KHL453: "Gopalganj",
          KHL025: "Barishal",
          KHL307: "Patuakhali",
          KHL661: "Pirojpur ",
          KHL467: "Jhenaidah",
          KHL037: "Faridpur",
          BOG486: "Monnafer_Mor ",
          BOG403: "Natore",
          BOG080: "Chapai",
          BOG479: "Ishwardi",
          BOG058: "Pabna",
          BOG177: "Ataikula",
          BOG038: "Belkuchi",
          BOG084: "Sirajganj ",
          BOG024: "Rangpur",
          BOG081: "Dinajpur",
          BOG202: "Saidpur",
          BOG482: "Gaibandha",
          BOG466: "Kurigram ",
          BOG478: "Jhawtola",
          BOG091: "Naogaon",
          BOG390: "Thakurgaon",
          BOG015: "Joypurhat",
          BOG020: "Char_Raipur",
          SYL012: "Bishwanath",
          SYL017: "Barlekha",
          SYL014: "Goalabazar",
          SYL13984: "Moulvibazar_Radio",
          SYL079: "Moulvibazar",
          SYL320: "Habiganj",
          SYL406: "Khadimpara",
          SYL417: "Madina_Market",
          SYL472: "Mojumdari",
          SYL446: "Sunamgonj",
          SYL253: "Uposhahar",
          SYL006: "Sreemangal ",
          SYL470: "Shahi_Eidgah ",
          SYL251: "Nabigonj",
        };

        // DOM elements
        const btsList = document.getElementById("btsList");
        const searchInput = document.getElementById("searchInput");

        // Function to render BTS list
        function renderBTSList(filter = "") {
          btsList.innerHTML = "";

          const filteredItems = Object.entries(btsData)
            .filter(([btsName, tableName]) =>
              tableName.toLowerCase().includes(filter.toLowerCase())
            )
            .sort((a, b) => a[1].localeCompare(b[1]));

          if (filteredItems.length === 0) {
            btsList.innerHTML =
              '<div class="no-results">No matching BTS locations found</div>';
            return;
          }

          filteredItems.forEach(([btsName, tableName]) => {
            const item = document.createElement("a");
            item.className = "dropdown-item";
            item.href = `/${tableName}/${tableName}.html`;
            item.innerHTML = `
                            <i class="fas fa-location-dot"></i>
                            ${tableName}
                        `;

            btsList.appendChild(item);
          });
        }

        // Initial render
        renderBTSList();

        // Search functionality
        searchInput.addEventListener("input", (e) => {
          renderBTSList(e.target.value);
        });
        // sidebar search funtionality end

        // Table configuration
        const tableConfig = [
            { name: "BTS Down List", icon: "fa-bolt" },
            { name: "UPS1 Fail List", icon: "fa-plug" },
            { name: "UPS2 Fail List", icon: "fa-plug" },
            { name: "PDB Down List", icon: "fa-server" },
            { name: "High Temperature List", icon: "fa-temperature-high" },
            { name: "PDB High Voltage List", icon: "fa-bolt" },
            { name: "PDB Low Voltage List", icon: "fa-bolt" },
            { name: "Battery Low List 48v", icon: "fa-battery-quarter" },
            { name: "Battery Low List 12v", icon: "fa-battery-quarter" },
            { name: "Door Open", icon: "fa-door-open" },
            { name: "Human Presence", icon: "fa-user" },
            { name: "Water Leakage", icon: "fa-water" },
            { name: "Generator", icon: "fa-industry" },
            { name: "UPS1 CB", icon: "fa-plug" },
            { name: "UPS2 CB", icon: "fa-plug" },
            { name: "Main CB", icon: "fa-plug" },
            { name: "LAN Communication Fail", icon: "fa-network-wired" },
            { name: "Communication Fail List", icon: "fa-signal" },
            { name: "Poor Network List", icon: "fa-wifi" },
            { name: "Grounding Fail List", icon: "fa-bolt" }
        ];

        // Generate tables
        function generateTables() {
            const container = document.getElementById('tableContainer');
            container.innerHTML = '';
            
            tableConfig.forEach(config => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <div class="card-header">
                        <span>${config.name}</span>
                        <i class="fas ${config.icon}"></i>
                    </div>
                    <div class="card-content">
                        <table class="table" id="${config.name.replace(/\s+/g, '-')}">
                            <thead>
                                <tr>
                                    <th>BTS Name</th>
                                    <th>Zone</th>
                                    <th>Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- Table data will be populated by WebSocket -->
                            </tbody>
                        </table>
                    </div>
                `;
                container.appendChild(card);
            });
        }

        // Generate initial tables
        generateTables();

        // Data sets for each table
        const tableDataSets = {
            "BTS Down List": [
                { btsName: "Gulshan1", zone: "Downtown", time: "2h 15m" },
                { btsName: "Gazipur", zone: "North Area", time: "45m" },
                { btsName: "Tangail", zone: "Central", time: "1h 30m" },
                { btsName: "Savar_Epz", zone: "Industrial", time: "5m" },
                { btsName: "Gulshan1", zone: "Downtown", time: "2h 15m" },
                { btsName: "Gazipur", zone: "North Area", time: "45m" },
                { btsName: "Tangail", zone: "Central", time: "1h 30m" },
                { btsName: "Savar_Epz", zone: "Industrial", time: "5m" },
            ],
            "UPS1 Fail List": [
                { btsName: "Concord", zone: "Commercial", time: "3h 20m" },
                { btsName: "Dilkusha", zone: "Residential", time: "1h 10m" },
                { btsName: "Imamganj", zone: "Downtown", time: "45m" }
            ],
            "UPS2 Fail List": [
                { btsName: "Narayangonj", zone: "Port Area", time: "2h 5m" },
                { btsName: "Shiddirgonj", zone: "Industrial", time: "50m" }
            ],
            "PDB Down List": [
                { btsName: "Joypara", zone: "Suburban", time: "4h 15m" },
                { btsName: "Ghorashal", zone: "Industrial", time: "2h 30m" },
                { btsName: "Madhobdi", zone: "Rural", time: "1h 45m" }
            ],
            "High Temperature List": [
                { btsName: "Brahmanbaria", zone: "Commercial", time: "3h 20m" },
                { btsName: "Kishorganj", zone: "Residential", time: "2h 10m" },
                { btsName: "Bhairab", zone: "Industrial", time: "1h 5m" }
            ],
            "PDB High Voltage List": [
                { btsName: "Monipuri_Para", zone: "Residential", time: "6h 15m" },
                { btsName: "Nikunja", zone: "Commercial", time: "4h 30m" }
            ],
            "PDB Low Voltage List": [
                { btsName: "Eskaton", zone: "Downtown", time: "5h 20m" },
                { btsName: "Banasree", zone: "Residential", time: "3h 45m" },
                { btsName: "Mawna", zone: "Rural", time: "2h 10m" }
            ],
            "Battery Low List 48v": [
                { btsName: "Hatirpul", zone: "Commercial", time: "8h 15m" },
                { btsName: "Mohammadpur", zone: "Residential", time: "6h 30m" },
                { btsName: "Mirpur_DOHS", zone: "Upscale", time: "4h 45m" }
            ],
            "Battery Low List 12v": [
                { btsName: "Bashundhara_D", zone: "Commercial", time: "7h 20m" },
                { btsName: "Bashundhara_I", zone: "Industrial", time: "5h 35m" },
                { btsName: "Wari", zone: "Old Town", time: "3h 50m" }
            ],
            "Door Open": [
                { btsName: "Uttara_Sector_13", zone: "Residential", time: "2h 15m" },
                { btsName: "Manikganj", zone: "District", time: "1h 30m" }
            ],
            "Human Presence": [
                { btsName: "Mirpur_2", zone: "Commercial", time: "45m" },
                { btsName: "Munshiganj", zone: "District", time: "30m" },
                { btsName: "Jamgora", zone: "Rural", time: "15m" }
            ],
            "Water Leakage": [
                { btsName: "Tongi", zone: "Industrial", time: "3h 20m" },
                { btsName: "Lalmatia", zone: "Residential", time: "2h 45m" }
            ],
            "Generator": [
                { btsName: "Agargaon", zone: "Commercial", time: "6h 15m" },
                { btsName: "Cumilla", zone: "District", time: "4h 30m" },
                { btsName: "Chandpur", zone: "Port Area", time: "2h 45m" }
            ],
            "UPS1 CB": [
                { btsName: "Shimultoli", zone: "Residential", time: "5h 20m" },
                { btsName: "Akhaura", zone: "Border", time: "3h 35m" }
            ],
            "UPS2 CB": [
                { btsName: "Ashuganj", zone: "Industrial", time: "4h 15m" },
                { btsName: "Dakshinkhan", zone: "Suburban", time: "2h 30m" }
            ],
            "Main CB": [
                { btsName: "Haluaghat", zone: "Rural", time: "7h 20m" },
                { btsName: "Chauddagram", zone: "District", time: "5h 45m" },
                { btsName: "West_Nakhalpara", zone: "Residential", time: "3h 10m" }
            ],
            "LAN Communication Fail": [
                { btsName: "Trishal", zone: "Rural", time: "6h 15m" },
                { btsName: "Shahjadpur", zone: "District", time: "4h 30m" }
            ],
            "Communication Fail List": [
                { btsName: "Salna", zone: "Industrial", time: "8h 20m" },
                { btsName: "Sakhipur", zone: "Rural", time: "6h 35m" },
                { btsName: "Dhamrai", zone: "District", time: "4h 50m" }
            ],
            "Poor Network List": [
                { btsName: "Valuka", zone: "Remote", time: "9h 15m" },
                { btsName: "Shahjanpur", zone: "Rural", time: "7h 30m" }
            ],
            "Grounding Fail List": [
                { btsName: "Goforgaon", zone: "Agricultural", time: "10h 20m" },
                { btsName: "Nowjor", zone: "Remote", time: "8h 45m" },
                { btsName: "East_Nakhalpara", zone: "Residential", time: "6h 10m" }
            ]
        };

        // Update table with specific data
        function updateTable(tableName, data) {
            const table = document.getElementById(tableName.replace(/\s+/g, '-'));
            if (!table) return;
            
            const tbody = table.querySelector('tbody');
            tbody.innerHTML = '';
            
            data.forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td><a href="/Banasree/Banasree.html">${item.btsName}</a></td>
                    <td>${item.zone}</td>
                    <td>${item.time}</td>
                `;
                tbody.appendChild(row);
            });
        }

        // Initial data load for all tables
        Object.keys(tableDataSets).forEach(tableName => {
            updateTable(tableName, tableDataSets[tableName]);
        });

        // WebSocket simulation for real-time data updates
        function simulateWebSocketUpdates() {
            // In a real implementation, this would connect to a WebSocket server
            // For demonstration, we'll simulate updates by cycling through data variations
            
            setInterval(() => {
                // Update each table with its specific data
                Object.keys(tableDataSets).forEach(tableName => {
                    updateTable(tableName, tableDataSets[tableName]);
                });
            }, 10000); // Update every 10 seconds
        }

        // Start WebSocket simulation
        simulateWebSocketUpdates();

        // Menu toggle functionality
        document.getElementById('menuToggle').addEventListener('click', function() {
            document.querySelector('.sidebar').classList.toggle('active');
        });