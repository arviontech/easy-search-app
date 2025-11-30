import { Ionicons } from '@expo/vector-icons'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'

const { width } = Dimensions.get('window')

const ProductDetail = () => {
    const router = useRouter()
    const insets = useSafeAreaInsets()
    const params = useLocalSearchParams()

    // Mock Data (In a real app, fetch based on params.id)
    const product = {
        id: params.id,
        title: params.title || 'iPhone 15 Pro Max - 256GB',
        price: params.price || '1,45,000',
        originalPrice: params.originalPrice,
        rating: params.rating || 4.9,
        reviews: params.reviews || 128,
        condition: params.condition || 'New',
        description: 'Experience the ultimate performance with the iPhone 15 Pro Max. Featuring a titanium design, A17 Pro chip, and the most powerful camera system in an iPhone. The 6.7-inch Super Retina XDR display with ProMotion technology delivers an immersive viewing experience.',
        images: [
            require('../../assets/images/hero_bg.png'), // Placeholder
            require('../../assets/images/hero_bg.png'),
            require('../../assets/images/hero_bg.png'),
        ],
        seller: {
            name: 'Tech World BD',
            rating: 4.8,
            verified: true,
            image: null, // Placeholder for avatar
        }
    }

    const [activeImageIndex, setActiveImageIndex] = useState(0)
    const [isFavorite, setIsFavorite] = useState(false)

    return (
        <View className="flex-1 bg-white">
            <StatusBar style="dark" />

            {/* Header */}
            <SafeAreaView edges={['top']} className="bg-white">
                <View className="flex-row items-center justify-between px-5 py-3">
                    <TouchableOpacity
                        onPress={() => router.back()}
                        className="w-10 h-10 items-center justify-center rounded-full bg-gray-100"
                    >
                        <Ionicons name="chevron-back" size={24} color="#111" />
                    </TouchableOpacity>
                    <View className="flex-row items-center gap-3">
                        <TouchableOpacity className="w-10 h-10 items-center justify-center rounded-full bg-gray-100">
                            <Ionicons name="share-outline" size={20} color="#111" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setIsFavorite(!isFavorite)}
                            className="w-10 h-10 items-center justify-center rounded-full bg-gray-100"
                        >
                            <Ionicons name={isFavorite ? "heart" : "heart-outline"} size={20} color={isFavorite ? "#EF4444" : "#111"} />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
                className="flex-1"
            >

                {/* Image Gallery */}
                <View className="relative bg-gray-100">
                    <ScrollView
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        onScroll={(e) => {
                            const slide = Math.ceil(e.nativeEvent.contentOffset.x / e.nativeEvent.layoutMeasurement.width)
                            if (slide !== activeImageIndex) setActiveImageIndex(slide)
                        }}
                        scrollEventThrottle={16}
                    >
                        {product.images.map((img, index) => (
                            <Image
                                key={index}
                                source={img}
                                style={{ width: width, height: 400 }}
                                resizeMode="cover"
                            />
                        ))}
                    </ScrollView>
                    {/* Pagination Dots */}
                    <View className="absolute bottom-4 left-0 right-0 flex-row justify-center space-x-2">
                        {product.images.map((_, index) => (
                            <View
                                key={index}
                                className={`h-2 rounded-full ${activeImageIndex === index ? 'w-6 bg-[#0092b8]' : 'w-2 bg-white/50'
                                    }`}
                            />
                        ))}
                    </View>
                </View>

                {/* Product Info */}
                <View className="px-5 pt-6">
                    <View className="flex-row justify-between items-start mb-2">
                        <View className="flex-1 mr-4">
                            <View className="flex-row items-center mb-2">
                                <View
                                    className={`px-2.5 py-1 rounded-md mr-2 ${product.condition === 'New' ? 'bg-[#0092b8]/10' : 'bg-orange-100'
                                        }`}
                                >
                                    <Text
                                        className={`text-[10px] font-bold uppercase ${product.condition === 'New' ? 'text-[#0092b8]' : 'text-orange-600'
                                            }`}
                                    >
                                        {product.condition}
                                    </Text>
                                </View>
                                <View className="flex-row items-center">
                                    <Ionicons name="star" size={14} color="#F59E0B" />
                                    <Text className="text-sm text-gray-700 ml-1 font-medium">
                                        {product.rating} ({product.reviews} reviews)
                                    </Text>
                                </View>
                            </View>
                            <Text className="text-2xl font-bold text-gray-900 leading-tight">
                                {product.title}
                            </Text>
                        </View>
                    </View>

                    <View className="flex-row items-baseline mb-6">
                        <Text className="text-3xl font-bold text-[#0092b8]">
                            ৳{product.price}
                        </Text>
                        {product.originalPrice && (
                            <Text className="text-lg text-gray-400 line-through ml-3">
                                ৳{product.originalPrice}
                            </Text>
                        )}
                    </View>

                    {/* Description */}
                    <View className="mb-6">
                        <Text className="text-lg font-bold text-gray-900 mb-2">Description</Text>
                        <Text className="text-gray-600 leading-relaxed">
                            {product.description}
                        </Text>
                    </View>

                    {/* Seller Info */}
                    <View className="bg-gray-50 p-4 rounded-2xl flex-row items-center justify-between mb-6 border border-gray-100">
                        <View className="flex-row items-center">
                            <View className="w-12 h-12 bg-gray-200 rounded-full items-center justify-center mr-3">
                                <Ionicons name="storefront" size={24} color="#6B7280" />
                            </View>
                            <View>
                                <View className="flex-row items-center">
                                    <Text className="text-base font-bold text-gray-900 mr-1">
                                        {product.seller.name}
                                    </Text>
                                    {product.seller.verified && (
                                        <Ionicons name="checkmark-circle" size={16} color="#10B981" />
                                    )}
                                </View>
                                <Text className="text-sm text-gray-500">
                                    ★ {product.seller.rating} Seller Rating
                                </Text>
                            </View>
                        </View>
                        <TouchableOpacity className="bg-white px-4 py-2 rounded-xl border border-gray-200">
                            <Text className="text-gray-700 font-semibold">Chat</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

            {/* Bottom Action Bar */}
            <View
                className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-5 py-4 flex-row gap-4 shadow-lg"
                style={{ paddingBottom: Math.max(insets.bottom, 20) }}
            >
                <TouchableOpacity
                    className="flex-1 bg-white border border-[#0092b8] py-3.5 rounded-xl items-center justify-center"
                >
                    <Text className="text-[#0092b8] font-bold text-base">Add to Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    className="flex-1 bg-[#0092b8] py-3.5 rounded-xl items-center justify-center shadow-md shadow-cyan-500/30"
                >
                    <Text className="text-white font-bold text-base">Buy Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProductDetail
