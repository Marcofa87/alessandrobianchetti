import {
  Dumbbell,
  GraduationCap,
  BookOpenText,
  LucideIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";

// Specifica il tipo `Icon` come un componente che accetta solo le icone da `lucide-react`.
type AccordionItem = {
  title: string;
  content: string;
  Icon: LucideIcon;
};

export const useAccordionData = () => {
  const t = useTranslations("HomePage");

  const accordionData: AccordionItem[] = [
    {
      title: t("accordion.0.title"),
      content: t("accordion.0.content"),
      Icon: BookOpenText,
    },
    {
      title: t("accordion.1.title"),
      content: t("accordion.1.content"),
      Icon: GraduationCap,
    },
    {
      title: t("accordion.2.title"),
      content: t("accordion.2.content"),
      Icon: Dumbbell,
    },
  ];

  return accordionData;
};
