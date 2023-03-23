import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Pokemon2 from '../../icons/Polemon2'
import Pokemon1 from '../../icons/Pokemon1'

const Header = () => {
  return (
    <View className='bg-white h-[97px] pt-1 flex justify-center items-center'>
        <Text className='text-black text-xl font-bold font-poppins' style={{fontFamily: 'poppins'}}>TCG Marketplace</Text>
        <View className='bg-white pb-3 rounded-full flex justify-center items-center mb-[-50px] z-50'>
            <Pokemon2 />
            <Pokemon1 />
        </View>
</View>
  )
}

export default Header

const styles = StyleSheet.create({})