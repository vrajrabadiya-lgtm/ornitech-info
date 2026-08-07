const { SiSwift, SiKotlin, SiFlutter, SiReact, SiApple, SiIonic, SiXamarin,
  SiVuedotjs, SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss, SiNuxtdotjs, SiCss3, SiHtml5, SiJquery, SiBootstrap, SiSass,
  SiNodedotjs, SiPython, SiPhp, SiLaravel, SiPostgresql, SiMongodb, SiMysql, SiRedis, SiGraphql, SiDjango,
  SiShopify, SiWoocommerce, SiMagento, SiWordpress, SiStrapi, SiContentful, SiSanity, SiBigcommerce,
  SiExpress, SiNestjs, SiSpringboot, SiDotnet, SiFastapi, SiRubyonrails, SiFlask, SiFastify } = require('react-icons/si');
const { FaJava } = require('react-icons/fa');

const icons = {
  SiSwift, SiKotlin, SiFlutter, SiReact, SiApple, SiIonic, SiXamarin,
  SiVuedotjs, SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss, SiNuxtdotjs, SiCss3, SiHtml5, SiJquery, SiBootstrap, SiSass,
  SiNodedotjs, SiPython, SiPhp, SiLaravel, SiPostgresql, SiMongodb, SiMysql, SiRedis, SiGraphql, SiDjango,
  SiShopify, SiWoocommerce, SiMagento, SiWordpress, SiStrapi, SiContentful, SiSanity, SiBigcommerce,
  SiExpress, SiNestjs, SiSpringboot, SiDotnet, SiFastapi, SiRubyonrails, SiFlask, SiFastify, FaJava
};

const missing = [];
for (const key in icons) {
  if (icons[key] === undefined) {
    missing.push(key);
  }
}

console.log("Missing icons:", missing);
