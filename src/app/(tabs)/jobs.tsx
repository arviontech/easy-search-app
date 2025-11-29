import React from 'react'
import { Text, View } from 'react-native'
import TabPageLayout from '../../components/TabPageLayout'

const Jobs = () => {
    return (
        <TabPageLayout>
            <View className="flex-1 items-center justify-center">
                <Text className="text-2xl font-bold text-gray-800">Jobs Screen</Text>
                <Text className="text-gray-500 mt-2">Find your next opportunity</Text>
            </View>
        </TabPageLayout>
    )
}

export default Jobs