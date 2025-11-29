import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native'

const HeroSection = () => {
    return (
        <View className="h-[350px] w-full relative">
            <ImageBackground
                source={require('../../assets/images/hero_bg.png')}
                className="flex-1 justify-center items-center"
                resizeMode="cover"
            >
                {/* Overlay for better text readability */}
                <View className="absolute inset-0 bg-black/40" />

                <View className="z-10 w-full px-4 items-center">
                    <Text className="text-3xl font-bold text-white text-center mb-2 drop-shadow-md">
                        Discover Rajshahi's Local Services
                    </Text>
                    <Text className="text-base text-white text-center mb-8 font-medium drop-shadow-sm opacity-90">
                        Housing, Healthcare, Catering, Tourism & More
                    </Text>

                    {/* Search Bar Container */}
                    <View
                        className="bg-white rounded-3xl w-full max-w-md shadow-lg overflow-hidden"
                        style={{
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 4 },
                            shadowOpacity: 0.15,
                            shadowRadius: 12,
                            elevation: 8,
                        }}
                    >
                        {/* Category Dropdown */}
                        <View className="px-5 py-3 border-b border-gray-100">
                            <Text className="text-[10px] text-gray-500 font-bold mb-1 uppercase tracking-wider">Category</Text>
                            <View className="flex-row items-center justify-between">
                                <Text className="text-gray-800 font-semibold text-sm">House Rent</Text>
                                <Ionicons name="chevron-down" size={16} color="#6B7280" />
                            </View>
                        </View>

                        {/* Location Input */}
                        <View className="px-5 py-3 border-b border-gray-100">
                            <Text className="text-[10px] text-gray-500 font-bold mb-1 uppercase tracking-wider">Location</Text>
                            <TextInput
                                placeholder="Kazla, Shaheb Bazar..."
                                placeholderTextColor="#9CA3AF"
                                className="text-gray-800 font-semibold p-0 text-sm h-6"
                            />
                        </View>

                        {/* Price Range Input */}
                        <View className="px-5 py-3 flex-row items-center justify-between">
                            <View className="flex-1 mr-4">
                                <Text className="text-[10px] text-gray-500 font-bold mb-1 uppercase tracking-wider">Price Range</Text>
                                <TextInput
                                    placeholder="Any budget"
                                    placeholderTextColor="#9CA3AF"
                                    className="text-gray-800 font-semibold p-0 text-sm h-6"
                                />
                            </View>

                            {/* Search Button */}
                            <TouchableOpacity
                                className="w-10 h-10 rounded-full items-center justify-center"
                                style={{ backgroundColor: '#0092b8' }}
                            >
                                <Ionicons name="search" size={20} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default HeroSection
