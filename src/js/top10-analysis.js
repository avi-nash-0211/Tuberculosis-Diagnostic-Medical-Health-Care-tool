let fullData = [];
let drugData = {};

let histogramChart = null;
let pieChart = null;

document.getElementById('csvFile').addEventListener('change', function(event) {

    const file = event.target.files[0];

    if (!file) {
        alert("Please select a CSV file.");
        return;
    }

    Papa.parse(file, {

        header: true,
        skipEmptyLines: true,

        complete: function(results) {

            if (!results.data.length) {
                alert("CSV file is empty.");
                return;
            }

            fullData = results.data;

            processCSVData(results.data);
        },

        error: function() {
            alert("Error reading CSV file.");
        }

    });

});

function processCSVData(data) {

    drugData = {};

    if (!data.length || !data[0]['drg_type']) {

        alert(
            "Invalid CSV file. Ensure it contains a 'drg_type' column."
        );

        return;
    }

    data.forEach(row => {

        const type = row['drg_type'];

        if (type) {
            drugData[type] =
                (drugData[type] || 0) + 1;
        }

    });

    populateDropdown();

    plotPieChart();

    updateStatistics(data);
}

function populateDropdown() {

    const select =
        document.getElementById("drugTypeSelect");

    select.innerHTML = "";

    if (Object.keys(drugData).length === 0) {

        select.disabled = true;

        document
            .getElementById("histogramButton")
            .disabled = true;

        return;
    }

    Object.keys(drugData).forEach(type => {

        const option =
            document.createElement("option");

        option.value = type;
        option.textContent = type;

        select.appendChild(option);
    });

    select.disabled = false;

    document
        .getElementById("histogramButton")
        .disabled = false;
}

function updateStatistics(data) {

    document.getElementById(
        "totalRecords"
    ).textContent = data.length;

    document.getElementById(
        "drugTypes"
    ).textContent =
        Object.keys(drugData).length;

    const topDrug =
        Object.entries(drugData)
        .sort((a,b)=>b[1]-a[1])[0];

    document.getElementById(
        "topDrug"
    ).textContent =
        topDrug ? topDrug[0] : "-";
}

function plotHistogram() {

    const selectedDrug =
        document.getElementById(
            "drugTypeSelect"
        ).value;

    if (!selectedDrug) return;

    const total =
        Object.values(drugData)
        .reduce((a,b)=>a+b,0);

    const percentage =
        (
            (drugData[selectedDrug] / total)
            * 100
        ).toFixed(2);

    if (histogramChart)
        histogramChart.destroy();

    const ctx =
        document
        .getElementById("histogramChart")
        .getContext("2d");

    histogramChart = new Chart(ctx, {

        type: "bar",

        data: {

            labels: [selectedDrug],

            datasets: [{

                label: "Percentage (%)",

                data: [percentage],

                backgroundColor: "royalblue"

            }]
        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            animation: {
                duration: 1000,
                easing: 'easeOutBounce'
            },

            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });

    displayTop10Rows(selectedDrug);
}

function plotPieChart() {

    const sortedData =
        Object.entries(drugData)
        .sort((a,b)=>b[1]-a[1])
        .slice(0,5);

    if (!sortedData.length) return;

    const labels =
        sortedData.map(item => item[0]);

    const values =
        sortedData.map(item => item[1]);

    if (pieChart)
        pieChart.destroy();

    const ctx =
        document
        .getElementById("pieChart")
        .getContext("2d");

    pieChart = new Chart(ctx, {

        type: "pie",

        data: {

            labels: labels,

            datasets: [{

                data: values,

                backgroundColor: [
                    '#ff6b6b',
                    '#6b5b95',
                    '#ffcc5c',
                    '#88d8b0',
                    '#2a9d8f'
                ]
            }]
        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            animation: {
                animateRotate: true,
                animateScale: true
            }
        }
    });
}

function displayTop10Rows(selectedDrug) {

    const table =
        document.getElementById("dataTable");

    const filteredData =
        fullData
        .filter(
            row => row['drg_type'] === selectedDrug
        )
        .slice(0,10);

    if (filteredData.length === 0) {

        table.querySelector("thead").innerHTML = "";
        table.querySelector("tbody").innerHTML = "";

        return;
    }

    const headers =
        Object.keys(filteredData[0]);

    table.querySelector("thead").innerHTML =
        `<tr>${
            headers.map(
                h => `<th>${h}</th>`
            ).join('')
        }</tr>`;

    table.querySelector("tbody").innerHTML =
        filteredData.map(row =>

            `<tr>${
                headers.map(
                    h => `<td>${row[h]}</td>`
                ).join('')
            }</tr>`

        ).join('');
}