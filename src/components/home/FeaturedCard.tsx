import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native'

interface FeaturedCardProps {
    title: string
    location: string
    rating: string | number
    badge: string
    price: string
    date: string
    image: any
    unit: string
    onPress: () => void
    style?: any
}

const FeaturedCard = ({
    title,
    location,
    rating,
    badge,
    price,
    date,
    image,
    unit,
    onPress,
    style,
}: FeaturedCardProps) => {
    return (
        <TouchableOpacity
            style={[{ width: 162 }, style]}
            activeOpacity={0.8}
            onPress={onPress}
        >
            <View className="relative mb-2">
                <Image
                    source={image}
                    className="w-full h-32 rounded-2xl"
                    resizeMode="cover"
                />
                <View className="absolute top-2 left-2 px-2 py-0.5 rounded-full shadow-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
                    <Text className="text-gray-900 text-[10px] font-bold">{badge}</Text>
                </View>
                <Pressable className="absolute top-2 right-2">
                    <Ionicons name="heart" size={20} color="rgba(0,0,0,0.5)" style={{ position: 'absolute' }} />
                    <Ionicons name="heart-outline" size={20} color="white" />
                </Pressable>
            </View>


            <View>
                <View className="flex-row justify-between items-start mb-1.5">
                    <Text className="text-sm font-bold text-gray-900 flex-1 mr-1" numberOfLines={1}>
                        {title}
                    </Text>
                    <View className="flex-row items-center">
                        <Ionicons name="star" size={12} color="#111" />
                        <Text className="text-gray-900 text-xs ml-0.5 font-medium">{rating}</Text>
                    </View>
                </View>

                <View className="flex-row items-baseline mb-1">
                    <View className="flex-row items-baseline">
                        <Text className="text-[#0092b8] font-bold text-sm">৳{price}</Text>
                        <Text className="text-gray-500 text-[10px] ml-0.5">/{unit}</Text>
                    </View>
                    <Text className="text-gray-400 text-[10px] ml-2">{date}</Text>
                </View>

                <View className="flex-row items-center">
                    <Ionicons name="location-outline" size={10} color="#6B7280" />
                    <Text className="text-gray-500 text-[10px] ml-0.5" numberOfLines={1}>
                        {location}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default FeaturedCard
