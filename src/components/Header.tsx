import { Ionicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { BRAND_COLOR, SHADOW_MD } from '../constants'

interface HeaderProps {
    onMenuPress: () => void
    onProfilePress?: () => void
}

const Header = ({ onMenuPress, onProfilePress }: HeaderProps) => {
    const insets = useSafeAreaInsets()

    return (
        <View
            className="bg-white border-b border-gray-100 px-5"
            style={{
                paddingTop: insets.top + 12,
                paddingBottom: 12,
            }}
        >
            <StatusBar style="dark" />
            <View className="flex-row items-center justify-between">
                {/* App Logo */}
                <Image
                    source={require('../assets/images/logo.png')}
                    style={{ width: 100, height: 50, marginLeft: -10 }}
                    resizeMode="cover"
                />

                {/* Right Section - Notification, Profile and Menu */}
                <View className="flex-row items-center gap-3">
                    {/* Notification Button */}
                    <TouchableOpacity style={styles.headerButton}>
                        <Ionicons name="notifications-outline" size={22} color="#374151" />
                        {/* Notification Badge */}
                        <View style={styles.notificationBadge} />
                    </TouchableOpacity>

                    {/* Profile Button - Navigate to Dashboard */}
                    <TouchableOpacity
                        style={styles.headerButton}
                        onPress={onProfilePress}
                    >
                        <View style={styles.profileCircle}>
                            <Ionicons name="person" size={16} color="#ffffff" />
                        </View>
                    </TouchableOpacity>

                    {/* Menu Button */}
                    <TouchableOpacity onPress={onMenuPress} style={styles.headerButton}>
                        <Ionicons name="menu" size={22} color="#374151" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        borderRadius: 14,
        width: 42,
        height: 42,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.6)',
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOW_MD,
    },
    notificationBadge: {
        position: 'absolute',
        top: 10,
        right: 10,
        width: 8,
        height: 8,
        backgroundColor: '#EF4444',
        borderRadius: 4,
        borderWidth: 1.5,
        borderColor: '#ffffff',
    },
    profileCircle: {
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: BRAND_COLOR,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Header

