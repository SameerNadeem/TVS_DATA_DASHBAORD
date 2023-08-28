import { LinearProgress } from '@mui/material';
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {useDemoData} from "@mui/x-data-grid-generator"

const Data = () => {
    const { data } = useDemoData({
        dataSet: "Commodity",
        rowLength: 500,
        maxColumns: 15,
    });

    return (
        <>
            <p>TVS MOCK DATA</p>
            <div style={{ height: "600px", width: "100%" }}>
                <DataGrid
                    slots={{
                        loadingOverlay: LinearProgress,
                    }}
                    loading={!data}
                    {...data}
                />
            </div>
        </>
    );
};

export default Data; 