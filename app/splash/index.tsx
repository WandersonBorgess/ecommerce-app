import { Asset } from 'expo-asset';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from "react-native";

const productImage = Asset.fromModule(require('@/assets/images/fashion-shop-1.png')).uri;
const saleImage = Asset.fromModule(require('@/assets/images/sale-consulting.png')).uri;
const shoppingBagImage = Asset.fromModule(require('@/assets/images/shopping-bag.png')).uri;
interface SplashScreenProps {
  image: string,
  title: string,
  description: string
}

export default function SplashScreen() {
  const router = useRouter();

  const items: SplashScreenProps[] = [
    {
      image: productImage,
      title: 'Escolha Produtos',
      description: 'Escolha os melhores produtos na loja.'
    },
    {
      image: saleImage,
      title: 'Adicione ao Carrinho',
      description: 'Adicione ao carrinho agora mesmo.'
    },
    {
      image: shoppingBagImage,
      title: 'Receba em Casa',
      description: 'Receba tudo no conforto da sua casa.'
    }
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const skipToLogin = () => {
    console.log('skipped');
    // router.replace('/login')
  };

  const goToNext = () => {
    if (currentStep < items.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      skipToLogin();
    }
  };

  const currentItem = items[currentStep];

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      {/* Header */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: 40, paddingHorizontal: 16, position: 'absolute', width: '100%' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text>{currentStep + 1}</Text>
          <Text style={{ color: 'rgba(0,0,0,0.5)' }}> / {items.length}</Text>
        </View>
        <TouchableOpacity onPress={skipToLogin}>
          <Text style={{ color: '#ff3366' }}>Pular</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={{ alignItems: 'center', paddingHorizontal: 16 }}>
        <Image source={currentItem.image} style={{ width: 300, height: 300 }} contentFit="cover" />
        <Text style={{ fontWeight: 'bold', fontSize: 24 }}>{currentItem.title}</Text>
        <Text style={{
          textAlign: 'center',
          color: '#999',
          fontSize: 14,
          lineHeight: 22,
          paddingHorizontal: 32,
          paddingTop: 10
        }}>{currentItem.description}</Text>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', position: 'absolute', bottom: 32, width: '100%', paddingHorizontal: 32 }}>
        {currentStep > 0 ? (
          <TouchableOpacity onPress={() => setCurrentStep(currentStep - 1)}>
            <Text style={{ color: '#1a2543', fontWeight: 'bold', fontSize: 16 }}>Voltar</Text>
          </TouchableOpacity>
        ) : (
          <View style={{ width: 60 }} />
        )}

        <View style={{ flexDirection: 'row', gap: 8 }}>
          {items.map((_, i) => (
            <View key={i} style={{
              width: i === currentStep ? 24 : 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: i === currentStep ? '#1a2543' : '#D3D6DA'
            }} />
          ))}
        </View>

        <TouchableOpacity onPress={goToNext}>
          <Text style={{ color: '#FF3366', fontWeight: 'bold', fontSize: 16 }}>Próximo</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}
