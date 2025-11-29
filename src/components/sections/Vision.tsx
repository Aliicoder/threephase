import AnimatedSvg from "@/components/shared/AnimatedSvg";
import clsx from "clsx";

const Services = () => {
  return (
    <section className="relative z-10 font-cairo bg-white">
      <div className="mx-auto gap-[30px] py-[30px] px-[20px] container flex flex-col font-bold">
        <div className="gap-[10px] flex items-center  ">
          <AnimatedSvg
            className="max-md:w-[24px] max-md:h-[19px]"
            width={40}
            height={32}
            viewBox="0 0 40 32"
            svgContent={
              <>
                <path
                  d="M30.5559 31.6813L39.9997 0.318848H33.2763L23.8325 31.6813H30.5559Z"
                  fill="#0000C4"
                />
                <path
                  d="M18.6415 31.6813L28.0861 0.318848H21.3628L11.9189 31.6813H18.6415Z"
                  fill="#FEEA4D"
                />
                <path
                  d="M6.72774 31.6813L16.1716 0.318848H9.449L0.00439453 31.6813H6.72774Z"
                  fill="#FF220F"
                />
              </>
            }
          />
          <h1 className="text-4xl max-md:text-xl">رؤيتنا</h1>
        </div>

        <div className="flex justify-center">
          <p className={clsx("max-w-[700px] text-center", "max-md:text-sm")}>
            نتطلع إلى أن نكون الشركة الرائدة والأكثر تأثيرًا في مجال تقديم
            الحلول الكهربائية المتكاملة والداعمة لصناعة السينما والإنتاج الفني
            والإعلامي على مستوى المملكه ، من خلال الالتزام بتوفير منظومة شاملة
            من المولدات الكهربائية عالية الأداء والخدمات الفنية المتخصصة التي
            تضمن استمرارية العمل بكفاءة واعتمادية فائقة. ونسعى باستمرار إلى
            تطوير وتحديث تقنياتنا ومعداتنا وفقًا لأحدث المعايير العالمية، بما
            يمكننا من تلبية احتياجات المشاريع الكبرى والفعاليات عالية المتطلبات،
            ودعم صُنّاع المحتوى لإنتاج أعمالهم الفنية والإبداعية بأعلى مستويات
            الجودة والاحترافية دون أي انقطاع أو تأخير.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
