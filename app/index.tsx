import { Asset } from 'expo-asset';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

const logoUri = Asset.fromModule(require('@/assets/images/logo.png')).uri;

export default function SplashScreen() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.replace('/splash', );
    }, 1000)
  }, [])

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Image source={logoUri} style={{ width: '100%', height: 70 }} contentFit="contain" />
      <ActivityIndicator size='large' color='#F83758' style={[{ marginTop: 32 }]} />
    </View>
  );
}
