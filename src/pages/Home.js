import React from "react";
import { Text, View } from 'react-native';

const Home = () => {
    return (
        <ScrollView className='bg-Fundo'>
      <View className=" flex flex-col bg-Fundo px-3 gap-10">

        <View className="pt-5 flex ">
          <Text className="text-xl text-Bege font-semibold">Escolha seu Café</Text>
        </View>
 
        <View className="h-fit flex flex-row w-full space-x-32 py-3">
          <View className="flex flex-row gap-5 items-center">
            <View className='w-12'>
              <img className='' src='https://s3-alpha-sig.figma.com/img/f026/2b51/6f19438d33fbbab38825dc0e816e5b30?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YVS-SW6~nDalLw9qIcgO8aJ6jl9ROp99kwVhMmBKk2qc8YcjU1mOUK7fWT2ypQIciyFABZm7XqfHn3XvGajmZE8SkgyQF6Z0t-IL0~V~bdWnl4bj6zjb5ZuX5BdToY6QddwTOqQnehIfHhxBZgzmTeuF3-W4jsZzScHZqhs2Ph99SmymUG2~DvUArJpsCilTS~UxAXW7ttvu9CrKSPFXExjiCx5z2j3j0UxvEKnd2yyt2~fXnJXGayKwq1j1AgPO-JkMXPUKGcgzzlSVWadJIWuVrW8NdGqcoTSOukhMxL1qI9e3Lhpz-F1iotpbBNqbVLHRBMPIcaTLcXoSXy2dtw__'></img>
            </View>
            
            <Text className='text-lg'>Espresso</Text>
          </View>

          <View className=''>
            <TouchableOpacity className='w-12 rotate-180 p-3'>
              <img src='https://s3-alpha-sig.figma.com/img/00ab/09c8/f1fe4527919a4d04eb6a34bb65a26ef2?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WdyNnB4VT5qWNriLJkDRbU98KFsmPJNk-NuIJqPmf4HBfEk6bhiitn2AVBvCbZYp9B-RNkLEXwGnV3W~KONf8F-ThkH2nqVCaS3NqPMS69lnYhGOzE8CWQggNb-JYJ6w58xIANTVskF7~4iqVMcx0qi~KeF19z6Sm51w-3Z0hI7NZO5N4oZUP8jS6V~0QBFHBS9uKr~nqhg3Wi1xwY2hisZ~Si4lwzKbcMypKQsPi0LM-a3phS0p0FPY35RbbvLq74ncwqxNuPaYKL1R55H-yWQLnTrQkUkR6CuXHfuSf8rkwq9rvBEwa5YyZ0QmSTgzk5fJ1TN9rXX8ahNvpvvxDA__'></img>
            </TouchableOpacity>
          </View>
        </View>

        {/*  */}

        <View className="h-fit flex flex-row w-full space-x-32 py-3">
          <View className="flex flex-row gap-5 items-center">
            <View className='w-12'>
              <img className='' src='https://s3-alpha-sig.figma.com/img/7322/9ba8/abb2188246833121fe337ef5a1ad3ceb?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BdhUVc9vtR4rFDecCZKInZQvSFd4h9uqEAUhVs3Lz8wV3vOay0LOOB6lzLyxyvc0wZhyMPsZF561~o9fbVIqB~WGNkTd8~p1VR4vPIrM-K6TSDS6eVwuOhDu6WHn-8fU~aUyJxny62rOM6aF0US1FWZCVTAcpI5Sp~trot9Dv4elnhav-P4Mm9kZJc-0ui6m4vug-cRk5bZ-m4svDRPZDC9etgVzes0C5peWzSgATVvCQnj39FjDbhVF5SeNVXgNzsTpl8XHm2qDTYFg4js5-nyOCQjk4FKO4UqRnYGtrB6jTPPiHHBUvMKOrM628pu2USEDku-F95O1piX9GfrtnQ__'></img>
            </View>
            
            <Text className='text-lg'>Espresso</Text>
          </View>

          <View className=''>
            <TouchableOpacity className='w-12 rotate-180 p-3'>
              <img src='https://s3-alpha-sig.figma.com/img/00ab/09c8/f1fe4527919a4d04eb6a34bb65a26ef2?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WdyNnB4VT5qWNriLJkDRbU98KFsmPJNk-NuIJqPmf4HBfEk6bhiitn2AVBvCbZYp9B-RNkLEXwGnV3W~KONf8F-ThkH2nqVCaS3NqPMS69lnYhGOzE8CWQggNb-JYJ6w58xIANTVskF7~4iqVMcx0qi~KeF19z6Sm51w-3Z0hI7NZO5N4oZUP8jS6V~0QBFHBS9uKr~nqhg3Wi1xwY2hisZ~Si4lwzKbcMypKQsPi0LM-a3phS0p0FPY35RbbvLq74ncwqxNuPaYKL1R55H-yWQLnTrQkUkR6CuXHfuSf8rkwq9rvBEwa5YyZ0QmSTgzk5fJ1TN9rXX8ahNvpvvxDA__'></img>
            </TouchableOpacity>
          </View>
        </View>

        {/*  */}

        <View className="h-fit flex flex-row w-full space-x-32 py-3">
          <View className="flex flex-row gap-5 items-center">
            <View className='w-12'>
              <img className='' src='https://s3-alpha-sig.figma.com/img/f026/2b51/6f19438d33fbbab38825dc0e816e5b30?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YVS-SW6~nDalLw9qIcgO8aJ6jl9ROp99kwVhMmBKk2qc8YcjU1mOUK7fWT2ypQIciyFABZm7XqfHn3XvGajmZE8SkgyQF6Z0t-IL0~V~bdWnl4bj6zjb5ZuX5BdToY6QddwTOqQnehIfHhxBZgzmTeuF3-W4jsZzScHZqhs2Ph99SmymUG2~DvUArJpsCilTS~UxAXW7ttvu9CrKSPFXExjiCx5z2j3j0UxvEKnd2yyt2~fXnJXGayKwq1j1AgPO-JkMXPUKGcgzzlSVWadJIWuVrW8NdGqcoTSOukhMxL1qI9e3Lhpz-F1iotpbBNqbVLHRBMPIcaTLcXoSXy2dtw__'></img>
            </View>
            
            <Text className='text-lg'>Espresso</Text>
          </View>

          <View className=''>
            <TouchableOpacity className='w-12 rotate-180 p-3'>
              <img src='https://s3-alpha-sig.figma.com/img/00ab/09c8/f1fe4527919a4d04eb6a34bb65a26ef2?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WdyNnB4VT5qWNriLJkDRbU98KFsmPJNk-NuIJqPmf4HBfEk6bhiitn2AVBvCbZYp9B-RNkLEXwGnV3W~KONf8F-ThkH2nqVCaS3NqPMS69lnYhGOzE8CWQggNb-JYJ6w58xIANTVskF7~4iqVMcx0qi~KeF19z6Sm51w-3Z0hI7NZO5N4oZUP8jS6V~0QBFHBS9uKr~nqhg3Wi1xwY2hisZ~Si4lwzKbcMypKQsPi0LM-a3phS0p0FPY35RbbvLq74ncwqxNuPaYKL1R55H-yWQLnTrQkUkR6CuXHfuSf8rkwq9rvBEwa5YyZ0QmSTgzk5fJ1TN9rXX8ahNvpvvxDA__'></img>
            </TouchableOpacity>
          </View>
        </View>

        {/*  */}

        <View className="h-fit flex flex-row w-full space-x-32 py-3">
          <View className="flex flex-row gap-5 items-center">
            <View className='w-12'>
              <img className='' src='https://s3-alpha-sig.figma.com/img/7322/9ba8/abb2188246833121fe337ef5a1ad3ceb?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BdhUVc9vtR4rFDecCZKInZQvSFd4h9uqEAUhVs3Lz8wV3vOay0LOOB6lzLyxyvc0wZhyMPsZF561~o9fbVIqB~WGNkTd8~p1VR4vPIrM-K6TSDS6eVwuOhDu6WHn-8fU~aUyJxny62rOM6aF0US1FWZCVTAcpI5Sp~trot9Dv4elnhav-P4Mm9kZJc-0ui6m4vug-cRk5bZ-m4svDRPZDC9etgVzes0C5peWzSgATVvCQnj39FjDbhVF5SeNVXgNzsTpl8XHm2qDTYFg4js5-nyOCQjk4FKO4UqRnYGtrB6jTPPiHHBUvMKOrM628pu2USEDku-F95O1piX9GfrtnQ__'></img>
            </View>
            
            <Text className='text-lg'>Espresso</Text>
          </View>

          <View className=''>
            <TouchableOpacity className='w-12 rotate-180 p-3'>
              <img src='https://s3-alpha-sig.figma.com/img/00ab/09c8/f1fe4527919a4d04eb6a34bb65a26ef2?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WdyNnB4VT5qWNriLJkDRbU98KFsmPJNk-NuIJqPmf4HBfEk6bhiitn2AVBvCbZYp9B-RNkLEXwGnV3W~KONf8F-ThkH2nqVCaS3NqPMS69lnYhGOzE8CWQggNb-JYJ6w58xIANTVskF7~4iqVMcx0qi~KeF19z6Sm51w-3Z0hI7NZO5N4oZUP8jS6V~0QBFHBS9uKr~nqhg3Wi1xwY2hisZ~Si4lwzKbcMypKQsPi0LM-a3phS0p0FPY35RbbvLq74ncwqxNuPaYKL1R55H-yWQLnTrQkUkR6CuXHfuSf8rkwq9rvBEwa5YyZ0QmSTgzk5fJ1TN9rXX8ahNvpvvxDA__'></img>
            </TouchableOpacity>
          </View>
        </View>

        {/*  */}

        <View className="h-fit flex flex-row w-full space-x-32 py-3">
          <View className="flex flex-row gap-5 items-center">
            <View className='w-12'>
              <img className='' src='https://s3-alpha-sig.figma.com/img/f026/2b51/6f19438d33fbbab38825dc0e816e5b30?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YVS-SW6~nDalLw9qIcgO8aJ6jl9ROp99kwVhMmBKk2qc8YcjU1mOUK7fWT2ypQIciyFABZm7XqfHn3XvGajmZE8SkgyQF6Z0t-IL0~V~bdWnl4bj6zjb5ZuX5BdToY6QddwTOqQnehIfHhxBZgzmTeuF3-W4jsZzScHZqhs2Ph99SmymUG2~DvUArJpsCilTS~UxAXW7ttvu9CrKSPFXExjiCx5z2j3j0UxvEKnd2yyt2~fXnJXGayKwq1j1AgPO-JkMXPUKGcgzzlSVWadJIWuVrW8NdGqcoTSOukhMxL1qI9e3Lhpz-F1iotpbBNqbVLHRBMPIcaTLcXoSXy2dtw__'></img>
            </View>
            
            <Text className='text-lg'>Espresso</Text>
          </View>

          <View className=''>
            <TouchableOpacity className='w-12 rotate-180 p-3'>
              <img src='https://s3-alpha-sig.figma.com/img/00ab/09c8/f1fe4527919a4d04eb6a34bb65a26ef2?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WdyNnB4VT5qWNriLJkDRbU98KFsmPJNk-NuIJqPmf4HBfEk6bhiitn2AVBvCbZYp9B-RNkLEXwGnV3W~KONf8F-ThkH2nqVCaS3NqPMS69lnYhGOzE8CWQggNb-JYJ6w58xIANTVskF7~4iqVMcx0qi~KeF19z6Sm51w-3Z0hI7NZO5N4oZUP8jS6V~0QBFHBS9uKr~nqhg3Wi1xwY2hisZ~Si4lwzKbcMypKQsPi0LM-a3phS0p0FPY35RbbvLq74ncwqxNuPaYKL1R55H-yWQLnTrQkUkR6CuXHfuSf8rkwq9rvBEwa5YyZ0QmSTgzk5fJ1TN9rXX8ahNvpvvxDA__'></img>
            </TouchableOpacity>
          </View>
        </View>

        {/*  */}

      </View>
    </ScrollView>
    );
};

export default Home;