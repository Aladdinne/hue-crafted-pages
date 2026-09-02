import { createFileRoute } from "@tanstack/react-router";
import { Globe, Mail, Phone, FileText } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useLang } from "@/i18n/LanguageProvider";
import logo from "@/assets/souitech-logo.png";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  
}
