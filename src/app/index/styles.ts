import { colors } from "@/styles/colors"; //*importando as cores do arquivo colors.ts
import { StyleSheet } from "react-native"; //*sempre importar o StyleSheet do react-native

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 62,
  },
  titulo: {
    color: colors.green[900],
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  header: {
    paddingHorizontal: 24,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
  },
  logo: {
    height: 32,
    width: 38,
  },
  links: {
    borderTopWidth: 1,
    borderTopColor: colors.gray[600],
  },
  linksContent: {
    gap: 20,
    padding: 24,
    paddingBottom: 100,
  },
  modal: {
    flex: 1,
   
    justifyContent: "flex-end", //conteudo vai para baixo
  },
  modalContent: {
    backgroundColor: colors.gray[900],
    borderTopWidth: 1,
    borderTopColor: colors.gray[800],
    padding: 42,
  },
  modalHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  modalCategory: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
    color: colors.gray[400],
  },
  modalLinkName: {
    fontSize: 18,
     fontWeight: "600",
       color: colors.gray[200],
  },
  modalUrl: {
     fontSize: 14,
       color: colors.gray[400],
  },
  modalFooter:{
    flexDirection: "row",
    marginTop: 32,
    width: "100%",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: colors.gray[600],
    paddingVertical: 14,
  }
});
