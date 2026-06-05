# Tuberculosis-Diagnostic-Medical-Health-Care-tool

# Drug Data Visualization Dashboard
<h2>Tuberculosis at Different organ</h2>

<img src="https://github.com/avi-nash-0211/Tuberculosis-Diagnostic-Medical-Health-Care-tool/blob/main/Different%20Organ.png" width="800">

<h2>Drug Distribution Dashboard</h2>
<img src="https://github.com/avi-nash-0211/Tuberculosis-Diagnostic-Medical-Health-Care-tool/blob/main/Drug%20Type.png" width="800">

# Overview
This project is a web-based dashboard for visualizing drug-related data from CSV files. Users can upload a dataset, select a drug category, and explore the distribution of drug types through interactive charts and tabular data.
The application processes the uploaded CSV file on the client side and generates visual insights without requiring a backend server.

# Features

(1) Upload and parse CSV files
(2) Automatic extraction of unique drug categories
(3)Interactive histogram for selected drug types
(4)Pie chart showing the most frequent drug categories
(5)Display of the first 10 records for the selected drug type
(6) Responsive user interface
(7)Client-side data processing using JavaScript

# Technologies Used

* HTML
* CSS
* JavaScript
* Chart.js
* PapaParse

# Working

1. Upload a CSV file containing a `drg_type` column.
2. The application identifies all unique drug categories.
3. Select a drug type from the dropdown menu.
4. Generate a histogram showing its percentage occurrence in the dataset.
5. View the distribution of major drug categories through a pie chart.
6. Examine the first ten matching records in a tabular format.

# Dataset Requirement
<a href="https://github.com/avi-nash-0211/Tuberculosis-Diagnostic-Medical-Health-Care-tool/blob/main/tuberculosis_records.csv">Tuberculosis</a><br>
<a href="https://github.com/avi-nash-0211/Tuberculosis-Diagnostic-Medical-Health-Care-tool/blob/main/DRGCODES.csv">Drug Type</a>
The uploaded CSV file should contain a column named:

drg_type

Example:
patient_id,drg_type,age
101,Antibiotic,45
102,Analgesic,33
103,Antibiotic,28
104,Antiviral,50

# Future Improvements

(1)Additional chart types
(2)Advanced filtering options
(3)Export charts as images
(4)Search functionality
(5)Support for larger datasets
(6)Dashboard analytics and reporting

