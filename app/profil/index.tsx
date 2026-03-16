import { ScrollView, StyleSheet, Text } from "react-native";

export default function ProfilKampus() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Profil Kampus</Text>

      <Text style={styles.subtitle}>Nama Kampus</Text>
      <Text style={styles.text}>Politeknik LP3I Cirebon</Text>

      <Text style={styles.subtitle}>Alamat</Text>
      <Text style={styles.text}>
        Jl. Brigjen Darsono No.68, Cirebon
      </Text>

      <Text style={styles.subtitle}>Visi</Text>
      <Text style={styles.text}>
        Menjadi perguruan tinggi vokasi yang unggul dan menghasilkan lulusan siap kerja.
      </Text>

      <Text style={styles.subtitle}>Misi</Text>
      <Text style={styles.text}>
        1. Menyelenggarakan pendidikan berbasis kompetensi{"\n"}
        2. Menjalin kerja sama dengan dunia industri{"\n"}
        3. Menghasilkan lulusan profesional
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
  },

  text: {
    fontSize: 16,
    marginTop: 5,
    lineHeight: 22,
  },
});