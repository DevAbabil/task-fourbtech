import * as HomeComponents from "@/components/home";

export default function HomePage() {
  return (
    <div>
      <HomeComponents.Hero />
      <HomeComponents.Features />
      <HomeComponents.Branding />
      <HomeComponents.Guide />
      <HomeComponents.Security />
      <HomeComponents.Pricing />
      <HomeComponents.Testimonial />
      <HomeComponents.Download />
    </div>
  );
}
