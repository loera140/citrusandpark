import Image from "next/image";

interface PageHeroProps {
  title: string;
  description?: string;
  image?: string;
  children?: React.ReactNode;
}

export function PageHero({
  title,
  description,
  image = "/images/hero/redlands-aerial.jpg",
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      {/* Background Image */}
      <Image
        src={image}
        alt=""
        fill
        className="object-cover"
        priority
        sizes="100vw"
        quality={80}
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-grove/85" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-4xl text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
