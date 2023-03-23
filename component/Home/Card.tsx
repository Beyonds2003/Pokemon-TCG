import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { pokemonDataType } from './Home'

type propsType = {
  id: string,
  name: string,
  rarity: string,
  price: number,
  image: string,
  left: number,
  selectedCard: any,
  setSelectedCard:   React.Dispatch<React.SetStateAction<{}>>
}

const Card = ({name, price, rarity, image, left, selectedCard, setSelectedCard, id}: propsType) => {

  const handleAddToSelected = () => {
    if(selectedCard[id]) {
      let state = {...selectedCard}
      delete state[id]
      setSelectedCard(state)
    } else {
      setSelectedCard(pres => ({
        ...pres, [id]: {name, price, rarity, image, left}
      }))
    }
  }

  return (
    <View className='flex items-center mb-10'>
      <Image source={{uri: image}} className='w-[200px] h-[270px] rounded-xl'  />
      <Text className='text-xl font-bold'>{name}</Text>
      <Text className='text-lg text-blue-400'>{rarity}</Text>
      <View className='flex flex-row justify-between gap-6'>
        <Text className='text-xl text-[#6A6969] font-semibold'>{`$${price}`}</Text>
        <Text className='text-xl text-[#6A6969] font-semibold'>{`${left} left`}</Text>
      </View>
      <TouchableOpacity className={`${selectedCard[id] ? 'bg-black' : 'bg-[#FDCE29]'} p-2 rounded-full px-8 mt-4`} onPress={handleAddToSelected} activeOpacity={0.8}>
        <Text className={`${selectedCard[id] ? 'text-white' : 'text-black'} font-semibold text-xl`}>Select Card</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({})