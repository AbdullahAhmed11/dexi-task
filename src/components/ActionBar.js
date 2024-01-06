import React from "react"
import { Button, Box } from "@chakra-ui/react";
const ActionBar = (props) => {
    return (
        <>
            <Box gap="10px">

                <Button className="purpleButton" onClick={props.onPreviousClick}>
                    Previous
                </Button>
                <Button className="purpleButton" onClick={props.onNextClick}>
                    Next
                </Button>
            </Box>
        </>
    );
};

export default ActionBar;
