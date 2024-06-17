// viewDisplay.tsx
import React from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';

interface ViewDisplayProps extends ViewProps {
    children?: React.ReactNode;
    direction?: 'horizontal' | 'vertical';
    align?: 'center' | 'left' | 'right';
    justify?: 'center' | 'top' | 'bottom';
}

const ViewDisplay: React.FC<ViewDisplayProps> = ({ children, direction = 'vertical', align = 'center', justify = 'center',  style, ...rest }) => {
    const viewStyle = [
        styles.container,
        direction === 'horizontal' && styles.horizontal,
        direction === 'vertical' && styles.vertical,

        align === 'center' && styles.alignCenter,
        align === 'left' && styles.alignStart,
        align === 'right' && styles.alignEnd,

        justify === 'center' && styles.justifyCenter,
        justify === 'top' && styles.justifyStart,
        justify === 'bottom' && styles.justifyEnd,
        style, // Garde cette ligne pour appliquer les styles supplémentaires
    ];
    return <View style={viewStyle} {...rest}>{children}</View>;
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFECD1',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    horizontal: {
        flexDirection: 'row',
    },
    vertical: {
        flexDirection: 'column',
    },
    alignCenter: {
        alignItems: 'center',
    },
    alignStart: {
        alignItems: 'flex-start',
    },
    alignEnd: {
        alignItems: 'flex-end',
    },
    justifyCenter: {
        justifyContent: 'center',
    },
    justifyStart: {
        justifyContent: 'flex-start',
    },
    justifyEnd: {
        justifyContent: 'flex-end',
    },
});

export default ViewDisplay;