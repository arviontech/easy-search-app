import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { BRAND_COLOR } from '../../constants'
import FeaturedCard from './FeaturedCard'

const FOOD_DATA = [
    {
        id: 1,
        title: 'Rajshahi Home Kitchen',
        location: 'Upashahar, Rajshahi',
        rating: 4.9,
        badge: 'Top Rated',
        price: '120',
        date: 'Lunch & Dinner',
        image: require('../../assets/images/hero_bg.png'),
    },
    {
        id: 2,
        title: 'Mayer Doa Catering',
        location: 'New Market, Rajshahi',
        rating: 4.6,
        badge: 'Best Value',
        price: '100',
        date: 'Event Catering',
        image: require('../../assets/images/hero_bg.png'),
    },
]

const FeaturedFoodSection = () => {
    const router = useRouter()

    return (
        <View className="mb-6">
            <View className="flex-row items-center justify-between px-5 mb-4">
                <Text className="text-xl font-bold text-gray-800">Popular Catering Services</Text>
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
                {FOOD_DATA.map((food) => (
                    <FeaturedCard
                        key={food.id}
                        title={food.title}
                        location={food.location}
                        rating={food.rating}
                        badge={food.badge}
                        price={food.price}
                        date={food.date}
                        image={food.image}
                        unit="meal"
                        style={{ marginRight: 12 }}
                        onPress={() => {
                            router.push({
                                pathname: '/catering/[id]',
                                params: {
                                    id: food.id.toString(),
                                    title: food.title,
                                    location: food.location,
                                    rating: food.rating.toString(),
                                    price: food.price,
                                    badge: food.badge,
                                    date: food.date,
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
                        <Ionicons name="restaurant" size={24} color={BRAND_COLOR} />
                    </View>
                    <Text className="text-gray-900 font-bold text-center px-4 text-sm">View all catering</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default FeaturedFoodSection

