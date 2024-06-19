// viewDisplay.tsx
import React from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';

interface ViewDisplayProps extends ViewProps {
    children?: React.ReactNode;
    direction?: 'horizontal' | 'vertical';
    align?: 'center' | 'left' | 'right';
    justify?: 'center' | 'top' | 'bottom';
    type?: 'fill' | 'card' | 'default' | 'header';
}

const ViewDisplay: React.FC<ViewDisplayProps> = ({ children, direction = 'vertical', align = 'center', justify = 'center', type, style, ...rest }) => {
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
        
        type === 'fill' && styles.fill,
        type === 'card' && styles.card,
        type === 'default' && styles.default,
        type === 'header' && styles.header,

        style, // Garde cette ligne pour appliquer les styles supplémentaires
    ];
    return <View style={viewStyle} {...rest}>{children}</View>;
};

const styles = StyleSheet.create({
    // Defalut For all
    container: {
        width: '100%',
        backgroundColor: '#FFECD1',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },

    // Direction
    horizontal: {
        flexDirection: 'row',
        width: 'auto',
        marginHorizontal: 10,
    },
    vertical: {
        flexDirection: 'column',
    },

    // Align types
    alignCenter: {
        alignItems: 'center',
    },
    alignStart: {
        alignItems: 'flex-start',
    },
    alignEnd: {
        alignItems: 'flex-end',
    },

    // Justify types
    justifyCenter: {
        justifyContent: 'center',
    },
    justifyStart: {
        justifyContent: 'flex-start',
        marginTop: 15,
    },
    justifyEnd: {
        justifyContent: 'flex-end',
    },

    // Type
    default: {
        flex: 0,
    },
    fill: {
        flex: 1,
    },
    card: {
        height: 'auto',
        alignItems: 'stretch',
    },
    header: {
        marginTop: 35,
        justifyContent: 'space-between',
        backgroundColor: '#FF7D00',
    },
});

export default ViewDisplay;