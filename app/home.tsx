import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      <View style={styles.menuContainer}>

        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push("/mahasiswa")}
        >
          <MaterialIcons name="people" size={36} color="#2563eb" />
          <Text style={styles.label}>Mahasiswa</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => router.push("/matakuliah")}>
          <MaterialIcons name="menu-book" size={36} color="#2563eb" />
          <Text style={styles.label}>Mata Kuliah</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => router.push("/profil")}>
          <MaterialIcons name="school" size={36} color="#2563eb" />
          <Text style={styles.label}>Profil Kampus</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => router.push("/tentang")}>
          <MaterialIcons name="info" size={36} color="#2563eb" />
          <Text style={styles.label}>Tentang</Text>
        </TouchableOpacity>

      </View>

      <TouchableOpacity
        style={styles.logout}
        onPress={() => router.replace("/login")}
      >
        <MaterialIcons name="logout" size={20} color="white" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 25,
  },

  menuContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    backgroundColor: "white",
    padding: 25,
    borderRadius: 16,
    marginBottom: 18,
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },

    elevation: 4,
  },

  label: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: "600",
  },

  logout: {
    marginTop: "auto",
    backgroundColor: "#ef4444",
    padding: 15,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },

  logoutText: {
    color: "white",
    fontWeight: "bold",
  },
});