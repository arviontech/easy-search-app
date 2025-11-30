import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { FlatList, ScrollView, Text, View } from 'react-native'
import DashboardCard from '../../components/dashboard/DashboardCard'
import QuickActionButton from '../../components/dashboard/QuickActionButton'
import FeaturedCard from '../../components/home/FeaturedCard'
import TabPageLayout from '../../components/TabPageLayout'

const BRAND_COLOR = '#0092b8'

// Mock Data
const CUSTOMER_DATA = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    memberSince: 'Jan 2024',
    avatar: null,
}

const STATS = {
    totalBookings: 12,
    favorites: 28,
    reviews: 8,
}

const ACTIVE_BOOKINGS = [
    {
        id: '1',
        title: 'Modern Family Apartment',
        location: 'Kazla, Rajshahi',
        price: '12,000',
        rating: 4.8,
        badge: 'Confirmed',
        date: 'Jan 15-20',
        image: require('../../assets/images/hero_bg.png'),
    },
    {
        id: '2',
        title: 'Hilltop Restaurant',
        location: 'Padma R/A, Rajshahi',
        price: '2,500',
        rating: 4.9,
        badge: 'Pending',
        date: 'Jan 18',
        image: require('../../assets/images/hero_bg.png'),
    },
]

const FAVORITES = [
    {
        id: '1',
        title: 'Bachelor Mess House',
        location: 'Talaimari, Rajshahi',
        price: '3,500',
        rating: 4.5,
        badge: 'Affordable',
        date: 'Available',
        image: require('../../assets/images/hero_bg.png'),
    },
    {
        id: '2',
        title: 'Tourist Spot Package',
        location: 'Barind, Rajshahi',
        price: '1,200',
        rating: 4.7,
        badge: 'Popular',
        date: 'Weekends',
        image: require('../../assets/images/hero_bg.png'),
    },
]

const RECENT_SEARCHES = [
    { id: '1', query: 'Family apartment in Kazla', category: 'House', time: '2 hours ago' },
    { id: '2', query: 'Budget restaurants', category: 'Food', time: '1 day ago' },
    { id: '3', query: 'Tourist spots near Rajshahi', category: 'Tourism', time: '3 days ago' },
]

const CustomerDashboard = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const renderBookingItem = ({ item }: { item: typeof ACTIVE_BOOKINGS[0] }) => (
        <View className="mr-3" style={{ width: 162 }}>
            <FeaturedCard
                title={item.title}
                location={item.location}
                rating={item.rating}
                badge={item.badge}
                price={item.price}
                date={item.date}
                image={item.image}
                unit="mo"
                onPress={() => { }}
            />
        </View>
    )

    const renderFavoriteItem = ({ item }: { item: typeof FAVORITES[0] }) => (
        <View className="mr-3" style={{ width: 162 }}>
            <FeaturedCard
                title={item.title}
                location={item.location}
                rating={item.rating}
                badge={item.badge}
                price={item.price}
                date={item.date}
                image={item.image}
                unit="mo"
                onPress={() => { }}
            />
        </View>
    )

    return (
        <TabPageLayout>
            <ScrollView
                className="flex-1"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 140 }}
            >
                {/* Premium Profile Header */}
                <View
                    style={{
                        paddingTop: 20,
                        paddingBottom: 24,
                        paddingHorizontal: 20,
                        backgroundColor: '#F0F9FF',
                        borderBottomLeftRadius: 32,
                        borderBottomRightRadius: 32,
                        borderWidth: 1,
                        borderColor: '#E0F2FE',
                    }}
                >
                    {/* Welcome Text */}
                    <Text className="text-gray-600 text-sm font-medium mb-2">
                        Welcome back,
                    </Text>

                    {/* Profile Section */}
                    <View className="flex-row items-center mb-5">
                        {/* Avatar with Premium Border */}
                        <View
                            style={{
                                padding: 3,
                                borderRadius: 45,
                                backgroundColor: BRAND_COLOR,
                                marginRight: 16,
                            }}
                        >
                            <View
                                className="rounded-full items-center justify-center"
                                style={{
                                    width: 80,
                                    height: 80,
                                    backgroundColor: '#ffffff',
                                    shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 4 },
                                    shadowOpacity: 0.1,
                                    shadowRadius: 8,
                                    elevation: 5,
                                }}
                            >
                                <Ionicons name="person" size={42} color={BRAND_COLOR} />
                            </View>
                        </View>

                        {/* User Info */}
                        <View className="flex-1">
                            <Text className="text-gray-900 text-2xl font-bold mb-1">
                                {CUSTOMER_DATA.name}
                            </Text>
                            <View className="flex-row items-center mb-2">
                                <Ionicons name="mail-outline" size={14} color="#6B7280" />
                                <Text className="text-gray-600 text-sm ml-1.5">
                                    {CUSTOMER_DATA.email}
                                </Text>
                            </View>
                            <View
                                className="flex-row items-center px-3 py-1.5 rounded-full self-start"
                                style={{
                                    backgroundColor: '#D1FAE5',
                                }}
                            >
                                <Ionicons name="checkmark-circle" size={14} color="#10B981" />
                                <Text className="text-green-700 text-xs font-semibold ml-1.5">
                                    Verified Member
                                </Text>
                                <Text className="text-gray-500 text-xs mx-1.5">•</Text>
                                <Text className="text-gray-600 text-xs">
                                    Since {CUSTOMER_DATA.memberSince}
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Mini Stats in Header */}
                    <View className="flex-row gap-2">
                        <View
                            className="flex-1 rounded-2xl p-3"
                            style={{
                                backgroundColor: '#ffffff',
                                borderWidth: 1,
                                borderColor: '#E0F2FE',
                            }}
                        >
                            <Text className="text-gray-500 text-xs font-medium mb-1">
                                Bookings
                            </Text>
                            <Text className="text-gray-900 text-xl font-bold">
                                {STATS.totalBookings}
                            </Text>
                        </View>
                        <View
                            className="flex-1 rounded-2xl p-3"
                            style={{
                                backgroundColor: '#ffffff',
                                borderWidth: 1,
                                borderColor: '#E0F2FE',
                            }}
                        >
                            <Text className="text-gray-500 text-xs font-medium mb-1">
                                Favorites
                            </Text>
                            <Text className="text-gray-900 text-xl font-bold">
                                {STATS.favorites}
                            </Text>
                        </View>
                        <View
                            className="flex-1 rounded-2xl p-3"
                            style={{
                                backgroundColor: '#ffffff',
                                borderWidth: 1,
                                borderColor: '#E0F2FE',
                            }}
                        >
                            <Text className="text-gray-500 text-xs font-medium mb-1">
                                Reviews
                            </Text>
                            <Text className="text-gray-900 text-xl font-bold">
                                {STATS.reviews}
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Quick Actions */}
                <View className="px-5 py-6 bg-white">
                    <Text className="text-lg font-bold text-gray-900 mb-4">
                        Quick Actions
                    </Text>
                    <View className="flex-row justify-between items-center">
                        <QuickActionButton
                            icon="search"
                            label="Browse"
                            color={BRAND_COLOR}
                            onPress={() => { }}
                        />
                        <QuickActionButton
                            icon="heart"
                            label="Favorites"
                            color="#EF4444"
                            onPress={() => { }}
                        />
                        <QuickActionButton
                            icon="notifications"
                            label="Notifications"
                            color="#F59E0B"
                            onPress={() => { }}
                        />
                        <QuickActionButton
                            icon="settings"
                            label="Settings"
                            color="#6B7280"
                            onPress={() => { }}
                        />
                    </View>
                </View>

                {/* Active Bookings */}
                <View className="py-6 bg-gray-50">
                    <View className="flex-row justify-between items-center px-5 mb-4">
                        <Text className="text-lg font-bold text-gray-900">
                            Active Bookings
                        </Text>
                        <Text className="text-sm font-medium" style={{ color: BRAND_COLOR }}>
                            View All
                        </Text>
                    </View>
                    <FlatList
                        data={ACTIVE_BOOKINGS}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingHorizontal: 20 }}
                        keyExtractor={(item) => item.id}
                        renderItem={renderBookingItem}
                        ListEmptyComponent={
                            <View className="items-center justify-center py-10 px-20">
                                <Ionicons name="calendar-outline" size={48} color="#D1D5DB" />
                                <Text className="text-gray-400 text-sm mt-3 text-center">
                                    No active bookings yet
                                </Text>
                            </View>
                        }
                    />
                </View>

                {/* Favorites */}
                <View className="py-6 bg-white">
                    <View className="flex-row justify-between items-center px-5 mb-4">
                        <Text className="text-lg font-bold text-gray-900">
                            Your Favorites
                        </Text>
                        <Text className="text-sm font-medium" style={{ color: BRAND_COLOR }}>
                            View All
                        </Text>
                    </View>
                    <FlatList
                        data={FAVORITES}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingHorizontal: 20 }}
                        keyExtractor={(item) => item.id}
                        renderItem={renderFavoriteItem}
                        ListEmptyComponent={
                            <View className="items-center justify-center py-10 px-20">
                                <Ionicons name="heart-outline" size={48} color="#D1D5DB" />
                                <Text className="text-gray-400 text-sm mt-3 text-center">
                                    No favorites yet
                                </Text>
                            </View>
                        }
                    />
                </View>

                {/* Recent Searches */}
                <View className="px-5 py-6 bg-gray-50">
                    <Text className="text-lg font-bold text-gray-900 mb-4">
                        Recent Searches
                    </Text>
                    {RECENT_SEARCHES.map((search) => (
                        <DashboardCard
                            key={search.id}
                            icon="search"
                            title={search.query}
                            subtitle={`${search.category} • ${search.time}`}
                            badgeColor={BRAND_COLOR}
                            onPress={() => { }}
                        />
                    )).reduce((acc, card, index) => {
                        if (index > 0) acc.push(<View key={`spacer-${index}`} className="h-3" />)
                        acc.push(card)
                        return acc
                    }, [] as React.ReactNode[])}
                </View>
            </ScrollView>
        </TabPageLayout>
    )
}

export default CustomerDashboard
