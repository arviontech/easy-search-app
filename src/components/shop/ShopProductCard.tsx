import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native'

interface ShopProductCardProps {
    title: string
    price: string
    originalPrice?: string
    rating: number
    reviews: number
    condition: 'New' | 'Used'
    image: any
    onPress: () => void
    onAddToCart: () => void
    style?: any
}

const ShopProductCard = ({
    title,
    price,
    originalPrice,
    rating,
    reviews,
    condition,
    image,
    onPress,
    onAddToCart,
    style,
}: ShopProductCardProps) => {
    return (
        <TouchableOpacity
            style={[{ width: '48%' }, style]}
            activeOpacity={0.8}
            onPress={onPress}
            className="mb-4"
        >
            {/* Image Section */}
            <View className="relative mb-2">
                <Image
                    source={image}
                    className="w-full h-40 rounded-2xl"
                    resizeMode="cover"
                />

                {/* Condition Badge - Mimicking FeaturedCard style */}
                <View
                    className="absolute top-2 left-2 px-2.5 py-1 rounded-full shadow-sm"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
                >
                    <Text
                        className="text-[10px] font-bold uppercase tracking-wide"
                        style={{ color: condition === 'New' ? '#0092b8' : '#F59E0B' }}
                    >
                        {condition}
                    </Text>
                </View>

                {/* Heart Icon */}
                <Pressable className="absolute top-2 right-2">
                    <Ionicons name="heart" size={20} color="rgba(0,0,0,0.3)" style={{ position: 'absolute' }} />
                    <Ionicons name="heart-outline" size={20} color="white" />
                </Pressable>

                {/* Add to Cart Button - Overlay at bottom right of image */}
                <TouchableOpacity
                    className="absolute bottom-2 right-2 w-8 h-8 bg-white rounded-full items-center justify-center shadow-sm"
                    onPress={onAddToCart}
                    activeOpacity={0.9}
                >
                    <Ionicons name="add" size={20} color="#0092b8" />
                </TouchableOpacity>
            </View>

            {/* Content Section */}
            <View>
                <View className="flex-row justify-between items-start mb-1">
                    <Text className="text-sm font-bold text-gray-900 flex-1 mr-1" numberOfLines={1}>
                        {title}
                    </Text>
                    <View className="flex-row items-center">
                        <Ionicons name="star" size={12} color="#111" />
                        <Text className="text-gray-900 text-xs ml-0.5 font-medium">{rating}</Text>
                    </View>
                </View>

                <View className="flex-row items-baseline">
                    <Text className="text-[#0092b8] font-bold text-base">৳{price}</Text>
                    {originalPrice && (
                        <Text className="text-gray-400 text-[10px] line-through ml-1.5">
                            ৳{originalPrice}
                        </Text>
                    )}
                </View>

                <Text className="text-gray-400 text-[10px] mt-0.5">
                    {reviews} reviews
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default ShopProductCard
