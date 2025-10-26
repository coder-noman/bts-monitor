// Toggle sidebar on mobile
document.getElementById('menuToggle').addEventListener('click', function () {
    document.querySelector('.sidebar').classList.toggle('active');
});

// Generate random data for demonstration
function generateRandomData() {
    const statuses = ['Critical', 'Warning', 'Normal'];
    const locations = ['Data Center', 'Server Room A', 'Server Room B', 'Office Floor 3',
        'Basement', 'Lab 2', 'Storage Room', 'UPS Room', 'Telecom Room'];

    return {
        id: Math.floor(Math.random() * 1000) + 1000,
        location: locations[Math.floor(Math.random() * locations.length)],
        value: Math.floor(Math.random() * 100),
        status: statuses[Math.floor(Math.random() * statuses.length)]
    };
}

// Populate tables with random data (for demonstration)
document.addEventListener('DOMContentLoaded', function () {
    const tables = document.querySelectorAll('.table tbody');

    tables.forEach(table => {
        // Clear existing rows (except header)
        while (table.rows.length > 0) {
            table.deleteRow(0);
        }

        // Add 4 rows of random data
        for (let i = 0; i < 4; i++) {
            const data = generateRandomData();
            const row = table.insertRow();

            // Create cells based on table structure
            if (table.closest('.card').querySelector('.card-header').textContent.includes('Voltage')) {
                row.innerHTML = `
                            <td>V-${data.id}</td>
                            <td>${data.location}</td>
                            <td>${data.value}V</td>
                            <td><span class="status status-${data.status.toLowerCase()}">${data.status}</span></td>
                        `;
            } else if (table.closest('.card').querySelector('.card-header').textContent.includes('Temperature')) {
                row.innerHTML = `
                            <td>D-${data.id}</td>
                            <td>${data.location}</td>
                            <td>${data.value}°C</td>
                            <td><span class="status status-${data.status.toLowerCase()}">${data.status}</span></td>
                        `;
            } else if (table.closest('.card').querySelector('.card-header').textContent.includes('Humidity')) {
                row.innerHTML = `
                            <td>H-${data.id}</td>
                            <td>${data.location}</td>
                            <td>${data.value}%</td>
                            <td><span class="status status-${data.status.toLowerCase()}">${data.status}</span></td>
                        `;
            } else if (table.closest('.card').querySelector('.card-header').textContent.includes('Battery')) {
                row.innerHTML = `
                            <td>B-${data.id}</td>
                            <td>${data.location}</td>
                            <td>${data.value}%</td>
                            <td><span class="status status-${data.status.toLowerCase()}">${data.status}</span></td>
                        `;
            } else if (table.closest('.card').querySelector('.card-header').textContent.includes('Door')) {
                row.innerHTML = `
                            <td>DR-${data.id}</td>
                            <td>${data.location}</td>
                            <td>${Math.floor(Math.random() * 5) + 1}h ${Math.floor(Math.random() * 60)}m</td>
                            <td><span class="status status-${data.status.toLowerCase()}">${data.status}</span></td>
                        `;
            } else if (table.closest('.card').querySelector('.card-header').textContent.includes('Human')) {
                row.innerHTML = `
                            <td>HP-${data.id}</td>
                            <td>${data.location}</td>
                            <td>${Math.floor(Math.random() * 60)}m</td>
                            <td><span class="status status-${data.status.toLowerCase()}">${data.status}</span></td>
                        `;
            } else if (table.closest('.card').querySelector('.card-header').textContent.includes('Water')) {
                const levels = ['Low', 'Medium', 'High'];
                row.innerHTML = `
                            <td>WT-${data.id}</td>
                            <td>${data.location}</td>
                            <td>${levels[Math.floor(Math.random() * levels.length)]}</td>
                            <td><span class="status status-${data.status.toLowerCase()}">${data.status}</span></td>
                        `;
            } else if (table.closest('.card').querySelector('.card-header').textContent.includes('Generator')) {
                row.innerHTML = `
                            <td>GN-${data.id}</td>
                            <td>${data.location}</td>
                            <td>${data.value}%</td>
                            <td><span class="status status-${data.status.toLowerCase()}">${data.status}</span></td>
                        `;
            } else if (table.closest('.card').querySelector('.card-header').textContent.includes('UPS') ||
                table.closest('.card').querySelector('.card-header').textContent.includes('CB')) {
                row.innerHTML = `
                            <td>CB-${data.id}</td>
                            <td>${data.location}</td>
                            <td>${data.value}%</td>
                            <td><span class="status status-${data.status.toLowerCase()}">${data.status}</span></td>
                        `;
            } else if (table.closest('.card').querySelector('.card-header').textContent.includes('Network')) {
                row.innerHTML = `
                            <td>NW-${data.id}</td>
                            <td>${data.location}</td>
                            <td>${(Math.random() * 10 + 90).toFixed(1)}%</td>
                            <td><span class="status status-${data.status.toLowerCase()}">${data.status}</span></td>
                        `;
            } else {
                row.innerHTML = `
                            <td>S-${data.id}</td>
                            <td>${data.location}</td>
                            <td>${Math.floor(Math.random() * 5) + 1}h ${Math.floor(Math.random() * 60)}m</td>
                            <td><span class="status status-${data.status.toLowerCase()}">${data.status}</span></td>
                        `;
            }
        }
    });
});