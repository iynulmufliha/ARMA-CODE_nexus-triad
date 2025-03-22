// // import React from 'react';
// // import { parse } from 'papaparse';

// // const CSVUpload = ({ handleCSVUpload }) => {
// //     const handleUpload = (e) => {
// //         const file = e.target.files[0];
// //         if (!file) return;

// //         parse(file, {
// //             complete: (results) => {
// //                 const newEvents = results.data.slice(1).map((row) => {
// //                     const [name, date_time, location, description] = row;
// //                     return {
// //                         id: Math.random(),  // Generate a unique ID
// //                         name,
// //                         date_time,
// //                         location,
// //                         description
// //                     };
// //                 });
// //                 handleCSVUpload(newEvents);
// //             }
// //         });
// //     };

// //     return (
// //         <div>
// //             <input type="file" accept=".csv" onChange={handleUpload} />
// //             <p>Upload a CSV file to add events.</p>
// //         </div>
// //     );
// // };

// // export default CSVUpload;

// import React, { useState } from "react";
// import { parse } from "papaparse";
// import "bootstrap/dist/css/bootstrap.min.css";

// const CSVUpload = ({ handleCSVUpload }) => {
//     const [fileName, setFileName] = useState("");

//     const handleUpload = (e) => {
//         const file = e.target.files[0];
//         if (!file) return;

//         setFileName(file.name);

//         // Validate file type
//         if (file.type !== "text/csv") {
//             alert("Please upload a valid CSV file.");
//             return;
//         }

//         // Validate file size (2MB limit)
//         if (file.size > 2 * 1024 * 1024) {
//             alert("File size exceeds 2MB. Please upload a smaller file.");
//             return;
//         }

//         const reader = new FileReader();
//         reader.onload = ({ target }) => {
//             parse(target.result, {
//                 header: true, 
//                 skipEmptyLines: true,
//                 complete: ({ data, errors }) => {
//                     if (errors.length) {
//                         console.error("CSV Parsing Errors:", errors);
//                         alert("Error parsing CSV file. Please check formatting.");
//                         return;
//                     }

//                     const events = data.map((row, index) => ({
//                         id: `${Date.now()}-${index}`, 
//                         name: row.name || "Unnamed Event",
//                         date_time: row.date_time || "No Date",
//                         location: row.location || "No Location",
//                         description: row.description || "No Description",
//                     }));

//                     handleCSVUpload(events);
//                 },
//             });
//         };

//         reader.readAsText(file);
//     };

//     return (
//         <div className="container mt-4">
//             <div className="card p-4 shadow-sm">
//                 <h4 className="mb-3">Upload CSV File</h4>
//                 <div className="input-group">
//                     <input
//                         type="file"
//                         className="form-control"
//                         accept=".csv"
//                         onChange={handleUpload}
//                     />
//                     <button className="btn btn-primary">Upload</button>
//                 </div>
//                 {fileName && <p className="mt-2 text-success">Selected File: {fileName}</p>}
//                 <p className="text-muted mt-2">Upload a CSV file containing event details.</p>
//             </div>
//         </div>
//     );
// };

// export default CSVUpload;
// import React, { useState } from "react";
// import { parse } from "papaparse";
// import "bootstrap/dist/css/bootstrap.min.css";

// const CSVUpload = ({ handleCSVUpload }) => {
//     const [fileName, setFileName] = useState("");

//     const handleUpload = (e) => {
//         const file = e.target.files[0];
//         if (!file) return;

//         setFileName(file.name);

//         // Validate file type
//         if (file.type !== "text/csv") {
//             alert("Please upload a valid CSV file.");
//             return;
//         }

//         // Validate file size (2MB limit)
//         if (file.size > 2 * 1024 * 1024) {
//             alert("File size exceeds 2MB. Please upload a smaller file.");
//             return;
//         }

//         const reader = new FileReader();
//         reader.onload = ({ target }) => {
//             parse(target.result, {
//                 header: true, 
//                 skipEmptyLines: true,
//                 complete: ({ data, errors }) => {
//                     if (errors.length) {
//                         console.error("CSV Parsing Errors:", errors);
//                         alert("Error parsing CSV file. Please check formatting.");
//                         return;
//                     }

//                     const events = data.map((row, index) => ({
//                         id: `${Date.now()}-${index}`, 
//                         name: row.name || "Unnamed Event",
//                         date_time: row.date_time || "No Date",
//                         location: row.location || "No Location",
//                         description: row.description || "No Description",
//                         image: row.image || "" // Ensure this line captures the image URL properly
//                     }));

//                     handleCSVUpload(events);
//                 },
//             });
//         };

//         reader.readAsText(file);
//     };

//     return (
//         <div className="container mt-4">
//             <div className="card p-4 shadow-sm">
//                 <h4 className="mb-3">Upload CSV File</h4>
//                 <div className="input-group">
//                     <input
//                         type="file"
//                         className="form-control"
//                         accept=".csv"
//                         onChange={handleUpload}
//                     />
//                     <button className="btn btn-primary">Upload</button>
//                 </div>
//                 {fileName && <p className="mt-2 text-success">Selected File: {fileName}</p>}
//                 <p className="text-muted mt-2">Upload a CSV file containing event details.</p>
//             </div>
//         </div>
//     );
// };

// export default CSVUpload;
import React, { useState } from 'react';
import { parse } from 'papaparse';
import 'bootstrap/dist/css/bootstrap.min.css';

const CSVUpload = ({ handleCSVUpload }) => {
    const [fileName, setFileName] = useState("");

    const handleUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setFileName(file.name);

        // Validate file type
        if (file.type !== "text/csv") {
            alert("Please upload a valid CSV file.");
            return;
        }

        // Validate file size (2MB limit)
        if (file.size > 2 * 1024 * 1024) {
            alert("File size exceeds 2MB. Please upload a smaller file.");
            return;
        }

        const reader = new FileReader();
        reader.onload = ({ target }) => {
            console.log("Raw CSV Data:", target.result); // Log the raw CSV content
            parse(target.result, {
                header: true,
                skipEmptyLines: true,
                complete: ({ data, errors }) => {
                    if (errors.length) {
                        console.error("CSV Parsing Errors:", errors);
                        errors.forEach((error) => {
                            console.error("Error detail:", error);
                        });
                        alert("Error parsing CSV file. Please check formatting.");
                        return;
                    }

                    const events = data.map((row, index) => ({
                        id: `${Date.now()}-${index}`, 
                        name: row.name || "Unnamed Event",
                        date_time: row.date_time || "No Date",
                        location: row.location || "No Location",
                        description: row.description || "No Description",
                        image: row.image || ""  // Ensure this line captures the image URL properly
                    }));

                    handleCSVUpload(events);
                },
            });
        };

        reader.readAsText(file);
    };

    return (
        <div className="container mt-4">
            <div className="card p-4 shadow-sm">
                <h4 className="mb-3">Upload CSV File</h4>
                <div className="input-group">
                    <input
                        type="file"
                        className="form-control"
                        accept=".csv"
                        onChange={handleUpload}
                    />
                    <button className="btn btn-primary" onClick={() => document.getElementById('fileInput').click()}>Upload</button>
                </div>
                {fileName && <p className="mt-2 text-success">Selected File: {fileName}</p>}
                <p className="text-muted mt-2">Upload a CSV file containing event details.</p>
            </div>
        </div>
    );
};

export default CSVUpload;