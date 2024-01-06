import React, { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Flex,
  Image,
  Text,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import PopUp from "./components/Modal";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import One from "./One";
import Two from "./Two";
import Three from "./Three"

function App() {

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <ul className="nav">
            <li>
              <Link to="/one">Challenge 1</Link>
            </li>
            <li>
              <Link to="/two">Challenge 2</Link>
            </li>
            <li>
              <Link to="/three">Challenge 3</Link>
            </li>
          </ul>
          <Routes />
        </BrowserRouter>
      </div>

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
