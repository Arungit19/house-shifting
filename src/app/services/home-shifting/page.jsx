import { getServiceBySlug } from "@/lib/services-data";
import ServicePageTemplate from "@/components/service/ServicePageTemplate";
import { notFound } from "next/navigation";

const SLUG = "home-shifting";

export async function generateMetadata() {
  const service = getServiceBySlug(SLUG);
  if (!service) return {};

  return {
    title: `${service.title} | Easy To Go House Shifting`,
    description: service.description.slice(0, 160),
    keywords: `${service.title}, house shifting, Easy To Go, relocation, moving service India`,
    openGraph: {
      title: `${service.title} | Easy To Go`,
      description: service.tagline,
      type: "website",
    },
  };
}

export default function ServicePage() {
  const service = getServiceBySlug(SLUG);
  if (!service) notFound();

  return <ServicePageTemplate service={service} />;
}