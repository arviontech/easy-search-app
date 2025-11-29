import React from 'react'
import { Text, View } from 'react-native'
import TabPageLayout from '../../components/TabPageLayout'

const Promo = () => {
    return (
        <TabPageLayout>
            <View className="flex-1 items-center justify-center">
                <Text className="text-2xl font-bold text-gray-800">Promo Screen</Text>
                <Text className="text-gray-500 mt-2">Check out our offers</Text>
            </View>
        </TabPageLayout>
    )
}

export default Promo