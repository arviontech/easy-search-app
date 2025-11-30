import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

interface DashboardCardProps {
    icon: keyof typeof Ionicons.glyphMap
    title: string
    subtitle: string
    badge?: string
    badgeColor?: string
    onPress?: () => void
}

const DashboardCard = ({
    icon,
    title,
    subtitle,
    badge,
    badgeColor = '#0092b8',
    onPress,
}: DashboardCardProps) => {
    const CardContent = (
        <View className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex-row items-center">
            <View
                className="rounded-full items-center justify-center mr-3"
                style={{
                    width: 48,
                    height: 48,
                    backgroundColor: `${badgeColor}15`,
                }}
            >
                <Ionicons name={icon} size={24} color={badgeColor} />
            </View>
            <View className="flex-1">
                <Text className="text-base font-bold text-gray-900" numberOfLines={1}>
                    {title}
                </Text>
                <Text className="text-sm text-gray-500 mt-0.5" numberOfLines={1}>
                    {subtitle}
                </Text>
            </View>
            {badge && (
                <View
                    className="px-3 py-1 rounded-full"
                    style={{ backgroundColor: `${badgeColor}15` }}
                >
                    <Text
                        className="text-xs font-bold"
                        style={{ color: badgeColor }}
                    >
                        {badge}
                    </Text>
                </View>
            )}
        </View>
    )

    if (onPress) {
        return (
            <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
                {CardContent}
            </TouchableOpacity>
        )
    }

    return CardContent
}

export default DashboardCard
