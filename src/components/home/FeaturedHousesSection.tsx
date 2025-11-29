import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { BRAND_COLOR } from '../../constants'
import FeaturedCard from './FeaturedCard'

const HOUSE_DATA = [
    {
        id: 1,
        title: '2 Bedroom Family House',
        location: 'Kazla, Rajshahi',
        rating: 4.88,
        badge: 'Guest favorite',
        price: '15,000',
        date: 'Nov 18 - 23',
        image: require('../../assets/images/hero_bg.png'),
    },
    {
        id: 2,
        title: 'Bachelor Apartment',
        location: 'Shaheb Bazar, Rajshahi',
        rating: 4.92,
        badge: 'Guest favorite',
        price: '8,000',
        date: 'Available Now',
        image: require('../../assets/images/hero_bg.png'),
    },
]

const FeaturedHousesSection = () => {
    const router = useRouter()
    return (
        <View className="mb-6">
            <View className="flex-row items-center justify-between px-5 mb-4">
                <Text className="text-xl font-bold text-gray-800">Featured Houses</Text>
                <TouchableOpacity className="flex-row items-center">
                    <Text className="text-[#0092b8] font-semibold text-sm mr-1">View All</Text>
                    <Ionicons name="chevron-forward" size={16} color={BRAND_COLOR} />
                </TouchableOpacity>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 10 }}
            >
                {HOUSE_DATA.map((house) => (
                    <FeaturedCard
                        key={house.id}
                        title={house.title}
                        location={house.location}
                        rating={house.rating}
                        badge={house.badge}
                        price={house.price}
                        date={house.date}
                        image={house.image}
                        unit="mo"
                        style={{ marginRight: 12 }}
                        onPress={() => {
                            router.push({
                                pathname: '/house/[id]',
                                params: {
                                    id: house.id.toString(),
                                    title: house.title,
                                    location: house.location,
                                    rating: house.rating.toString(),
                                    price: house.price,
                                    badge: house.badge,
                                    date: house.date,
                                },
                            })
                        }}
                    />
                ))}

                {/* View All Card */}
                <TouchableOpacity
                    className="w-40 h-48 rounded-2xl items-center justify-center border border-gray-200 mr-5 bg-gray-50"
                >
                    <View className="bg-white p-4 rounded-full mb-3 shadow-sm">
                        <Ionicons name="search" size={24} color={BRAND_COLOR} />
                    </View>
                    <Text className="text-gray-900 font-bold text-center px-4 text-sm">View all homes</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default FeaturedHousesSection

