import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Config from 'react-native-config';

// dotenv:
// genellikle büyük çaplı projelerde API keylerinin,
// endpointlerin(API üzerinde belirli bir amaç için oluşturulmuş metodunuza verilen isim
// yani http://.../users kısmındaki users endpoint oluyor)
// tokenlar ve hassas bilgilerin saklandığı bir environment dosyasıdır.

const ProductScreen = () => {
  const [allProducts, setAllProducts] = useState([]);

  function getAllProducts() {
    fetch(Config.API_URL)
      .then(res => res.json())
      .then(json => setAllProducts(json));
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  const renderProduct = itemData => {
    return (
      <View style={styles.renderContainer}>
        <View style={styles.renderImgView}>
          <Image style={styles.renderImg} source={{uri: itemData.item.image}} />
        </View>
        <View style={styles.renderTitleView}>
          <Text style={styles.renderTitleTxt}>{itemData.item.title}</Text>
          <TouchableOpacity>
            <Text style={styles.renderShowMore}>Details ></Text>
          </TouchableOpacity>
          <View style={styles.priceView}>
            <Text style={styles.priceTxt}>{itemData.item.price} TL</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.titleTxt}>Products</Text>
        </View>
        <View style={styles.flatView}>
          <FlatList
            data={allProducts}
            keyExtractor={(item, index) => item.id}
            renderItem={renderProduct}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  screen: {},
  container: {},
  titleView: {
    alignItems: 'center',
    marginTop: 10,
  },
  titleTxt: {
    fontSize: 35,
  },
  flatView: {},
  renderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    margin: 10,
    borderWidth: 2,
    borderColor: 'lightgrey',
    backgroundColor: 'lightgrey',
  },
  renderImgView: {
    height: 150,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  renderImg: {
    height: 120,
    width: 120,
    borderRadius: 5,
  },
  renderTitleView: {
    width: 200,
    marginLeft: 5,
  },
  renderTitleTxt: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
  },
  renderShowMore: {
    marginTop: 2,
    fontSize: 14,
  },
  priceView: {
    alignItems: 'flex-end',
  },
  priceTxt: {
    color: 'black',
    fontWeight: '600',
    fontStyle: 'italic',
    fontSize: 13,
  },
});
