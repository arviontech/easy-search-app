import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

interface ProductCardProps {
    title: string
    price: string
    originalPrice?: string
    rating: number
    reviews: number
    condition: 'New' | 'Used'
    image: any
    onPress: () => void
    onAddToCart: () => void
}

const ProductCard = ({
    title,
    price,
    originalPrice,
    rating,
    reviews,
    condition,
    image,
    onPress,
    onAddToCart,
}: ProductCardProps) => {
    return (
        <TouchableOpacity
            className="bg-white rounded-2xl mb-4 shadow-sm border border-gray-100 overflow-hidden"
            style={{ width: '48%' }}
            activeOpacity={0.9}
            onPress={onPress}
        >
            {/* Image Container */}
            <View className="relative h-40 bg-gray-50">
                <Image
                    source={image}
                    className="w-full h-full"
                    resizeMode="cover"
                />
                {/* Condition Badge */}
                <View
                    className={`absolute top-2 left-2 px-2 py-1 rounded-md ${condition === 'New' ? 'bg-[#0092b8]' : 'bg-orange-500'
                        }`}
                >
                    <Text className="text-white text-[10px] font-bold uppercase">
                        {condition}
                    </Text>
                </View>
                {/* Favorite Button */}
                <TouchableOpacity className="absolute top-2 right-2 w-8 h-8 bg-white/80 rounded-full items-center justify-center backdrop-blur-sm">
                    <Ionicons name="heart-outline" size={18} color="#374151" />
                </TouchableOpacity>
            </View>

            {/* Content */}
            <View className="p-3">
                {/* Rating */}
                <View className="flex-row items-center mb-1">
                    <Ionicons name="star" size={12} color="#F59E0B" />
                    <Text className="text-xs text-gray-500 ml-1">
                        {rating} <Text className="text-gray-400">({reviews})</Text>
                    </Text>
                </View>

                {/* Title */}
                <Text
                    className="text-sm font-semibold text-gray-900 mb-1"
                    numberOfLines={2}
                >
                    {title}
                </Text>

                {/* Price */}
                <View className="flex-row items-baseline mb-3">
                    <Text className="text-base font-bold text-[#0092b8]">
                        ৳{price}
                    </Text>
                    {originalPrice && (
                        <Text className="text-xs text-gray-400 line-through ml-2">
                            ৳{originalPrice}
                        </Text>
                    )}
                </View>

                {/* Add to Cart Button */}
                <TouchableOpacity
                    className="w-full py-2 bg-gray-50 rounded-lg border border-gray-200 items-center flex-row justify-center"
                    onPress={onAddToCart}
                >
                    <Ionicons name="cart-outline" size={16} color="#374151" />
                    <Text className="text-xs font-semibold text-gray-700 ml-1.5">
                        Add to Cart
                    </Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default ProductCard
