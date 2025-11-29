import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Dimensions, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'
import FeaturedCard from '../../components/home/FeaturedCard'
import TabPageLayout from '../../components/TabPageLayout'

const { width } = Dimensions.get('window')
const CARD_WIDTH = (width - 40 - 15) / 2 // (Screen width - padding - gap) / 2

// Mock Data
const HOUSE_LIST = [
    {
        id: '1',
        title: 'Modern Family Apartment',
        location: 'Kazla, Rajshahi',
        price: '12,000',
        rating: 4.8,
        type: 'Family',
        badge: 'Verified',
        beds: 3,
        baths: 2,
        area: '1200 sqft',
        image: require('../../assets/images/hero_bg.png'),
    },
    {
        id: '2',
        title: 'Bachelor Mess House',
        location: 'Talaimari, Rajshahi',
        price: '3,500',
        rating: 4.5,
        type: 'Bachelor',
        badge: 'Affordable',
        beds: 1,
        baths: 1,
        area: 'Shared',
        image: require('../../assets/images/hero_bg.png'),
    },
    {
        id: '3',
        title: 'Luxury Duplex Villa',
        location: 'Padma R/A, Rajshahi',
        price: '25,000',
        rating: 4.9,
        type: 'Family',
        badge: 'Premium',
        beds: 5,
        baths: 4,
        area: '2500 sqft',
        image: require('../../assets/images/hero_bg.png'),
    },
    {
        id: '4',
        title: 'Office Space for Rent',
        location: 'Shaheb Bazar, Rajshahi',
        price: '15,000',
        rating: 4.6,
        type: 'Office',
        badge: 'Commercial',
        beds: 0,
        baths: 2,
        area: '800 sqft',
        image: require('../../assets/images/hero_bg.png'),
    },
    {
        id: '5',
        title: 'Sublet Room for Student',
        location: 'Binodpur, Rajshahi',
        price: '2,500',
        rating: 4.3,
        type: 'Sublet',
        badge: 'Budget',
        beds: 1,
        baths: 1,
        area: '150 sqft',
        image: require('../../assets/images/hero_bg.png'),
    },
]

const CATEGORIES = ['All', 'Family', 'Bachelor', 'Sublet', 'Office']

const House = () => {
    const router = useRouter()
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('All')

    // Filter Logic
    const filteredHouses = HOUSE_LIST.filter((house) => {
        const matchesSearch =
            house.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            house.location.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = selectedCategory === 'All' || house.type === selectedCategory

        return matchesSearch && matchesCategory
    })

    const renderHouseItem = ({ item }: { item: typeof HOUSE_LIST[0] }) => (
        <View style={{ width: CARD_WIDTH }} className="mb-4">
            <FeaturedCard
                title={item.title}
                location={item.location}
                rating={item.rating}
                badge={item.badge}
                price={item.price}
                date="Available Now"
                image={item.image}
                unit="mo"
                style={{ width: '100%' }}
                onPress={() => {
                    router.push({
                        pathname: '/house/[id]',
                        params: {
                            id: item.id,
                            title: item.title,
                            location: item.location,
                            rating: item.rating.toString(),
                            price: item.price,
                            badge: item.badge,
                            date: 'Available Now',
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
                        placeholder="Search by location or name..."
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

                {/* House List */}
                <FlatList
                    data={filteredHouses}
                    keyExtractor={(item) => item.id}
                    renderItem={renderHouseItem}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    ListEmptyComponent={
                        <View className="items-center justify-center py-20">
                            <Ionicons name="home-outline" size={48} color="#D1D5DB" />
                            <Text className="text-gray-400 text-lg mt-4 font-medium">No houses found</Text>
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

export default House