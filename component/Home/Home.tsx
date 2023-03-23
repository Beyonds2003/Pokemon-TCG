import { StyleSheet, Text, TextInput, View, FlatList, TouchableOpacity, Modal } from 'react-native'
import React from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import Card from './Card'
import Header from './Header'
import Basket from '../../icons/Basket'
import Cross from '../../icons/Cross'
import { LinearGradient } from 'expo-linear-gradient'
import CardBeforePurches from './CardBeforePurches'
import PaymentSuccess from '../../icons/PaymentSuccess'

export type pokemonDataType = {
  id: string,
  name: string,
  rarity: string,
  price: number,
  image: string,
  left: number
}

const Home = () => {

  const [typeOpen, setTypeOpen] = React.useState(false);
  const [typeValue, setTypeValue] = React.useState(null);
  const [type, setType] = React.useState([
    { label: "Colorless", value: "Colorless" },
    { label: "Darkness", value: "Darkness" },
    { label: "Dragon", value: "Dragon" },
    { label: "Fairy", value: "Fairy" },
    { label: "Fighting", value: "Fighting" },
    { label: "Fire", value: "Fire" },
    { label: "Grass", value: "Grass" },
    { label: "Lightning", value: "Lightning" },
    { label: "Metal", value: "Metal" },
    { label: "Psychic", value: "Psychic" },
    { label: "Water", value: "Water" },
  ]);

  const [rarityOpen, setRarityOpen] = React.useState(false);
  const [rarityValue, setRarityValue] = React.useState(null);
  const [rarity, setRarity] = React.useState([
    { label: "Colorless", value: "Colorless" },
    { label: "Darkness", value: "Darkness" },
    { label: "Dragon", value: "Dragon" },
    { label: "Fairy", value: "Fairy" },
    { label: "Fighting", value: "Fighting" },
    { label: "Fire", value: "Fire" },
    { label: "Grass", value: "Grass" },
    { label: "Lightning", value: "Lightning" },
    { label: "Metal", value: "Metal" },
    { label: "Psychic", value: "Psychic" },
    { label: "Water", value: "Water" },
  ]);

  const [setOpen, setSetOpen] = React.useState(false);
  const [setValue, setSetValue] = React.useState(null);
  const [set, setSet] = React.useState([
    { label: "Colorless", value: "Colorless" },
    { label: "Darkness", value: "Darkness" },
    { label: "Dragon", value: "Dragon" },
    { label: "Fairy", value: "Fairy" },
    { label: "Fighting", value: "Fighting" },
    { label: "Fire", value: "Fire" },
    { label: "Grass", value: "Grass" },
    { label: "Lightning", value: "Lightning" },
    { label: "Metal", value: "Metal" },
    { label: "Psychic", value: "Psychic" },
    { label: "Water", value: "Water" },
  ]);

  const [pokemonData, setPokemonData] = React.useState<pokemonDataType[]>([])
  const [selectedCard, setSelectedCard] = React.useState({})
  const [openBasket, setOpenBasket] = React.useState<boolean>(false)
  const [openPaynow, setOpenPaynow] = React.useState<boolean>(false)

  React.useEffect(() => {
    const fetchPokemonData = async () => {
      const res = await fetch('https://api.pokemontcg.io/v2/cards?limit=12', {
        method: 'GET',
        headers: {
          'X-API-KEY': 'e9cf867f-a0f7-4cd3-bce2-978f87db7cb7',
          'Content-Type': 'application/json'
        }
      })
      const {data} = await res.json()
      const filterdata = data.map((data: any) => {
        return {
          id: data.id,
          name: data.name,
          rarity: data.rarity,
          price: data.cardmarket?.prices?.averageSellPrice,
          image: data.images.small,
          left: data.number
        }
      })
      setPokemonData(filterdata)
    }
    fetchPokemonData()
  }, [])

  let selectedCardLength = Object.keys(selectedCard).length

  return (
    <View className='relative flex-1'>
      <Header />
          <FlatList
           data={pokemonData.slice(0, 13)}
           renderItem={({item}) => (
            <Card name={item.name} id={item.id} key={item.id} rarity={item.rarity} 
            image={item.image} price={item.price} left={item.left} selectedCard={selectedCard} 
            setSelectedCard={setSelectedCard} />
           )}
           ListHeaderComponent={
            <View className='mt-10 px-4'>
            <TextInput placeholder='Name...' className='bg-white py-[12px] rounded-full text-center text-base' cursorColor={'white'} placeholderTextColor={'#BCBBBB'} />
            <View className='flex flex-row justify-between mt-6 z-50'>
              <View className='w-[100px] z-50 h-20'>
                  <DropDownPicker
                    style={{height: 30, borderColor: 'white', paddingHorizontal: 18, borderRadius: 100, zIndex: 99999}}
                    open={typeOpen}
                    value={typeValue}
                    items={type}
                    setOpen={setTypeOpen}
                    setValue={setTypeValue}
                    setItems={setType}
                    placeholder="Type"
                    zIndex={3000}
                    zIndexInverse={1000}
                  />
                </View>
                <View className='w-[110px]'>
                <DropDownPicker
                  style={{height: 30, borderColor: 'white', paddingHorizontal: 18, borderRadius: 100}}
                  open={rarityOpen}
                  value={rarityValue}
                  items={rarity}
                  setOpen={setRarityOpen}
                  setValue={setRarityValue}
                  setItems={setRarity}
                  placeholder="Rarity"
                  zIndex={3000}
                  zIndexInverse={1000}
                />
              </View>
              <View className='w-[100px]'>
                <DropDownPicker
                  style={{height: 30, borderColor: 'white', paddingHorizontal: 23, borderRadius: 100}}
                  open={setOpen}
                  value={setValue}
                  items={set}
                  setOpen={setSetOpen}
                  setValue={setSetValue}
                  setItems={setValue}
                  placeholder="Set"
                  // placeholderStyle={styles.placeholderStyles}
                  // onOpen={onGenderOpen}
                  // onChangeValue={onChange}
                  zIndex={3000}
                  zIndexInverse={1000}
                />
              </View>
            </View>
            </View>
           }
          />
          <View className='absolute bottom-0 h-[65px]  w-full flex flex-row justify-center'>
            {!openBasket && 
            <LinearGradient   colors={['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.6)', '#ffffff']} className='w-full flex flex-row justify-center'>
              <TouchableOpacity onPress={() => {setOpenBasket(pres => !pres), setOpenPaynow(false)}} activeOpacity={0.8} className='bg-[#298BFD] w-[120px] h-[40px]  flex flex-row justify-center items-center rounded-full'>
                <Basket />
                <Text className='text-white font-semibold ml-2'>View Card</Text>
                {selectedCardLength > 0 &&
                <View className='bg-red-500 rounded-full px-[6px] left-[-6px] top-[-7px] absolute'>
                  <Text className='text-white'>{selectedCardLength}</Text>
                </View>}
              </TouchableOpacity>
            </LinearGradient>}
            {openBasket &&
              <Modal animationType='fade' transparent={true}>
                <View className='bg-white h-[70%] absolute bottom-[50px] w-full px-3 py-4'>
                  {!openPaynow && selectedCardLength > 0 && <View className='h-[98%]'>
                    <FlatList 
                      showsVerticalScrollIndicator={false}
                      data={Object.keys(selectedCard).map(key => [key, selectedCard[key]])}
                      renderItem={({item}) => (
                        <CardBeforePurches key={item[0]} data={item[1]} selectedCard={selectedCard} setSelectedCard={setSelectedCard} />
                      )}
                    />
                    <View className='flex flex-col px-20 pt-6'>
                      <View className='flex flex-row justify-between'>
                        <Text className='text-black font-semibold text-lg'>Total cards</Text>
                        <Text className='text-red-500 font-semibold text-lg ml-20'>{selectedCardLength}</Text>
                      </View>
                      <View className='flex flex-row mt-1 justify-between'>
                        <Text className='text-black font-bold text-xl'>Total price</Text>
                        <Text className='text-red-500 font-semibold text-lg ml-20'>{`$${Object.keys(selectedCard).map(key => selectedCard[key].price).reduce((a, b) => {return a + b}).toFixed(2)}`}</Text>
                      </View>
                      <View className='flex flex-row justify-center mt-3'>
                        <TouchableOpacity onPress={() => setOpenPaynow(true)} className='bg-[#298BFD] flex flex-row justify-center rounded-full px-8 py-1 pb-2'>
                          <Text className='text-white font-semibold text-xl'>Pay now</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>}
                  {openPaynow && 
                  <View className='flex-1 justify-center items-center'>
                    <PaymentSuccess />
                   <Text className='text-gray-900 text-lg font-semibold mt-6'>Payment success!</Text>  
                  </View>}
                </View>
                <View className='absolute bottom-0 h-[65px]  w-full flex flex-row justify-center'>
                <LinearGradient   colors={['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.6)', '#ffffff']} className='w-full flex flex-row justify-center'>
                  <TouchableOpacity 
                    onPress={() => setOpenBasket(pres => !pres)} activeOpacity={0.8} 
                    className='bg-[#FD2929] w-[40px] h-[40px] flex flex-row justify-center items-center rounded-xl'>
                    <Cross />
                  </TouchableOpacity>
                 </LinearGradient>
                </View>
              </Modal>
            }
          </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})