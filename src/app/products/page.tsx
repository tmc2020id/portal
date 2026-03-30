import { ContentPage } from "@/components/content-page";
import { pageLibrary } from "@/data/site-pages";

export default function ProductsPage() {
  return <ContentPage {...pageLibrary.products} />;
}
