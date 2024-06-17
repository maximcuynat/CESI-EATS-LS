import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';
import { View, Text } from 'react-native';
import ViewDisplay from './Display';

interface MyCheckBoxProps {
    text: string;
    value: boolean;
    onValueChange: (value: boolean) => void;
}

const MyCheckBox = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckBoxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <ViewDisplay direction="horizontal" align="left">
            <Checkbox
                value={isChecked}
                onValueChange={handleCheckBoxChange}
            />
        </ViewDisplay>
    );
};

export default MyCheckBox;