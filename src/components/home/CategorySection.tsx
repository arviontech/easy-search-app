import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { BRAND_COLOR, BRAND_COLOR_LIGHT, SHADOW_SM } from '../../constants'

const CATEGORIES = [
    { id: 1, name: 'Houses', icon: 'home-outline' },
    { id: 2, name: 'Hostels', icon: 'business-outline' },
    { id: 3, name: 'Doctors', icon: 'medkit-outline' },
    { id: 4, name: 'Jobs', icon: 'briefcase-outline' },
    { id: 5, name: 'Catering', icon: 'restaurant-outline' },
    { id: 6, name: 'Tourism', icon: 'airplane-outline' },
] as const

const CategorySection = () => {
    return (
        <View className="py-8">
            <Text className="text-xl font-bold text-gray-800 px-5 mb-3 text-center">
                Which type of service suits your needs?
            </Text>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 10 }}
            >
                {CATEGORIES.map((category) => (
                    <TouchableOpacity
                        key={category.id}
                        className="flex-row items-center bg-white p-3 pr-6 rounded-2xl mr-4 border border-gray-100"
                        style={SHADOW_SM}
                    >
                        <View
                            className="w-10 h-10 rounded-full items-center justify-center mr-3"
                            style={{ backgroundColor: BRAND_COLOR_LIGHT }}
                        >
                            <Ionicons name={category.icon as any} size={20} color={BRAND_COLOR} />
                        </View>
                        <Text className="font-semibold text-gray-700">{category.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

export default CategorySection

