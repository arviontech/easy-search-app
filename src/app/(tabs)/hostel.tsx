import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Dimensions, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'
import FeaturedCard from '../../components/home/FeaturedCard'
import TabPageLayout from '../../components/TabPageLayout'

const { width } = Dimensions.get('window')
const CARD_WIDTH = (width - 40 - 15) / 2 // (Screen width - padding - gap) / 2

// Mock Data
const HOSTEL_LIST = [
    {
        id: '1',
        title: 'Student Palace Hostel',
        location: 'Talaimari, Rajshahi',
        price: '2,500',
        rating: 4.5,
        type: 'Boys',
        badge: 'Popular',
        image: require('../../assets/images/hero_bg.png'),
    },
    {
        id: '2',
        title: 'Green View Ladies Hostel',
        location: 'Kazla, Rajshahi',
        price: '3,000',
        rating: 4.7,
        type: 'Girls',
        badge: 'Secure',
        image: require('../../assets/images/hero_bg.png'),
    },
    {
        id: '3',
        title: 'University Hall',
        location: 'Binodpur, Rajshahi',
        price: '1,500',
        rating: 4.2,
        type: 'Boys',
        badge: 'Budget',
        image: require('../../assets/images/hero_bg.png'),
    },
    {
        id: '4',
        title: 'Rose Garden Hostel',
        location: 'Vodra, Rajshahi',
        price: '4,000',
        rating: 4.8,
        type: 'Girls',
        badge: 'Premium',
        image: require('../../assets/images/hero_bg.png'),
    },
    {
        id: '5',
        title: 'City Center Mess',
        location: 'Shaheb Bazar, Rajshahi',
        price: '2,000',
        rating: 4.0,
        type: 'Boys',
        badge: 'Affordable',
        image: require('../../assets/images/hero_bg.png'),
    },
]

const CATEGORIES = ['All', 'Boys', 'Girls', 'Premium', 'Budget']

const Hostel = () => {
    const router = useRouter()
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('All')

    // Filter Logic
    const filteredHostels = HOSTEL_LIST.filter((hostel) => {
        const matchesSearch =
            hostel.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            hostel.location.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = selectedCategory === 'All' || hostel.type === selectedCategory

        return matchesSearch && matchesCategory
    })

    const renderHostelItem = ({ item }: { item: typeof HOSTEL_LIST[0] }) => (
        <View style={{ width: CARD_WIDTH }} className="mb-4">
            <FeaturedCard
                title={item.title}
                location={item.location}
                rating={item.rating}
                badge={item.badge}
                price={item.price}
                date="Seat Available"
                image={item.image}
                unit="mo"
                style={{ width: '100%' }}
                onPress={() => {
                    router.push({
                        pathname: '/hostel/[id]',
                        params: {
                            id: item.id,
                            title: item.title,
                            location: item.location,
                            rating: item.rating.toString(),
                            price: item.price,
                            badge: item.badge,
                            date: 'Seat Available',
                        },
                    })
                }}
            />
        </View>
    )

    return (
        <TabPageLayout>
            <View className="flex-1 px-5 pt-2">
                {/* Search Bar */}
                <View className="flex-row items-center bg-white border border-gray-200 rounded-xl px-4 py-3 mb-4 shadow-sm">
                    <Ionicons name="search" size={20} color="#9CA3AF" />
                    <TextInput
                        placeholder="Search hostels..."
                        className="flex-1 ml-2 text-base text-gray-900"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                        placeholderTextColor="#9CA3AF"
                    />
                    {searchQuery.length > 0 && (
                        <TouchableOpacity onPress={() => setSearchQuery('')}>
                            <Ionicons name="close-circle" size={20} color="#9CA3AF" />
                        </TouchableOpacity>
                    )}
                </View>

                {/* Categories */}
                <View className="mb-4">
                    <FlatList
                        data={CATEGORIES}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => setSelectedCategory(item)}
                                className={`mr-3 px-5 py-2 rounded-full border ${selectedCategory === item
                                    ? 'bg-[#0092b8] border-[#0092b8]'
                                    : 'bg-white border-gray-200'
                                    }`}
                            >
                                <Text
                                    className={`font-semibold ${selectedCategory === item ? 'text-white' : 'text-gray-600'
                                        }`}
                                >
                                    {item}
                                </Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>

                {/* Hostel List */}
                <FlatList
                    data={filteredHostels}
                    keyExtractor={(item) => item.id}
                    renderItem={renderHostelItem}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    ListEmptyComponent={
                        <View className="items-center justify-center py-20">
                            <Ionicons name="bed-outline" size={48} color="#D1D5DB" />
                            <Text className="text-gray-400 text-lg mt-4 font-medium">No hostels found</Text>
                            <Text className="text-gray-400 text-sm text-center mt-1">
                                Try adjusting your search or filters
                            </Text>
                        </View>
                    }
                />
            </View>
        </TabPageLayout>
    )
}

export default Hostel