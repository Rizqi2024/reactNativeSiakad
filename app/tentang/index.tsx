import { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Tentang() {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tentang Aplikasi</Text>

      <TouchableOpacity style={styles.button} onPress={() => setVisible(true)}>
        <Text style={styles.buttonText}>Lihat Pembuat Aplikasi</Text>
      </TouchableOpacity>

      <Modal
        transparent
        visible={visible}
        animationType="fade"
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.popup}>

            <Text style={styles.popupTitle}>Tentang Aplikasi</Text>

            <Text style={styles.popupText}>
              Aplikasi ini dibuat oleh:
            </Text>

            <Text style={styles.nama}>Rizqi Nurfadilah</Text>

            <Text style={styles.popupText}>
              Politeknik LP3I Cirebon
            </Text>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setVisible(false)}
            >
              <Text style={styles.closeText}>Tutup</Text>
            </TouchableOpacity>

          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#f3f4f6"
  },

  title:{
    fontSize:24,
    fontWeight:"bold",
    marginBottom:20
  },

  button:{
    backgroundColor:"#2563eb",
    padding:15,
    borderRadius:10
  },

  buttonText:{
    color:"white",
    fontWeight:"bold"
  },

  overlay:{
    flex:1,
    backgroundColor:"rgba(0,0,0,0.4)",
    justifyContent:"center",
    alignItems:"center"
  },

  popup:{
    width:"80%",
    backgroundColor:"white",
    borderRadius:16,
    padding:25,
    alignItems:"center",

    shadowColor:"#000",
    shadowOpacity:0.2,
    shadowRadius:10,
    shadowOffset:{width:0,height:5},
    elevation:10
  },

  popupTitle:{
    fontSize:20,
    fontWeight:"bold",
    marginBottom:10
  },

  popupText:{
    fontSize:15,
    color:"#555",
    textAlign:"center"
  },

  nama:{
    fontSize:18,
    fontWeight:"bold",
    marginVertical:10,
    color:"#2563eb"
  },

  closeButton:{
    marginTop:15,
    backgroundColor:"#2563eb",
    paddingVertical:10,
    paddingHorizontal:20,
    borderRadius:8
  },

  closeText:{
    color:"white",
    fontWeight:"bold"
  }
});