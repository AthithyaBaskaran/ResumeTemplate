import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import {useState ,useEffect} from "react";
import ResumeHeader from "../Layout/ResumeHeader";
import { getAllUsers } from "../../api/authApi";

const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'username', headerName: 'First name', width: 250 },
    { field: 'email', headerName: 'Last name', width: 250 },
    { field: 'phoneNo', headerName: 'Mobile Number', width: 250 },
    { field: 'role', headerName: 'Role', width: 200 },
];


const UserDetails = () =>  {

    const [users,setUsers] = useState([]);

    const fetchUsers = async () => {
    try {
      const data = await getAllUsers(); 
      const formatted = data.map((item, index) => ({

        id: item.id || index + 1,  
        username: item.username,
        email: item.email,
        phoneNo: item.phoneNo,
        role: item.role
      }));

      setUsers(formatted);

    } catch (error) {
      console.log("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();   // Fetch once on mount
  }, []);
    return (
        <>
            <ResumeHeader />

            <Paper
                sx={{
                    height: 400,
                    marginTop: "50px",
                    marginLeft: "10%",
                    marginRight: "10%",
                    marginBottom: "50px",
                    width: "80%",
                    background: "linear-gradient(135deg, #dad7f2, #e9e7ed)",
                    padding: "10px",
                    borderRadius: "12px",
                }}
            >
                <DataGrid
                    rows={users}
                    columns={columns}
                    sx={{
                        border: 0,
                        backgroundColor: "transparent",
                        borderRadius: "8px",

                        /* MAIN HEADER BAR */
                        "& .MuiDataGrid-columnHeaders": {
                            backgroundColor: "#8f81ed !important",
                            color: "white !important",
                            fontSize: "16px",
                            fontWeight: "600",
                        },

                        /* FIX: apply to each header cell (including Role) */
                        "& .MuiDataGrid-columnHeader": {
                            backgroundColor: "#8f81ed !important",
                            color: "white !important",
                        },

                        /* FIX: inner container (Role header was missing this) */
                        "& .MuiDataGrid-columnHeadersInner": {
                            backgroundColor: "#8f81ed !important",
                        },

                        /* HEADER HOVER */
                        "& .MuiDataGrid-columnHeader:hover": {
                            backgroundColor: "#a99eef !important",
                            color: "black !important",
                        },

                        /* REMOVE HEADER DIVIDER LINES */
                        "& .MuiDataGrid-columnSeparator": {
                            display: "none !important",
                        },

                        /* ZEBRA ROWS */
                        "& .MuiDataGrid-row:nth-of-type(odd)": {
                            backgroundColor: "#f5f2ff",
                        },
                        "& .MuiDataGrid-row:nth-of-type(even)": {
                            backgroundColor: "#ffffff",
                        },

                        /* ROW HOVER */
                        "& .MuiDataGrid-row:hover": {
                            backgroundColor: "#e6e1ff !important",
                            transform: "scale(1.01)",
                            transition: "0.2s ease-in-out",
                        },

                        /* CELL HOVER */
                        "& .MuiDataGrid-cell:hover": {
                            background: "linear-gradient(135deg, #dad7f2, #e9e7ed)",
                            color: "black",
                        }
                    }}

                />
            </Paper>
        </>
    );
}
export default UserDetails;
