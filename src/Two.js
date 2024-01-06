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

function Two() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [users, setUsers] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState(null);

    const [page, setPage] = useState(1); // Track the current page

    useEffect(() => {
        fetchData();
    }, [page]); // Trigger a fetch when the page changes

    const fetchData = async () => {
        try {
            const response = await fetch(
                `https://randomuser.me/api/?results=5&page=${page}`
            );
            const data = await response.json();
            const fetchedUsers = data.results;

            setUsers((prevUsers) =>
                page === 1 ? fetchedUsers : [...prevUsers, ...fetchedUsers]
            );

            const updatedUsers = page === 1 ? fetchedUsers : [...users, ...fetchedUsers];
            localStorage.setItem("users", JSON.stringify(updatedUsers));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const updateGender = (gender) => {
        if (selectedUserId !== null) {
            // Find the selected user and update the gender in the users state
            setUsers((prevUsers) =>
                prevUsers.map((user) =>
                    user.id.value === selectedUserId
                        ? { ...user, gender: gender }
                        : user
                )
            );
        }
    };

    const updateEmail = (email) => {
        if (selectedUserId !== null) {
            setUsers((prevUsers) =>
                prevUsers.map((user) =>
                    user.id.value === selectedUserId ? { ...user, email: email } : user
                )
            );
        }
    };


    const updateDetails = ({ firstName, lastName, gender, email }) => {
        if (selectedUserId !== null) {
            setUsers((prevUsers) =>
                prevUsers.map((user) =>
                    user.id.value === selectedUserId
                        ? {
                            ...user,
                            name: {
                                first: firstName !== "" ? firstName : user.name.first,
                                last: lastName !== "" ? lastName : user.name.last,
                            },
                            gender: gender !== "" ? gender : user.gender,
                            email: email !== "" ? email : user.email,
                        }
                        : user
                )
            );
        }
    }

    const updateImage = (image) => {
        if (selectedUserId !== null && image !== null) {
            setUsers((prevUsers) =>
                prevUsers.map((user) =>
                    user.id.value === selectedUserId
                        ? { ...user, picture: { medium: URL.createObjectURL(image) } }
                        : user
                )
            );
        }
    };

    const handleOpenModal = (userId) => {
        setSelectedUserId(userId);
        onOpen();
    };

    const handleLoadMore = () => {
        setPage((prevPage) => prevPage + 1);
    };
    return (
        <>


            <div>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>name</Th>
                            <Th>title</Th>
                            <Th>status</Th>
                            <Th >gender</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {users.map(user => (
                            <>
                                <Tr key={user.id.value}>
                                    <Td>
                                        <Flex gap="10px" alignItems="center">
                                            <Image src={user.picture.medium} rounded="100%" w={50} h={50} />
                                            <Flex flexDirection="column">
                                                <p>{user.name.first + " " + user.name.last}</p>
                                                <Text color="gray">{user.email}</Text>
                                            </Flex>
                                        </Flex>
                                    </Td>
                                    <Td>
                                        <Flex flexDirection="column">
                                            <Text>{user.location.city}</Text>
                                            <Text color="gray">{user.location.street.name}</Text>
                                        </Flex>
                                    </Td>
                                    <Td>
                                        <Box rounded="md" w={50} h="20px" bg={"teal"} display="flex" alignItems="center" justifyContent="center">
                                            <Text fontSize="12px" color="#fff">Active</Text>
                                        </Box>
                                    </Td>
                                    <Td>
                                        <Text color="gray">{user.gender}</Text>
                                    </Td>
                                    <Td >
                                        <Button onClick={() => handleOpenModal(user.id.value)}>Open Modal</Button>
                                    </Td>
                                </Tr>
                            </>
                        ))}
                    </Tbody>
                </Table>
                <Box alignItems="center" justifyContent="center" display="flex" p="10px">

                    <Button onClick={handleLoadMore}>Load More</Button>
                </Box>

                <PopUp isOpen={isOpen} onClose={onClose} updateImage={updateImage} updateDetails={updateDetails} />
            </div>
        </>
    );
}

export default Two;
