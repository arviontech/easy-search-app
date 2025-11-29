import { Ionicons } from '@expo/vector-icons'
import React, { useEffect, useRef, useState } from 'react'
import { Animated, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { BRAND_COLOR, DRAWER_WIDTH_PERCENTAGE } from '../constants'

interface DrawerProps {
    isOpen: boolean
    onClose: () => void
}

const DRAWER_WIDTH = Dimensions.get('window').width * DRAWER_WIDTH_PERCENTAGE


const Drawer = ({ isOpen, onClose }: DrawerProps) => {
    const insets = useSafeAreaInsets()
    const [isVisible, setIsVisible] = useState(isOpen)
    const slideAnim = useRef(new Animated.Value(DRAWER_WIDTH)).current
    const backdropAnim = useRef(new Animated.Value(0)).current

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true)
        }
        Animated.parallel([
            Animated.spring(slideAnim, {
                toValue: isOpen ? 0 : DRAWER_WIDTH,
                useNativeDriver: true,
                tension: 50,
                friction: 8,
            }),
            Animated.timing(backdropAnim, {
                toValue: isOpen ? 1 : 0,
                duration: 300,
                useNativeDriver: true,
            }),
        ]).start(({ finished }) => {
            if (finished && !isOpen) {
                setIsVisible(false)
            }
        })
    }, [isOpen])

    if (!isVisible) {
        return null
    }

    const menuItems = [
        { icon: 'home-outline', label: 'Home', route: '/' },
        { icon: 'heart-outline', label: 'Favorites', route: '/favorites' },
        { icon: 'notifications-outline', label: 'Notifications', route: '/notifications' },
        { icon: 'settings-outline', label: 'Settings', route: '/settings' },
        { icon: 'help-circle-outline', label: 'Help & Support', route: '/help' },
    ]

    return (
        <>
            {/* Backdrop */}
            <Animated.View
                style={[
                    styles.backdrop,
                    {
                        opacity: backdropAnim,
                        pointerEvents: isOpen ? 'auto' : 'none',
                    },
                ]}
            >
                <TouchableOpacity
                    style={styles.backdropTouchable}
                    onPress={onClose}
                    activeOpacity={1}
                />
            </Animated.View>

            {/* Drawer */}
            <Animated.View
                style={[
                    styles.drawer,
                    {
                        transform: [{ translateX: slideAnim }],
                        paddingTop: insets.top,
                    },
                ]}
            >
                {/* User Section */}
                <View className="p-6 border-b border-gray-100">
                    <View className="flex-row items-center mb-4">
                        <View
                            className="rounded-full items-center justify-center mr-3"
                            style={{
                                width: 50,
                                height: 50,
                                backgroundColor: BRAND_COLOR,
                            }}
                        >
                            <Ionicons name="person" size={28} color="#ffffff" />
                        </View>
                        <View>
                            <Text className="text-lg font-bold text-gray-800">User Name</Text>
                            <Text className="text-sm text-gray-500">user@example.com</Text>
                        </View>
                    </View>
                </View>

                {/* Menu Items */}
                <View className="flex-1 py-4">
                    {menuItems.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            className="flex-row items-center px-6 py-4 active:bg-gray-50"
                            onPress={onClose}
                        >
                            <Ionicons
                                name={item.icon as any}
                                size={24}
                                color="#6B7280"
                                style={{ marginRight: 16 }}
                            />
                            <Text className="text-base text-gray-700 font-medium">
                                {item.label}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Footer */}
                <View className="p-6 border-t border-gray-100">
                    <TouchableOpacity
                        className="flex-row items-center"
                        onPress={onClose}
                    >
                        <Ionicons name="log-out-outline" size={24} color="#EF4444" />
                        <Text className="text-base text-red-500 font-medium ml-4">
                            Logout
                        </Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
        </>
    )
}

const styles = StyleSheet.create({
    backdrop: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 999,
    },
    backdropTouchable: {
        flex: 1,
    },
    drawer: {
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        width: DRAWER_WIDTH,
        backgroundColor: '#ffffff',
        zIndex: 1000,
        shadowColor: '#000',
        shadowOffset: { width: -2, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 16,
        borderTopLeftRadius: 24,
        borderBottomLeftRadius: 24,
    },
})

export default Drawer
