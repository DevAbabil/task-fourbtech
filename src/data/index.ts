export const brand_logo = [
  "/assets/brand-logo/brand-a.svg",
  "/assets/brand-logo/brand-b.svg",
  "/assets/brand-logo/brand-c.svg",
  "/assets/brand-logo/brand-d.svg",
  "/assets/brand-logo/brand-e.svg",
  "/assets/brand-logo/brand-f.svg",
  "/assets/brand-logo/brand-g.svg",
];

export const features_data: Array<{
  icon: string;
  heading: string;
  description: string;
  bgColor: string;
}> = [
  {
    icon: "/assets/icon/payment.svg",
    heading: "Instant payments",
    description: "Send money to friends or family in real-time, for free.",
    bgColor: "#F3F7FF",
  },
  {
    icon: "/assets/icon/no-fee.svg",
    heading: "No hidden fees",
    description: "Clear and simple pricing. Always be aware of your costs.",
    bgColor: "#FBF6EF",
  },
  {
    icon: "/assets/icon/wallet.svg",
    heading: "Digital wallet",
    description: "Store money securely and make fast transfers or purchases.",
    bgColor: "#EEF9FE",
  },
  {
    icon: "/assets/icon/secure.svg",
    heading: "Secure transactions",
    description: "End-to-end encryption for all transactions.",
    bgColor: "#F4EDFC",
  },
];

export const guide_data = [
  {
    id: "01",
    icon: "/assets/icon/download.svg",
    title: "Download Easy Pay",
    description:
      "Get the Easy Pay app today from the App Store or Google Play hassle free.",
  },
  {
    id: "02",
    icon: "/assets/icon/bank-card.png",
    title: "Link your bank or card",
    description:
      "Easily connect your account in seconds with advanced security for peace of mind.",
  },
  {
    id: "03",
    icon: "/assets/icon/card-paying.png",
    title: "Start paying",
    description:
      "Easily split bills, send money to friends, and make smooth online payments instantly.",
  },
];

export const users_avatars = [
  "/assets/avatar-img-1.png",
  "/assets/avatar-img-2.jpg",
  "/assets/avatar-img-3.jpg",
];

export const pricing_data: Array<{
  label: string;
  description: string;
  price: number;
  features: Array<string>;
}> = [
  {
    label: "Free Plan",
    description: "Free for personal payments.",
    price: 0,
    features: [
      "Up to 100 transactions per month",
      "Basic proud protection",
      "Email support",
    ],
  },
  {
    label: "Advanced",
    description: "Minimal fees for advanced transactions",
    price: 19,
    features: [
      "Up to 1000 transactions per month",
      "Advanced proud protection",
      "Detailed transaction reports",
      "Priority email & chat support",
    ],
  },
  {
    label: "Business",
    description: "Premium business transactions",
    price: 29,
    features: [
      "Unlimited transactions per month",
      "Premium proud protection",
      "Detailed transaction reports",
      "Priority email & chat support",
    ],
  },
];

export const security_data: Array<{
  color: string;
  title: string;
  description: string;
}> = [
  {
    color: "#2E68FD",
    title: "Two-factor authentication",
    description:
      "Two-factor authentication ensures added protection by using verification steps.",
  },
  {
    color: "#FC4343",
    title: "Fraud detection and alerts",
    description:
      "Fraud detection safeguards your money, sending instant alerts for any activity.",
  },
  {
    color: "#08A965",
    title: "Transaction notifications",
    description:
      "Instant notifications for transactions keep you informed to manage your finances.",
  },
  {
    color: "#3B7793",
    title: "Biometric access",
    description:
      "Easily and securely log in with biometric features, and facial recognition.",
  },
  {
    color: "#D77E1B",
    title: "End-to-end encryption",
    description:
      "By encryption, protecting your data from unauthorized access.",
  },
  {
    color: "#932EFA",
    title: "24/7 Protection support",
    description:
      "Our dedicated team is available around the clock to help you.",
  },
];

export const testimonials_data: Array<{
  quote: string;
  name: string;
  role: string;
  imgSrc: string;
  rating: number;
}> = [
  {
    quote:
      "As a developer, I love how smooth and intuitive the experience feels. Everything just works perfectly — no unnecessary complexity.",
    name: "DevAbabil",
    role: "Full-Stack Developer",
    imgSrc: "/assets/avatar-img-4.jpg",
    rating: 5,
  },
  {
    quote:
      "Experience a payment app built on simplicity and transparency. No hidden fees, just a seamless user experience that makes every transaction easy and stress-free. Say goodbye to confusion and hello to straightforward payments.",
    name: "Ethan Williams",
    role: "Digital Marketing Specialist",
    imgSrc: "/assets/avatar-img-1.png",
    rating: 5,
  },
  {
    quote:
      "Discover a payment app focused on simplicity and transparency. Enjoy a seamless experience with no hidden fees, providing clarity and ease in every transaction. It’s designed to put you in control of your payments.",
    name: "Daniel Thompson",
    role: "Product Designer",
    imgSrc: "/assets/avatar-img-2.jpg",
    rating: 4,
  },
  {
    quote:
      "Amazing experience! The design and functionality exceeded my expectations.",
    name: "Ava Johnson",
    role: "Product Designer",
    imgSrc: "/assets/avatar-img-3.jpg",
    rating: 4,
  },
];
