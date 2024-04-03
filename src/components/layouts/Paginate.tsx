import React from "react";
import { Pagination } from "antd";

export const Paginate = (props: any) => {

    console.log(props.total);
    
    return (
        <Pagination
            onChange={props.changePage}
            defaultCurrent={1}
            total={props.total}
            size="default"
            style={{
                zIndex: 100,
                display: "flex",
                justifyContent: "center",
                marginTop: "50px",
                marginBottom: "50px",
                // marginLeft: 288
            }}
        />
    );
};
