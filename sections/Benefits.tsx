import { type ImageWidget } from "apps/admin/widgets.ts";
// import Section from "../../components/ui/Section.tsx";

export interface Items {
  title?: string;
  description?: string;
  icone: ImageWidget;
}

export interface Props {
  items: Items[];
}

function Benifits({ items }: Props) {
  return (
    <div class="relative flex flex-col flex-wrap gap-y-8 my-12 justify-center items-center md:flex-row md:items-baseline">
      {items.map((i: Items, index: number) => (
        <div
          class="flex flex-row md:flex-col items-center justify-center gap-x-7 md:px-6 xl:px-12 2xl:px-[73px] md:gap-y-3 relative custom-benefits-item"
          key={index}
        >
          <img src={i.icone} alt={i.title} class="h-9 w-16 object-contain" />

          <div class="flex flex-col w-[150px] md:items-center">
            {i.title && (
              <span class="text-sm lg:text-xs xl:text-sm font-bold text-black-02 text-nowrap">
                {i.title}
              </span>
            )}
            {i.description && (
              <span class="text-sm font-normal text-black-02 text-start md:text-center xl:text-nowrap">
                {i.description}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export const LoadingFallback = () => <Placeholder height="300px" />;

export default Benifits;
