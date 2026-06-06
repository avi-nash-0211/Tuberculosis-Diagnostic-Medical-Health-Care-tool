let globalData = {};

let barChartInstance = null;
let pieChartInstance = null;

document
.getElementById('csvFileInput')
.addEventListener('change', function(event) {

    const file = event.target.files[0];

    if (!file) {
        alert("Please select a CSV file.");
        return;
    }

    const reader = new FileReader();

    reader.onload = function(e) {

        if (!e.target.result.trim()) {
            alert("CSV file is empty.");
            return;
        }

        processCSV(e.target.result);
    };

    reader.readAsText(file);

});

function processCSV(csvText) {

    const tbLocations = {

        "Lungs": [
            "pulmonary",
            "lung"
        ],

        "Eye": [
            "eye",
            "ocular"
        ],

        "Ear": [
            "ear",
            "otic"
        ],

        "Bones & Joints": [
            "bone",
            "joint",
            "spine",
            "vertebra"
        ],

        "Lymph Nodes": [
            "lymph",
            "nodal"
        ],

        "Meninges & Brain": [
            "mening",
            "brain",
            "cerebral"
        ],

        "Abdomen": [
            "abdominal",
            "intestine",
            "peritoneal"
        ]
    };

    const locationCounts =
        Object.fromEntries(
            Object.keys(tbLocations)
            .map(key => [key,0])
        );

    csvText
        .toLowerCase()
        .split('\n')
        .forEach(row => {

            for (
                const [location, keywords]
                of Object.entries(tbLocations)
            ) {

                if (
                    keywords.some(
                        keyword =>
                        row.includes(keyword)
                    )
                ) {

                    locationCounts[location]++;
                }
            }
        });

    globalData = locationCounts;

    populateDropdown(
        Object.keys(locationCounts)
    );

    renderPieChart(globalData);

    updateStatistics();
}

function updateStatistics() {

    const totalCases =
        Object.values(globalData)
        .reduce((a,b)=>a+b,0);

    document.getElementById(
        "totalCases"
    ).textContent = totalCases;

    document.getElementById(
        "locationCount"
    ).textContent =
        Object.keys(globalData).length;

    const mostAffected =
        Object.entries(globalData)
        .sort((a,b)=>b[1]-a[1])[0];

    document.getElementById(
        "topLocation"
    ).textContent =
        mostAffected
        ? mostAffected[0]
        : "-";
}

function populateDropdown(locations) {

    const dropdown =
        document.getElementById(
            "tbLocationDropdown"
        );

    dropdown.innerHTML =
        '<option value="">Select TB Location</option>';

    locations.forEach(loc => {

        const option =
            document.createElement("option");

        option.value = loc;
        option.textContent = loc;

        dropdown.appendChild(option);
    });

    dropdown.addEventListener(
        "change",
        function() {

            if (this.value) {
                renderBarChart(this.value);
            }
        }
    );
}

function renderBarChart(selectedLocation) {

    const totalCases =
        Object.values(globalData)
        .reduce((a,b)=>a+b,0);

    const percentage =
        (
            (globalData[selectedLocation]
            / totalCases)
            * 100
        ).toFixed(2);

    if (barChartInstance)
        barChartInstance.destroy();

    barChartInstance =
        new Chart(
            document
            .getElementById('barChart')
            .getContext('2d'),

        {

            type:'bar',

            data:{

                labels:[
                    selectedLocation
                ],

                datasets:[{

                    label:"% of Cases",

                    data:[
                        percentage
                    ],

                    backgroundColor:'#3498db',

                    borderColor:'#2980b9',

                    borderWidth:1,

                    hoverBackgroundColor:'#5dade2'
                }]
            },

            options: {
    responsive: true,

    animation: {
    duration: 2000,
    easing: 'easeOutQuart'
},

    scales: {
        y: {
            beginAtZero: true,
            max: 100
        }
    }
}
        });
}

function renderPieChart(data) {

    if (pieChartInstance)
        pieChartInstance.destroy();

    pieChartInstance =
        new Chart(
            document
            .getElementById('pieChart')
            .getContext('2d'),

        {

            type:'pie',

            data:{

                labels:
                    Object.keys(data),

                datasets:[{

                    data:
                    Object.values(data)
                    .map(count =>

                        (
                            count /
                            Object.values(data)
                            .reduce((a,b)=>a+b,0)
                            * 100
                        ).toFixed(2)

                    ),

                    backgroundColor:[
                        '#ff6384',
                        '#36a2eb',
                        '#ffcd56',
                        '#4bc0c0',
                        '#9966ff',
                        '#ff9f40',
                        '#c9cbcf'
                    ]
                }]
            },

            options:{

                responsive:true,

                animation:{
                    duration:1500,
                    easing:'easeInOutBounce'
                }
            }
        });
}