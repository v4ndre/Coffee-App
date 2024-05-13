import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const Coffee = () => {

  return (
    <ScrollView>
      {/* all */}
      <View className=''>

        {/* head */}
        <View className='w-80 h-80 bg-Fundo'>
          {/* Nav */}
          <View className='h-10 flex flex-row align-center items-center pl-2 pt-3 pr-2 pb-3'>
            <View className='w-8'>
              <img src='https://s3-alpha-sig.figma.com/img/00ab/09c8/f1fe4527919a4d04eb6a34bb65a26ef2?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HPL3CRauUptJ9TNqdDG0jFXFscyixNOvYqy5ahg7TWs-lwB7HNkQP4nf6I4FnLS97rb1idG7Lt9nL5P8l9d2Pq0Up0NQPoQGHY6bmf9VMW2O5OZOuwWqBjUF6ssW63mMSWafImiHgQ1nfg0Q0qaglkOxC1TN3GxcZmyhRVn63Aqp68DXlyyQt781F7don1-w2yJy7R94gKfuRuGYYFH9J9Fi3CDPc1nRYdEO-zuL-O6EJb70lygGYELVyT5V5xh4qQJleThfJDMtpOkX~2uITteuwLOyfCY3oH-ZHVAq05DoWDiamYKwPCWgGg2X5EWZEdSdjqnLa3n-Qa1yTD8X1A__'></img>
            </View>
            <View className='w-full pr-16'>
              <Text className='text-center font-semibold text-lg'>
                Macchiato
              </Text>
            </View>
          </View>
          {/* Img */}
          <View className='flex items-center align-center my-12'>
            <View className='w-32'>
              <img src='https://s3-alpha-sig.figma.com/img/ee90/2815/78acbfa051997d2a3c16b2b15fe7032e?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a7v5dw9AeqZ2cpwVclN9w33FJLH5W8ruVuYNAmaZFJ9seAla2RRYaUiY09nuhcGEM0qChgv1Y2xC9t7-ybkfOrkHdb1L7hdTkVsg6cCH334IzB9qZk6YspddROjxTIyNEkFukbG-Fe3bHMIAUpgwTKcNwlWPeSmD7oo7pOLtEMYjW~o6v3vhJZFgv6cnzBhTBgplGKECd7Hlfc5s0JTMehGYYaPf~rKcApQgC~WQaXz9w~a17wVwguroIaGB5j8xEFObd2vHpg-1dHoYjcNk9TIX0jRee9~hWSqvy3NXUgkOPDF11fkpgdqyVkeGsFOB6E3vceudvh75dGLaAxeohg__'></img>
            </View>
          </View>
          
        </View>

        {/* Title */}
        <View className='flex- flex-col items-end p-3 mb-6'>
          <Text className='font-semibold text-lg '>
            Macchiato
          </Text>
          <Text className=' font-bold text-xl text-bege tracking-wider'>
            R$ 15,59
          </Text>
        </View>

        {/* Last */}
        <View>
          {/* Tamanho */}
          <View className='pb-8'>
            <View className='px-3 pt-8 pb-4'>
              <Text className='text-lg'>
                Tamanhos
              </Text>
            </View>
            {/* img */}
            <View className='content-center items-center'>
              <View className='flex flex-row gap-12 items-baseline'>
                <View className='w-10'>
                  <img src='https://s3-alpha-sig.figma.com/img/1b10/9ed8/9f9d825bde402c73e7423fe3f89cf4ff?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F0MDuH99i1EvN1nmzxYVzYWVn4pbXcLmXqIjwQxEbenS6KQmur4fb8Um6ADnK7aykzquhx-66Txb6RR7ERcDNudjwOBGIZDtEhSLOr0r5aGdH9pxwgfcNN23y51-H8EdNjgzoTngWNE3CulszxnCpMrWjvUOi25Sq835n-32DywTEtmMl8-Hd1UnhXew7prwVvBZb6Mbt3vvVeLpDVBXH2BSUr~sqk-bR6Wse7BiaJC0YHhRERU8MLt10bhZViFzOZ9pbBmpsN758f4wdqXws0FJhhw~Jw4p7cfUmt7mrLdr26w02~R56P8R0QaNpt97EkjpVuwccDqe-lg4eY4eVQ__'></img>
                </View>
                {/*  */}
                <View className='w-10'>
                  <img src='https://s3-alpha-sig.figma.com/img/f7fb/9d96/d92035fe233d47e7bf845358c7259ccf?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N7AdAxvfi5VY2RQ78KzUvBQw6HjxHCwDBQv5r8rDrw8Au8iZJBi0JrWJA-SEfIV33t0EAWuqvnHO3a1OIz4O7MVp1049UPmKtB4pxlapyh5mxI9OSPvN4b5AFRD3ygZuU364uHLg4DPzVuQ6W52tXnLPBvR6NI-~SxStsONzgv0VNkE45JDDc~Kt2WXZVnZDRE3ZEFswAoHETfoqPMWB9-Wwlgr-V~Swm5tJ8moyY8z-PSQY3wqcD4dFQFzBV9bSXQBqlEW1MOSJ49Z5iPoGeFCavs5RbgHuChXM6u3L5jb7eUTYr6Um-1i7Kb5OkKxXauIBK1JLj4mC245nTeilMg__'></img>
                </View>
                {/*  */}
                <View className='w-10'>
                  <img src='https://s3-alpha-sig.figma.com/img/1b10/9ed8/9f9d825bde402c73e7423fe3f89cf4ff?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F0MDuH99i1EvN1nmzxYVzYWVn4pbXcLmXqIjwQxEbenS6KQmur4fb8Um6ADnK7aykzquhx-66Txb6RR7ERcDNudjwOBGIZDtEhSLOr0r5aGdH9pxwgfcNN23y51-H8EdNjgzoTngWNE3CulszxnCpMrWjvUOi25Sq835n-32DywTEtmMl8-Hd1UnhXew7prwVvBZb6Mbt3vvVeLpDVBXH2BSUr~sqk-bR6Wse7BiaJC0YHhRERU8MLt10bhZViFzOZ9pbBmpsN758f4wdqXws0FJhhw~Jw4p7cfUmt7mrLdr26w02~R56P8R0QaNpt97EkjpVuwccDqe-lg4eY4eVQ__'></img>
                </View>
              </View>
            </View>
            
          </View>

          {/* btn */}
          <View className='p-3 items-center'>
            <TouchableOpacity className='px-6 py-2 w-52 bg-bege items-center rounded-3xl'>
              <Text className='text-white text-lg'>Comprar</Text>
            </TouchableOpacity>
          </View>
        </View>


      </View>
      
    </ScrollView>
  );
}

export default Coffee;