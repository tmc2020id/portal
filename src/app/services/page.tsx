import { ContentPage } from "@/components/content-page";
import { pageLibrary } from "@/data/site-pages";

export default function ServicesPage() {
  return <ContentPage {...pageLibrary.services} />;
}
