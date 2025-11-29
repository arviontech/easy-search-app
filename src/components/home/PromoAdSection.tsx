import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

interface PromoAdSectionProps {
    title: string
    subtitle: string
    ctaText: string
    color?: string
    icon?: string
}

const PromoAdSection = ({
    title = "Special Offer",
    subtitle = "Get 20% off on your first booking!",
    ctaText = "Claim Offer",
    color = "#F59E0B", // Amber-500
    icon = "gift-outline"
}: PromoAdSectionProps) => {
    return (
        <View className="px-5 mb-6">
            <View
                className="rounded-3xl p-4 relative overflow-hidden"
                style={{
                    backgroundColor: color,
                    shadowColor: color,
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.3,
                    shadowRadius: 10,
                    elevation: 8,
                }}
            >
                {/* Decorative circles */}
                <View className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full" />
                <View className="absolute top-10 -right-4 w-16 h-16 bg-white/10 rounded-full" />
                <View className="absolute bottom-[-20px] left-[-20px] w-24 h-24 bg-white/10 rounded-full" />

                <View className="flex-row items-center justify-between relative z-10">
                    <View className="flex-1 mr-3">
                        <View className="bg-white/20 self-start px-2 py-0.5 rounded-full mb-2">
                            <Text className="text-white text-[9px] font-bold uppercase tracking-wider">Limited Time</Text>
                        </View>
                        <Text className="text-white text-base font-bold mb-1 leading-tight">
                            {title}
                        </Text>
                        <Text className="text-white/90 text-xs mb-3 leading-relaxed">
                            {subtitle}
                        </Text>

                        <TouchableOpacity
                            className="bg-white px-4 py-2 rounded-xl self-start flex-row items-center"
                            activeOpacity={0.9}
                        >
                            <Text className="font-bold text-xs mr-2" style={{ color: color }}>{ctaText}</Text>
                            <Ionicons name="arrow-forward" size={14} color={color} />
                        </TouchableOpacity>
                    </View>

                    <View className="bg-white/10 p-2.5 rounded-full">
                        <Ionicons name={icon as any} size={36} color="white" />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default PromoAdSection
