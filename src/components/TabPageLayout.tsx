import React, { ReactNode, useState } from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Drawer from './Drawer'
import Header from './Header'

interface TabPageLayoutProps {
    children: ReactNode
}

const TabPageLayout = ({ children }: TabPageLayoutProps) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    return (
        <View className="flex-1 bg-gray-50">
            <Header onMenuPress={() => setIsDrawerOpen(true)} />
            <SafeAreaView className="flex-1 pb-24" edges={['left', 'right']}>
                {children}
            </SafeAreaView>
            <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
        </View>
    )
}

export default TabPageLayout
