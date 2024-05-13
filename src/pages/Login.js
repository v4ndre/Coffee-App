import React from "react";
import { Text, View } from 'react-native';

const Login = () => {
    return (
        <ScrollView>
            <View className="h-full flex flex-col">

                <View>
                <img src='https://s3-alpha-sig.figma.com/img/d716/c0cd/5ad78bd61e69987924ba120ea4bba9c5?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iL2tL2KurtkulWfcFKB-G-MN4R8qb9NQoJ~saVXAgMJNZIjB3MW9oFgY6-cQVkugUA-gV~O0FZR1wZcjXPF5cyESnM6Xs2Lpgt6La8ZV9hH8fEEfd7BTwgVjhVodf8PkOkhKotD9leJqOgZG65w1LHQ-4Legs~eTDYn53DQ85iJIVdWNSt2Rm5kWdWBOuzoGzDvhNVccG3FUuArGgaFhfMewSNVax4s~HtoWgXU6T2P4ae3byrJhRYK9nYynl~Zk7SpZOd76gl2UacHHyGAQcYh~vqBgUbfAt0Rt1VcktaFdr0AlM4a9viiGNbJx0aIsxLxRxb4v1EQWfIQVxv1nRg__'></img>
                </View>

                <View className="mt-8 mb-16">
                <Text className="text-2xl text-center">O Melhor <Text className="text-Bege font-bold">Café</Text></Text>
                <Text className="text-2xl text-center">na cidade!</Text>
                </View>

                <View className="ml-3 mr-3 flex flex-row self-center gap-5">
                <TouchableOpacity className="bg-Bege border-2 border-white rounded-3xl py-2 px-6">
                    <Text className="text-center text-white">Cadastrar</Text>
                </TouchableOpacity>
                {/*  */}
                <TouchableOpacity className="bg-white border-2 border-Bege rounded-3xl py-2 px-6">
                    <Text className="text-center text-Bege">Entrar</Text>
                </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    );
};

export default Login;