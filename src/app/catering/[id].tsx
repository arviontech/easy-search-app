import { Ionicons } from '@expo/vector-icons'
import { useLocalSearchParams, useRouter } from 'expo-router'
import React, { useRef, useState } from 'react'
import { Dimensions, Image, NativeScrollEvent, NativeSyntheticEvent, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BRAND_COLOR } from '../../constants'

const { width: SCREEN_WIDTH } = Dimensions.get('window')

// Static data
const GALLERY_IMAGES = [
    require('../../assets/images/hero_bg.png'),
    require('../../assets/images/hero_bg.png'),
    require('../../assets/images/hero_bg.png'),
    require('../../assets/images/hero_bg.png'),
]

const FEATURES = [
    { icon: 'restaurant', label: 'Fresh Food' },
    { icon: 'time', label: 'On Time' },
    { icon: 'nutrition', label: 'Hygienic' },
    { icon: 'bicycle', label: 'Delivery' },
    { icon: 'leaf', label: 'Organic' },
    { icon: 'card', label: 'Cashless' },
] as const

const CateringDetail = () => {
    const router = useRouter()
    const params = useLocalSearchParams()
    const scrollViewRef = useRef<ScrollView>(null)
    const [activeImageIndex, setActiveImageIndex] = useState(0)

    // Parse data
    const title = params.title as string
    const location = params.location as string
    const rating = params.rating as string
    const price = params.price as string
    const badge = params.badge as string
    const date = params.date as string // e.g. "Lunch & Dinner"

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const scrollPosition = event.nativeEvent.contentOffset.x
        const index = Math.round(scrollPosition / SCREEN_WIDTH)
        setActiveImageIndex(index)
    }

    return (
        <View className="flex-1 bg-white">
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
                        <TouchableOpacity className="w-10 h-10 items-center justify-center rounded-full bg-gray-100">
                            <Ionicons name="heart-outline" size={20} color="#111" />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>

            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
                {/* Image Gallery */}
                <View className="relative">
                    <ScrollView
                        ref={scrollViewRef}
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        onScroll={handleScroll}
                        scrollEventThrottle={16}
                    >
                        {GALLERY_IMAGES.map((image, index) => (
                            <Image
                                key={index}
                                source={image}
                                style={{ width: SCREEN_WIDTH, height: 320 }}
                                resizeMode="cover"
                            />
                        ))}
                    </ScrollView>

                    {/* Image Counter */}
                    <View className="absolute bottom-4 right-4 bg-black/60 px-3 py-1.5 rounded-full">
                        <Text className="text-white text-sm font-semibold">
                            {activeImageIndex + 1} / {GALLERY_IMAGES.length}
                        </Text>
                    </View>

                    {/* Pagination Dots */}
                    <View className="absolute bottom-4 left-0 right-0 flex-row justify-center items-center">
                        {GALLERY_IMAGES.map((_, index) => (
                            <View
                                key={index}
                                className="mx-1"
                                style={{
                                    width: activeImageIndex === index ? 24 : 6,
                                    height: 6,
                                    borderRadius: 3,
                                    backgroundColor: activeImageIndex === index ? BRAND_COLOR : 'rgba(255,255,255,0.6)',
                                }}
                            />
                        ))}
                    </View>
                </View>

                {/* Information */}
                <View className="px-5 py-5">
                    {/* Badge */}
                    {badge && (
                        <View className="bg-[#0092b8]/10 px-4 py-2 rounded-full self-start mb-3">
                            <Text className="text-[#0092b8] text-xs font-bold">{badge}</Text>
                        </View>
                    )}

                    {/* Title and Rating */}
                    <View className="flex-row justify-between items-start mb-2">
                        <Text className="text-2xl font-bold text-gray-900 flex-1 mr-4">{title}</Text>
                        <View className="flex-row items-center bg-gray-100 px-3 py-1.5 rounded-full">
                            <Ionicons name="star" size={16} color="#111" />
                            <Text className="text-gray-900 text-base ml-1 font-semibold">{rating}</Text>
                        </View>
                    </View>

                    {/* Location */}
                    <View className="flex-row items-center mb-4">
                        <Ionicons name="location-outline" size={18} color="#6B7280" />
                        <Text className="text-gray-600 text-base ml-1">{location}</Text>
                    </View>

                    {/* Divider */}
                    <View className="h-px bg-gray-200 my-5" />

                    {/* Service Details */}
                    <View>
                        <Text className="text-xl font-bold text-gray-900 mb-4">Service Details</Text>
                        <View className="flex-row flex-wrap">
                            <View className="w-1/2 mb-4">
                                <View className="flex-row items-center">
                                    <View className="w-10 h-10 bg-gray-100 rounded-full items-center justify-center mr-3">
                                        <Ionicons name="restaurant-outline" size={20} color="#0092b8" />
                                    </View>
                                    <View>
                                        <Text className="text-gray-500 text-sm">Cuisine</Text>
                                        <Text className="text-gray-900 text-base font-semibold">Bengali</Text>
                                    </View>
                                </View>
                            </View>
                            <View className="w-1/2 mb-4">
                                <View className="flex-row items-center">
                                    <View className="w-10 h-10 bg-gray-100 rounded-full items-center justify-center mr-3">
                                        <Ionicons name="time-outline" size={20} color="#0092b8" />
                                    </View>
                                    <View>
                                        <Text className="text-gray-500 text-sm">Delivery</Text>
                                        <Text className="text-gray-900 text-base font-semibold">30-45 min</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Divider */}
                    <View className="h-px bg-gray-200 my-5" />

                    {/* Description */}
                    <View>
                        <Text className="text-xl font-bold text-gray-900 mb-3">About Us</Text>
                        <Text className="text-gray-600 text-base leading-6">
                            {title} offers delicious and hygienic homemade food delivered right to your doorstep.
                            We specialize in authentic local cuisine prepared with fresh ingredients. Whether you need
                            a quick lunch or a family dinner, we have you covered.
                            {'\n\n'}
                            We ensure contactless delivery and maintain high standards of hygiene in our kitchen.
                            Bulk orders for events are also accepted with prior notice.
                        </Text>
                    </View>

                    {/* Divider */}
                    <View className="h-px bg-gray-200 my-5" />

                    {/* Features */}
                    <View>
                        <Text className="text-xl font-bold text-gray-900 mb-4">Why Choose Us?</Text>
                        <View className="flex-row flex-wrap">
                            {FEATURES.map((feature, index) => (
                                <View key={index} className="w-1/3 mb-4">
                                    <View className="items-center">
                                        <View className="w-12 h-12 bg-gray-100 rounded-full items-center justify-center mb-2">
                                            <Ionicons name={feature.icon as any} size={20} color="#0092b8" />
                                        </View>
                                        <Text className="text-gray-600 text-sm text-center">{feature.label}</Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>

                    {/* Divider */}
                    <View className="h-px bg-gray-200 my-5" />

                    {/* Availability */}
                    <View className="mb-6">
                        <Text className="text-xl font-bold text-gray-900 mb-3">Service Hours</Text>
                        <View className="flex-row items-center">
                            <Ionicons name="time" size={20} color="#10B981" />
                            <Text className="text-gray-600 text-base ml-2">{date}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

            {/* Bottom Contact Bar */}
            <SafeAreaView edges={['bottom']} className="bg-white border-t border-gray-200">
                <View className="px-5 py-4 flex-row items-center justify-between">
                    <View>
                        <Text className="text-gray-500 text-sm">Starting from</Text>
                        <View className="flex-row items-baseline">
                            <Text className="text-2xl font-bold text-gray-900">৳{price}</Text>
                            <Text className="text-gray-600 text-base ml-1">/meal</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        className="bg-[#0092b8] px-8 py-4 rounded-xl flex-row items-center"
                        activeOpacity={0.8}
                    >
                        <Ionicons name="cart" size={20} color="white" />
                        <Text className="text-white font-bold text-base ml-2">Order Now</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default CateringDetail
