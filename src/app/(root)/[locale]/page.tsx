import LocaleSwitcher from "@/components/LocaleSwitcher";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className="text-3xl text-red-500">
      <Button>{t("title")}</Button>
      <h1 className="text-3xl text-red-500">Hello</h1>
      <LocaleSwitcher />
    </div>
  );
}
