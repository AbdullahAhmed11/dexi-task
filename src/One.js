import { Box, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';

const One = () => {


    const [inputString, setInputString] = useState("");
    const [result, setResult] = useState(-1);

    const findIndexToRemove = (s) => {
        const isPalindrome = (str) => {
            let left = 0;
            let right = str.length - 1;
            while (left < right) {
                if (str[left] !== str[right]) {
                    return false;
                }
                left++;
                right--;
            }
            return true;
        };

        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            if (s[left] !== s[right]) {
                const withoutLeft = s.substring(0, left) + s.substring(left + 1);
                const withoutRight = s.substring(0, right) + s.substring(right + 1);

                if (isPalindrome(withoutLeft)) {
                    return left;
                } else if (isPalindrome(withoutRight)) {
                    return right;
                } else {
                    return -1;
                }
            }
            left++;
            right--;
        }

        return -1;
    };

    const handleInputChange = (e) => {
        setInputString(e.target.value);
    };

    const handleSubmit = () => {
        const result = findIndexToRemove(inputString);
        setResult(result);
    };

    return (
        <div>
            <Box alignItems="center" justifyContent="center" gap="10px" display="flex" flexDirection="column" >

                <label>
                    Input String:
                </label>
                <Input type="text" value={inputString} onChange={handleInputChange} />
                <Button colorScheme='blue' onClick={handleSubmit}>Submit</Button>
                <p>Index to remove: {result}</p>
            </Box>

        </div>
    );
};

export default One;
