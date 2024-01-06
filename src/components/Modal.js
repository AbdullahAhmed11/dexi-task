import React, { useState } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Input,
    Text
} from '@chakra-ui/react'



function PopUp({ isOpen, onClose, updateDetails, updateImage }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState(null);

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImage(file);
    };

    const handleSaveChange = () => {
        updateDetails({
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            email: email,
        });
        updateImage(image);
        onClose();
    };
    return (
        <>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Update Your Data</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>Your First Name</Text>
                        <Input
                            placeholder="Enter first name"
                            value={firstName}
                            onChange={handleFirstNameChange}
                        />
                        <Text>Your Last Name</Text>
                        <Input
                            placeholder="Enter last name"
                            value={lastName}
                            onChange={handleLastNameChange}
                            mt={3}
                        />
                        <Text>Gender</Text>
                        <Input
                            placeholder="Enter gender"
                            value={gender}
                            onChange={handleGenderChange}
                        />
                        <Text>Email</Text>
                        <Input
                            placeholder="Enter email"
                            value={email}
                            onChange={handleEmailChange}
                            mt={3}
                        />
                        <Text>Upload Image</Text>
                        <Input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            mt={3}
                        />
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button onClick={handleSaveChange} variant='ghost'>Save change</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default PopUp