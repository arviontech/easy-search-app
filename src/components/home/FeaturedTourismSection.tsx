import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { BRAND_COLOR } from '../../constants'
import FeaturedCard from './FeaturedCard'

const TOURISM_DATA = [
    {
        id: 1,
        title: 'Varendra Research Museum',
        location: 'Hetem Khan, Rajshahi',
        rating: 4.8,
        badge: 'Must Visit',
        price: '50',
        date: 'Open 10am - 5pm',
        image: require('../../assets/images/hero_bg.png'),
    },
    {
        id: 2,
        title: 'Padma Garden',
        location: 'Padma River Bank',
        rating: 4.7,
        badge: 'Scenic',
        price: 'Free',
        date: 'Open 24/7',
        image: require('../../assets/images/hero_bg.png'),
    },
]

const FeaturedTourismSection = () => {
    const router = useRouter()

    return (
        <View className="mb-6">
            <View className="flex-row items-center justify-between px-5 mb-4">
                <Text className="text-xl font-bold text-gray-800">Explore Rajshahi</Text>
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
                {TOURISM_DATA.map((spot) => (
                    <FeaturedCard
                        key={spot.id}
                        title={spot.title}
                        location={spot.location}
                        rating={spot.rating}
                        badge={spot.badge}
                        price={spot.price}
                        date={spot.date}
                        image={spot.image}
                        unit="entry"
                        style={{ marginRight: 12 }}
                        onPress={() => {
                            router.push({
                                pathname: '/tourism/[id]',
                                params: {
                                    id: spot.id.toString(),
                                    title: spot.title,
                                    location: spot.location,
                                    rating: spot.rating.toString(),
                                    price: spot.price,
                                    badge: spot.badge,
                                    date: spot.date,
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
                        <Ionicons name="map" size={24} color={BRAND_COLOR} />
                    </View>
                    <Text className="text-gray-900 font-bold text-center px-4 text-sm">View all spots</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default FeaturedTourismSection


