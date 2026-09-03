import { defineConfig, buildLegacyTheme } from "sanity";
import { structureTool } from "sanity/structure";
import { ptBRLocale } from "@sanity/locale-pt-br";
import { CustomNavbar } from './src/sanity/components/CustomNavbar'

import { schema } from "./src/sanity/schemaTypes";

// Criando um tema personalizado para a Psicóloga
const customTheme = buildLegacyTheme({
  /* Cores de Base (Tons Neutros) */
  "--black": "#0f172a",
  "--white": "#ffffff",
  "--gray": "#64748b",
  "--gray-base": "#94a3b8",

  /* Marca / Cor de Destaque principal (Substitui o roxo do Sanity) */
  "--brand-primary": "#2563eb", // Ex: Azul elegante (ou a cor da marca da psicóloga)

  /* Estados de Componentes */
  "--component-bg": "#ffffff",

  /* Árvore Lateral e Navegação */
  "--main-navigation-color": "#0f172a",
  "--main-navigation-color--inverted": "#ffffff",

  /* Botões e Seleções Ativas */
  "--state-info-color": "#2563eb",
  "--state-success-color": "#16a34a",
  "--state-warning-color": "#d97706",
  "--state-danger-color": "#dc2626",

  /* Cartões e Paineis */
  "--focus-color": "#2563eb",
});

export default defineConfig({
  name: "default",
  title: "Painel da Psicóloga",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "5bt56plq",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",

  theme: customTheme,

  plugins: [
    structureTool(),
    ptBRLocale(),
  ],

  studio: {
    components: {
      navbar: CustomNavbar,
    },
  },

  schema,
});