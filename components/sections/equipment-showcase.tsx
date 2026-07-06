import Image from "next/image";
import { BrandLogo, GenericGearIcon } from "@/components/ui/brand-logo";
import { SectionHeading } from "@/components/sections/site-chrome";
import {
  equipmentCategories,
  type EquipmentCategory,
  type EquipmentItem,
} from "@/lib/equipment-data";
import { images } from "@/lib/content";
import { cn } from "@/lib/utils";

function EquipmentCard({ item }: { item: EquipmentItem }) {
  return (
    <article className="group flex items-start gap-3 rounded-xl border border-border/80 bg-background/60 p-4 transition duration-300 hover:border-brand-teal/35 hover:bg-surface-elevated/80">
      <div className="mt-0.5 flex h-9 w-20 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-surface px-2 transition group-hover:border-brand-teal/25">
        {item.brand ? (
          <BrandLogo brand={item.brand} size="sm" />
        ) : (
          <GenericGearIcon size="sm" />
        )}
      </div>
      <p className="text-sm leading-relaxed text-stone-300 group-hover:text-foreground">
        {item.name}
      </p>
    </article>
  );
}

function FeaturedMixerCard({ item }: { item: EquipmentItem }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-brand-teal/25 bg-gradient-to-br from-surface-elevated to-background shadow-xl shadow-black/30">
      <div className="grid lg:grid-cols-[1.1fr_1fr]">
        <div className="relative min-h-[260px] lg:min-h-[360px]">
          <Image
            src={images.harrison}
            alt="Harrison Master Recording Console im Echolane Studio"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-background/20" />
        </div>
        <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
          <BrandLogo brand="harrison" size="lg" className="mb-5 w-28" />
          <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Harrison Master Recording Console
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-muted">{item.name}</p>
          <p className="mt-4 text-xs leading-relaxed text-muted/70">
            Legendäres analoges Inline-Mischpult — Michael Jackson, Queen, AC/DC,
            Abba, Led Zeppelin.
          </p>
        </div>
      </div>
    </article>
  );
}

function CategorySection({
  category,
  index,
}: {
  category: EquipmentCategory;
  index: number;
}) {
  const featured = category.items.find((item) => item.featured);
  const regularItems = category.items.filter((item) => !item.featured);

  return (
    <section
      id={category.id}
      className={cn(
        "scroll-mt-24 py-16 sm:py-20",
        index % 2 === 1 ? "border-y border-border bg-surface/50" : "",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-teal">
            {String(category.items.length).padStart(2, "0")} Units
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            {category.title}
          </h2>
          <p className="mt-2 text-sm text-muted">{category.subtitle}</p>
        </div>

        {featured && category.id === "mixers" ? (
          <div className="mb-6">
            <FeaturedMixerCard item={featured} />
          </div>
        ) : null}

        <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {(category.id === "mixers" ? regularItems : category.items).map(
            (item) => (
              <li key={item.name}>
                <EquipmentCard item={item} />
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
}

export function EquipmentShowcase() {
  return (
    <div className="border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Equipment"
          title="Technik im Überblick"
          description="Analoge Legenden, digitale Präzision und eine Mikrofonauswahl, die jede Session abdeckt — von Band-Recording bis Mastering."
          className="mb-4"
        />

        <nav
          aria-label="Equipment Kategorien"
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {equipmentCategories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-muted transition hover:border-brand-teal/40 hover:text-brand-teal"
            >
              {category.title}
            </a>
          ))}
        </nav>
      </div>

      {equipmentCategories.map((category, index) => (
        <CategorySection key={category.id} category={category} index={index} />
      ))}
    </div>
  );
}
