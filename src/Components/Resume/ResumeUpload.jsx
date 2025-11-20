import React, { useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import ResumeSidebar from "../Layout/ResumeHeader";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
const DragAndDropUpload = () => {
    const [files, setFiles] = useState([]);
    const [isDragActive, setIsDragActive] = useState(false);
    const fileInputRef = useRef(null);

    const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "image/png",
        "image/jpeg",
        "image/jpg",
    ];

    const handleFiles = (selectedFiles) => {
        const validFiles = Array.from(selectedFiles).filter((file) =>
            allowedTypes.includes(file.type)
        );
        setFiles((prev) => [...prev, ...validFiles]);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragActive(false);
        handleFiles(e.dataTransfer.files);
    };

    return (
        <>
            <ResumeSidebar />

            {/* DROP ZONE */}
            <Box
                sx={{
                    width: "50%",
                    height: "50px",
                    padding: "50px",
                    borderRadius: "12px",
                    border: isDragActive
                        ? "3px dashed #1976d2"
                        : "3px dashed #b0b0b0",
                    backgroundColor: isDragActive ? "#e3f2fd" : "#fafafa",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "0.3s",
                    cursor: "pointer",
                    marginTop:"50px",
                    marginLeft:"270px"
                }}
                onDragEnter={() => setIsDragActive(true)}
                onDragLeave={() => setIsDragActive(false)}
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current.click()} // 👈 OPEN FILE EXPLORER
            >
                <Typography variant="h6">
                    {isDragActive ? "Drop your files here!" : "Click or Drag & Drop files"}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    <Typography sx={{color:"blueviolet",fontSize:"20px"}}>Upload Your Resume</Typography>
                    (PDF, DOC, DOCX, JPG, PNG)
                </Typography>

                {/* HIDDEN FILE INPUT */}
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    multiple
                    accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                    onChange={(e) => handleFiles(e.target.files)}
                />
            </Box>

            {files.length > 0 && (
                <Box sx={{ width: "60%", margin: "20px auto" }}>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        {files.map((file, index) => (
                            <li key={index} style={{ display: "flex", color:"blueviolet",fontSize:"20px",gap:"20px",alignItems: "center", margin: "18px 200px" }}>
                                <CloudDownloadIcon sx={{ color: "#1976d2" }} />
                                <span>{file.name}</span>
                                <DeleteForeverIcon sx={{ color: "red", marginLeft: "80px" }} />
                            </li>
                        ))}
                    </ul>
                </Box>
            )}
        </>
    );
};

export default DragAndDropUpload;
