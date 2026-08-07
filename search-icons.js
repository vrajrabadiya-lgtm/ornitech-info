const si = require('react-icons/si');
const keys = Object.keys(si);
const search = ["Xamarin", "Nuxt", "Css", "Magento"];
for (const s of search) {
  console.log(`Matching ${s}:`, keys.filter(k => k.toLowerCase().includes(s.toLowerCase())));
}
