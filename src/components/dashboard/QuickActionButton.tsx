import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

interface QuickActionButtonProps {
    icon: keyof typeof Ionicons.glyphMap
    label: string
    color?: string
    onPress: () => void
}

const QuickActionButton = ({
    icon,
    label,
    color = '#0092b8',
    onPress,
}: QuickActionButtonProps) => {
    return (
        <TouchableOpacity
            className="items-center"
            style={{ width: 70 }}
            activeOpacity={0.7}
            onPress={onPress}
        >
            <View
                className="rounded-xl items-center justify-center mb-2 shadow-sm"
                style={{
                    width: 56,
                    height: 56,
                    backgroundColor: color,
                }}
            >
                <Ionicons name={icon} size={24} color="#ffffff" />
            </View>
            <Text
                className="text-xs font-medium text-gray-700 text-center"
                numberOfLines={2}
            >
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default QuickActionButton
