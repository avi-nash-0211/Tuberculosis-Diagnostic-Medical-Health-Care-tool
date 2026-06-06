# Tuberculosis Diagnostic Analytics Dashboard
<p align="center">
  <img src="docs/banner.png" alt="Project Banner" width="100%">
</p>

Interactive healthcare analytics dashboard for tuberculosis data visualization and exploration using JavaScript, Chart.js, PapaParse, and CSV datasets.

## Key Highlights

* Interactive CSV Dataset Processing
* Healthcare Data Visualization Dashboard
* Drug Distribution Analysis using Charts
* Organ Infection Pattern Analysis
* Dynamic Pie and Bar Chart 
* Drug-wise Top 10 Records Exploration
* Responsive and User-Friendly Interface
* Interactive Dropdown-Based Filtering
* Real-Time Data Exploration

## Overview

The Tuberculosis Diagnostic Analytics Dashboard is an interactive healthcare data visualization platform designed to analyze tuberculosis-related datasets. The system processes CSV-based medical records and presents meaningful insights through dynamic visualizations, enabling users to explore infection patterns, drug distribution, and patient record trends.

## Problem Statement

Tuberculosis datasets often contain large volumes of information that are difficult to interpret manually. This project provides an intuitive dashboard that transforms raw healthcare data into visual insights, helping users better understand disease patterns and treatment-related information.


## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Chart.js
* PapaParse
* CSV Datasets

## Project Structure

```text
tuberculosis-diagnostic-analytics-dashboard/

README.md
LICENSE

data/
├── DRGCODES.csv
└── tuberculosis_records.csv

src/
├── drug-analysis.html
├── organ-analysis.html
└── top10-analysis.html

docs/
└── screenshots/
    ├── drug-analysis.png
    ├── organ-analysis.png
    └── top10-analysis.png
```


## System Architecture

```text
                    +------------------+
                    |   CSV Dataset    |
                    | (Patient Records)|
                    +--------+---------+
                             |
                             v
                    +------------------+
                    |  File Upload UI  |
                    +--------+---------+
                             |
                             v
                    +------------------+
                    |   PapaParse      |
                    | CSV Processing   |
                    +--------+---------+
                             |
                             v
                    +------------------+
                    | JavaScript Logic |
                    | Data Aggregation |
                    +--------+---------+
                             |
             +---------------+---------------+
             |               |               |
             v               v               v

    +---------------+ +---------------+ +---------------+
    | Drug Analysis | | Organ Analysis| | Top 10 Records|
    +-------+-------+ +-------+-------+ +-------+-------+
            |                 |                 |
            +--------+--------+--------+--------+
                             |
                             v
                    +------------------+
                    |     Chart.js     |
                    | Visualization    |
                    +--------+---------+
                             |
                             v
                    +------------------+
                    | Interactive UI   |
                    | Dashboard Output |
                    +------------------+
```

## How to Run

1. Clone or download the repository.
2. Open any of the HTML files inside the `src` folder.
3. Upload the required CSV dataset.
4. Explore the generated visualizations and analytics dashboard.

No additional installation is required.


## Screenshots

### Drug Analysis

![Drug Analysis](docs/screenshots/drug-analysis.png)

### Organ Infection Analysis

![Organ Analysis](docs/screenshots/organ-analysis.png)

### Top 10 Records Analysis

![Top 10 Analysis](docs/screenshots/top10-analysis.png)

## Dataset Information

The dashboard uses tuberculosis-related healthcare datasets stored in CSV format to perform visualization and analysis.

### Datasets Used

#### DRGCODES.csv

Contains tuberculosis drug information used for:

* Drug Type Analysis
* Drug Distribution Visualization
* Frequency-based Drug Analytics

#### tuberculosis_records.csv

Contains tuberculosis patient records used for:

* Organ Infection Analysis
* Top 10 Records Visualization
* Healthcare Data Exploration

### Dataset Format

* File Format: CSV (Comma Separated Values)
* Processing Library: PapaParse
* Visualization Library: Chart.js

### Analytics Generated

* Drug Distribution Analysis
* Organ Infection Trends
* Top 10 Records Representation
* Interactive Healthcare Data Insights


## Future Enhancements

* Machine Learning-based TB Prediction
* PDF Report Generation
* Dark Mode Support
* Real-Time Database Integration
* Advanced Healthcare Analytics
* Interactive Dashboard Statistics

## Author

**Avinash**

MCA Student | Jawaharlal Nehru University (JNU)

Interested in:
- Software Development
- Data Analytics
- Data Visualization
- Healthcare Informatics
