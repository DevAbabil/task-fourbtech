import * as HomeComponents from "@/components/home";

export default function HomePage() {
  return (
    <div>
      <HomeComponents.Hero />
      <HomeComponents.Features />
      <HomeComponents.Branding />
      <HomeComponents.Security />
      <HomeComponents.Plans />
      <HomeComponents.Testimonial />
      <HomeComponents.Download />
    </div>
  );
}
