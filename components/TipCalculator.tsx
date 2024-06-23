import Box from "@mui/material/Box";
import React from "react";
import BillOutput from "./BillOutput";
import CostInput from "./CostInput";


const TipCalculator = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#FFF",
                borderRadius: "2rem",
                width: 920,
                height: 481,
            }}
        >
            <BillOutput />
            <CostInput />
        </Box>
    );
};