"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { Award, Beef, Croissant, Flame, Sparkles, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="compact"
        sizing="mediumSizeLargeTitles"
        background="circleGradient"
        cardStyle="layered-gradient"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",          id: "#hero"},
        {
          name: "About",          id: "#about"},
        {
          name: "Menu",          id: "#products"},
        {
          name: "Testimonials",          id: "#testimonials"},
        {
          name: "FAQs",          id: "#faqs"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      button={{
        text: "Order Now",        href: "#products"}}
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=s1is2q"
      logoAlt="All Star Burgers Logo"
      brandName="All Star Burgers"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      useInvertedBackground={true}
      background={{
        variant: "radial-gradient"}}
      title="Premium Burgers Crafted for Brooklyn"
      description="Handcrafted patties, bold flavors, and uncompromising quality in every bite. Order now for pickup, delivery, or dine-in at our Clinton Avenue location."
      testimonials={[
        {
          name: "Alex P.",          handle: "@burgerfan_NYC",          testimonial: "Absolutely the best burger I've had in Brooklyn! The patty was juicy, the bun was perfect, and the sauce was incredible.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-hispanic-man-smiling-confident-standing-street_839833-16677.jpg",          imageAlt: "Customer Alex P."},
        {
          name: "Sarah J.",          handle: "@foodiebrooklyn",          testimonial: "All Star Burgers lives up to its name. Every ingredient felt fresh and premium. A true culinary gem in the neighborhood!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-african-american-woman-cafe_273609-5052.jpg",          imageAlt: "Customer Sarah J."},
        {
          name: "Marcus L.",          handle: "@gourmetguide",          testimonial: "From the first bite to the last, pure perfection. This place has mastered the art of the burger. Highly recommend!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-elderly-chef-dressed-uniform-with-crossed-arms-against-dark-background_613910-17580.jpg",          imageAlt: "Customer Marcus L."},
        {
          name: "Emily R.",          handle: "@eatsNYC",          testimonial: "A must-try for any burger enthusiast! The atmosphere is great, and the food is even better. My new go-to spot.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-smiling-blonde-russian-girl-puts-hands-chest-looking-side-isolated-orange-background-with-copy-space_141793-65450.jpg",          imageAlt: "Customer Emily R."},
        {
          name: "David K.",          handle: "@brooklyndiner",          testimonial: "Consistently excellent. The quality is unmatched, and the staff are always friendly. Five stars all around!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-old-man-outdoors_23-2148997292.jpg",          imageAlt: "Customer David K."},
      ]}
      tagAnimation="blur-reveal"
      buttons={[
        {
          text: "Order Now",          href: "#products"},
        {
          text: "View Menu",          href: "#products"},
      ]}
      buttonAnimation="blur-reveal"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-attractive-young-woman-smiling_273609-12421.jpg",          alt: "Avatar 1"},
        {
          src: "http://img.b2bpic.net/free-photo/girl-with-long-hair-looking-camera_23-2148244848.jpg",          alt: "Avatar 2"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-handsome-bearded-man_23-2149880056.jpg",          alt: "Avatar 3"},
        {
          src: "http://img.b2bpic.net/free-photo/outdoor-summer-portrait-debonair-good-looking-woman-stylish-pink-jacket_273443-4519.jpg",          alt: "Avatar 4"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-attractive-afroamerican-man_23-2148508906.jpg",          alt: "Portrait of attractive afroamerican man"},
      ]}
      avatarText="Loved by thousands of Brooklynites"
      imageSrc="http://img.b2bpic.net/free-photo/front-view-delicious-cheeseburger-dark-background_179666-19332.jpg"
      imageAlt="Gourmet burger hero image"
      mediaAnimation="slide-up"
      marqueeItems={[
        {
          type: "text",          text: "Premium Quality"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-psd/flat-design-asian-restaurant-template_23-2149831060.jpg",          alt: "Burger icon"},
        {
          type: "text",          text: "Award-Winning"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-vector/best-original-quality-laurel-sign-certified-products_1017-58666.jpg",          alt: "Award ribbon"},
        {
          type: "text",          text: "Handcrafted Excellence"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/chef-doing-bad-signal-white-background_1368-2846.jpg",          alt: "Chef hat icon"},
        {
          type: "text",          text: "Unforgettable Flavor"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/3d-wizard-hand-hold-magic-wand-with-golden-stars_107791-15402.jpg",          alt: "Sparkle icon"},
        {
          type: "text",          text: "Locally Sourced"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/top-view-black-plates-with-golden-fork-knife-crossed-dark-surface-color-food-cutlery-restaurant-service-dinner-kitchen-cafe_179666-19699.jpg",          alt: "Fork and knife icon"},
        {
          type: "text",          text: "Fresh Ingredients"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-vector/leaf-logo-sharp-circle_78370-6221.jpg",          alt: "Leaf icon"},
      ]}
      showMarqueeCard={true}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="Our Story: Quality & Craft"
      description="All Star Burgers started with a simple vision: to create the perfect burger using only the finest, freshest ingredients. From locally sourced beef to freshly baked buns, every element is chosen to deliver an unforgettable taste experience. We believe in crafting food that brings people together, right here in the heart of Brooklyn."
      tag="About Us"
      tagAnimation="blur-reveal"
      buttonAnimation="blur-reveal"
      imageSrc="http://img.b2bpic.net/free-photo/american-diner-aesthetics_23-2151854437.jpg"
      imageAlt="Interior of All Star Burgers restaurant"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Freshly Ground Beef",          description: "Only the finest cuts, freshly ground daily for unparalleled flavor and juiciness. Our commitment to quality starts with our ingredients.",          icon: Beef,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/human-hand-seasoning-meat-barbecue-grill_23-2147841079.jpg",              imageAlt: "Close up of beef patty"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/front-view-creative-assortment-with-hamburger-menu_23-2148614120.jpg",              imageAlt: "Fresh burger toppings"},
          ]
        },
        {
          title: "Artisan Buns, Baked Fresh",          description: "Our brioche buns are baked in-house daily, providing the perfect soft, yet resilient, foundation for your gourmet burger.",          icon: Croissant,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/artistic-buns-with-sesame-seeds_23-2148359153.jpg",              imageAlt: "Artisan brioche bun"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/black-burger-with-ketchup-mustard-bottles_23-2148258422.jpg",              imageAlt: "Homemade sauce preparation"},
          ]
        },
        {
          title: "Signature Sauces & Toppings",          description: "Elevate your burger with our unique, homemade sauces and premium toppings, crafted to complement every bite.",          icon: Flame,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/burger-with-melted-cheese-copy-space_23-2149342863.jpg",              imageAlt: "Melting cheese on burger"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/still-life-delicious-american-hamburger_23-2149637341.jpg",              imageAlt: "Crispy bacon strips"},
          ]
        }
      ]}
      title="The All Star Difference"
      description="Discover what makes our burgers the best in Brooklyn. We're committed to excellence in every detail, ensuring a culinary experience that stands out."
      tag="Our Promise"
      tagAnimation="blur-reveal"
      buttonAnimation="blur-reveal"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "classic-cheeseburger",          brand: "All Star",          name: "The Classic Cheeseburger",          price: "$16",          rating: 5,
          reviewCount: "245",          imageSrc: "http://img.b2bpic.net/free-photo/home-made-burger-with-delicious-tomatoes_23-2148374865.jpg",          imageAlt: "The Classic Cheeseburger"},
        {
          id: "brooklyn-heat",          brand: "All Star",          name: "Brooklyn Heat Burger",          price: "$18",          rating: 4.8,
          reviewCount: "190",          imageSrc: "http://img.b2bpic.net/free-photo/meat-burger-served-with-french-fries-mayonnaise_140725-6709.jpg",          imageAlt: "Brooklyn Heat Burger"},
        {
          id: "bbq-bourbon",          brand: "All Star",          name: "BBQ Bourbon Burger",          price: "$19",          rating: 4.9,
          reviewCount: "210",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-beef-burger-with-sauce-pickled-cucumber-served-restaurant_141793-2110.jpg",          imageAlt: "BBQ Bourbon Burger"},
        {
          id: "truffle-shroom",          brand: "All Star",          name: "Truffle Shroom Burger",          price: "$20",          rating: 4.7,
          reviewCount: "175",          imageSrc: "http://img.b2bpic.net/free-photo/home-made-delicious-big-hamburger_23-2148374920.jpg",          imageAlt: "Truffle Shroom Burger"},
        {
          id: "crispy-chicken",          brand: "All Star",          name: "Crispy Chicken Burger",          price: "$17",          rating: 4.6,
          reviewCount: "150",          imageSrc: "http://img.b2bpic.net/free-photo/sandwich-hamburger-with-juicy-burgers-tomato-red-cabbage_2829-4118.jpg",          imageAlt: "Crispy Chicken Burger"},
        {
          id: "garden-gourmet",          brand: "All Star",          name: "Garden Gourmet (Vegan)",          price: "$17",          rating: 4.5,
          reviewCount: "120",          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-frame-healthy-food-with-copy-space_23-2148287540.jpg",          imageAlt: "Garden Gourmet Vegan Burger"},
      ]}
      title="МЕНЮИ ХАМАИ НАМУДИ БУРГЕРХОИ МО "
      description="Explore our diverse menu of gourmet burgers, each a masterpiece designed to tantalize your taste buds. Find your new favorite today."
      tag="Our Menu"
      tagAnimation="blur-reveal"
      buttonAnimation="blur-reveal"
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "classic-combo",          badge: "Popular",          badgeIcon: Sparkles,
          price: "$22",          subtitle: "Burger + Fries + Drink",          buttons: [
            {
              text: "Order Combo",              href: "#products"},
          ],
          features: [
            "Any Signature Burger",            "Crispy Golden Fries",            "Choice of Soft Drink"],
        },
        {
          id: "brooklyn-feast",          badge: "Best Value",          badgeIcon: Award,
          price: "$40",          subtitle: "2 Burgers + 2 Sides + 2 Drinks",          buttons: [
            {
              text: "Order Feast",              href: "#products"},
          ],
          features: [
            "Two Signature Burgers",            "Two Premium Sides",            "Two Soft Drinks"],
        },
        {
          id: "family-pack",          badge: "Family Favorite",          badgeIcon: Users,
          price: "$75",          subtitle: "4 Burgers + 4 Sides + Large Drink",          buttons: [
            {
              text: "Order Pack",              href: "#products"},
          ],
          features: [
            "Four Signature Burgers",            "Four Premium Sides",            "Large Family Drink"],
        },
      ]}
      title="БО КОМБОХОИ МО ТАЬМИ ХАКИКИРО ХИС КУНЕД "
      description="Pair your perfect burger with our delicious sides and drinks. Discover our value-packed combos for a complete meal experience."
      tag="Combos"
      tagAnimation="blur-reveal"
      buttonAnimation="blur-reveal"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Chloe Adams",          handle: "@chloe_eats",          testimonial: "All Star Burgers sets a new standard for gourmet burgers. The ingredients are unbelievably fresh, and the flavors are perfectly balanced. A true taste sensation!",          imageSrc: "http://img.b2bpic.net/free-photo/appetizing-chicken-burger-female-hands-fast-food-restaurant_169016-49213.jpg",          imageAlt: "Chloe Adams"},
        {
          id: "2",          name: "Jordan Lee",          handle: "@foodlovernyc",          testimonial: "I've tried every burger joint in Brooklyn, and All Star Burgers is hands down the best. The ambiance is great, and the staff are super friendly. Don't miss out!",          imageSrc: "http://img.b2bpic.net/free-photo/fashionable-hipster-guy-dressed-denim-shirt-wearing-stylish-glasses_273609-6821.jpg",          imageAlt: "Jordan Lee"},
        {
          id: "3",          name: "Olivia White",          handle: "@nycdining",          testimonial: "From the juicy patty to the perfectly toasted bun, every bite was a delight. It’s clear they put a lot of passion into their craft. Five stars!",          imageSrc: "http://img.b2bpic.net/free-photo/senior-man-pointing-his-empty-glass-restaurant_23-2149316805.jpg",          imageAlt: "Olivia White"},
        {
          id: "4",          name: "Noah Davis",          handle: "@burgerquest",          testimonial: "The Truffle Shroom Burger is out of this world! A gourmet experience that’s worth every penny. This place is a gem.",          imageSrc: "http://img.b2bpic.net/free-photo/positive-carefree-young-woman-got-inspiration-imagines-how-capture-interesting-shot-shows-frame-gesture-smiles-gladfully-wears-spectacles-fashionable-clothes-isolated-brown-background_273609-58298.jpg",          imageAlt: "Noah Davis"},
        {
          id: "5",          name: "Isabella Chen",          handle: "@brooklyn_bites",          testimonial: "Finally, a burger that exceeds expectations. The Brooklyn Heat has just the right kick, and the freshness of the ingredients shines through. My new favorite!",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-old-man-having-meal-restaurant_23-2148214633.jpg",          imageAlt: "Isabella Chen"},
      ]}
      title="ФИКРХОИ МИЧОЗОНИ МО  "
      description="АКСАРИ МИЗОЧОНИ МО ДАР БОРАИ ТАЬМИ БУРГЕРХО ВА МУХИТИ ОШХОНАИ МО ФИКРХОИ ХУБ БАЕЕН КАРДААНД"
      tag="ОТЗЫВХО "
      tagAnimation="blur-reveal"
      buttonAnimation="blur-reveal"
      topMarqueeDirection="right"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Brooklyn Foodie",        "NYC Eats Magazine",        "DeliverHub",        "Gourmet Critics Guild",        "Local Bites Blog",        "Best of Brooklyn Awards",        "Food & Wine Daily"]}
      title="ДУСДОШТАИ ХУДРО ИНТИХОБ КУН "
      description="Proudly featured in local culinary guides and trusted by Brooklyn's most discerning food critics and popular platforms."
      tag="Our Partners"
      tagAnimation="blur-reveal"
      buttonAnimation="blur-reveal"
      speed={40}
      showCard={true}
    />
  </div>

  <div id="faqs" data-section="faqs">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq1",          title: "Do you offer vegetarian or vegan options?",          content: "Yes, we proudly offer delicious vegetarian and vegan burger options, including our popular Garden Gourmet burger. Please check our menu for details."},
        {
          id: "faq2",          title: "Can I make a reservation for dine-in?",          content: "Absolutely! We encourage reservations, especially for groups or during peak hours. You can make a reservation through our website's contact section or by calling us directly."},
        {
          id: "faq3",          title: "What are your operating hours?",          content: "Our current operating hours are Monday-Thursday: 11 AM - 10 PM, Friday-Saturday: 11 AM - 11 PM, and Sunday: 12 PM - 9 PM. Holiday hours may vary."},
        {
          id: "faq4",          title: "Do you offer catering services?",          content: "Yes, All Star Burgers provides catering for events of all sizes. Please contact us with your event details, and we’ll be happy to create a custom menu for you."},
        {
          id: "faq5",          title: "Are your ingredients locally sourced?",          content: "We prioritize fresh, high-quality ingredients, and we strive to source locally whenever possible to support our community and ensure the best flavor for our burgers."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/couple-sitting-cafe-choosing-order-form-meu-while-communicating-with-waiter_637285-602.jpg"
      imageAlt="Customer service at a restaurant"
      mediaAnimation="slide-up"
      mediaPosition="left"
      title="Frequently Asked Questions"
      description="Find quick answers to common questions about our menu, ingredients, ordering, and dining policies. If you can't find what you're looking for, feel free to contact us!"
      tag="Got Questions?"
      tagAnimation="blur-reveal"
      buttonAnimation="blur-reveal"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "plain"}}
      tag="Contact Us"
      title="БО ЯК РАСИДАН БА МО МУРОЧИАТ КУНЕД "
      description="Ready to enjoy a premium burger experience? Contact us for reservations, catering inquiries, or any questions you may have. We look forward to serving you!"
      tagAnimation="blur-reveal"
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Eeu6JT7wZbabCTMm8hffTJPbyZ/uploaded-1780551566154-3oyv7ez0.jpg"
      imageAlt="Exterior of All Star Burgers at night"
      mediaAnimation="slide-up"
      inputPlaceholder="Your Email Address"
      buttonText="Send Message"
      termsText="By sending a message, you agree to our privacy policy and terms of service."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=s1is2q"
      logoAlt="All Star Burgers Logo"
      logoText="All Star Burgers"
      columns={[
        {
          title: "Menu",          items: [
            {
              label: "Burgers",              href: "#products"},
            {
              label: "Combos",              href: "#pricing"},
            {
              label: "Sides",              href: "#"},
            {
              label: "Drinks",              href: "#"},
          ],
        },
        {
          title: "Company",          items: [
            {
              label: "About Us",              href: "#about"},
            {
              label: "Our Story",              href: "#about"},
            {
              label: "Reservations",              href: "#contact"},
            {
              label: "Catering",              href: "#contact"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
            {
              label: "Accessibility",              href: "#"},
          ],
        },
      ]}
      copyrightText="© 2026 All Star Burgers. TAJIKISTAN.
+992997000912 +992710238778"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
