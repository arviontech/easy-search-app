import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const BannerAdSection = () => {
    return (
        <View className="px-5 mb-6">
            <View
                className="bg-gray-900 rounded-2xl p-4 flex-row items-center justify-between overflow-hidden relative"
                style={{
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.2,
                    shadowRadius: 8,
                    elevation: 5,
                }}
            >
                {/* Abstract Design Elements - Squares instead of circles */}
                <View className="absolute top-0 right-0 w-24 h-24 bg-white/5 rotate-45 translate-x-8 -translate-y-8" />
                <View className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rotate-12 -translate-x-4 translate-y-4" />

                <View className="flex-1 mr-4 z-10">
                    <View className="flex-row items-center mb-1">
                        <Ionicons name="flash" size={12} color="#FBBF24" />
                        <Text className="text-[#FBBF24] text-[10px] font-bold ml-1 uppercase tracking-wider">Premium Offer</Text>
                    </View>
                    <Text className="text-white text-base font-bold mb-0.5">
                        Get 50% Off Moving Services
                    </Text>
                    <Text className="text-gray-400 text-[10px] mb-2">
                        Valid for all house and hostel shifts this month.
                    </Text>

                    <TouchableOpacity
                        className="bg-[#FBBF24] px-3 py-1.5 rounded-lg self-start"
                        activeOpacity={0.8}
                    >
                        <Text className="text-gray-900 font-bold text-xs">Book Now</Text>
                    </TouchableOpacity>
                </View>

                {/* Right Icon/Image Placeholder */}
                <View className="bg-gray-800 p-3 rounded-xl border border-gray-700 z-10">
                    <Ionicons name="cube-outline" size={32} color="#FBBF24" />
                </View>
            </View>
        </View>
    )
}

export default BannerAdSection
