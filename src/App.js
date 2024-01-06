import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
} from '@chakra-ui/react'
import One from "./One";
import Two from "./Two";
import Three from "./Three"

function App() {

  return (
    <>

      <Box>
        <Box alignItems="center" justifyContent="center" display="flex" flexDirection="column" gap="10px">
          <Text>Task #1</Text>
          <One />
          <br />
        </Box>
        <Box>
          <Text alignItems="center" justifyContent="center" display="flex">Task #2</Text>
          <Two />
        </Box>
        <Box>
          <Text>Task #3</Text>
          <Three />
        </Box>
      </Box>

    </>
  );
}

export default App;
