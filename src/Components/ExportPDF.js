// import {
//   Document,
//   Page,
//   Text,
//   View,
//   StyleSheet,
// } from "@react-pdf/renderer";

// const styles = StyleSheet.create({
//   page: {
//     padding: 30,
//     fontSize: 12,
//     fontFamily: "Helvetica",
//   },
//   header: {
//     marginBottom: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: "#000",
//     paddingBottom: 10,
//   },
//   name: { fontSize: 22, fontWeight: "bold" },
//   job: { fontSize: 14, color: "gray", marginBottom: 5 },
//   section: { marginTop: 15 },
//   title: { fontSize: 14, fontWeight: "bold", marginBottom: 5 },
//   text: { marginBottom: 3 },
// });

// function ExportPDF({
//   username,
//   job,
//   breif,
//   phone,
//   mail,
//   address,
//   ulSkill = [],
//   languages = [],
//   projects = [],
//   experiences = [],
//   education,
//   gradutionDate,
//   language,
//   singleLanguage,
//   singleExperinces,
//   singleProject,
// }) {
//   return (
//     <Document>
//       <Page size="A4" style={styles.page}>

//         {/* Header */}
//         <View style={styles.header}>
//           <Text style={styles.name}>{username || "Username"}</Text>
//           <Text style={styles.job}>{job || "Job Title"}</Text>
//           {breif && <Text>{breif}</Text>}
//         </View>

//         {/* Contact */}
//         <View style={styles.section}>
//           <Text style={styles.title}>Contact</Text>
//           {phone && <Text style={styles.text}>Phone: {phone}</Text>}
//           {mail && <Text style={styles.text}>Email: {mail}</Text>}
//           {address && <Text style={styles.text}>Address: {address}</Text>}
//         </View>

//         {/* Skills */}
//         {ulSkill.length > 0 && (
//           <View style={styles.section}>
//             <Text style={styles.title}>Skills</Text>
//             {ulSkill.map((s, i) => (
//               <Text key={i}>• {s}</Text>
//             ))}
//           </View>
//         )}

//         {/* Languages */}
//         {language && (
//           <View style={styles.section}>
//             <Text style={styles.title}>Languages</Text>
//             {Array.isArray(language)
//               ? language.map((lang, i) => (
//                   <Text key={i}>• {lang}</Text>
//                 ))
//               : <Text>{language}</Text>}
//           </View>
//         )}

//         {/* Projects */}
//         <View style={styles.section}>
//           <Text style={styles.title}>Projects</Text>
//           {Array.isArray(projects) && projects.length > 0 ? (
//             projects.map((p, i) => (
//               <Text key={i}>• {p}</Text>
//             ))
//           ) : (
//             <Text>Projects</Text>
//           )}
//         </View>

//         {/* Experience */}
//         <View style={styles.section}>
//           <Text style={styles.title}>Experience</Text>
//           {Array.isArray(experiences) && experiences.length > 0 ? (
//             experiences.map((e, i) => (
//               <Text key={i}>• {e}</Text>
//             ))
//           ) : (
//             <Text>Experience</Text>
//           )}
//         </View>

//         {/* Education */}
//         <View style={styles.section}>
//           <Text style={styles.title}>Education</Text>
//           {education && <Text style={styles.text}>{education}</Text>}
//           {gradutionDate && <Text style={styles.text}>{gradutionDate}</Text>}
//         </View>

//       </Page>
//     </Document>
//   );
// }

// export default ExportPDF;
