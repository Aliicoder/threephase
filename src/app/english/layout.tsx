import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ThreePhase - film electricity solutions",
  description:
    "تقدم ThreePhase حلولاً كهربائية متكاملة ثلاثية الطور لمواقع التصوير السينمائي، الاستوديوهات الإنتاجية، والمنشآت الترفيهية. نوفر أنظمة توزيع طاقة آمنة، حلول كهرباء مؤقتة، وإدارة طاقة فعالة لضمان سير عمليات الإنتاج دون انقطاع. فريقنا الخبير يضمن توفير حلول طاقة متوافقة مع المعايير العالمية لقطاع الترفيه.",
  keywords:
    "كهرباء الأفلام, كهرباء ثلاثية الطور, توزيع كهرباء مواقع التصوير, كهرباء الاستوديوهات, حلول طاقة مؤقتة, أنظمة الطاقة للترفيه, كهرباء مواقع الإنتاج السينمائي",
};
export default function ArabicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
