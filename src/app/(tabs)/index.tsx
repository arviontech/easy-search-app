import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import Drawer from '../../components/Drawer'
import Header from '../../components/Header'
import AddServiceSection from '../../components/home/AddServiceSection'
import BannerAdSection from '../../components/home/BannerAdSection'
import CategorySection from '../../components/home/CategorySection'
import FeaturedFoodSection from '../../components/home/FeaturedFoodSection'
import FeaturedHostelsSection from '../../components/home/FeaturedHostelsSection'
import FeaturedHousesSection from '../../components/home/FeaturedHousesSection'
import FeaturedTourismSection from '../../components/home/FeaturedTourismSection'
import HeroSection from '../../components/home/HeroSection'
import PromoAdSection from '../../components/home/PromoAdSection'

const Home = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    return (
        <View className="flex-1 bg-gray-50">
            <Header onMenuPress={() => setIsDrawerOpen(true)} />

            <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 140 }}>
                <HeroSection />
                <CategorySection />
                <AddServiceSection />
                <FeaturedHousesSection />
                <BannerAdSection />
                <FeaturedHostelsSection />
                <PromoAdSection
                    title="Need a Ride?"
                    subtitle="Book a bike or car for your daily commute."
                    ctaText="Book Now"
                    color="#10B981"
                    icon="car-sport-outline"
                />
                <FeaturedFoodSection />
                <FeaturedTourismSection />
            </ScrollView>

            <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
        </View>
    )
}

export default Home