import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { BRAND_COLOR } from '../../constants'
import FeaturedCard from './FeaturedCard'

const HOSTEL_DATA = [
    {
        id: 1,
        title: 'Student Palace Hostel',
        location: 'Talaimari, Rajshahi',
        rating: 4.5,
        badge: 'Popular',
        price: '2,500',
        date: 'Seat Available',
        image: require('../../assets/images/hero_bg.png'),
    },
    {
        id: 2,
        title: 'Green View Ladies Hostel',
        location: 'Kazla, Rajshahi',
        rating: 4.7,
        badge: 'Secure',
        price: '3,000',
        date: 'Seat Available',
        image: require('../../assets/images/hero_bg.png'),
    },
]

const FeaturedHostelsSection = () => {
    const router = useRouter()

    return (
        <View className="mb-6">
            <View className="flex-row items-center justify-between px-5 mb-4">
                <Text className="text-xl font-bold text-gray-800">Top Rated Hostels</Text>
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
                {HOSTEL_DATA.map((hostel) => (
                    <FeaturedCard
                        key={hostel.id}
                        title={hostel.title}
                        location={hostel.location}
                        rating={hostel.rating}
                        badge={hostel.badge}
                        price={hostel.price}
                        date={hostel.date}
                        image={hostel.image}
                        unit="mo"
                        style={{ marginRight: 12 }}
                        onPress={() => {
                            router.push({
                                pathname: '/hostel/[id]',
                                params: {
                                    id: hostel.id.toString(),
                                    title: hostel.title,
                                    location: hostel.location,
                                    rating: hostel.rating.toString(),
                                    price: hostel.price,
                                    badge: hostel.badge,
                                    date: hostel.date,
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
                    <Text className="text-gray-900 font-bold text-center px-4 text-sm">View all hostels</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default FeaturedHostelsSection


