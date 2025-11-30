import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { FlatList, ScrollView, Text, View } from 'react-native'
import QuickActionButton from '../../components/dashboard/QuickActionButton'
import StatsCard from '../../components/dashboard/StatsCard'
import FeaturedCard from '../../components/home/FeaturedCard'
import TabPageLayout from '../../components/TabPageLayout'

const BRAND_COLOR = '#0092b8'

// Mock Data
const HOST_DATA = {
    name: 'Sarah Johnson',
    email: 'sarah.host@example.com',
    verified: true,
    memberSince: 'Aug 2023',
    rating: 4.8,
}

const PERFORMANCE_STATS = {
    totalListings: 15,
    totalBookings: 48,
    monthlyRevenue: '45,500',
    avgRating: 4.8,
}

const ACTIVE_LISTINGS = [
    {
        id: '1',
        title: 'Modern Family Apartment',
        location: 'Kazla, Rajshahi',
        price: '12,000',
        rating: 4.8,
        badge: 'Active',
        date: 'Listed Jan 5',
        image: require('../../assets/images/hero_bg.png'),
    },
    {
        id: '2',
        title: 'Luxury Duplex Villa',
        location: 'Padma R/A, Rajshahi',
        price: '25,000',
        rating: 4.9,
        badge: 'Popular',
        date: 'Listed Dec 20',
        image: require('../../assets/images/hero_bg.png'),
    },
    {
        id: '3',
        title: 'Office Space',
        location: 'Shaheb Bazar, Rajshahi',
        price: '15,000',
        rating: 4.6,
        badge: 'Active',
        date: 'Listed Jan 10',
        image: require('../../assets/images/hero_bg.png'),
    },
]

const BOOKING_REQUESTS = [
    {
        id: '1',
        customerName: 'John Doe',
        property: 'Modern Family Apartment',
        date: 'Jan 15-20, 2024',
        status: 'Pending',
        amount: '60,000',
    },
    {
        id: '2',
        customerName: 'Alice Smith',
        property: 'Luxury Duplex Villa',
        date: 'Jan 22-25, 2024',
        status: 'Confirmed',
        amount: '75,000',
    },
    {
        id: '3',
        customerName: 'Bob Wilson',
        property: 'Office Space',
        date: 'Feb 1-28, 2024',
        status: 'Pending',
        amount: '15,000',
    },
]

const HostDashboard = () => {
    const renderListingItem = ({ item }: { item: typeof ACTIVE_LISTINGS[0] }) => (
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

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Confirmed':
                return '#10B981'
            case 'Pending':
                return '#F59E0B'
            case 'Cancelled':
                return '#EF4444'
            default:
                return '#6B7280'
        }
    }

    return (
        <TabPageLayout>
            <ScrollView
                className="flex-1"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 140 }}
            >
                {/* Host Profile Header */}
                <View className="px-5 pt-4 pb-6 bg-white border-b border-gray-100">
                    <View className="flex-row items-center">
                        <View
                            className="rounded-full items-center justify-center mr-4"
                            style={{
                                width: 70,
                                height: 70,
                                backgroundColor: BRAND_COLOR,
                            }}
                        >
                            <Ionicons name="storefront" size={36} color="#ffffff" />
                        </View>
                        <View className="flex-1">
                            <View className="flex-row items-center">
                                <Text className="text-xl font-bold text-gray-900">
                                    {HOST_DATA.name}
                                </Text>
                                {HOST_DATA.verified && (
                                    <View
                                        className="ml-2 rounded-full items-center justify-center"
                                        style={{
                                            width: 20,
                                            height: 20,
                                            backgroundColor: '#10B981',
                                        }}
                                    >
                                        <Ionicons name="checkmark" size={14} color="#ffffff" />
                                    </View>
                                )}
                            </View>
                            <Text className="text-sm text-gray-500 mt-0.5">
                                {HOST_DATA.email}
                            </Text>
                            <View className="flex-row items-center mt-1.5">
                                <Ionicons name="star" size={12} color="#F59E0B" />
                                <Text className="text-xs text-gray-700 ml-1 font-semibold">
                                    {HOST_DATA.rating}
                                </Text>
                                <Text className="text-xs text-gray-400 mx-1">•</Text>
                                <Ionicons name="calendar-outline" size={12} color="#9CA3AF" />
                                <Text className="text-xs text-gray-400 ml-1">
                                    Host since {HOST_DATA.memberSince}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Performance Stats */}
                <View className="px-5 py-6 bg-gray-50">
                    <Text className="text-lg font-bold text-gray-900 mb-4">
                        Performance Overview
                    </Text>
                    <View className="flex-row gap-3 mb-3">
                        <StatsCard
                            icon="home"
                            value={PERFORMANCE_STATS.totalListings}
                            label="Total Listings"
                            color={BRAND_COLOR}
                        />
                        <StatsCard
                            icon="calendar"
                            value={PERFORMANCE_STATS.totalBookings}
                            label="Bookings"
                            color="#10B981"
                            trend="up"
                            trendValue="+12"
                        />
                    </View>
                    <View className="flex-row gap-3">
                        <StatsCard
                            icon="cash"
                            value={`৳${PERFORMANCE_STATS.monthlyRevenue}`}
                            label="Monthly Revenue"
                            color="#F59E0B"
                            trend="up"
                            trendValue="+8%"
                        />
                        <StatsCard
                            icon="star"
                            value={PERFORMANCE_STATS.avgRating}
                            label="Avg Rating"
                            color="#EF4444"
                        />
                    </View>
                </View>

                {/* Quick Actions */}
                <View className="px-5 py-6 bg-white border-b border-gray-100">
                    <Text className="text-lg font-bold text-gray-900 mb-4">
                        Quick Actions
                    </Text>
                    <View className="flex-row justify-around">
                        <QuickActionButton
                            icon="add-circle"
                            label="Add Listing"
                            color={BRAND_COLOR}
                            onPress={() => { }}
                        />
                        <QuickActionButton
                            icon="calendar"
                            label="Bookings"
                            color="#10B981"
                            onPress={() => { }}
                        />
                        <QuickActionButton
                            icon="stats-chart"
                            label="Analytics"
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

                {/* Active Listings */}
                <View className="py-6 bg-gray-50">
                    <View className="flex-row justify-between items-center px-5 mb-4">
                        <Text className="text-lg font-bold text-gray-900">
                            Your Listings
                        </Text>
                        <Text className="text-sm font-medium" style={{ color: BRAND_COLOR }}>
                            Manage All
                        </Text>
                    </View>
                    <FlatList
                        data={ACTIVE_LISTINGS}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingHorizontal: 20 }}
                        keyExtractor={(item) => item.id}
                        renderItem={renderListingItem}
                        ListEmptyComponent={
                            <View className="items-center justify-center py-10 px-20">
                                <Ionicons name="home-outline" size={48} color="#D1D5DB" />
                                <Text className="text-gray-400 text-sm mt-3 text-center">
                                    No listings yet
                                </Text>
                            </View>
                        }
                    />
                </View>

                {/* Booking Requests */}
                <View className="px-5 py-6 bg-white">
                    <View className="flex-row justify-between items-center mb-4">
                        <Text className="text-lg font-bold text-gray-900">
                            Recent Booking Requests
                        </Text>
                        <Text className="text-sm font-medium" style={{ color: BRAND_COLOR }}>
                            View All
                        </Text>
                    </View>
                    {BOOKING_REQUESTS.map((booking, index) => (
                        <View key={booking.id}>
                            {index > 0 && <View className="h-3" />}
                            <View className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                                <View className="flex-row justify-between items-start mb-2">
                                    <View className="flex-1">
                                        <Text className="text-base font-bold text-gray-900">
                                            {booking.customerName}
                                        </Text>
                                        <Text className="text-sm text-gray-600 mt-0.5">
                                            {booking.property}
                                        </Text>
                                    </View>
                                    <View
                                        className="px-3 py-1 rounded-full"
                                        style={{
                                            backgroundColor: `${getStatusColor(booking.status)}15`,
                                        }}
                                    >
                                        <Text
                                            className="text-xs font-bold"
                                            style={{ color: getStatusColor(booking.status) }}
                                        >
                                            {booking.status}
                                        </Text>
                                    </View>
                                </View>
                                <View className="flex-row items-center mt-2">
                                    <Ionicons name="calendar-outline" size={14} color="#6B7280" />
                                    <Text className="text-xs text-gray-500 ml-1.5">
                                        {booking.date}
                                    </Text>
                                    <Text className="text-xs text-gray-400 mx-2">•</Text>
                                    <Ionicons name="cash-outline" size={14} color="#6B7280" />
                                    <Text className="text-xs font-semibold ml-1.5" style={{ color: BRAND_COLOR }}>
                                        ৳{booking.amount}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </TabPageLayout>
    )
}

export default HostDashboard
