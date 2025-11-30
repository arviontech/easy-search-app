import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import PromoAdSection from '../../components/home/PromoAdSection'
import ShopProductCard from '../../components/shop/ShopProductCard'
import TabPageLayout from '../../components/TabPageLayout'

// Mock Data
const NEW_PRODUCTS = [
    {
        id: '1',
        title: 'iPhone 15 Pro Max - 256GB',
        price: '1,45,000',
        rating: 4.9,
        reviews: 128,
        condition: 'New' as const,
        image: require('../../assets/images/hero_bg.png'),
    },
    {
        id: '2',
        title: 'MacBook Air M2 - 13 inch',
        price: '1,25,000',
        rating: 4.8,
        reviews: 85,
        condition: 'New' as const,
        image: require('../../assets/images/hero_bg.png'),
    },
    {
        id: '3',
        title: 'Sony WH-1000XM5 Headphones',
        price: '35,000',
        rating: 4.7,
        reviews: 240,
        condition: 'New' as const,
        image: require('../../assets/images/hero_bg.png'),
    },
    {
        id: '4',
        title: 'Samsung Galaxy S24 Ultra',
        price: '1,55,000',
        rating: 4.9,
        reviews: 95,
        condition: 'New' as const,
        image: require('../../assets/images/hero_bg.png'),
    },
]

const USED_PRODUCTS = [
    {
        id: '5',
        title: 'iPad Pro 11" (2021) - Good Condition',
        price: '65,000',
        originalPrice: '85,000',
        rating: 4.5,
        reviews: 42,
        condition: 'Used' as const,
        image: require('../../assets/images/hero_bg.png'),
    },
    {
        id: '6',
        title: 'Canon EOS R50 Camera Body',
        price: '55,000',
        originalPrice: '70,000',
        rating: 4.6,
        reviews: 18,
        condition: 'Used' as const,
        image: require('../../assets/images/hero_bg.png'),
    },
    {
        id: '7',
        title: 'Gaming PC - RTX 3060, Ryzen 5',
        price: '85,000',
        originalPrice: '1,10,000',
        rating: 4.4,
        reviews: 30,
        condition: 'Used' as const,
        image: require('../../assets/images/hero_bg.png'),
    },
    {
        id: '8',
        title: 'PlayStation 5 Console',
        price: '45,000',
        originalPrice: '60,000',
        rating: 4.8,
        reviews: 156,
        condition: 'Used' as const,
        image: require('../../assets/images/hero_bg.png'),
    },
]

const FILTERS = ['All', 'New', 'Old', 'Used', 'Condition']

const Shop = () => {
    const router = useRouter()
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedFilter, setSelectedFilter] = useState('All')



    return (
        <TabPageLayout>
            <ScrollView
                className="flex-1"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 140 }}
            >
                {/* Header & Search */}
                <View className="px-5 pt-4 pb-2 bg-white">
                    <Text className="text-2xl font-bold text-gray-900 mb-4">Shop</Text>

                    {/* Search Bar */}
                    <View className="flex-row items-center gap-3 mb-6">
                        <View
                            className="flex-1 flex-row items-center bg-white rounded-2xl px-4 border border-gray-100 shadow-sm"
                            style={{ height: 52, elevation: 2, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 8, shadowOffset: { width: 0, height: 2 } }}
                        >
                            <Ionicons name="search" size={22} color="#9CA3AF" />
                            <TextInput
                                placeholder="Search products..."
                                className="flex-1 ml-3 text-base text-gray-900 font-medium"
                                value={searchQuery}
                                onChangeText={setSearchQuery}
                                placeholderTextColor="#9CA3AF"
                            />
                        </View>
                        <TouchableOpacity
                            className="items-center justify-center bg-white rounded-2xl border border-gray-100 shadow-sm"
                            style={{ width: 52, height: 52, elevation: 2, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 8, shadowOffset: { width: 0, height: 2 } }}
                        >
                            <Ionicons name="options-outline" size={24} color="#374151" />
                        </TouchableOpacity>
                    </View>

                    {/* Filters */}
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        className="mb-2"
                    >
                        {FILTERS.map((filter, index) => (
                            <TouchableOpacity
                                key={filter}
                                onPress={() => setSelectedFilter(filter)}
                                className={`mr-2 px-5 py-2 rounded-full border ${selectedFilter === filter
                                    ? 'bg-[#0092b8] border-[#0092b8]'
                                    : 'bg-white border-gray-200'
                                    }`}
                            >
                                <Text
                                    className={`font-semibold ${selectedFilter === filter ? 'text-white' : 'text-gray-600'
                                        }`}
                                >
                                    {filter}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                {/* New Products Section */}
                <View className="px-5 pt-6">
                    <View className="flex-row justify-between items-center mb-4">
                        <Text className="text-lg font-bold text-gray-900">New Arrivals</Text>
                        <TouchableOpacity>
                            <Text className="text-[#0092b8] font-semibold">See All</Text>
                        </TouchableOpacity>
                    </View>
                    <View className="flex-row flex-wrap justify-between">
                        {NEW_PRODUCTS.map((item) => (
                            <ShopProductCard
                                key={item.id}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                reviews={item.reviews}
                                condition={item.condition}
                                image={item.image}
                                onPress={() => router.push({
                                    pathname: '/shop/[id]',
                                    params: {
                                        id: item.id,
                                        title: item.title,
                                        price: item.price,
                                        rating: item.rating,
                                        reviews: item.reviews,
                                        condition: item.condition,
                                    }
                                })}
                                onAddToCart={() => { }}
                            />
                        ))}
                    </View>
                </View>

                {/* Promotional Ad */}
                <View className="py-2">
                    <PromoAdSection
                        title="Mega Electronics Sale"
                        subtitle="Up to 40% off on premium gadgets. Limited time offer!"
                        ctaText="Shop Now"
                        color="#EF4444"
                        icon="pricetag"
                    />
                </View>

                {/* Used Products Section */}
                <View className="px-5 pt-4">
                    <View className="flex-row justify-between items-center mb-4">
                        <Text className="text-lg font-bold text-gray-900">Used & Refurbished</Text>
                        <TouchableOpacity>
                            <Text className="text-[#0092b8] font-semibold">See All</Text>
                        </TouchableOpacity>
                    </View>
                    <View className="flex-row flex-wrap justify-between">
                        {USED_PRODUCTS.map((item) => (
                            <ShopProductCard
                                key={item.id}
                                title={item.title}
                                price={item.price}
                                originalPrice={item.originalPrice}
                                rating={item.rating}
                                reviews={item.reviews}
                                condition={item.condition}
                                image={item.image}
                                onPress={() => router.push({
                                    pathname: '/shop/[id]',
                                    params: {
                                        id: item.id,
                                        title: item.title,
                                        price: item.price,
                                        originalPrice: item.originalPrice,
                                        rating: item.rating,
                                        reviews: item.reviews,
                                        condition: item.condition,
                                    }
                                })}
                                onAddToCart={() => { }}
                            />
                        ))}
                    </View>
                </View>

            </ScrollView>
        </TabPageLayout>
    )
}

export default Shop
