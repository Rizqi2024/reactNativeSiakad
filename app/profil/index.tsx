import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function ProfilKampus() {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.header}>Profil Kampus</Text>

      <View style={styles.card}>
        <View style={styles.row}>
          <MaterialIcons name="school" size={26} color="#2563eb" />
          <Text style={styles.title}>Nama Kampus</Text>
        </View>
        <Text style={styles.text}>Politeknik LP3I Cirebon</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.row}>
          <MaterialIcons name="location-on" size={26} color="#2563eb" />
          <Text style={styles.title}>Alamat</Text>
        </View>
        <Text style={styles.text}>
          Jl. Brigjen Darsono No.68, Cirebon
        </Text>
      </View>

      <View style={styles.card}>
        <View style={styles.row}>
          <MaterialIcons name="visibility" size={26} color="#2563eb" />
          <Text style={styles.title}>Visi</Text>
        </View>
        <Text style={styles.text}>
          Menjadi perguruan tinggi vokasi yang unggul dan menghasilkan lulusan siap kerja.
        </Text>
      </View>

      <View style={styles.card}>
        <View style={styles.row}>
          <MaterialIcons name="flag" size={26} color="#2563eb" />
          <Text style={styles.title}>Misi</Text>
        </View>
        <Text style={styles.text}>
          • Menyelenggarakan pendidikan berbasis kompetensi{"\n"}
          • Menjalin kerja sama dengan dunia industri{"\n"}
          • Menghasilkan lulusan profesional
        </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    padding: 20,
  },

  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 25,
  },

  card: {
    backgroundColor: "white",
    padding: 18,
    borderRadius: 16,
    marginBottom: 18,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },

    elevation: 4,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 8,
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
  },

  text: {
    fontSize: 15,
    color: "#555",
    lineHeight: 22,
  },
});