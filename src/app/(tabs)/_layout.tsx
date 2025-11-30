import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const BRAND_COLOR = '#0092b8'

const TabLayout = () => {
    const insets = useSafeAreaInsets()

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#F3F4F6',
                    borderWidth: 1.5,
                    borderColor: '#D1D5DB',
                    borderBottomWidth: 0, // No border needed at the very bottom
                    paddingTop: 20,
                    paddingBottom: Math.max(insets.bottom, 10) + 20,
                    height: 90 + Math.max(insets.bottom, 10),
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: -8 },
                    shadowOpacity: 0.15,
                    shadowRadius: 20,
                    elevation: 20,
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                },
                tabBarShowLabel: false,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View className="items-center justify-center">
                            <View
                                className="items-center justify-center rounded-full mb-1"
                                style={{
                                    backgroundColor: focused ? BRAND_COLOR : 'transparent',
                                    width: 48,
                                    height: 48,
                                    shadowColor: focused ? BRAND_COLOR : 'transparent',
                                    shadowOffset: { width: 0, height: 4 },
                                    shadowOpacity: 0.4,
                                    shadowRadius: 10,
                                    elevation: focused ? 8 : 0,
                                    borderWidth: focused ? 1.5 : 0,
                                    borderColor: 'rgba(255, 255, 255, 0.3)',
                                }}
                            >
                                <Ionicons
                                    name={focused ? "home" : "home-outline"}
                                    size={24}
                                    color={focused ? '#ffffff' : '#9CA3AF'}
                                />
                            </View>
                            <Text
                                className="text-[10px] font-medium"
                                style={{ color: focused ? BRAND_COLOR : '#9CA3AF' }}
                            >
                                Home
                            </Text>
                        </View>
                    ),
                }}
            />

            <Tabs.Screen
                name="house"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View className="items-center justify-center">
                            <View
                                className="items-center justify-center rounded-full mb-1"
                                style={{
                                    backgroundColor: focused ? BRAND_COLOR : 'transparent',
                                    width: 48,
                                    height: 48,
                                    shadowColor: focused ? BRAND_COLOR : 'transparent',
                                    shadowOffset: { width: 0, height: 4 },
                                    shadowOpacity: 0.4,
                                    shadowRadius: 10,
                                    elevation: focused ? 8 : 0,
                                    borderWidth: focused ? 1.5 : 0,
                                    borderColor: 'rgba(255, 255, 255, 0.3)',
                                }}
                            >
                                <MaterialIcons
                                    name="apartment"
                                    size={26}
                                    color={focused ? '#ffffff' : '#9CA3AF'}
                                />
                            </View>
                            <Text
                                className="text-[10px] font-medium"
                                style={{ color: focused ? BRAND_COLOR : '#9CA3AF' }}
                            >
                                House
                            </Text>
                        </View>
                    ),
                }}
            />

            <Tabs.Screen
                name="hostel"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View className="items-center justify-center">
                            <View
                                className="items-center justify-center rounded-full mb-1"
                                style={{
                                    backgroundColor: focused ? BRAND_COLOR : 'transparent',
                                    width: 48,
                                    height: 48,
                                    shadowColor: focused ? BRAND_COLOR : 'transparent',
                                    shadowOffset: { width: 0, height: 4 },
                                    shadowOpacity: 0.4,
                                    shadowRadius: 10,
                                    elevation: focused ? 8 : 0,
                                    borderWidth: focused ? 1.5 : 0,
                                    borderColor: 'rgba(255, 255, 255, 0.3)',
                                }}
                            >
                                <FontAwesome5
                                    name="building"
                                    size={22}
                                    color={focused ? '#ffffff' : '#9CA3AF'}
                                />
                            </View>
                            <Text
                                className="text-[10px] font-medium"
                                style={{ color: focused ? BRAND_COLOR : '#9CA3AF' }}
                            >
                                Hostel
                            </Text>
                        </View>
                    ),
                }}
            />

            <Tabs.Screen
                name="shop"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View className="items-center justify-center">
                            <View
                                className="items-center justify-center rounded-full mb-1"
                                style={{
                                    backgroundColor: focused ? BRAND_COLOR : 'transparent',
                                    width: 48,
                                    height: 48,
                                    shadowColor: focused ? BRAND_COLOR : 'transparent',
                                    shadowOffset: { width: 0, height: 4 },
                                    shadowOpacity: 0.4,
                                    shadowRadius: 10,
                                    elevation: focused ? 8 : 0,
                                    borderWidth: focused ? 1.5 : 0,
                                    borderColor: 'rgba(255, 255, 255, 0.3)',
                                }}
                            >
                                <Ionicons
                                    name={focused ? "cart" : "cart-outline"}
                                    size={24}
                                    color={focused ? '#ffffff' : '#9CA3AF'}
                                />
                            </View>
                            <Text
                                className="text-[10px] font-medium"
                                style={{ color: focused ? BRAND_COLOR : '#9CA3AF' }}
                            >
                                Shop
                            </Text>
                        </View>
                    ),
                }}
            />

            <Tabs.Screen
                name="jobs"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View className="items-center justify-center">
                            <View
                                className="items-center justify-center rounded-full mb-1"
                                style={{
                                    backgroundColor: focused ? BRAND_COLOR : 'transparent',
                                    width: 48,
                                    height: 48,
                                    shadowColor: focused ? BRAND_COLOR : 'transparent',
                                    shadowOffset: { width: 0, height: 4 },
                                    shadowOpacity: 0.4,
                                    shadowRadius: 10,
                                    elevation: focused ? 8 : 0,
                                    borderWidth: focused ? 1.5 : 0,
                                    borderColor: 'rgba(255, 255, 255, 0.3)',
                                }}
                            >
                                <Ionicons
                                    name={focused ? "briefcase" : "briefcase-outline"}
                                    size={24}
                                    color={focused ? '#ffffff' : '#9CA3AF'}
                                />
                            </View>
                            <Text
                                className="text-[10px] font-medium"
                                style={{ color: focused ? BRAND_COLOR : '#9CA3AF' }}
                            >
                                Jobs
                            </Text>
                        </View>
                    ),
                }}
            />

            <Tabs.Screen
                name="customer-dashboard"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ focused }) => (
                        <View className="items-center justify-center">
                            <View
                                className="items-center justify-center rounded-full mb-1"
                                style={{
                                    backgroundColor: focused ? BRAND_COLOR : 'transparent',
                                    width: 48,
                                    height: 48,
                                    shadowColor: focused ? BRAND_COLOR : 'transparent',
                                    shadowOffset: { width: 0, height: 4 },
                                    shadowOpacity: 0.4,
                                    shadowRadius: 10,
                                    elevation: focused ? 8 : 0,
                                    borderWidth: focused ? 1.5 : 0,
                                    borderColor: 'rgba(255, 255, 255, 0.3)',
                                }}
                            >
                                <Ionicons
                                    name={focused ? "person" : "person-outline"}
                                    size={24}
                                    color={focused ? '#ffffff' : '#9CA3AF'}
                                />
                            </View>
                            <Text
                                className="text-[10px] font-medium"
                                style={{ color: focused ? BRAND_COLOR : '#9CA3AF' }}
                            >
                                Profile
                            </Text>
                        </View>
                    ),
                }}
            />

            {/* Host dashboard - hidden from tab bar */}
            <Tabs.Screen
                name="host-dashboard"
                options={{
                    href: null, // Hide from tab bar
                }}
            />
        </Tabs>
    )
}

export default TabLayout