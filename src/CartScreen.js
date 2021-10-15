import * as React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import AppButton from './components/AppButton';
import AppIcon from './components/AppIcon';
import AppTextInput from './components/AppTextInput';

export default function CartScreen({onPress}) {
  const Card = ({image, title, price, color}) => {
    return (
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <AppIcon source={image} size={90} />
          <View style={styles.imagefooter}>
            <AppIcon source={require('./assets/more.png')} size={12} />
            <Text style={styles.imagefooterText}>1</Text>
            <AppIcon source={require('./assets/less.png')} size={12} />
          </View>
        </View>
        <View>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.rupee}>₹</Text>
            <Text style={styles.price}>{price}</Text>
          </View>
          <Text style={styles.color}>
            Color:<Text style={styles.innerColor}> {color}</Text>
          </Text>
          <Text style={styles.stock}>In stock</Text>
          <View style={styles.buttonContainer}>
            <AppButton
              title="Delete"
              borderColor="#F77000"
              style={styles.delete}
              fontSize={12}
            />
            <AppButton
              fontSize={12}
              title="see more like this"
              backgroundColor="#F77000"
              color="#fff"
              style={styles.seeMore}
            />
          </View>
        </View>
      </View>
    );
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <AppIcon source={require('./assets/menu.png')} style={styles.menu} />
          <AppIcon source={require('./assets/Logo2.png')} size={37} />
        </View>
        <AppTextInput
          placeholder="Search"
          image={require('./assets/search.png')}
          footerImage={require('./assets/camera.png')}
          backgroundColor="rgba(71, 71, 71, 0.6)"
          height={14}
          width={14}
          style={styles.textInput}
          fontSize={12}
        />
        <Card
          image={require('./assets/watch.png')}
          title="Querty Watch Leather strap"
          color="brown"
          price="12000"
        />
        <Card
          image={require('./assets/mat.png')}
          title="Yoga mat Lorem ipsum"
          color="blue"
          price="1000"
        />
        <Card
          image={require('./assets/braclet.png')}
          title="Anchor Bracelet Lorem ipsum"
          color="glod"
          price="500"
        />
        <View style={styles.footer}>
          <View style={styles.footerTextContainer}>
            <Text style={styles.subtotal}>subtotal</Text>
            <Text style={styles.rupee}> ₹</Text>
            <Text style={styles.amount}>13,500</Text>
          </View>
          <AppButton
            title="Proceed to buy (3 items)"
            backgroundColor="#DB4700"
            paddingHorizontal={42}
            fontSize={18}
            color="#fff"
            style={styles.button}
            onPress={onPress}
          />
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingHorizontal: 12,
    paddingTop: 10,
  },
  menu: {
    height: 17.5,
    width: 23,
  },
  textInput: {
    borderRadius: 10,
    width: '100%',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(196, 196, 196, 0.19)',
    paddingVertical: 23,
    width: '100%',
    justifyContent: 'center',
  },
  imagefooter: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 2,
    backgroundColor: 'rgba(196, 196, 196, 0.19)',
    justifyContent: 'space-between',
  },
  imagefooterText: {
    marginHorizontal: 20,
  },
  imageContainer: {
    alignItems: 'center',
    // backgroundColor: 'red',
    width: 100,
    paddingLeft: 0,
    marginRight: 20,
  },
  price: {
    fontSize: 24,
    justifyContent: 'flex-start',
    color: '#000',
  },
  rupee: {
    fontSize: 12,
    color: '#000',
    marginTop: 3,
  },
  priceContainer: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  color: {
    fontWeight: '700',
    color: '#000',
  },
  innerColor: {
    fontWeight: '200',
    textTransform: 'capitalize',
  },
  title: {
    color: '#000',
    width: 100,
  },
  stock: {
    color: 'rgba(0, 156, 44, 0.81)',
    fontWeight: '400',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  delete: {
    paddingHorizontal: 22,
    margin: 5,
  },
  seeMore: {
    paddingHorizontal: 10,
    margin: 5,
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
  },
  footerTextContainer: {
    flexDirection: 'row',
  },
  subtotal: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    textTransform: 'capitalize',
  },
  amount: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  button: {
    paddingVertical: 10,
    borderRadius: 15,
    marginVertical: 15,
  },
});
