import { Ionicons } from '@expo/vector-icons'
import { useLocalSearchParams, useRouter } from 'expo-router'
import React, { useRef, useState } from 'react'
import { Dimensions, Image, NativeScrollEvent, NativeSyntheticEvent, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BRAND_COLOR } from '../../constants'

const { width: SCREEN_WIDTH } = Dimensions.get('window')

// Static data - extracted outside component to avoid recreation on every render
const GALLERY_IMAGES = [
    require('../../assets/images/hero_bg.png'),
    require('../../assets/images/hero_bg.png'),
    require('../../assets/images/hero_bg.png'),
    require('../../assets/images/hero_bg.png'),
]

const FACILITIES = [
    { icon: 'wifi', label: 'WiFi' },
    { icon: 'bed', label: 'Furnished' },
    { icon: 'water', label: 'Water 24/7' },
    { icon: 'shield-checkmark', label: 'Security' },
    { icon: 'restaurant', label: 'Meals Available' },
    { icon: 'book', label: 'Study Room' },
] as const

const HostelDetail = () => {
    const router = useRouter()
    const params = useLocalSearchParams()
    const scrollViewRef = useRef<ScrollView>(null)
    const [activeImageIndex, setActiveImageIndex] = useState(0)

    // Parse hostel data from params
    const hostelId = params.id as string
    const title = params.title as string
    const location = params.location as string
    const rating = params.rating as string
    const price = params.price as string
    const badge = params.badge as string
    const date = params.date as string

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

                {/* Hostel Information */}
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

                    {/* Hostel Details */}
                    <View>
                        <Text className="text-xl font-bold text-gray-900 mb-4">Hostel Details</Text>
                        <View className="flex-row flex-wrap">
                            <View className="w-1/2 mb-4">
                                <View className="flex-row items-center">
                                    <View className="w-10 h-10 bg-gray-100 rounded-full items-center justify-center mr-3">
                                        <Ionicons name="people-outline" size={20} color="#0092b8" />
                                    </View>
                                    <View>
                                        <Text className="text-gray-500 text-sm">Capacity</Text>
                                        <Text className="text-gray-900 text-base font-semibold">4 Students</Text>
                                    </View>
                                </View>
                            </View>
                            <View className="w-1/2 mb-4">
                                <View className="flex-row items-center">
                                    <View className="w-10 h-10 bg-gray-100 rounded-full items-center justify-center mr-3">
                                        <Ionicons name="bed-outline" size={20} color="#0092b8" />
                                    </View>
                                    <View>
                                        <Text className="text-gray-500 text-sm">Room Type</Text>
                                        <Text className="text-gray-900 text-base font-semibold">Shared</Text>
                                    </View>
                                </View>
                            </View>
                            <View className="w-1/2 mb-4">
                                <View className="flex-row items-center">
                                    <View className="w-10 h-10 bg-gray-100 rounded-full items-center justify-center mr-3">
                                        <Ionicons name="male-female-outline" size={20} color="#0092b8" />
                                    </View>
                                    <View>
                                        <Text className="text-gray-500 text-sm">Gender</Text>
                                        <Text className="text-gray-900 text-base font-semibold">Male Only</Text>
                                    </View>
                                </View>
                            </View>
                            <View className="w-1/2 mb-4">
                                <View className="flex-row items-center">
                                    <View className="w-10 h-10 bg-gray-100 rounded-full items-center justify-center mr-3">
                                        <Ionicons name="restaurant-outline" size={20} color="#0092b8" />
                                    </View>
                                    <View>
                                        <Text className="text-gray-500 text-sm">Meals</Text>
                                        <Text className="text-gray-900 text-base font-semibold">Available</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Divider */}
                    <View className="h-px bg-gray-200 my-5" />

                    {/* Description */}
                    <View>
                        <Text className="text-xl font-bold text-gray-900 mb-3">About This Hostel</Text>
                        <Text className="text-gray-600 text-base leading-6">
                            {title} is a well-maintained hostel located in {location}. The hostel provides a
                            comfortable and safe living environment for students. It features modern facilities,
                            clean rooms, and a friendly atmosphere perfect for studying and socializing.
                            {'\n\n'}
                            The hostel is conveniently located near educational institutions, markets, and public
                            transportation. We maintain strict security measures with 24/7 supervision and CCTV
                            monitoring to ensure the safety of all residents.
                        </Text>
                    </View>

                    {/* Divider */}
                    <View className="h-px bg-gray-200 my-5" />

                    {/* Facilities */}
                    <View>
                        <Text className="text-xl font-bold text-gray-900 mb-4">Facilities</Text>
                        <View className="flex-row flex-wrap">
                            {FACILITIES.map((facility, index) => (
                                <View key={index} className="w-1/3 mb-4">
                                    <View className="items-center">
                                        <View className="w-12 h-12 bg-gray-100 rounded-full items-center justify-center mb-2">
                                            <Ionicons name={facility.icon as any} size={20} color="#0092b8" />
                                        </View>
                                        <Text className="text-gray-600 text-sm text-center">{facility.label}</Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>

                    {/* Divider */}
                    <View className="h-px bg-gray-200 my-5" />

                    {/* Availability */}
                    <View className="mb-6">
                        <Text className="text-xl font-bold text-gray-900 mb-3">Seat Availability</Text>
                        <View className="flex-row items-center">
                            <Ionicons name="checkmark-circle" size={20} color="#10B981" />
                            <Text className="text-gray-600 text-base ml-2">{date}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

            {/* Bottom Contact Bar */}
            <SafeAreaView edges={['bottom']} className="bg-white border-t border-gray-200">
                <View className="px-5 py-4 flex-row items-center justify-between">
                    <View>
                        <Text className="text-gray-500 text-sm">Price per month</Text>
                        <View className="flex-row items-baseline">
                            <Text className="text-2xl font-bold text-gray-900">৳{price}</Text>
                            <Text className="text-gray-600 text-base ml-1">/month</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        className="bg-[#0092b8] px-8 py-4 rounded-xl flex-row items-center"
                        activeOpacity={0.8}
                    >
                        <Ionicons name="call" size={20} color="white" />
                        <Text className="text-white font-bold text-base ml-2">Contact Manager</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default HostelDetail
