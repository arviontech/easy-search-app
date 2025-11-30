import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Text, View } from 'react-native'

interface StatsCardProps {
    icon: keyof typeof Ionicons.glyphMap
    value: string | number
    label: string
    color?: string
    trend?: 'up' | 'down'
    trendValue?: string
}

const StatsCard = ({
    icon,
    value,
    label,
    color = '#0092b8',
    trend,
    trendValue,
}: StatsCardProps) => {
    return (
        <View className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex-1">
            <View className="flex-row items-center justify-between mb-3">
                <View
                    className="rounded-full items-center justify-center"
                    style={{
                        width: 40,
                        height: 40,
                        backgroundColor: `${color}15`,
                    }}
                >
                    <Ionicons name={icon} size={20} color={color} />
                </View>
                {trend && trendValue && (
                    <View className="flex-row items-center">
                        <Ionicons
                            name={trend === 'up' ? 'trending-up' : 'trending-down'}
                            size={14}
                            color={trend === 'up' ? '#10B981' : '#EF4444'}
                        />
                        <Text
                            className="text-xs font-semibold ml-1"
                            style={{
                                color: trend === 'up' ? '#10B981' : '#EF4444',
                            }}
                        >
                            {trendValue}
                        </Text>
                    </View>
                )}
            </View>
            <Text className="text-2xl font-bold text-gray-900 mb-1">
                {value}
            </Text>
            <Text className="text-xs text-gray-500 font-medium">
                {label}
            </Text>
        </View>
    )
}

export default StatsCard
