import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const CardBeforePurches = ({selectedCard, setSelectedCard, data}) => {
  return (
    <View className='flex flex-row justify-between mb-3'>
      <View className='flex flex-row gap-3'>
        <View>
            <Image source={{uri: data.image}} className='w-[100px] h-[130px] rounded-xl' />
        </View>
        <View className='flex justify-between'>
            <Text className='text-black font-bold text-xl'>{data.name}</Text>
            <Text className='text-gray-400'>{`$${data.price} per card`}</Text>
            <Text className='text-gray-400 mt-12'><Text className='text-red-500 text-lg font-semibold'>{data.left}</Text> cards left</Text>
        </View>
      </View>
      <View className='flex justify-between items-end'>
        <Text className='text-blue-400 text-xl font-bold'>1</Text>
        <Text className='mt-12'>price</Text>
        <Text className='text-blue-400 text-xl font-bold'>{`$${data.price}`}</Text>
      </View>
    </View>
  )
}

export default CardBeforePurches

const styles = StyleSheet.create({})